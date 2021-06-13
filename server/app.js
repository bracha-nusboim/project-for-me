const bodyParser = require('body-parser');
const express=require('express');
const mongoose=require('mongoose')
const route=require('./route/api')
const dotenv=require('dotenv')
const jwt=require('jsonwebtoken')
const app=express()
dotenv.config();
app.use(bodyParser.json())

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.My_db, connectionParams)
.then(() => console.log('connect'))
.catch((err) => console.log(err))
app.use('/',route)
app.listen(8000, () => {
    console.log('listen')
})


const router=require('./route/api')
app.use('/',router)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authoriztion");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
app.listen(9000,()=>{console.log('listen in port 9000')})


