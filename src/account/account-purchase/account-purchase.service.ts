import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { accountPurchaseModel } from './account-purchaseModel';
import { accountPurchase } from './account-purchaseSchema';

@Injectable()
export class AccountPurchaseService {

    constructor(@InjectModel('Acc-Purchase') private readonly purchase:Model<accountPurchase>){}

    async getAllorder(){
        const pr = await this.purchase.find().populate('p_order');
        return pr;
    }


    async insertOrder(acc_purchase: accountPurchaseModel){
        const insert = new this.purchase(acc_purchase);
        return await insert.save();
    }

}
