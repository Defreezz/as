import {Application} from "express";

const express = require('express')
const payment = require('./src/dts-01-main/routes')
const cors = require('cors')
const bodyParser = require('body-parser')

const app:Application = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use("/payment",payment)

app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT)
})