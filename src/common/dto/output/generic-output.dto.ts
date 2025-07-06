import { ApiProperty } from "@nestjs/swagger";

export class GenericOutputDto<T = void> {
  
    @ApiProperty({ example: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6', description: 'Id del request o flujo' })
    idTrace: string;
    @ApiProperty({ example: '200', description: 'Código http o código personalizado' })
    code: string;
    @ApiProperty({ example: 'Transacción exitosa', description: 'Mensaje de la transacción o flujo' })
    message: string;
    @ApiProperty({ example: '{code : PRD001, name : GAFAS, price : 1.50}', description: 'Mensaje de la transacción o flujo' })
    output?: T;
}
