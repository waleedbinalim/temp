const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },

    status: {
        type: String,
        // required: true
        default: 'pending'
    },
    
    deliveredTo: {
        type: String,
        // required: true
    },
    
    deliveredBy: {
        type: String,
        // required: true
    },


}, {timestamps: true})


const Order = mongoose.model('Order' , orderSchema);
module.exports = Order;