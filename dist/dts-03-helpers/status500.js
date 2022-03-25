"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status500 = void 0;
const status500 = (res, e) => {
    const error = {
        error: e,
        info: "Check your request!",
    };
    res.status(500).json(Object.assign({}, error));
    console.log("error-500: ", error);
};
exports.status500 = status500;
