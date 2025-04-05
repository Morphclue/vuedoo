import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Task, TaskSchema} from '@vuedoo/types';

import {TaskController} from './task.controller';
import {TaskService} from './task.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Task.name, schema: TaskSchema}
    ]),
  ],
  providers: [TaskService],
  exports: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
