import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import type { User } from '../../generated/prisma/client';
import { UpdateUserDto } from './user.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @UseInterceptors(FilesInterceptor('files'))
  createUser(@UploadedFiles() images: Express.Multer.File[], @Body() body: any): Promise<User> {
    const data = body.params ? JSON.parse(body.params) : null;
    return this.userService.createUser(data, images);
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
  @UseInterceptors(FilesInterceptor('files'))
  updateUserData(@UploadedFiles() images: Express.Multer.File[], @Body() body: any): Promise<User> {
    const data = body.params ? JSON.parse(body.params) : body;
    return this.userService.updateUserData(data, images);
  }

  @Delete('delete')
  deleteAllUsers(): Promise<void> {
    return this.userService.deleteAllUsers();
  }
}
