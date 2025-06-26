const express = require('express');
const router = express.Router();
const contactController = require('../../controllers/operations/contact');
const {AllContcat , DeleteContact} = require('../../controllers/crud/Contact')
const VerifyToken = require('../../outils/VerificationToken.js');

// POST /api/contact
router.post('/contact', contactController.createContact);
// GET /api/contact
router.get('/AllContact', VerifyToken ,  AllContcat ); 
// DELETE /api/contact/:id
router.delete('/contact/:id', VerifyToken , DeleteContact);

module.exports = router;
