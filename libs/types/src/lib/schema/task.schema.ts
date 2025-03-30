import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Types } from 'mongoose';
import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

@Schema({})
export class Task {
  @ApiProperty()
  _id: Types.ObjectId;

  @Prop()
  @ApiProperty()
  @IsString()
  title: string;

  @Prop()
  @ApiProperty()
  @IsBoolean()
  completed: boolean;

  @ApiPropertyOptional()
  createdAt?: Date;

  @ApiPropertyOptional()
  plannedAt?: Date;

  @ApiPropertyOptional()
  completedAt?: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
