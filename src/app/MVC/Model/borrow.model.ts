import mongoose, { Schema } from "mongoose";
import { IBorrow } from "../../Interface/borrow.interface";






export const BorrowSchema = new Schema<IBorrow>({
    book:{
        type:Schema.Types.ObjectId as any,
        ref:'Book',
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    dueDate:{
        type:Date,
        required:true
    }
},
{
    versionKey:false,
    timestamps:true
});


export const Borrow = mongoose.model<IBorrow>("Borrow", BorrowSchema);