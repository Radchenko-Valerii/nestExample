import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Redirect, Header, Req, Res } from '@nestjs/common';
// import { create } from 'domain';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
// import { Response, Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  // @Redirect('https://docs.nestjs.com/controllers', 301)
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }
  //***Express example
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('Caka');
  //   return 'USERS: 0';
  // }
  @Get(':id')
  getById(@Param('id') id: string): Promise<User> {
    return this.userService.getById(id);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('BCrypt', 'false')
  create(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    return this.userService.create(createUserDTO);
  }
  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.userService.remove(id);
  }
  @Put(':id')
  update(@Body() updateUserDTO: UpdateUserDTO, @Param('id') id: string): Promise<User> {
    return this.userService.update(id, updateUserDTO);
  }
}
