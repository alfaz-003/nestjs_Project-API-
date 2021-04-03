import { Module } from '@nestjs/common';
import { SalesPartyService } from './sales-party.service';
import { SalesPartyController } from './sales-party.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SalesPartySchema } from './sales-partySchema';

@Module({
  providers: [SalesPartyService],
  controllers: [SalesPartyController],
  imports: [MongooseModule.forFeature([{name: 'SalesParty' , schema: SalesPartySchema}])], 
})
export class SalesPartyModule {}
