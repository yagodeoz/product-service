import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class ProductBaseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'PRD001', description: 'Código del producto' })
  code: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'GAFAS', description: 'Nombre del producto' })
  name: string;

  @IsNumber()
  @Min(0)
  @ApiProperty({ example: '2.50', description: 'Precio del producto' })
  price: number;
}

