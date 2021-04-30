const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },


    isActive: {
        type: Boolean,
        required: true,
        default: true
    },


    role: {
        type: String,
        enum : ['customer','courier'],
        // default: 'customer'
    },

    email: {
        type: String,
        // required: true
    },

    password: {
        type: String,
        // required: true
    },
    

    city: {
        type: String,
        // required: true
    },
    
    address: {
        type: String,
        // required: true
    },
    
    phone: {
        type: String,
        // required: true
    },

},

// {timestamps: true}
)


const User = mongoose.model('User' , userSchema);
module.exports = User;