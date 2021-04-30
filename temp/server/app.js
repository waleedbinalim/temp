const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const dbURL = 'mongodb+srv://testuser:test1234@nodetest.yvakv.mongodb.net/couriertestdatabase?retryWrites=true&w=majority'


// const Order = require('./models/order')
// const User = require('./models/user')

const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')

app.use(express.json());

app.use(cors());

mongoose.connect(dbURL ,  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    })
    .then(() => {
        app.listen(5000, () => console.log('server started'));
    })
    .catch((err) => {console.log(err)})



app.get('/' , (req,res) => {
    res.send('good afternoon')
})

app.use(orderRoutes)

app.use(userRoutes);

