import { Module } from '@nestjs/common';
import { SalesOrderModule } from './sales-order/sales-order.module';
import { SalesPartyModule } from './sales-party/sales-party.module';

@Module({
  imports: [SalesOrderModule, SalesPartyModule]
})
export class SalesModule {}
