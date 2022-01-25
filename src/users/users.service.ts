import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [];
  getAll() {
    return this.users;
  }
  getById(id: string) {
    return this.users.find((u) => u.id === id);
  }
  create(userDTO: CreateUserDTO) {
    this.users.push({
      ...userDTO,
      id: Date.now().toString(),
    });
  }
}
