import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Types } from 'mongoose';
import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import {Priority} from '../enum/priority';

@Schema({
  timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'},
})
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

  @Prop({ type: String, enum: Priority })
  @ApiPropertyOptional()
  priority?: Priority;

  @Prop()
  @ApiPropertyOptional()
  plannedAt?: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @Prop()
  @ApiPropertyOptional()
  completedAt?: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
