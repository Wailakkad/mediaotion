const express = require('express');
const router = express.Router();
const VerifyToken = require('../../outils/VerificationToken.js');
const { AllOrders , OrderById , UpdateOrderStatus , DeleteOrder } = require('../../controllers/crud/Oerders');

router.get('/Orders', VerifyToken , AllOrders);
router.get('/OrderById/:id', VerifyToken , OrderById);
router.put('/UpdateOrderStatus/:id', VerifyToken , UpdateOrderStatus);
router.delete('/DeleteOrder/:id', VerifyToken , DeleteOrder);

module.exports = router;

