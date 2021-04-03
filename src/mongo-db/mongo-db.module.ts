import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://nest:alfaz@123@cluster0.ylkxn.mongodb.net/sales&inventory?retryWrites=true&w=majority')]
})
export class MongoDbModule {}
