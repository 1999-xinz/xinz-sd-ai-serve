import { HttpException, HttpStatus } from '@nestjs/common';

export class ResponseUtil {
  static success(data: any, message: string = '请求成功') {
    return {
      statusCode: HttpStatus.OK,
      message,
      data,
    };
  }

  static error(message: string, statusCode: HttpStatus = HttpStatus.BAD_REQUEST) {
    throw new HttpException(
      {
        statusCode,
        message,
      },
      statusCode,
    );
  }
}