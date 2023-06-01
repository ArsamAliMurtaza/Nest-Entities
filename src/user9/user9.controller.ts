import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User9Service } from './user9.service';
import { CreateUser9Dto } from './dto/create-user9.dto';
import { UpdateUser9Dto } from './dto/update-user9.dto';

@Controller('user9')
export class User9Controller {
  constructor(private readonly user9Service: User9Service) {}

  @Post()
  create(@Body() createUser9Dto: CreateUser9Dto) {
    return this.user9Service.create(createUser9Dto);
  }

  @Get()
  findAll() {
    return this.user9Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user9Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser9Dto: UpdateUser9Dto) {
    return this.user9Service.update(+id, updateUser9Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user9Service.remove(+id);
  }
}
