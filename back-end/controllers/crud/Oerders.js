const db = require("../../database/connection")

const AllOrders = (req, res) => {
    // Using mysql2 callback style (not promise)
    db.query("SELECT * FROM Orders", (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "get Orders action it's faild" });
        }
        res.status(200).json({ result: results, message: "success" });
    });
}
const OrderById = (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM Orders WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "get Order by id action failed" });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ result: results[0], message: "success" });
    });
}

// Controller to update order status
const UpdateOrderStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
        return res.status(400).json({ message: "Status is required" });
    }

    db.query(
        "UPDATE Orders SET status = ? WHERE id = ?",
        [status, id],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: "Failed to update order status" });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Order not found" });
            }
            res.status(200).json({ message: "Order status updated successfully" });
        }
    );
};


const DeleteOrder = (req, res) => {
    const { id } = req.params;

   db.query("DELETE FROM Orders WHERE id = ?" , [id] ,(err , result)=>{
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Failed to delete order" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order deleted successfully" });
    
   });
};

module.exports = { AllOrders, OrderById , UpdateOrderStatus , DeleteOrder };




