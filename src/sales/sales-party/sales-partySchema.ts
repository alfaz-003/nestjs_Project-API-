import * as mongoose from 'mongoose' ;

export const SalesPartySchema = new mongoose.Schema({
    party_id: {type:String,required:true},
    party_name: {type:String , required: true},
    contact_num: {type:Number, required:true},
    opening_account : {type:Number , required : true}
})



export interface SalesParty extends mongoose.Document{
    party_id:string;
    party_name:string;
    contact_num:number;
    opening_account:number;
}