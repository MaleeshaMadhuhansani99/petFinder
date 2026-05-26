export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
}

export class UserResponseDto {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  createdAt: Date;
}