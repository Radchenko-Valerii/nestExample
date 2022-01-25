import { Controller, Get, Param } from '@nestjs/common';

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
}
