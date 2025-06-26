const express = require("express");
const router = express.Router();
const {Admin , AdminAuth} = require("../../controllers/auth/auth.js");
const VerifyToken = require("../../outils/VerificationToken.js");


router.post("/adminAuth" , AdminAuth);
router.get("/admin", VerifyToken ,  Admin);

module.exports = router;