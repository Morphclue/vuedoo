import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Task, TaskDto} from '@vuedoo/types';
import {Model} from 'mongoose';

@Injectable()
export class TaskService {

  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {
  }

  async getTasks(): Promise<TaskDto[]> {
    return await this.taskModel.find().exec();
  }

  async createTask(task: TaskDto): Promise<TaskDto> {
    const createdTask = new this.taskModel(task);
    return await createdTask.save();
  }

  async deleteTask(id: string): Promise<TaskDto> {
    return await this.taskModel.findByIdAndDelete(id).exec();
  }
}
