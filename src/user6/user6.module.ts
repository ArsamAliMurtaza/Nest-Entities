import { Module } from '@nestjs/common';
import { User6Service } from './user6.service';
import { User6Controller } from './user6.controller';

@Module({
  controllers: [User6Controller],
  providers: [User6Service]
})
export class User6Module {}
