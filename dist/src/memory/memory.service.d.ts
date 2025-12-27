import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMemoryDto } from './memory.dto';
export declare class MemoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createMemory(data: CreateMemoryDto): Promise<{
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
