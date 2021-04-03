import { Module } from '@nestjs/common';
import { AccountSalesService } from './account-sales.service';
import { AccountSalesController } from './account-sales.controller';

@Module({
  providers: [AccountSalesService],
  controllers: [AccountSalesController]
})
export class AccountSalesModule {}
