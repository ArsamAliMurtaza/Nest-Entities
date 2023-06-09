import { Module } from '@nestjs/common';
import { User3Service } from './user3.service';
import { User3Controller } from './user3.controller';
import { User3Entity } from './entities/user3.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User3Entity])],
  controllers: [User3Controller],
  providers: [User3Service],
})
export class User3Module {}
