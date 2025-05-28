const db = require('../../database/connection.js')

exports.createOrder = async (req, res) => {
  const {
    firstname, lastname, email, phone,
    company, country, city, state, street_address, orderNote
  } = req.body;
  
  const { service_name, pack_name, price } = req.query;
  
  try {
    // Modified this line to properly handle the response from db.execute
    const result = await db.execute(`
      INSERT INTO Orders (
        firstname, lastname, email, phone,
        company, country, city, state, street_address,
        orderNote, service_name, pack_name, price
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      firstname, lastname, email, phone,
      company, country, city, state, street_address,
      orderNote, service_name, pack_name, price
    ]);
    
    const order_id = result.insertId;
    
    res.status(201).json({ message: 'Order placed successfully', order_id });
  } catch (error) {
    console.error('Order error:', error);
    res.status(500).json({ message: 'Failed to place order' });
  }
};