import { IsArray, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateMemoryDto {
    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsArray()
    images: string[];

    @IsString()
    @IsNotEmpty()
    text: string;

    @IsUUID()
    @IsNotEmpty()
    creatorId: string;

    @IsArray()
    @IsNotEmpty()
    relativesId: string[];
}