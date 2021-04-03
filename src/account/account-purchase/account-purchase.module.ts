import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountPurchaseController } from './account-purchase.controller';
import { AccountPurchaseService } from './account-purchase.service';
import { accountPurchase } from './account-purchaseSchema';

@Module({
  controllers: [AccountPurchaseController],
  providers: [AccountPurchaseService],
  imports: [MongooseModule.forFeature([{name: 'Acc-Purchase', schema:accountPurchase }])]
})
export class AccountPurchaseModule {}
