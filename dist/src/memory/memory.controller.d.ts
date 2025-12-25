import { MemoryService } from './memory.service';
import type { Memory } from '../../generated/prisma/client';
import { CreateMemoryDto } from './memory.dto';
export declare class MemoryController {
    private readonly memoryService;
    constructor(memoryService: MemoryService);
    createMemory(data: CreateMemoryDto): Promise<Memory>;
    findAllMemories(): Promise<Memory[]>;
}
