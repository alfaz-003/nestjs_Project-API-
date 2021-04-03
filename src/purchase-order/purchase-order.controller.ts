import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PurchaseOrderService } from './purchase-order.service';
import { purchaseOrderModel } from './purchase-orderModel';

@Controller('purchase-order')
export class PurchaseOrderController {

    constructor(private readonly orderservice : PurchaseOrderService){}

    @Post('add-order')
   async addOrder(@Body() prchModel : purchaseOrderModel){
     const order =  await this.orderservice.insertOrder(prchModel); 
     return order;
   }
    
   @Get('get-orders')
   async getOrders(){
     const getord = await this.orderservice.getAllorder();
     return getord;
   }

   @Delete('delete-order/:prch_id')
   async deleteOrder(@Param('prch_id') prch_id:string){
    const id2 = await this.orderservice.deleteOrder(prch_id)
    return "Successfully Deleted !! ";
   }

   @Patch('update-order/:prch_id')
   async updateOrder(@Param('prch_id') prch_id:string, @Body() prchmodel: purchaseOrderModel){
    const upd = await this.orderservice.updateOrder(prch_id,prchmodel)
    return upd;
   }

   @Get('search-order/:prch_id')
   async getSingleOrder(@Param('prch_id') prch_id:string){
     const singOrd = await this.orderservice.getSingleOrder(prch_id)
     return singOrd ; 
   }
}
