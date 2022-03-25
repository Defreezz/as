import {Request, Response} from "express";
import Payment from "./models/Payment";
import {status400} from "../dts-03-helpers/status400";
import {status500} from "../dts-03-helpers/status500";

export const payment = async (req: Request, res: Response) => {
    if (!req.body) {
        status400(res, 'no data card in body', {body: req.body})
    }
    try {
        const payment = await Payment.create({
            cardNumber: req.body.cardNumber,
            expDate: req.body.expDate,
            cvv: req.body.cvv,
            amount: req.body.amount,
        })
        res.status(200).json({
            RequestId: payment.id,
            Amount: payment.amount
        })
        return payment.save()
    } catch (e: any) {
        status500(res, e)
    }
}

module.exports = payment