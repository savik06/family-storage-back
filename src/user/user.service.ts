import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './user.dto';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService, private readonly upload: UploadService) {}

    async createUser(user: User, images: Express.Multer.File[]) {
        const imagesLinks = await this.upload.uploadImages(images);
        return this.prisma.user.create({
            data: {
                ...user,
                images: imagesLinks.images,
            },
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

    async updateUserData(data: UpdateUserDto, images?: Express.Multer.File[]) {
        const { id, ...rest } = data;
        const user = await this.findUserById(id);
        if (!user) {
            throw new NotFoundException('Пользователь не найден');
        }
        
        let imagesLinks: string[] = [];
        if (images && images.length > 0) {
            const uploadedImages = await this.upload.uploadImages(images);
            imagesLinks = uploadedImages.images;
        }
        
        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: {
                ...rest,
                images: imagesLinks.length > 0 
                    ? [...user.images, ...imagesLinks] 
                    : user.images,
            },
        })
        return updatedUser;
    }

    async deleteAllUsers() {
        await this.prisma.user.deleteMany();
    }

    async findAllUsers() {
        return this.prisma.user.findMany();
    }

    async uploadPhoto(data) {
        const apikey = "5066accd614945d07854c3821c76df24";
        const version = "1.0.1";
        const name = "image_cursion";
        const type = "jpg";
        const image = "";
    }
}
