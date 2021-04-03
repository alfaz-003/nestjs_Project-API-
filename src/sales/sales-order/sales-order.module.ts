import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalesOrderController } from './sales-order.controller';
import { SalesOrderService } from './sales-order.service';
import { salesOrderSchema } from './sales-orderSchema';

@Module({
  controllers: [SalesOrderController],
  providers: [SalesOrderService],
  imports: [MongooseModule.forFeature([{name: 'SalesOrder' , schema: salesOrderSchema}])],
})
export class SalesOrderModule {}
