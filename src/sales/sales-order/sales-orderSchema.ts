import * as mongoose from 'mongoose';


export const salesOrderSchema = new mongoose.Schema({
    order_no:{type:Number,required: true},
    order_id:{type:String,required:true},
    order_Date:{type:Date,required:true},
    party_id: [{type : mongoose.Schema.Types.ObjectId , ref : 'SalesParty'}]

})


export interface SalesOrder extends mongoose.Document{
    order_no : number;
    order_id: string;
    order_Date: Date;
    party_id: [{type : mongoose.Schema.Types.ObjectId , ref : 'SalesParty'}]
}
