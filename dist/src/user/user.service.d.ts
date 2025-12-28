import { User } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './user.dto';
import { UploadService } from 'src/upload/upload.service';
export declare class UserService {
    private readonly prisma;
    private readonly upload;
    constructor(prisma: PrismaService, upload: UploadService);
    createUser(user: User, images: Express.Multer.File[]): Promise<{
        id: string;
        name: string;
        surname: string;
        middlename: string;
        birthDate: string;
        images: string[];
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
                name: string;
                surname: string;
                middlename: string;
                birthDate: string;
                images: string[];
                livePosition: string | null;
                parentsId: string[];
                hobbies: string[];
                specializations: string[];
                achievements: string[];
            };
            relatives: {
                id: string;
                name: string;
                surname: string;
                middlename: string;
                birthDate: string;
                images: string[];
                livePosition: string | null;
                parentsId: string[];
                hobbies: string[];
                specializations: string[];
                achievements: string[];
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
        name: string;
        surname: string;
        middlename: string;
        birthDate: string;
        images: string[];
        livePosition: string | null;
        parentsId: string[];
        hobbies: string[];
        specializations: string[];
        achievements: string[];
    }>;
    updateUserData(data: UpdateUserDto, images?: Express.Multer.File[]): Promise<{
        id: string;
        name: string;
        surname: string;
        middlename: string;
        birthDate: string;
        images: string[];
        livePosition: string | null;
        parentsId: string[];
        hobbies: string[];
        specializations: string[];
        achievements: string[];
    }>;
    deleteAllUsers(): Promise<void>;
    findAllUsers(): Promise<{
        id: string;
        name: string;
        surname: string;
        middlename: string;
        birthDate: string;
        images: string[];
        livePosition: string | null;
        parentsId: string[];
        hobbies: string[];
        specializations: string[];
        achievements: string[];
    }[]>;
    uploadPhoto(data: any): Promise<void>;
}
