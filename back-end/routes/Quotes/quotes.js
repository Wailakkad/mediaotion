const express = require('express');
const router = express.Router();
const QouteController = require('../../controllers/operations/quotes');
const { AllQuotes , DeleteQoute } = require('../../controllers/crud/Quotes');
// POST /api/contact
router.post('/quotes', QouteController.createQuotes);
router.get('/Allquotes', AllQuotes);
router.delete('/quotes/:id', DeleteQoute);
module.exports = router;
