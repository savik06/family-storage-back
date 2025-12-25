import { UserService } from './user.service';
import type { User } from '../../generated/prisma/client';
import { UpdateUserDto } from './user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(user: User): Promise<User>;
    findUserById(id: string): Promise<User>;
    findAllUsers(): Promise<User[]>;
    updateUserData(data: UpdateUserDto): Promise<User>;
    deleteAllUsers(): Promise<void>;
}
