exports.customersController = (req, res) => {
    res.json({
        cutomerId:Number,
        firstName:String,
        lastName:String,
        orders:[{
            orderID: Number,
            amount: Number,
            date: Date
        }]
    })
}