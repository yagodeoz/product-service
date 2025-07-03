import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class UpdateProductDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'PRD001', description: 'Código del producto' })
  code: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Camiseta', description: 'Nombre del producto' })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @ApiProperty({ example: 29.99, description: 'Precio del producto' })
  price: number;
}