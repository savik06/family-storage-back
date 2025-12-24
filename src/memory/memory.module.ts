import { Module } from '@nestjs/common';
import { MemoryService } from './memory.service';
import { MemoryController } from './memory.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MemoryController],
  providers: [MemoryService, PrismaService],
})
export class MemoryModule {}
