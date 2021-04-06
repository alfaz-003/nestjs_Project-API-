import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://nest:<password>@cluster0.ylkxn.mongodb.net/sales&inventory?retryWrites=true&w=majority')]
})
export class MongoDbModule {}
