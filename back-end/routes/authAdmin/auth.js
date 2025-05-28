const express = require("express");
const router = express.Router();
const AdminAuth = require("../../controllers/auth/auth.js");


router.post("/adminAuth" , AdminAuth);

module.exports = router;