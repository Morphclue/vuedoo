import {Task} from '../schema';

export type TaskDto = Omit<Task, '_id' | 'id'>;
