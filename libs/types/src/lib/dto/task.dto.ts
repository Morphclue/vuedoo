import {Task} from '../schema';
import {Types} from 'mongoose';

export type TaskDto = Omit<Task, '_id'> & { _id: Types.ObjectId | string };
