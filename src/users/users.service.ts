import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async getById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }
  async create(userDTO: CreateUserDTO): Promise<User> {
    const newUser = new this.userModel(userDTO);
    return newUser.save();
  }
  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id);
  }
  async update(id: string, userDTO: UpdateUserDTO) {
    return this.userModel.findByIdAndUpdate(id, userDTO, { new: true });
  }
}
