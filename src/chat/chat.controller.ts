import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AskQuestionDto } from './dto/AskQuestionDto'
import { ResponseUtil } from '../utils/response.util';

@ApiTags('Chat API')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('askQuestion')
  @ApiOperation({ summary: '提示词AI生成接口', description: '根据用户输入的画面描述生成相应的内容' })
  @ApiResponse({ status: 200, description: '成功' })
  @ApiResponse({ status: 400, description: '请求参数错误' })
  async askQuestion(@Body() body: AskQuestionDto): Promise<any> {
    const res = await this.chatService.getResponse(body.prompt);
    return ResponseUtil.success(res);
  }
}