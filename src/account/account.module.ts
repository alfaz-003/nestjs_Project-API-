import { Module } from '@nestjs/common';
import { AccountPurchaseModule } from './account-purchase/account-purchase.module';
import { AccountSalesModule } from './account-sales/account-sales.module';

@Module({
  imports: [AccountPurchaseModule, AccountSalesModule]
})
export class AccountModule {}
