import * as mongoose from 'mongoose';

export const accountPurchase = new mongoose.Schema({
    p_order : {type: mongoose.Schema.Types.ObjectId , ref: 'PurcahseOrder'}
})


export interface accountPurchase extends mongoose.Document {
    p_order : {type: mongoose.Schema.Types.ObjectId , ref: 'PurcahseOrder'}
}