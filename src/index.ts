import {Application} from "express";

const express = require('express')
const payment = require('./dts-01-main/routes')
const cors = require('cors')
const bodyParser = require('body-parser')

const app:Application = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use("/payment",payment)

app.listen(3000,()=>{
    console.log('listen 3000')
})