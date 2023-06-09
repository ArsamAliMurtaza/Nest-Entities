import { Module } from '@nestjs/common';
import { User7Service } from './user7.service';
import { User7Controller } from './user7.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User7Entity } from './entities/user7.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User7Entity])],
  controllers: [User7Controller],
  providers: [User7Service],
})
export class User7Module {}
