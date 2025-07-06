import { GenericOutputDto } from 'src/common/dto/output/generic-output.dto';
import { v4 as uuidv4 } from 'uuid';

export class GenericResponse {

  private static buildResponse<T>(
    code: string,
    message: string,
    output?: T
  ): GenericOutputDto<T> {
    return {
      idTrace: uuidv4(),
      code,
      message,
      output,
    };
  }

  static success<T>(output?: T, message = 'Operación exitosa', code = '200'): GenericOutputDto<T> {
    return this.buildResponse(code, message, output);
  }

  static error(message = 'Ocurrió un error', code = '500'): GenericOutputDto<void> {
    return this.buildResponse<void>(code, message);
  }

  static custom<T>(code: string, message: string, output?: T): GenericOutputDto<T> {
    return this.buildResponse(code, message, output);
  }
}
