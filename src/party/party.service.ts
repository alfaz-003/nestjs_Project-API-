import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { partyModel } from './partyModel';
import { Party } from './partySchema';

@Injectable()
export class PartyService {

    constructor(@InjectModel('Party') private party: Model<Party>){}

    async insertParty(partymodel : partyModel){
        const party = new this.party(partymodel);
        return await party.save();
    }

    async getSingleParty(party_id:string) {
        const p2 = await this.party.findById(party_id) ;
        return p2;
    }

    async getParties(){
        const p3 = await this.party.find();
        return p3;
    }

    async deleteParty(party_id: string){
        await this.party.deleteOne({_id: party_id});
       }


       async updateParty(party_id : string,partymodel: partyModel):Promise<any>{
        const updtpr = await this.getSingleParty(party_id)
  
        if(partymodel.party_id) {
           updtpr.party_id = partymodel.party_id ;
        }
        if(partymodel.party_name){
           updtpr.party_name = partymodel.party_name ;
        }
        if(partymodel.contact_num){
           updtpr.contact_num = partymodel.contact_num ; 
        }
        if(partymodel.opening_account){
           updtpr.opening_account = partymodel.opening_account
        }
        updtpr.save();
        return "product " +partymodel.party_name+" Updated Successfully !!";
     }   



}
