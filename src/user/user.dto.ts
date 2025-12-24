import { IsArray, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateUserDto {
    @IsUUID()
    id: string;

    @IsOptional()
    @IsString()
    livePosition: string;

    @IsOptional()
    @IsArray()
    hobbies: string[];

    @IsOptional()
    @IsArray()
    specializations: string[];

    @IsOptional()
    @IsArray()
    achievements: string[];
}