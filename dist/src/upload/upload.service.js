"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const client_s3_1 = require("@aws-sdk/client-s3");
const crypto_1 = require("crypto");
const prisma_service_1 = require("../prisma/prisma.service");
let UploadService = class UploadService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    s3 = new client_s3_1.S3Client({
        region: "ru-central1",
        endpoint: "https://storage.yandexcloud.net",
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
    });
    makeKey(file) {
        const safeName = file.originalname?.replace(/[^\w.\-]+/g, '_');
        return `images/${(0, crypto_1.randomUUID)()}_${safeName}`;
    }
    async uploadImages(files) {
        const images = await Promise.all(files.map(async (file) => {
            const key = this.makeKey(file);
            await this.s3.send(new client_s3_1.PutObjectCommand({
                Bucket: "family-storage",
                Key: key,
                Body: file.buffer,
                ContentType: file.mimetype,
            }));
            return `https://family-storage.storage.yandexcloud.net/${key}`;
        }));
        return { images };
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UploadService);
//# sourceMappingURL=upload.service.js.map