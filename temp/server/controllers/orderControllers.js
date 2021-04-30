// GET ALL ORDERS: user-all 
// GET ONE ORDER: order-index 
// POST: order-create 
// PUT: order-update 
// DELETE: order-delete

const Order = require('../models/order')


const order_all = (req,res) => {
    Order.find()
    .then(result => {res.send(result)})
    .catch(err => {console.log(err)})
};


const order_index = (req,res) => {
    const id = req.params.id;
    // console.log(id);
    
    Order.findById(id)
    .then(result => {res.send(result)})
    .catch(err => {console.log(err)})
};


const order_create = (req,res) => {
    console.log(req.body);
    
    const order = new Order(req.body)
    order.save()
    .then(result => {console.log('Order Dispatched')})
    .catch(err => {console.log(err.message)})
};


const order_update = (req,res) => {
    const id = req.params.id;
    console.log(id);
    console.log(req.body)
    Order.findByIdAndUpdate(id,  req.body)
    .then(result => {console.log('Order Updated')})
    .catch(err => {console.log(err)})
};


const order_delete = (req,res) => {
    const id = req.params.id;
    
    res.send(`'you are here' and id: ${id}`)
    Order.findByIdAndUpdate(id,  {"isActive": true}, {new: true })
    .then(result => {
        console.log('DELETED ORDER')
        console.log(result);
    })
    .catch(err => {console.log(err)})
};

module.exports = {
    order_all,
    order_index,
    order_create,
    order_update,
    order_delete
}