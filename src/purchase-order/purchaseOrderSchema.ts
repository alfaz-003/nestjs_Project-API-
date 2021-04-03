import * as mongoose from 'mongoose';


export const purchaseOrderSchema = new mongoose.Schema({
    order_no:{type:Number,required: true},
    order_id:{type:String,required:true},
    order_Date:{type:Date,required:true},
    quantity:[{type:Number,required:true}],
    total:[{type :Number , required:true}] ,
    grand_total:[{type :Number , required:true}],
    party_id: [{type : mongoose.Schema.Types.ObjectId , ref : 'Party'}],
    product_id: [{type : mongoose.Schema.Types.ObjectId , ref: 'Product'}]


})


export interface PurcahseOrder extends mongoose.Document{
    order_no : number;
    order_id: string;
    order_Date: Date;
    quantity: number[];
    total:number[];
    grand_total:number ;
    party_id: [{type : mongoose.Schema.Types.ObjectId , ref : 'Party'}]
}
