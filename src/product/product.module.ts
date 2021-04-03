import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { productSchema } from './productSchema';

@Module({
    controllers: [ProductController],
    providers: [ProductService],
    imports: [MongooseModule.forFeature([{name: 'Product' , schema: productSchema}])], 
    exports:[ProductService]
})
export class ProductModule {}
