import { Body, Controller, Delete, Get, Param, Patch, Post, ParseUUIDPipe } from '@nestjs/common';
import { CreateProductUseCase } from '../../application/use-cases/create-product.use-case';
import { CreateProductDto } from '../../application/dto/input/create-product.dto';
import { UpdateProductDto } from '../../application/dto/input/update-product.dto';
import { UpdateProductUseCase } from '../../application/use-cases/update-product.use-case';
import { DeleteProductUseCase } from '../../application/use-cases/delete-product.use-case';
import { FindAllProductsUseCase } from '../../application/use-cases/find-all-products.use-case';
import { FindProductByIdUseCase } from '../../application/use-cases/find-product-by-id.use-case';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

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
  @ApiResponse({ status: 201, description: 'Producto creado correctamente' })
  async create(
    @Body() dto : CreateProductDto,
  ) {
    const { code, name, price } = dto;
    return this.createProductUseCase.execute(code, name, price);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar producto' })
  @ApiResponse({ status: 201, description: 'Producto actualizado correctamente' })
  async update(
          @Param('id', new ParseUUIDPipe()) id: string,
          @Body() dto: UpdateProductDto
  ) {
    const {code, name, price } = dto;
    return this.updateProductUseCase.execute(id, code, name, price); 
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar producto' })
  @ApiResponse({ status: 201, description: 'Producto eliminado correctamente' })
  async delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {   
    return this.deleteProductUseCase.execute(id);
  }

  @Get()
  @ApiOperation({ summary: 'Consultar productos' })
  async findAll() {
    return this.findAllProductsUseCase.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consultar producto por id' })
  async findById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.findProductByIdUseCase.execute(id);
  }
 
}
