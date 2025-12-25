import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMemoryDto } from './memory.dto';
export declare class MemoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createMemory(data: CreateMemoryDto): Promise<{
        creator: {
            id: string;
            images: string[];
            name: string;
            surname: string;
            middlename: string;
            birthDate: string;
            livePosition: string | null;
            parentsId: string[];
            hobbies: string[];
            specializations: string[];
            achievements: string[];
        };
        relatives: {
            id: string;
            images: string[];
            name: string;
            surname: string;
            middlename: string;
            birthDate: string;
            livePosition: string | null;
            parentsId: string[];
            hobbies: string[];
            specializations: string[];
            achievements: string[];
        }[];
    } & {
        id: string;
        title: string | null;
        images: string[];
        text: string;
        creatorId: string;
        relativesId: string[];
    }>;
    findAllMemories(): Promise<({
        creator: {
            id: string;
            images: string[];
            name: string;
            surname: string;
            middlename: string;
            birthDate: string;
            livePosition: string | null;
            parentsId: string[];
            hobbies: string[];
            specializations: string[];
            achievements: string[];
        };
        relatives: {
            id: string;
            images: string[];
            name: string;
            surname: string;
            middlename: string;
            birthDate: string;
            livePosition: string | null;
            parentsId: string[];
            hobbies: string[];
            specializations: string[];
            achievements: string[];
        }[];
    } & {
        id: string;
        title: string | null;
        images: string[];
        text: string;
        creatorId: string;
        relativesId: string[];
    })[]>;
}
