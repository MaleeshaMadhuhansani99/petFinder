import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  private readonly safeSelect = {
    id: true,
    name: true,
    email: true,
    phoneNumber: true,
    createdAt: true,
  };

  // For auth verification only — includes password
  async findByEmailWithPassword(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  // For all other use — password excluded
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      select: this.safeSelect,
    });
  }
  
  async createUser(data: CreateUserDto) {
    return this.prisma.user.create({
      data,
      select: this.safeSelect,
    });
  }
}

