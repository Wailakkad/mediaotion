require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require("./database/connection.js")
const orderRouter = require('./routes/ORDERS/order.js')
const contactRoutes = require('./routes/contact/contact.js');
const quoteRouter = require("./routes/Quotes/quotes.js")
const projectRoute = require("./routes/crud/getProject.js")
const AuthRoute = require("./routes/authAdmin/auth.js");
const OrdersRoute = require("./routes/crud/Orders.js")

const app = express();
const PORT = process.env.PORT ;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1" , orderRouter)
app.use("/api/v2" , contactRoutes)
app.use("/api/v3" , quoteRouter)
app.use("/api/v4" , projectRoute)
app.use("/api/v5" , AuthRoute);
app.use("/api/v6" , OrdersRoute);

db



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
