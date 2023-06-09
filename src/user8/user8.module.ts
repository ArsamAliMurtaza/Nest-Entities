import { Module } from '@nestjs/common';
import { User8Service } from './user8.service';
import { User8Controller } from './user8.controller';
import { User8Entity } from './entities/user8.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User8Entity])],
  controllers: [User8Controller],
  providers: [User8Service],
})
export class User8Module {}
