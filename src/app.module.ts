import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://storm:admin@cluster0-fydzq.mongodb.net/leads?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
