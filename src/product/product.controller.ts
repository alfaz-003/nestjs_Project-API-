import { Delete, Get, Patch, Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { productModel } from './productModel';

@Controller('products')
export class ProductController {

    constructor(private prservice : ProductService){}

    @Post('addProduct')
    async addProduct(@Body() prmodel : productModel)  {

const data= await this.prservice.insertProduct(prmodel);

return data;
}

@Get('getAllProducts')
async getProduct(){
    const data1 = await this.prservice.getProduct();
    return data1;
}

@Get('getSingleProduct/:product_id')
async getSingleProduct(@Param('product_id') product_id:string) {
    const id1 = await this.prservice.getSingleProduct(product_id)
    return id1;
} 

@Delete('deleteSingleProduct/:product_id')
async deleteProduct(@Param('product_id') product_id:string) {
    const id2 = await this.prservice.deleteProduct(product_id)
    return "Successfully Deleted !! ";
}

@Put('updateProduct/:product_id')
async updateProduct(@Param('product_id') product_id: string , @Body() prmodel: productModel){
    const upd = await this.prservice.updateProduct(product_id,prmodel)
    return upd;
}
 
}
