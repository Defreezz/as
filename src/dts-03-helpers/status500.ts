import {Response} from "express";

export const status500 = (res: Response, e: any) => {
    const error = {
        error: e,
        info: "Check your request!",
    }
    res.status(500).json({
        ...error
    })
    console.log("error-500: ", error);
};