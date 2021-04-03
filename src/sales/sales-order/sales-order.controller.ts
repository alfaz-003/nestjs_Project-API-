import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SalesOrderService } from './sales-order.service';
import { salesOrderModel } from './sales-orderModel';

@Controller('sales-order')
export class SalesOrderController {
    constructor(private readonly orderservice : SalesOrderService){}

    @Post('add-order')
   async addOrder(@Body() prchModel : salesOrderModel){
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
   async updateOrder(@Param('prch_id') prch_id:string, @Body() prchmodel:salesOrderModel){
    const upd = await this.orderservice.updateOrder(prch_id,prchmodel)
    return upd;
   }

   @Get('search-order/:prch_id')
   async getSingleOrder(@Param('prch_id') prch_id:string){
     const singOrd = await this.orderservice.getSingleOrder(prch_id)
     return singOrd ; 
   }
}
