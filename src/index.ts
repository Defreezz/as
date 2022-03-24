import {Application} from "express";
import * as mongoose from "mongoose";
import {MongoDBUris} from "./dts-01-main/config";

const express = require('express')
const payment = require('./dts-01-main/routes')
const cors = require('cors')
const bodyParser = require('body-parser')



const app:Application = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use("/payment",payment)

mongoose.connect(MongoDBUris)
    .then(()=>{
        app.listen(process.env.PORT,()=>{

        })
    })
    .catch(e =>{
        console.log('Mongo connection some error',{...e})
    })
