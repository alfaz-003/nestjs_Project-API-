import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PartyService } from 'src/party/party.service';
import { ProductService } from 'src/product/product.service';
import { productModel } from 'src/product/productModel';
import { Product } from 'src/product/productSchema';
import {  purchaseOrderModel } from './purchase-orderModel';
import { PurcahseOrder } from './purchaseOrderSchema';

@Injectable()
export class PurchaseOrderService {



    constructor(@InjectModel('PurcahseOrder') private readonly purchase:Model<PurcahseOrder>,
    private prservice:ProductService, private partyservice:PartyService){}

    sum:number[] = [];
    c:number=500;
    grand_total;


    async insertOrder(prchModel:purchaseOrderModel):Promise<PurcahseOrder>{


        //calculation of total(pr.price * quantity)
        
        for(let i=0;i<prchModel.product_id.length;i++){
            const d = await this.prservice.getSingleProduct(prchModel.product_id[i]) ;
             this.sum[i] = prchModel.quantity[i] * d.purchase_price;
             this.grand_total += this.sum[i];
        }
       
        //checking product data
       const a= await this.prservice.getSingleProduct(prchModel.product_id);
       console.log(a.purchase_price);

       //update opening_account reference

       const l = await this.partyservice.getSingleParty(prchModel.party_id) ;
       const m = l.opening_account - this.grand_total;

       const d= new Date()
        this.c++;
       const alid = Math.floor(Math.random()* Math.floor(1000)).toString();

       if(this.c){
        prchModel.order_no = this.c;
       }
       if(alid){
           prchModel.order_id = alid;
       }
       if(d){
           prchModel.order_Date = d;
       }
       if(this.sum){
        prchModel.total = this.sum;
    }
    // if(this.quantity){
    //     prchModel.quantity = this.quantity;
    // }

    if(m){
        prchModel.grand_total = m;
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

    async updateOrder(order_id : string,prchmodel: purchaseOrderModel)
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
