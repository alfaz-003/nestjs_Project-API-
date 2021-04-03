import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { productModel } from './productModel';
import { Product } from './productSchema';

@Injectable()
export class ProductService {

 constructor(@InjectModel('Product') private readonly product:Model<Product>){}

 async insertProduct(prmodel: productModel):Promise<Product>{
    const newdata = new this.product(prmodel);
    
    console.log(prmodel.opening_stock);
    return await newdata.save();
    
    
 }


 async getProduct(){
    const data = await this.product.find().exec()
    return data;
 }

 async getSingleProduct( product_id:string){
    const id = await this.product.findById(product_id)
    return id;

 }

 async deleteProduct(prodId: string){
   await this.product.deleteOne({_id: prodId});
  }


   async updateProduct(pid : string,prmodel: productModel):Promise<any>{
      const updtpr = await this.getSingleProduct(pid)

      if(prmodel.product_name) {
         updtpr.product_name = prmodel.product_name ;
      }
      if(prmodel.description){
         updtpr.description = prmodel.description
      }
      if(prmodel.purchase_price){
         updtpr.purchase_price = prmodel.purchase_price 
      }
      if(prmodel.sales_price){
         updtpr.sales_price = prmodel.sales_price
      }
      if(prmodel.opening_stock){
         updtpr.opening_stock = prmodel.opening_stock
      }
      if(prmodel.status){
         updtpr.status = prmodel.status
      }

      updtpr.save();
      return "product " +prmodel.product_name+" Updated Successfully !!";
   }

   // getProductPrice(prmodel){
   //    return prmodel.purchase_price;
   //     ;
   // }
}
