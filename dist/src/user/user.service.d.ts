import { User } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createUser(user: User): Promise<{
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
    }>;
    findUserById(id: string): Promise<{
        memories: ({
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
        })[];
        createdMemories: {
            id: string;
            images: string[];
            title: string | null;
            text: string;
            creatorId: string;
            relativesId: string[];
        }[];
    } & {
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
    }>;
    updateUserData(data: UpdateUserDto): Promise<{
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
    }>;
    deleteAllUsers(): Promise<void>;
    findAllUsers(): Promise<{
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
    }[]>;
}
