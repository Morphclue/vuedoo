import {OmitType} from '@nestjs/swagger';
import {Task} from '../schema';

// TODO: add id back if needed
export class TaskDto extends OmitType(Task, ['_id', 'id'] as const) {}
