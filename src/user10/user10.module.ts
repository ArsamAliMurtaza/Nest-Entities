import { Module } from '@nestjs/common';
import { User10Service } from './user10.service';
import { User10Controller } from './user10.controller';
import { User10Entity } from './entities/user10.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User10Entity])],
  controllers: [User10Controller],
  providers: [User10Service],
})
export class User10Module {}
