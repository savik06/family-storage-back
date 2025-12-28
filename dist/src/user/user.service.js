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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const upload_service_1 = require("../upload/upload.service");
let UserService = class UserService {
    prisma;
    upload;
    constructor(prisma, upload) {
        this.prisma = prisma;
        this.upload = upload;
    }
    async createUser(user, images) {
        const imagesLinks = await this.upload.uploadImages(images);
        return this.prisma.user.create({
            data: {
                ...user,
                images: imagesLinks.images,
            },
        });
    }
    async findUserById(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            include: {
                memories: {
                    include: {
                        creator: true,
                        relatives: true
                    }
                },
                createdMemories: true
            }
        });
        if (!user) {
            throw new common_1.NotFoundException('Пользователь не найден');
        }
        return user;
    }
    async updateUserData(data, images) {
        const { id, ...rest } = data;
        const user = await this.findUserById(id);
        if (!user) {
            throw new common_1.NotFoundException('Пользователь не найден');
        }
        let imagesLinks = [];
        if (images && images.length > 0) {
            const uploadedImages = await this.upload.uploadImages(images);
            imagesLinks = uploadedImages.images;
        }
        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: {
                ...rest,
                images: imagesLinks.length > 0
                    ? [...user.images, ...imagesLinks]
                    : user.images,
            },
        });
        return updatedUser;
    }
    async deleteAllUsers() {
        await this.prisma.user.deleteMany();
    }
    async findAllUsers() {
        return this.prisma.user.findMany();
    }
    async uploadPhoto(data) {
        const apikey = "5066accd614945d07854c3821c76df24";
        const version = "1.0.1";
        const name = "image_cursion";
        const type = "jpg";
        const image = "";
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, upload_service_1.UploadService])
], UserService);
//# sourceMappingURL=user.service.js.map