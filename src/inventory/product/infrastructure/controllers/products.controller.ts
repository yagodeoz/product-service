import {Body,Controller,Delete,Get,Param,Patch,Post,ParseUUIDPipe,} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateProductUseCase } from '../../application/use-cases/create-product.use-case';
import { UpdateProductUseCase } from '../../application/use-cases/update-product.use-case';
import { DeleteProductUseCase } from '../../application/use-cases/delete-product.use-case';
import { FindAllProductsUseCase } from '../../application/use-cases/find-all-products.use-case';
import { FindProductByIdUseCase } from '../../application/use-cases/find-product-by-id.use-case';

import { CreateProductDto } from '../../application/dto/input/create-product.dto';
import { UpdateProductDto } from '../../application/dto/input/update-product.dto';

import { GenericOutputDto } from 'src/common/dto/output/generic-output.dto';
import { GenericResponse } from 'src/common/dto/output/generic-response';
import { Product } from '../../domain/entities/product.entity';

@ApiTags('Productos')
@Controller('inventory/products')
export class ProductsController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase,
    private readonly deleteProductUseCase: DeleteProductUseCase,
    private readonly findAllProductsUseCase: FindAllProductsUseCase,
    private readonly findProductByIdUseCase: FindProductByIdUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear producto' })
  @ApiResponse({
    status: 201,
    description: 'Producto creado correctamente',
    type: GenericOutputDto<Product>,
  })
  async create(
    @Body() dto: CreateProductDto,
  ): Promise<GenericOutputDto<Product>> {
    const { code, name, price } = dto;
    const created = await this.createProductUseCase.execute(code, name, price);
    return GenericResponse.custom('201', 'Producto creado correctamente', created);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar producto' })
  @ApiResponse({
    status: 200,
    description: 'Producto actualizado correctamente',
    type: GenericOutputDto<void>,
  })
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: UpdateProductDto,
  ): Promise<GenericOutputDto<void>> {
    const { code, name, price } = dto;
    await this.updateProductUseCase.execute(id, code, name, price);
    return GenericResponse.custom('200', 'Producto actualizado correctamente');
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar producto' })
  @ApiResponse({
    status: 200,
    description: 'Producto eliminado correctamente',
    type: GenericOutputDto<void>,
  })
  async delete(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<GenericOutputDto<void>> {
    await this.deleteProductUseCase.execute(id);
    return GenericResponse.custom('200', 'Producto eliminado correctamente');
  }

  @Get()
  @ApiOperation({ summary: 'Consultar productos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de productos',
    type: GenericOutputDto<Product[]>,
  })
  async findAll(): Promise<GenericOutputDto<Product[]>> {
    const products = await this.findAllProductsUseCase.execute();
    return GenericResponse.success(products);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consultar producto por id' })
  @ApiResponse({
    status: 200,
    description: 'Producto encontrado',
    type: GenericOutputDto<Product | null>,
  })
  async findById(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<GenericOutputDto<Product | null>> {
    const product = await this.findProductByIdUseCase.execute(id);
    if (!product) {
      return GenericResponse.custom('404', 'Producto no encontrado', null);
    }
    return GenericResponse.success(product);
  }
}
