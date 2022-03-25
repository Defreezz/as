"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment = void 0;
const Payment_1 = __importDefault(require("./models/Payment"));
const status400_1 = require("../dts-03-helpers/status400");
const status500_1 = require("../dts-03-helpers/status500");
const payment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        (0, status400_1.status400)(res, 'no data card in body', { body: req.body });
    }
    try {
        const payment = yield Payment_1.default.create({
            cardNumber: req.body.cardNumber,
            expDate: req.body.expDate,
            cvv: req.body.cvv,
            amount: req.body.amount,
        });
        res.status(200).json({
            RequestId: payment.id,
            Amount: payment.amount
        });
        return payment.save();
    }
    catch (e) {
        (0, status500_1.status500)(res, e);
    }
});
exports.payment = payment;
module.exports = exports.payment;
