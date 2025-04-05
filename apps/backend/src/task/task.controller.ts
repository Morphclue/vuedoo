import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {TaskDto} from '@vuedoo/types';

import {TaskService} from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {
  }

  @Get()
  async getTasks(): Promise<TaskDto[]> {
    return await this.taskService.getTasks();
  }

  @Post()
  async createTask(@Body() task: TaskDto): Promise<TaskDto> {
    return await this.taskService.createTask(task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<TaskDto> {
    return await this.taskService.deleteTask(id);
  }
}
