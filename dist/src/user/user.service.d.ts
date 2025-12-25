import { User } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createUser(user: User): Promise<{
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
    }>;
    findUserById(id: string): Promise<{
        memories: ({
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
        })[];
        createdMemories: {
            id: string;
            title: string | null;
            images: string[];
            text: string;
            creatorId: string;
            relativesId: string[];
        }[];
    } & {
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
    }>;
    updateUserData(data: UpdateUserDto): Promise<{
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
    }>;
    deleteAllUsers(): Promise<void>;
    findAllUsers(): Promise<{
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
    }[]>;
}
