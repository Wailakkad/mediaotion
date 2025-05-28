const db = require("../../database/connection.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const AdminAuth = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        db.query("SELECT * FROM Admin WHERE email = ?", [email], async (err, results) => {
            if (err) {
                console.error("Database query error:", err);
                return res.status(500).json({ error: "Internal server error" });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: "Admin not found" });
            }

            const admin = results[0];

            try {
                const isMatch = await bcrypt.compare(password, admin.password);
                if (!isMatch) {
                    return res.status(401).json({ error: "Invalid credentials" });
                }

                const token = jwt.sign(
                    {
                        id: admin.id,
                        email: admin.email,
                        role: "admin"
                    },
                    process.env.SECURE,
                    { expiresIn: "1d" }
                );

                const { password: _, ...adminWithoutPassword } = admin;

                return res.json({ token, admin: adminWithoutPassword });
            } catch (compareErr) {
                console.error("Password comparison error:", compareErr);
                return res.status(500).json({ error: "Internal server error" });
            }
        });
    } catch (outerErr) {
        console.error("Unexpected error:", outerErr);
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = AdminAuth;
