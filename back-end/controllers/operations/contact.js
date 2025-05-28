const db = require('../../database/connection');

// CREATE a new contact
exports.createContact = (req, res) => {
  const { name, email, sujet, service, message } = req.body;

  if (!name || !email || !sujet || !service || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = 'INSERT INTO Contact (name, email, sujet, service, message) VALUES (?, ?, ?, ?, ?)';
  const values = [name, email, sujet, service, message];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(201).json({ message: 'Contact created', contactId: result.insertId });
  });
};
