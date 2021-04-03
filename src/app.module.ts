import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesModule } from './sales/sales.module';
import { PurchaseOrderModule } from './purchase-order/purchase-order.module';
import { PartyModule } from './party/party.module';
import { MongoDbModule } from './mongo-db/mongo-db.module';
import { ProductModule } from './product/product.module';
import { AccountModule } from './account/account.module';


@Module({
  imports: [ProductModule, SalesModule, PurchaseOrderModule, PartyModule, MongoDbModule, AccountModule],
  controllers: [AppController],
  providers: [AppService, MongoDbModule],
})
export class AppModule {}
