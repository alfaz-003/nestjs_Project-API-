import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { salesOrderModel } from './sales-orderModel';
import { SalesOrder } from './sales-orderSchema';

@Injectable()
export class SalesOrderService {
    constructor(@InjectModel('SalesOrder') private readonly purchase:Model<SalesOrder>){}

    c:number=500;
    async insertOrder(prchModel:salesOrderModel):Promise<SalesOrder>{
       
       const date_daya= new Date()
        this.c++;
       const alid = Math.floor(Math.random()* Math.floor(1000)).toString();

       if(this.c){
        prchModel.order_no = this.c;
       }
       if(alid){
           prchModel.order_id = alid;
       }
       if(date_daya){
           prchModel.order_Date = date_daya;
       }
        const newOrder = new this.purchase(prchModel);
        return await newOrder.save();
    }

    async getAllorder(){
        const pr = await this.purchase.find().populate('party_id');
        return pr;
    }

    async getSingleOrder(order_id:string){
        const pr1 = await this.purchase.findById(order_id);
        return pr1;
    }

    async deleteOrder(order_Id: string){
        await this.purchase.deleteOne({_id: order_Id});
        return order_Id + " Deleted Successfully !!"
       }

//only for reference purpose as the data is inserted automatically

    async updateOrder(order_id : string,prchmodel: salesOrderModel)
    {
        const upOrd = await this.getSingleOrder(order_id);

        if(prchmodel.order_no){
             upOrd.order_no = prchmodel.order_no ;
        }
        if(prchmodel.order_id){
            upOrd.order_id = prchmodel.order_id ;
        }
        if(prchmodel.order_Date){
           upOrd.order_Date = prchmodel.order_Date;
        }
    } 
        
   


}
