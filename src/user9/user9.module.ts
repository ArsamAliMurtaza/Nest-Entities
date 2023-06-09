import { Module } from '@nestjs/common';
import { User9Service } from './user9.service';
import { User9Controller } from './user9.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User9Entity } from './entities/user9.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User9Entity])],
  controllers: [User9Controller],
  providers: [User9Service],
})
export class User9Module {}
