import { PrismaService } from 'src/prisma/prisma.service';
export declare class UploadService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    private readonly s3;
    private makeKey;
    uploadImages(files: Express.Multer.File[]): Promise<{
        images: string[];
    }>;
}
