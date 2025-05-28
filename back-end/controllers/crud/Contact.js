

const db = require("../../database/connection")

const AllContcat = (req, res) => {
    // Using mysql2 callback style (not promise)
    db.query("SELECT * FROM Contact", (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "get Contact action it's faild" });
        }
        res.status(200).json({ result: results, message: "success" });
    });
}
const DeleteContact = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM Contact WHERE id = ?", [id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Failed to delete contact" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json({ message: "Contact deleted successfully" });
    })
}

module.exports = {  AllContcat , DeleteContact };