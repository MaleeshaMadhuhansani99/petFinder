import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';

import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(dto: SignupDto) {
    const existingUser = await this.usersService.findByEmail(
      dto.email,
    );

    if (existingUser) {
      throw new BadRequestException(
        'Email already exists',
      );
    }

    const hashedPassword = await bcrypt.hash(
      dto.password,
      10,
    );

    const user = await this.usersService.createUser({
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
      phoneNumber: dto.phoneNumber,
    });

    const token = await this.generateToken(user.id);

    return {
      message: 'User created successfully',
      token,
      user,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(
      dto.email,
    );

    if (!user) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    const isPasswordMatched = await bcrypt.compare(
      dto.password,
      user.password,
    );

    if (!isPasswordMatched) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    const token = await this.generateToken(user.id);

    return {
      message: 'Login successful',
      token,
      user,
    };
  }

  async generateToken(userId: string) {
    return this.jwtService.sign({
      sub: userId,
    });
  }
}