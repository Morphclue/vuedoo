import { Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

@Schema({})
export class Task {
  @ApiProperty()
  _id: Types.ObjectId;

  @ApiProperty()
  id: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsBoolean()
  completed: boolean;
}
