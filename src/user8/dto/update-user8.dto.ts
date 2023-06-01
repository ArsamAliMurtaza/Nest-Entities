import { PartialType } from '@nestjs/mapped-types';
import { CreateUser8Dto } from './create-user8.dto';

export class UpdateUser8Dto extends PartialType(CreateUser8Dto) {}
