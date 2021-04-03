import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PartyService } from './party.service';
import { partyModel } from './partyModel';


@Controller('party')
export class PartyController {

    constructor(private partyservice : PartyService){}

    @Post('add-party')
    async addParty(@Body() party : partyModel ){

        const insertParty = await this.partyservice.insertParty(party);
        return insertParty ;
    }

    @Get('get-party/:party_id') 
    async getSingleParty(@Param('party_id') partyId:string){
       const p = await this.partyservice.getSingleParty(partyId);
        return p;
    }

    @Get('get-All-Parties')
    async getAllParties() {
        const allParties = this.partyservice.getParties();
        return allParties;
    }

    @Put('updateParty/:party_id')
async updateProduct(@Param('party_id') party_id: string , @Body() partymodel: partyModel){
    const upd = await this.partyservice.updateParty(party_id,partymodel)
    return upd;
}


    @Delete(':party_id')
    async deleteParty(@Param('party_id') party_id:string){
        const dlt = await this.partyservice.deleteParty(party_id) ;
        return "Party with Id "+party_id+" deleted Successfully !!"
    }
}
