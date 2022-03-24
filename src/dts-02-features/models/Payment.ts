import {Document, Schema} from "mongoose";
import * as mongoose from "mongoose";
export interface Payment extends Document {
    _id: mongoose.Types.ObjectId;
    amount:number
}
const PaymentSchema: Schema = new Schema(
    {
    amount: Number,
    },
    {
        timestamps: {
            createdAt: "created",
            updatedAt: "updated",
        },
    }
);

export default mongoose.model<Payment>("Test", PaymentSchema);