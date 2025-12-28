import { Body, Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { MemoryService } from './memory.service';
import type { Memory } from '../../generated/prisma/client';
import { CreateMemoryDto } from './memory.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('memory')
export class MemoryController {
  constructor(private readonly memoryService: MemoryService) {}

  @Post('create')
  @UseInterceptors(FilesInterceptor('files'))
  createMemory(@UploadedFiles() images: Express.Multer.File[], @Body() body: any): Promise<Memory> {
    const data = body.params? JSON.parse(body.params): null;
    return this.memoryService.createMemory(data, images); 
  }

  @Get('all')
  findAllMemories(): Promise<Memory[]> {
    return this.memoryService.findAllMemories();
  }
}
