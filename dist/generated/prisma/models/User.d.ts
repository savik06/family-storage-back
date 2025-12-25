import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    surname: string | null;
    middlename: string | null;
    birthDate: string | null;
    livePosition: string | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    surname: string | null;
    middlename: string | null;
    birthDate: string | null;
    livePosition: string | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    surname: number;
    middlename: number;
    birthDate: number;
    images: number;
    livePosition: number;
    parentsId: number;
    hobbies: number;
    specializations: number;
    achievements: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    surname?: true;
    middlename?: true;
    birthDate?: true;
    livePosition?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    surname?: true;
    middlename?: true;
    birthDate?: true;
    livePosition?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    surname?: true;
    middlename?: true;
    birthDate?: true;
    images?: true;
    livePosition?: true;
    parentsId?: true;
    hobbies?: true;
    specializations?: true;
    achievements?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    name: string;
    surname: string;
    middlename: string;
    birthDate: string;
    images: string[];
    livePosition: string | null;
    parentsId: string[];
    hobbies: string[];
    specializations: string[];
    achievements: string[];
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    surname?: Prisma.StringFilter<"User"> | string;
    middlename?: Prisma.StringFilter<"User"> | string;
    birthDate?: Prisma.StringFilter<"User"> | string;
    images?: Prisma.StringNullableListFilter<"User">;
    livePosition?: Prisma.StringNullableFilter<"User"> | string | null;
    parentsId?: Prisma.StringNullableListFilter<"User">;
    hobbies?: Prisma.StringNullableListFilter<"User">;
    specializations?: Prisma.StringNullableListFilter<"User">;
    achievements?: Prisma.StringNullableListFilter<"User">;
    memories?: Prisma.MemoryListRelationFilter;
    createdMemories?: Prisma.MemoryListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    middlename?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    images?: Prisma.SortOrder;
    livePosition?: Prisma.SortOrderInput | Prisma.SortOrder;
    parentsId?: Prisma.SortOrder;
    hobbies?: Prisma.SortOrder;
    specializations?: Prisma.SortOrder;
    achievements?: Prisma.SortOrder;
    memories?: Prisma.MemoryOrderByRelationAggregateInput;
    createdMemories?: Prisma.MemoryOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    surname?: Prisma.StringFilter<"User"> | string;
    middlename?: Prisma.StringFilter<"User"> | string;
    birthDate?: Prisma.StringFilter<"User"> | string;
    images?: Prisma.StringNullableListFilter<"User">;
    livePosition?: Prisma.StringNullableFilter<"User"> | string | null;
    parentsId?: Prisma.StringNullableListFilter<"User">;
    hobbies?: Prisma.StringNullableListFilter<"User">;
    specializations?: Prisma.StringNullableListFilter<"User">;
    achievements?: Prisma.StringNullableListFilter<"User">;
    memories?: Prisma.MemoryListRelationFilter;
    createdMemories?: Prisma.MemoryListRelationFilter;
}, "id">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    middlename?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    images?: Prisma.SortOrder;
    livePosition?: Prisma.SortOrderInput | Prisma.SortOrder;
    parentsId?: Prisma.SortOrder;
    hobbies?: Prisma.SortOrder;
    specializations?: Prisma.SortOrder;
    achievements?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    surname?: Prisma.StringWithAggregatesFilter<"User"> | string;
    middlename?: Prisma.StringWithAggregatesFilter<"User"> | string;
    birthDate?: Prisma.StringWithAggregatesFilter<"User"> | string;
    images?: Prisma.StringNullableListFilter<"User">;
    livePosition?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    parentsId?: Prisma.StringNullableListFilter<"User">;
    hobbies?: Prisma.StringNullableListFilter<"User">;
    specializations?: Prisma.StringNullableListFilter<"User">;
    achievements?: Prisma.StringNullableListFilter<"User">;
};
export type UserCreateInput = {
    id?: string;
    name: string;
    surname: string;
    middlename: string;
    birthDate: string;
    images?: Prisma.UserCreateimagesInput | string[];
    livePosition?: string | null;
    parentsId?: Prisma.UserCreateparentsIdInput | string[];
    hobbies?: Prisma.UserCreatehobbiesInput | string[];
    specializations?: Prisma.UserCreatespecializationsInput | string[];
    achievements?: Prisma.UserCreateachievementsInput | string[];
    memories?: Prisma.MemoryCreateNestedManyWithoutRelativesInput;
    createdMemories?: Prisma.MemoryCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    surname: string;
    middlename: string;
    birthDate: string;
    images?: Prisma.UserCreateimagesInput | string[];
    livePosition?: string | null;
    parentsId?: Prisma.UserCreateparentsIdInput | string[];
    hobbies?: Prisma.UserCreatehobbiesInput | string[];
    specializations?: Prisma.UserCreatespecializationsInput | string[];
    achievements?: Prisma.UserCreateachievementsInput | string[];
    memories?: Prisma.MemoryUncheckedCreateNestedManyWithoutRelativesInput;
    createdMemories?: Prisma.MemoryUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    middlename?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.UserUpdateimagesInput | string[];
    livePosition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentsId?: Prisma.UserUpdateparentsIdInput | string[];
    hobbies?: Prisma.UserUpdatehobbiesInput | string[];
    specializations?: Prisma.UserUpdatespecializationsInput | string[];
    achievements?: Prisma.UserUpdateachievementsInput | string[];
    memories?: Prisma.MemoryUpdateManyWithoutRelativesNestedInput;
    createdMemories?: Prisma.MemoryUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    middlename?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.UserUpdateimagesInput | string[];
    livePosition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentsId?: Prisma.UserUpdateparentsIdInput | string[];
    hobbies?: Prisma.UserUpdatehobbiesInput | string[];
    specializations?: Prisma.UserUpdatespecializationsInput | string[];
    achievements?: Prisma.UserUpdateachievementsInput | string[];
    memories?: Prisma.MemoryUncheckedUpdateManyWithoutRelativesNestedInput;
    createdMemories?: Prisma.MemoryUncheckedUpdateManyWithoutCreatorNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    name: string;
    surname: string;
    middlename: string;
    birthDate: string;
    images?: Prisma.UserCreateimagesInput | string[];
    livePosition?: string | null;
    parentsId?: Prisma.UserCreateparentsIdInput | string[];
    hobbies?: Prisma.UserCreatehobbiesInput | string[];
    specializations?: Prisma.UserCreatespecializationsInput | string[];
    achievements?: Prisma.UserCreateachievementsInput | string[];
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    middlename?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.UserUpdateimagesInput | string[];
    livePosition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentsId?: Prisma.UserUpdateparentsIdInput | string[];
    hobbies?: Prisma.UserUpdatehobbiesInput | string[];
    specializations?: Prisma.UserUpdatespecializationsInput | string[];
    achievements?: Prisma.UserUpdateachievementsInput | string[];
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    middlename?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.UserUpdateimagesInput | string[];
    livePosition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentsId?: Prisma.UserUpdateparentsIdInput | string[];
    hobbies?: Prisma.UserUpdatehobbiesInput | string[];
    specializations?: Prisma.UserUpdatespecializationsInput | string[];
    achievements?: Prisma.UserUpdateachievementsInput | string[];
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    middlename?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    images?: Prisma.SortOrder;
    livePosition?: Prisma.SortOrder;
    parentsId?: Prisma.SortOrder;
    hobbies?: Prisma.SortOrder;
    specializations?: Prisma.SortOrder;
    achievements?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    middlename?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    livePosition?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    middlename?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    livePosition?: Prisma.SortOrder;
};
export type UserCreateNestedOneWithoutCreatedMemoriesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedMemoriesInput, Prisma.UserUncheckedCreateWithoutCreatedMemoriesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedMemoriesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedManyWithoutMemoriesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMemoriesInput, Prisma.UserUncheckedCreateWithoutMemoriesInput> | Prisma.UserCreateWithoutMemoriesInput[] | Prisma.UserUncheckedCreateWithoutMemoriesInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMemoriesInput | Prisma.UserCreateOrConnectWithoutMemoriesInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutMemoriesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMemoriesInput, Prisma.UserUncheckedCreateWithoutMemoriesInput> | Prisma.UserCreateWithoutMemoriesInput[] | Prisma.UserUncheckedCreateWithoutMemoriesInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMemoriesInput | Prisma.UserCreateOrConnectWithoutMemoriesInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateOneRequiredWithoutCreatedMemoriesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedMemoriesInput, Prisma.UserUncheckedCreateWithoutCreatedMemoriesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedMemoriesInput;
    upsert?: Prisma.UserUpsertWithoutCreatedMemoriesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreatedMemoriesInput, Prisma.UserUpdateWithoutCreatedMemoriesInput>, Prisma.UserUncheckedUpdateWithoutCreatedMemoriesInput>;
};
export type UserUpdateManyWithoutMemoriesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMemoriesInput, Prisma.UserUncheckedCreateWithoutMemoriesInput> | Prisma.UserCreateWithoutMemoriesInput[] | Prisma.UserUncheckedCreateWithoutMemoriesInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMemoriesInput | Prisma.UserCreateOrConnectWithoutMemoriesInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutMemoriesInput | Prisma.UserUpsertWithWhereUniqueWithoutMemoriesInput[];
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutMemoriesInput | Prisma.UserUpdateWithWhereUniqueWithoutMemoriesInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutMemoriesInput | Prisma.UserUpdateManyWithWhereWithoutMemoriesInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutMemoriesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMemoriesInput, Prisma.UserUncheckedCreateWithoutMemoriesInput> | Prisma.UserCreateWithoutMemoriesInput[] | Prisma.UserUncheckedCreateWithoutMemoriesInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMemoriesInput | Prisma.UserCreateOrConnectWithoutMemoriesInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutMemoriesInput | Prisma.UserUpsertWithWhereUniqueWithoutMemoriesInput[];
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutMemoriesInput | Prisma.UserUpdateWithWhereUniqueWithoutMemoriesInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutMemoriesInput | Prisma.UserUpdateManyWithWhereWithoutMemoriesInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateimagesInput = {
    set: string[];
};
export type UserCreateparentsIdInput = {
    set: string[];
};
export type UserCreatehobbiesInput = {
    set: string[];
};
export type UserCreatespecializationsInput = {
    set: string[];
};
export type UserCreateachievementsInput = {
    set: string[];
};
export type UserUpdateimagesInput = {
    set?: string[];
    push?: string | string[];
};
export type UserUpdateparentsIdInput = {
    set?: string[];
    push?: string | string[];
};
export type UserUpdatehobbiesInput = {
    set?: string[];
    push?: string | string[];
};
export type UserUpdatespecializationsInput = {
    set?: string[];
    push?: string | string[];
};
export type UserUpdateachievementsInput = {
    set?: string[];
    push?: string | string[];
};
export type UserCreateWithoutCreatedMemoriesInput = {
    id?: string;
    name: string;
    surname: string;
    middlename: string;
    birthDate: string;
    images?: Prisma.UserCreateimagesInput | string[];
    livePosition?: string | null;
    parentsId?: Prisma.UserCreateparentsIdInput | string[];
    hobbies?: Prisma.UserCreatehobbiesInput | string[];
    specializations?: Prisma.UserCreatespecializationsInput | string[];
    achievements?: Prisma.UserCreateachievementsInput | string[];
    memories?: Prisma.MemoryCreateNestedManyWithoutRelativesInput;
};
export type UserUncheckedCreateWithoutCreatedMemoriesInput = {
    id?: string;
    name: string;
    surname: string;
    middlename: string;
    birthDate: string;
    images?: Prisma.UserCreateimagesInput | string[];
    livePosition?: string | null;
    parentsId?: Prisma.UserCreateparentsIdInput | string[];
    hobbies?: Prisma.UserCreatehobbiesInput | string[];
    specializations?: Prisma.UserCreatespecializationsInput | string[];
    achievements?: Prisma.UserCreateachievementsInput | string[];
    memories?: Prisma.MemoryUncheckedCreateNestedManyWithoutRelativesInput;
};
export type UserCreateOrConnectWithoutCreatedMemoriesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedMemoriesInput, Prisma.UserUncheckedCreateWithoutCreatedMemoriesInput>;
};
export type UserCreateWithoutMemoriesInput = {
    id?: string;
    name: string;
    surname: string;
    middlename: string;
    birthDate: string;
    images?: Prisma.UserCreateimagesInput | string[];
    livePosition?: string | null;
    parentsId?: Prisma.UserCreateparentsIdInput | string[];
    hobbies?: Prisma.UserCreatehobbiesInput | string[];
    specializations?: Prisma.UserCreatespecializationsInput | string[];
    achievements?: Prisma.UserCreateachievementsInput | string[];
    createdMemories?: Prisma.MemoryCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateWithoutMemoriesInput = {
    id?: string;
    name: string;
    surname: string;
    middlename: string;
    birthDate: string;
    images?: Prisma.UserCreateimagesInput | string[];
    livePosition?: string | null;
    parentsId?: Prisma.UserCreateparentsIdInput | string[];
    hobbies?: Prisma.UserCreatehobbiesInput | string[];
    specializations?: Prisma.UserCreatespecializationsInput | string[];
    achievements?: Prisma.UserCreateachievementsInput | string[];
    createdMemories?: Prisma.MemoryUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserCreateOrConnectWithoutMemoriesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMemoriesInput, Prisma.UserUncheckedCreateWithoutMemoriesInput>;
};
export type UserUpsertWithoutCreatedMemoriesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreatedMemoriesInput, Prisma.UserUncheckedUpdateWithoutCreatedMemoriesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedMemoriesInput, Prisma.UserUncheckedCreateWithoutCreatedMemoriesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreatedMemoriesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreatedMemoriesInput, Prisma.UserUncheckedUpdateWithoutCreatedMemoriesInput>;
};
export type UserUpdateWithoutCreatedMemoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    middlename?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.UserUpdateimagesInput | string[];
    livePosition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentsId?: Prisma.UserUpdateparentsIdInput | string[];
    hobbies?: Prisma.UserUpdatehobbiesInput | string[];
    specializations?: Prisma.UserUpdatespecializationsInput | string[];
    achievements?: Prisma.UserUpdateachievementsInput | string[];
    memories?: Prisma.MemoryUpdateManyWithoutRelativesNestedInput;
};
export type UserUncheckedUpdateWithoutCreatedMemoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    middlename?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.UserUpdateimagesInput | string[];
    livePosition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentsId?: Prisma.UserUpdateparentsIdInput | string[];
    hobbies?: Prisma.UserUpdatehobbiesInput | string[];
    specializations?: Prisma.UserUpdatespecializationsInput | string[];
    achievements?: Prisma.UserUpdateachievementsInput | string[];
    memories?: Prisma.MemoryUncheckedUpdateManyWithoutRelativesNestedInput;
};
export type UserUpsertWithWhereUniqueWithoutMemoriesInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutMemoriesInput, Prisma.UserUncheckedUpdateWithoutMemoriesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMemoriesInput, Prisma.UserUncheckedCreateWithoutMemoriesInput>;
};
export type UserUpdateWithWhereUniqueWithoutMemoriesInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMemoriesInput, Prisma.UserUncheckedUpdateWithoutMemoriesInput>;
};
export type UserUpdateManyWithWhereWithoutMemoriesInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutMemoriesInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    surname?: Prisma.StringFilter<"User"> | string;
    middlename?: Prisma.StringFilter<"User"> | string;
    birthDate?: Prisma.StringFilter<"User"> | string;
    images?: Prisma.StringNullableListFilter<"User">;
    livePosition?: Prisma.StringNullableFilter<"User"> | string | null;
    parentsId?: Prisma.StringNullableListFilter<"User">;
    hobbies?: Prisma.StringNullableListFilter<"User">;
    specializations?: Prisma.StringNullableListFilter<"User">;
    achievements?: Prisma.StringNullableListFilter<"User">;
};
export type UserUpdateWithoutMemoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    middlename?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.UserUpdateimagesInput | string[];
    livePosition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentsId?: Prisma.UserUpdateparentsIdInput | string[];
    hobbies?: Prisma.UserUpdatehobbiesInput | string[];
    specializations?: Prisma.UserUpdatespecializationsInput | string[];
    achievements?: Prisma.UserUpdateachievementsInput | string[];
    createdMemories?: Prisma.MemoryUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateWithoutMemoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    middlename?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.UserUpdateimagesInput | string[];
    livePosition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentsId?: Prisma.UserUpdateparentsIdInput | string[];
    hobbies?: Prisma.UserUpdatehobbiesInput | string[];
    specializations?: Prisma.UserUpdatespecializationsInput | string[];
    achievements?: Prisma.UserUpdateachievementsInput | string[];
    createdMemories?: Prisma.MemoryUncheckedUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateManyWithoutMemoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    middlename?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.UserUpdateimagesInput | string[];
    livePosition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentsId?: Prisma.UserUpdateparentsIdInput | string[];
    hobbies?: Prisma.UserUpdatehobbiesInput | string[];
    specializations?: Prisma.UserUpdatespecializationsInput | string[];
    achievements?: Prisma.UserUpdateachievementsInput | string[];
};
export type UserCountOutputType = {
    memories: number;
    createdMemories: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    memories?: boolean | UserCountOutputTypeCountMemoriesArgs;
    createdMemories?: boolean | UserCountOutputTypeCountCreatedMemoriesArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountMemoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemoryWhereInput;
};
export type UserCountOutputTypeCountCreatedMemoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemoryWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    surname?: boolean;
    middlename?: boolean;
    birthDate?: boolean;
    images?: boolean;
    livePosition?: boolean;
    parentsId?: boolean;
    hobbies?: boolean;
    specializations?: boolean;
    achievements?: boolean;
    memories?: boolean | Prisma.User$memoriesArgs<ExtArgs>;
    createdMemories?: boolean | Prisma.User$createdMemoriesArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    surname?: boolean;
    middlename?: boolean;
    birthDate?: boolean;
    images?: boolean;
    livePosition?: boolean;
    parentsId?: boolean;
    hobbies?: boolean;
    specializations?: boolean;
    achievements?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    surname?: boolean;
    middlename?: boolean;
    birthDate?: boolean;
    images?: boolean;
    livePosition?: boolean;
    parentsId?: boolean;
    hobbies?: boolean;
    specializations?: boolean;
    achievements?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    surname?: boolean;
    middlename?: boolean;
    birthDate?: boolean;
    images?: boolean;
    livePosition?: boolean;
    parentsId?: boolean;
    hobbies?: boolean;
    specializations?: boolean;
    achievements?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "surname" | "middlename" | "birthDate" | "images" | "livePosition" | "parentsId" | "hobbies" | "specializations" | "achievements", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    memories?: boolean | Prisma.User$memoriesArgs<ExtArgs>;
    createdMemories?: boolean | Prisma.User$createdMemoriesArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        memories: Prisma.$MemoryPayload<ExtArgs>[];
        createdMemories: Prisma.$MemoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        surname: string;
        middlename: string;
        birthDate: string;
        images: string[];
        livePosition: string | null;
        parentsId: string[];
        hobbies: string[];
        specializations: string[];
        achievements: string[];
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    memories<T extends Prisma.User$memoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$memoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdMemories<T extends Prisma.User$createdMemoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$createdMemoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly surname: Prisma.FieldRef<"User", 'String'>;
    readonly middlename: Prisma.FieldRef<"User", 'String'>;
    readonly birthDate: Prisma.FieldRef<"User", 'String'>;
    readonly images: Prisma.FieldRef<"User", 'String[]'>;
    readonly livePosition: Prisma.FieldRef<"User", 'String'>;
    readonly parentsId: Prisma.FieldRef<"User", 'String[]'>;
    readonly hobbies: Prisma.FieldRef<"User", 'String[]'>;
    readonly specializations: Prisma.FieldRef<"User", 'String[]'>;
    readonly achievements: Prisma.FieldRef<"User", 'String[]'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$memoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemorySelect<ExtArgs> | null;
    omit?: Prisma.MemoryOmit<ExtArgs> | null;
    include?: Prisma.MemoryInclude<ExtArgs> | null;
    where?: Prisma.MemoryWhereInput;
    orderBy?: Prisma.MemoryOrderByWithRelationInput | Prisma.MemoryOrderByWithRelationInput[];
    cursor?: Prisma.MemoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemoryScalarFieldEnum | Prisma.MemoryScalarFieldEnum[];
};
export type User$createdMemoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemorySelect<ExtArgs> | null;
    omit?: Prisma.MemoryOmit<ExtArgs> | null;
    include?: Prisma.MemoryInclude<ExtArgs> | null;
    where?: Prisma.MemoryWhereInput;
    orderBy?: Prisma.MemoryOrderByWithRelationInput | Prisma.MemoryOrderByWithRelationInput[];
    cursor?: Prisma.MemoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemoryScalarFieldEnum | Prisma.MemoryScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
