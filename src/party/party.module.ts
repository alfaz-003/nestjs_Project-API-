import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PartyController } from './party.controller';
import { PartyService } from './party.service';
import { PartySchema } from './partySchema';

@Module({
  controllers: [PartyController],
  providers: [PartyService],
  imports: [MongooseModule.forFeature([{name: 'Party' , schema: PartySchema}])], 
  exports: [PartyService]
})
export class PartyModule {}
