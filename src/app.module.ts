import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { MemoryModule } from './memory/memory.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [PrismaModule, UserModule, MemoryModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
