import { Body, Controller, Get, Post } from '@nestjs/common';
import { MemoryService } from './memory.service';
import type { Memory } from 'generated/prisma/client';
import { CreateMemoryDto } from './memory.dto';

@Controller('memory')
export class MemoryController {
  constructor(private readonly memoryService: MemoryService) {}

  @Post('create')
  createMemory(@Body() data: CreateMemoryDto): Promise<Memory> {
    return this.memoryService.createMemory(data);
  }

  @Get('all')
  findAllMemories(): Promise<Memory[]> {
    return this.memoryService.findAllMemories();
  }
}
