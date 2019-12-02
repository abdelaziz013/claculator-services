
const express = require('express');
const app = express();
const cors = require ('cors');
const bodyParser = require('body-parser')
const calcRouter =require('./router/calcRouter')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())



app.use('/api',calcRouter);
app.use((error,req,res,next)=>{
    console.log(error)
    const message = error.message
    res.status(406).json({            
        message: message

    })
})






module.exports = app