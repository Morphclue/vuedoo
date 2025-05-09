import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {environment} from './environment';
import {TaskModule} from '../task/task.module';

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongo.uri),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
