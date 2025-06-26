const express = require('express');
const router = express.Router();
const VerifyToken = require('../../outils/VerificationToken.js');
const QouteController = require('../../controllers/operations/quotes');
const { AllQuotes , DeleteQoute } = require('../../controllers/crud/Quotes');
// POST /api/contact
router.post('/quotes', QouteController.createQuotes);
router.get('/Allquotes', VerifyToken , AllQuotes);
router.delete('/quotes/:id',  VerifyToken , DeleteQoute);
module.exports = router;
