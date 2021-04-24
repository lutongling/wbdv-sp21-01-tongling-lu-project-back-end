const mongoose = require("mongoose")

const ordersSchema = mongoose.Schema({
        orderItems: [
            {
                name: { type: String, required: true },
                qty: { type: Number, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductsModel',
                    required: true,
                },
            },
        ],
        paymentMethod: String,
        totalPrice: Number,
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'UsersModel'},
        paidAt: Date,
    }, {collections: "orders"})

module.exports = ordersSchema