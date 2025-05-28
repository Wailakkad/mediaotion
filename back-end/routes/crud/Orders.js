const express = require('express');
const router = express.Router();
const { AllOrders , OrderById , UpdateOrderStatus , DeleteOrder } = require('../../controllers/crud/Oerders');

router.get('/Orders', AllOrders);
router.get('/OrderById/:id', OrderById);
router.put('/UpdateOrderStatus/:id', UpdateOrderStatus);
router.delete('/DeleteOrder/:id', DeleteOrder);

module.exports = router;

