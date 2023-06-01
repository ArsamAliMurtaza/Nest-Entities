import { Module } from '@nestjs/common';
import { User9Service } from './user9.service';
import { User9Controller } from './user9.controller';

@Module({
  controllers: [User9Controller],
  providers: [User9Service]
})
export class User9Module {}
