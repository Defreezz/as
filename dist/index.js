"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./dts-01-main/config");
const express = require('express');
const payment = require('./dts-01-main/routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/payment", payment);
mongoose.connect(config_1.MongoDBUris, {})
    .then(() => {
    app.listen(process.env.PORT, () => {
    });
})
    .catch((e) => {
    console.log('Mongo connection some error', Object.assign({}, e));
});
