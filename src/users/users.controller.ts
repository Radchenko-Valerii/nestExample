import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Redirect, Header, Req, Res } from '@nestjs/common';
// import { create } from 'domain';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UsersService } from './users.service';
// import { Response, Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  // @Redirect('https://docs.nestjs.com/controllers', 301)
  getAll() {
    return this.userService.getAll();
  }
  //***Express example
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('Caka');
  //   return 'USERS: 0';
  // }
  @Get(':id')
  getById(@Param('id') id): string {
    return this.userService.getById(id);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('BCrypt', 'false')
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.userService.create(createUserDTO);
  }
  @Delete(':id')
  remove(@Param('id') id): string {
    return `User by id ${id} removed`;
  }
  @Put(':id')
  update(@Body() updateUserDTO: UpdateUserDTO, @Param('id') id) {
    return `updated success`;
  }
}
