import { MemoryService } from './memory.service';
import type { Memory } from '../../generated/prisma/client';
export declare class MemoryController {
    private readonly memoryService;
    constructor(memoryService: MemoryService);
    createMemory(images: Express.Multer.File[], body: any): Promise<Memory>;
    findAllMemories(): Promise<Memory[]>;
}
