const mongoose = require("mongoose")

const ordersSchema = mongoose.Schema({
        orderItems: [
            {
                name: String,
                qty: Number,
                image_link: String,
                price: Number,
                product: {
                    type: String,
                    // type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductsModel'
                // name: { type: String, required: true },
                // qty: { type: Number, required: true },
                // image: { type: String, required: true },
                // price: { type: Number, required: true },
                // product: {
                //     type: mongoose.Schema.Types.ObjectId,
                //     ref: 'ProductsModel',
                //     required: true,
                },
            },
        ],
        totalPrice: Number,
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'UsersModel'},
    }, {collections: "orders"})

module.exports = ordersSchema