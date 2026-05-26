import { Injectable } from '@nestjs/common';
import { UsersRepository } from './user.repository';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
  ) {}

  async findByEmail(email: string) {
    return this.usersRepository.findByEmail(email);
  }
  async findByEmailWithPassword(email: string) {
    return this.usersRepository.findByEmailWithPassword(email);
  }
  
  async createUser(data: CreateUserDto) {
    return this.usersRepository.createUser(data);
  }
}