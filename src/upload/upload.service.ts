// upload.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { randomUUID } from 'crypto';
import type { Express } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UploadService {
  constructor (private readonly prismaService: PrismaService) {}

  private readonly s3 = new S3Client({
    region: "ru-central1",
    endpoint: "https://storage.yandexcloud.net",
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID!, 
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
    },
  })

  private makeKey(file: Express.Multer.File) {
    const safeName = file.originalname?.replace(/[^\w.\-]+/g, '_');
    return `images/${randomUUID()}_${safeName}`;
  }

  async uploadImages(files: Express.Multer.File[]) {
    const images = await Promise.all(
      files.map(async (file) => {
        const key = this.makeKey(file);
        await this.s3.send(
          new PutObjectCommand({
            Bucket: "family-storage",
            Key: key,
            Body: file.buffer,
            ContentType: file.mimetype,
          }),
        );
        return `https://family-storage.storage.yandexcloud.net/${key}`;
      })
    );

    return { images };
  }
}