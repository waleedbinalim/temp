const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()

app.get('/api' , (req,res) => {
    res.json({
        transmission: 'Can you see this message?'
    })
})

app.post('/api/posts' , verifyToken, (req,res) => {
    jwt.verify(req.token , 'thisisyoursecretkey' , (err, authData) => {
        if(err){res.sendStatus(403)}
        else{
            res.json({
                message: 'Post Created',
                authData
            })

        }
    })
})

app.post('/api/login' , (req,res) => {
    // Dummy User
    const user= {
        id: 1,
        name: 'dummy',
        email: 'dummy@gmail.com'
    } 

    jwt.sign({user: user}, 'thisisyoursecretkey', (err, token) => {
        res.json({
            token: token
        })
    })
})

// VERIFICATION PART
function verifyToken (req,res,next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken  = bearer[1];
        req.token = bearerToken;

        next();
    }
    else{
        // FORBIDDEN
        console.log('forbidden')
        // res.json({message: 'FORBIDDEN'})
        res.sendStatus(403); 
    }
}

app.listen(5000 , () => console.log('server started'))

// AddedComment
// AddedComment