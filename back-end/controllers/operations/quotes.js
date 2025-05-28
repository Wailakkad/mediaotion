const db = require('../../database/connection');

// CREATE a new contact
exports.createQuotes = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = 'INSERT INTO Quotes (name, email) VALUES (?, ?)';
  const values = [name, email];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(201).json({ message: 'Quote submitted successfully', quotetId: result.insertId });
  });
};
