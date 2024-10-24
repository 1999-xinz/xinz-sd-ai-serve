import { Module } from '@nestjs/common';
// 自定义chat相关服务和控制器
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';

@Module({
  controllers: [ChatController],
  providers: [ChatService],
})

export class ChatModule {}