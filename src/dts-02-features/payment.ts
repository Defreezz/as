import {Request, Response} from "express";
import Payment from "./models/Payment";

export const payment = async (req: Request, res: Response) => {
    const payment = new Payment({amount: 100})
    res.send('ok')
    return payment.save()
}

module.exports = payment