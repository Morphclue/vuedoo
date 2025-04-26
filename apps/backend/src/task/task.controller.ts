import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
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

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() task: Partial<TaskDto>): Promise<TaskDto> {
    console.log(task);
    return await this.taskService.updateTask(id, task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<TaskDto> {
    return await this.taskService.deleteTask(id);
  }
}
