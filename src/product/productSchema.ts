import * as mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({
    product_name:{type:String,required: true},
    description:{type:String,required:true},
    purchase_price:{type:Number,required:true},
    sales_price:{type:Number,required:true},
    opening_stock:{type:Number,required:true},
    status:{type:String,required:true}

})


export interface Product extends mongoose.Document {
    product_id:string;
    product_name:string;
    description:string;
    purchase_price:number;
    sales_price:number;
    opening_stock:number;
    status:string;
}