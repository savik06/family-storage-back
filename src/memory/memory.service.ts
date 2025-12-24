import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMemoryDto } from './memory.dto';

@Injectable()
export class MemoryService {
    constructor (private readonly prisma: PrismaService) {}

    async createMemory(data: CreateMemoryDto) {
        const { title, images = [], text, creatorId, relativesId } = data;
        return this.prisma.memory.create({
            data: {
                title,
                images,
                text,
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
