import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMemoryDto } from './memory.dto';
import { UploadService } from 'src/upload/upload.service';
export declare class MemoryService {
    private readonly upload;
    private readonly prisma;
    constructor(upload: UploadService, prisma: PrismaService);
    createMemory(data: CreateMemoryDto, images: Express.Multer.File[]): Promise<{
        creator: {
            id: string;
            livePosition: string | null;
            hobbies: string[];
            specializations: string[];
            achievements: string[];
            name: string;
            surname: string;
            middlename: string;
            birthDate: string;
            images: string[];
            parentsId: string[];
        };
        relatives: {
            id: string;
            livePosition: string | null;
            hobbies: string[];
            specializations: string[];
            achievements: string[];
            name: string;
            surname: string;
            middlename: string;
            birthDate: string;
            images: string[];
            parentsId: string[];
        }[];
    } & {
        id: string;
        images: string[];
        title: string | null;
        text: string;
        creatorId: string;
        relativesId: string[];
    }>;
    findAllMemories(): Promise<({
        creator: {
            id: string;
            livePosition: string | null;
            hobbies: string[];
            specializations: string[];
            achievements: string[];
            name: string;
            surname: string;
            middlename: string;
            birthDate: string;
            images: string[];
            parentsId: string[];
        };
        relatives: {
            id: string;
            livePosition: string | null;
            hobbies: string[];
            specializations: string[];
            achievements: string[];
            name: string;
            surname: string;
            middlename: string;
            birthDate: string;
            images: string[];
            parentsId: string[];
        }[];
    } & {
        id: string;
        images: string[];
        title: string | null;
        text: string;
        creatorId: string;
        relativesId: string[];
    })[]>;
}
