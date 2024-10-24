import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Demo')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: '测试接口', description: '仅用于nestjs服务测试的接口' })
  @ApiResponse({ status: 200, description: 'hello world' })
  getHello(): string {
    return this.appService.getHello();
  }
}
