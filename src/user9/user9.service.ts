import { Injectable } from '@nestjs/common';
import { CreateUser9Dto } from './dto/create-user9.dto';
import { UpdateUser9Dto } from './dto/update-user9.dto';

@Injectable()
export class User9Service {
  create(createUser9Dto: CreateUser9Dto) {
    return 'This action adds a new user9';
  }

  findAll() {
    return `This action returns all user9`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user9`;
  }

  update(id: number, updateUser9Dto: UpdateUser9Dto) {
    return `This action updates a #${id} user9`;
  }

  remove(id: number) {
    return `This action removes a #${id} user9`;
  }
}
