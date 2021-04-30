const User = require('../models/user')


const user_all = (req,res) => {
    User.find()
    .then(result => {res.send(result)})
    .catch(err => {console.log(err)})
};

const user_index = (req,res) => {
    const id = req.params.id;
    // console.log(id);
    
    User.findById(id)
    .then(result => {res.send(result)})
    .catch(err => {console.log(err)})  
};

const user_create = (req,res) => {
    console.log(req.body);
    // res.send(req.body)
    
    const user = new User(req.body)
    user.save()
    .then(result => {console.log('success')})
    .catch(err => {console.log('error' + err.message)})
};

const user_update = (req,res) => {
    const id = req.params.id;
    // console.log('you are here NOW')
    // console.log(req.body);
    User.findByIdAndUpdate(id,  req.body)
    .then(result => {console.log('UPDATE SUCCESS')})
    .catch(err => {console.log(err)})
};

const user_delete = (req,res) => {
    const id = req.params.id;

    console.log('You\'ve reached the delete section , you\'re id is')
    console.log(req.params.id)
    

    User.findByIdAndUpdate(id,  { "isActive": true }, {new : true})
    .then(result => {
        console.log(result)
        res.status(200)
    })
    .catch(err => {console.log(err)})

};

module.exports = {
    user_all,
    user_index,
    user_create,
    user_update,
    user_delete
}

// GET ALL USERS: user-all 
// GET ONE USERS: user-index 
// POST: user-create 
// PUT: user-update 
// DELETE: user-delete
