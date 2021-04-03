import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountPurchaseService } from './account-purchase.service';
import { accountPurchaseModel } from './account-purchaseModel';

@Controller('account-purchase')
export class AccountPurchaseController {

    
    constructor(private ac_pur_service : AccountPurchaseService){}

    @Post('add-order')
    async addParty(@Body() party : accountPurchaseModel ){

        const insertParty = await this.ac_pur_service.insertOrder(party);
        return insertParty ;
    }


    @Get('get-All-orders')
    async getAllParties() {
        const allParties = this.ac_pur_service.getAllorder();
        return allParties;
    }
}
