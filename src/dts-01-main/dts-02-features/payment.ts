import {Request, Response} from "express";

export const payment = async (req:Request , res:Response ) => {
    res.send('ok')
}

module.exports = payment