import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PartyModule } from 'src/party/party.module';
import { ProductModule } from 'src/product/product.module';
import { ProductService } from 'src/product/product.service';
import { PurchaseOrderController } from './purchase-order.controller';
import { PurchaseOrderService } from './purchase-order.service';
import { purchaseOrderSchema } from './purchaseOrderSchema';

@Module({
  controllers: [PurchaseOrderController],
  providers: [PurchaseOrderService],
  imports: [MongooseModule.forFeature([{name: 'PurcahseOrder' , schema: purchaseOrderSchema}]), ProductModule,PartyModule],
  
})
export class PurchaseOrderModule {}
