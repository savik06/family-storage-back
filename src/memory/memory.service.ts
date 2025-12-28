import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMemoryDto } from './memory.dto';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class MemoryService {
    constructor (private readonly upload: UploadService, private readonly prisma: PrismaService) {}

    async createMemory(data: CreateMemoryDto, images: Express.Multer.File[]) {
        const imagesLinks = await this.upload.uploadImages(images);
        const { title, text, creatorId, relativesId } = data;
        return this.prisma.memory.create({
            data: {
                title,
                text,
                images: imagesLinks.images,
                creator: {
                    connect: {
                        id: creatorId
                    }
                },
                relatives: {
                    connect: relativesId.map(id => ({ id }))
                }
            },
            include: {
                creator: true,
                relatives: true
            }
        });
    }

    async findAllMemories() {
        return this.prisma.memory.findMany({
            include: {
                relatives: true,
                creator: true
            }
        });
    }
}
