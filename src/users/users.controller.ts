import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Redirect, Header, Req, Res } from '@nestjs/common';
// import { create } from 'domain';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
// import { Response, Request } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  // @Redirect('https://docs.nestjs.com/controllers', 301)
  getAll(): string {
    return 'USERS: 0';
  }
  //***Express example
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('Caka');
  //   return 'USERS: 0';
  // }
  @Get(':id')
  getById(@Param('id') id): string {
    return `User by id ${id} is not defined`;
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('BCrypt', 'false')
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
