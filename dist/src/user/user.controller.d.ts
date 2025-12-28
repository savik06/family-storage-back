import { UserService } from './user.service';
import type { User } from '../../generated/prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(images: Express.Multer.File[], body: any): Promise<User>;
    findUserById(id: string): Promise<User>;
    findAllUsers(): Promise<User[]>;
    updateUserData(images: Express.Multer.File[], body: any): Promise<User>;
    deleteAllUsers(): Promise<void>;
}
