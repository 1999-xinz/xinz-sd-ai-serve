// 提前加载环境变量
import * as dotenv from 'dotenv';
// 加载环境变量
dotenv.config();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 配置swagger
  const config = new DocumentBuilder()
    .setTitle('xinz-ai-serve')
    .setDescription('xinz ai serve')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // 只允许 DTO 中定义的属性
    forbidNonWhitelisted: true, // 禁止 DTO 中未定义的属性
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
