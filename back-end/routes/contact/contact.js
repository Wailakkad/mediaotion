const express = require('express');
const router = express.Router();
const contactController = require('../../controllers/operations/contact');
const {AllContcat , DeleteContact} = require('../../controllers/crud/Contact')

// POST /api/contact
router.post('/contact', contactController.createContact);
// GET /api/contact
router.get('/AllContact', AllContcat ); 
// DELETE /api/contact/:id
router.delete('/contact/:id', DeleteContact);

module.exports = router;
