import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // findAll() {
  //   return this.prisma.user.findMany();
  // }
  // findOne(id: string) {
  //   const user = this.users.find((user) => user.id === id);
  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }
  //   return user;
  // }
  async create(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
    };
    await this.prisma.user.create({ data: createUserDto });
    return newUser;
  }

  // update(id: string, updateUserDto: UpdateUserDto) {
  //   const userIndex = this.users.findIndex((user) => user.id === id);
  //   if (userIndex !== -1) {
  //     return (this.users[userIndex] = {
  //       ...this.users[userIndex],
  //       ...updateUserDto,
  //     });
  //   } else {
  //     throw new NotFoundException('User not found');
  //   }
  // }
}
