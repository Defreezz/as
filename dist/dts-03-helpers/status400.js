"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status400 = void 0;
const status400 = (res, e, more) => {
    const error = {
        more,
        error: e,
        info: "Check your request!",
    };
    res.status(400).json(Object.assign({}, error));
    console.log("error-400: ", error);
};
exports.status400 = status400;
