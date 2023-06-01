import { Injectable } from '@nestjs/common';
import { CreateUser8Dto } from './dto/create-user8.dto';
import { UpdateUser8Dto } from './dto/update-user8.dto';

@Injectable()
export class User8Service {
  create(createUser8Dto: CreateUser8Dto) {
    return 'This action adds a new user8';
  }

  findAll() {
    return `This action returns all user8`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user8`;
  }

  update(id: number, updateUser8Dto: UpdateUser8Dto) {
    return `This action updates a #${id} user8`;
  }

  remove(id: number) {
    return `This action removes a #${id} user8`;
  }
}
