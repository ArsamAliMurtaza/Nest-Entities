import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User8Service } from './user8.service';
import { CreateUser8Dto } from './dto/create-user8.dto';
import { UpdateUser8Dto } from './dto/update-user8.dto';

@Controller('user8')
export class User8Controller {
  constructor(private readonly user8Service: User8Service) {}

  @Post()
  create(@Body() createUser8Dto: CreateUser8Dto) {
    return this.user8Service.create(createUser8Dto);
  }

  @Get()
  findAll() {
    return this.user8Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user8Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser8Dto: UpdateUser8Dto) {
    return this.user8Service.update(+id, updateUser8Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user8Service.remove(+id);
  }
}
