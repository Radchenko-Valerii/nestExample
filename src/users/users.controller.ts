import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { create } from 'domain';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAll(): string {
    return 'USERS: 0';
  }
  @Get(':id')
  getById(@Param('id') id): string {
    return `User by id ${id} is not defined`;
  }
  @Post()
  create(@Body() createUserDTO: CreateUserDTO) {
    return `${createUserDTO.name} id:${createUserDTO.id} created`;
  }
  @Delete(':id')
  remove(@Param('id') id): string {
    return `User by id ${id} removed`;
  }
  @Put(':id')
  update(@Body() updateUserDTO: UpdateUserDTO, @Param('id') id) {
    return `id: ${id} updated success ${updateUserDTO.id == id ? '' : 'new id:' + updateUserDTO.id}`;
  }
}
