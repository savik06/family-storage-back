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
    updateUserData(data: UpdateUserDto, images?: Express.Multer.File[]): Promise<{
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
    uploadPhoto(data: any): Promise<void>;
}
