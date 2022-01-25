import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  private users = [];
  getAll() {
    return this.users.length > 0 ? this.users : 'users not found';
  }
  getById(id: string) {
    return this.users.find((u) => u.id === id);
  }
  create(userDTO: CreateUserDTO) {
    this.users.push({
      ...userDTO,
      id: Date.now().toString(),
    });
    return `${userDTO.name} created`;
  }
}
