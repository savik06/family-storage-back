// upload.controller.ts
import { Controller, Post, UseInterceptors, UploadedFiles, BadRequestException } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import type { Express } from 'express';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('images')
  @UseInterceptors(FilesInterceptor('files', 10))
  uploadImages(@UploadedFiles() files: Express.Multer.File[]) {
    if (!files?.length) throw new BadRequestException('Files are required');
    const nonImages = files.filter((f) => !f.mimetype?.startsWith('image/'));
    if (nonImages.length) {
      throw new BadRequestException('Only image files are allowed');
    }
    return this.uploadService.uploadImages(files)
  }
}