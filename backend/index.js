require('dotenv').config();
const { Router } = require('express');
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require('./routes/user')

const app = express();



//middleware
app.use(express.json());


app.get("/",(req,res)=>{
    res.json({mssg:"connected"})
})

//Routes

app.use('/api/user',userRoutes)



// connect to database
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`Connected to database at port ${process.env.PORT}`);
        })
    })
    .catch((e)=> {
        console.log(e);
    })

