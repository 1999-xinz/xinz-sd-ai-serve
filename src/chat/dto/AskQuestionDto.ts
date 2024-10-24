import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class AskQuestionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '一只可爱的黑白色小猫' })
  prompt: string;
}