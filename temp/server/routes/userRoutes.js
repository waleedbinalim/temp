const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers')

router.get('/users/add' , (req,res) => {
    res.send('The procedure is commented below')
})

router.post('/users/add' , userControllers.user_create)
router.get('/users/all' , userControllers.user_all )
router.get('/users/:id' , userControllers.user_index)
router.put('/users/:id' , userControllers.user_update)
router.delete('/users/:id' , userControllers.user_delete)


module.exports = router;