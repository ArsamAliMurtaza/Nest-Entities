import { Module } from '@nestjs/common';
import { User2Service } from './user2.service';
import { User2Controller } from './user2.controller';
import { User2AdminController } from './user2-admin/user2-admin.controller';
import { User2Entity } from './entities/user2.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User2Entity])],
  controllers: [User2Controller, User2AdminController],
  providers: [User2Service],
})
export class User2Module {}
