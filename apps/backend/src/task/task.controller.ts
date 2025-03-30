import {Body, Controller, Get, Post} from '@nestjs/common';
import {TaskService} from './task.service';
import {TaskDto} from '@vuedoo/types';

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
}
