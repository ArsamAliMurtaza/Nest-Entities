import { PartialType } from '@nestjs/mapped-types';
import { CreateUser9Dto } from './create-user9.dto';

export class UpdateUser9Dto extends PartialType(CreateUser9Dto) {}
