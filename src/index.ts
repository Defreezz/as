import {Application} from "express";
import {MongoDBUris} from "./dts-01-main/config";

const express = require('express')
const payment = require('./dts-01-main/routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app:Application = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use("/payment",payment)

mongoose.connect(MongoDBUris)
    .catch((e:any) =>{
        console.log('Mongo connection some error',{...e})
    })

app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT)
})