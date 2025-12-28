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
exports.MemoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const upload_service_1 = require("../upload/upload.service");
let MemoryService = class MemoryService {
    upload;
    prisma;
    constructor(upload, prisma) {
        this.upload = upload;
        this.prisma = prisma;
    }
    async createMemory(data, images) {
        const imagesLinks = await this.upload.uploadImages(images);
        const { title, text, creatorId, relativesId } = data;
        return this.prisma.memory.create({
            data: {
                title,
                text,
                images: imagesLinks.images,
                creator: {
                    connect: {
                        id: creatorId
                    }
                },
                relatives: {
                    connect: relativesId.map(id => ({ id }))
                }
            },
            include: {
                creator: true,
                relatives: true
            }
        });
    }
    async findAllMemories() {
        return this.prisma.memory.findMany({
            include: {
                relatives: true,
                creator: true
            }
        });
    }
};
exports.MemoryService = MemoryService;
exports.MemoryService = MemoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [upload_service_1.UploadService, prisma_service_1.PrismaService])
], MemoryService);
//# sourceMappingURL=memory.service.js.map