import { Module } from '@nestjs/common';
import { User8Service } from './user8.service';
import { User8Controller } from './user8.controller';

@Module({
  controllers: [User8Controller],
  providers: [User8Service]
})
export class User8Module {}
