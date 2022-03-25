import {Response} from "express";

export const status400 = (res: Response, e: string, more?: any) => {
    const error = {
        more,
        error: e,
        info: "Check your request!",
    }
    res.status(400).json({
        ...error
    })
    console.log("error-400: ", error);
};