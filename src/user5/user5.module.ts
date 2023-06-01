import { Module } from '@nestjs/common';
import { User5Service } from './user5.service';
import { User5Controller } from './user5.controller';

@Module({
  controllers: [User5Controller],
  providers: [User5Service]
})
export class User5Module {}
