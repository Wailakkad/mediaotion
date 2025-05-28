const jwt = require("jsonwebtoken");




const VerificationToken = (req, res , next) =>{
     const Token = req.headers.authorization?.split(" ")[1];
     console.log("the Token : " , Token);
     if(!Token) return res.status(401).json({ error: "Access denied" });
    try{
        const decoded = jwt.verify(Token , process.env.SECURE );
        if(decoded.role !== "admin") {
            return res.status(401).json({ error: "Access denied" });
        }
        req.admin = decoded;
        next()

    }catch(err){
        res.status(404).json({eror : "Invalid Token"})


    }
}

module.exports = VerificationToken;