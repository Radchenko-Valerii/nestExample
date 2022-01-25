import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {CONSTANTS}from '../constants';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(CONSTANTS.DB_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
