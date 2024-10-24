import { HttpStatus } from '@nestjs/common';
export declare class ResponseUtil {
    static success(data: any, message?: string): {
        statusCode: HttpStatus;
        message: string;
        data: any;
    };
    static error(message: string, statusCode?: HttpStatus): void;
}
