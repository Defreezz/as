import {Request, Response} from "express";
import Payment from "./models/Payment";

export const payment = async (req: Request, res: Response) => {
    const payment = new Payment({amount: req.body.amount})
    res.status(200).json({id:payment.id,amount:100})
    return payment.save()
}

module.exports = payment