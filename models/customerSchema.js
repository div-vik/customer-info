const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
    customerId:Number,
    firstName:String,
    lastName:String,
    orders:[{
        orderID: Number,
        amount: Number,
        date: Date
    }]
})

const Customers = mongoose.model("customers", customerSchema)
module.exports = Customers;