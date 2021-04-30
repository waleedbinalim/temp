const express = require('express');
const router = express.Router();
const orderControllers = require('../controllers/orderControllers')


router.post('/orders/add' , orderControllers.order_create)
router.get('/orders/all' , orderControllers.order_all)
router.get('/orders/:id' , orderControllers.order_index)
router.put('/orders/:id' , orderControllers.order_update)
router.delete('/orders/:id' , orderControllers.order_delete) //SOFT DELETION

module.exports = router;