require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Customers = require("./models/customerSchema");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(async (mongoose) => {
        console.log(`connection successful`);

        const customer1 = {
            customerId: 1234,
            firstName: "ramesh",
            lastName: "malhotra",
            orders:[
                {
                    orderID:880,
                    amount:379,
                    date:"2020-07-25T14:10:26.113Z"
                },
                {
                    orderID: 881,
                    amount: 479,
                    date: "2020-08-25T14:10:26.113Z"
                },
                {
                    orderID: 882,
                    amount: 579,
                    date: "2020-09-25T14:10:26.113Z"
                }]
        }

        const customer2 = {
            customerId: 1235,
            firstName: "john",
            lastName: "doe",
            orders:[
                {
                    orderID:883,
                    amount:379,
                    date:"2020-07-25T14:10:26.113Z"
                },
                {
                    orderID: 884,
                    amount: 479,
                    date: "2020-08-25T14:10:26.113Z"
                }]
        }

        const customer3 = {
            customerId: 1236,
            firstName: "mohd",
            lastName: "islam",
            orders:[
                {
                    orderID:886,
                    amount:379,
                    date:"2020-07-25T14:10:26.113Z"
                },
                {
                    orderID: 887,
                    amount: 479,
                    date: "2020-08-25T14:10:26.113Z"
                },
                {
                    orderID: 888,
                    amount: 579,
                    date: "2020-09-25T14:10:26.113Z"
                },
                {
                    orderID: 889,
                    amount: 579,
                    date: "2020-10-25T14:10:26.113Z"
                }
            ]
        }
        // await Customers.insertMany([customer1, customer2, customer3])
})
.catch((err)=> console.log(err));


app.get("/customers-info", (req, res)=> {
    Customers.find({}, (error, customer) =>{
        if(error) throw error
        console.log(customer);
        res.json(customer);
    })
});

app.listen(process.env.PORT, () => {
    console.log("Server is running on port.");
})