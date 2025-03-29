import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  async getTasks() {
    // FIXME: placeholder data
    return [
      { title: 'Chill', completed: false },
      { title: 'Play Games', completed: true },
      { title: 'Go sleep', completed: false },
    ];
  }
}
