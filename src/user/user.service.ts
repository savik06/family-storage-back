import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async createUser(user: User) {
        return this.prisma.user.create({
            data: user,
        })
    }

    async findUserById(id: string) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            include: {
                memories: {
                    include: {
                        creator: true,
                        relatives: true
                    }
                },
                createdMemories: true
            }
        })
        if (!user) {
            throw new NotFoundException('Пользователь не найден');
        }
        return user;
    }

    async updateUserData(data: UpdateUserDto) {
        const { id, ...rest } = data;
        const user = await this.findUserById(id);
        if (!user) {
            throw new NotFoundException('Пользователь не найден');
        }
        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: rest,
        })
        return updatedUser;
    }

    async deleteAllUsers() {
        await this.prisma.user.deleteMany();
    }

    async findAllUsers() {
        return this.prisma.user.findMany();
    }
}
