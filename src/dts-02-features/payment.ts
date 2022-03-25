import {Request, Response} from "express";
import Payment from "./models/Payment";

export const payment = async (req: Request, res: Response) => {
    try {
        const payment = await Payment.create({amount: req.body.amount})
        res.status(200).json({id:payment.id,amount:100})
        return payment.save()
    }
    catch (e:any) {
        res.status(500).json({
            error: "some error: " + e.message,
            info: "Back doesn't know what the error is...",

        });
    }
    
}

module.exports = payment