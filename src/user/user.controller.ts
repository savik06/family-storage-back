import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import type { User } from 'generated/prisma/client';
import { UpdateUserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Get('find/:id')
  findUserById(@Param('id') id: string): Promise<User> {
    return this.userService.findUserById(id);
  }

  @Get('all')
  findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Patch('update')
  updateUserData(@Body() data: UpdateUserDto): Promise<User> {
    return this.userService.updateUserData(data);
  }

  @Delete('delete')
  deleteAllUsers(): Promise<void> {
    return this.userService.deleteAllUsers();
  }
}
