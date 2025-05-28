const db = require("../../database/connection")

const AllQuotes = (req, res) => {
    // Using mysql2 callback style (not promise)
    db.query("SELECT * FROM Quotes", (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "get Quotes action it's faild" });
        }
        res.status(200).json({ result: results, message: "success" });
    });
}

const DeleteQoute = (req , res)=>{
    const {id} = req.params;
    db.query("DELETE FROM Quotes WHERE id = ?" , [id] ,(err, result)=>{
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Failed to delete quote" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Quote not found" });
        }
        res.status(200).json({ message: "Quote deleted successfully" });
    })
}
module.exports = { AllQuotes , DeleteQoute };


