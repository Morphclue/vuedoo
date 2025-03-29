import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

@Schema({})
export class Task {
  @ApiProperty()
  _id: Types.ObjectId;

  @ApiProperty()
  id: string;

  @Prop()
  @ApiProperty()
  @IsString()
  title: string;

  @Prop()
  @ApiProperty()
  @IsBoolean()
  completed: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
