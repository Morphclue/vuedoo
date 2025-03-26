import {OmitType} from '@nestjs/swagger';
import {Task} from '../schema/task.schema';

export class TaskDto extends OmitType(Task, ['_id'] as const) {}
