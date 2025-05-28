const express = require("express");
const router = express.Router();
const OrderController = require("../../controllers/operations/order.js");

router.post("/orders", OrderController.createOrder);

module.exports = router;