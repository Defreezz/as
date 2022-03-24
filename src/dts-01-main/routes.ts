const payment = require('../dts-02-features/payment')
const express = require('express')

const router = express.Router()

router.get('/',  payment)

module.exports = router


