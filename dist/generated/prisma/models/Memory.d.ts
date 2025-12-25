import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MemoryModel = runtime.Types.Result.DefaultSelection<Prisma.$MemoryPayload>;
export type AggregateMemory = {
    _count: MemoryCountAggregateOutputType | null;
    _min: MemoryMinAggregateOutputType | null;
    _max: MemoryMaxAggregateOutputType | null;
};
export type MemoryMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    text: string | null;
    creatorId: string | null;
};
export type MemoryMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    text: string | null;
    creatorId: string | null;
};
export type MemoryCountAggregateOutputType = {
    id: number;
    title: number;
    images: number;
    text: number;
    creatorId: number;
    relativesId: number;
    _all: number;
};
export type MemoryMinAggregateInputType = {
    id?: true;
    title?: true;
    text?: true;
    creatorId?: true;
};
export type MemoryMaxAggregateInputType = {
    id?: true;
    title?: true;
    text?: true;
    creatorId?: true;
};
export type MemoryCountAggregateInputType = {
    id?: true;
    title?: true;
    images?: true;
    text?: true;
    creatorId?: true;
    relativesId?: true;
    _all?: true;
};
export type MemoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemoryWhereInput;
    orderBy?: Prisma.MemoryOrderByWithRelationInput | Prisma.MemoryOrderByWithRelationInput[];
    cursor?: Prisma.MemoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MemoryCountAggregateInputType;
    _min?: MemoryMinAggregateInputType;
    _max?: MemoryMaxAggregateInputType;
};
export type GetMemoryAggregateType<T extends MemoryAggregateArgs> = {
    [P in keyof T & keyof AggregateMemory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMemory[P]> : Prisma.GetScalarType<T[P], AggregateMemory[P]>;
};
export type MemoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemoryWhereInput;
    orderBy?: Prisma.MemoryOrderByWithAggregationInput | Prisma.MemoryOrderByWithAggregationInput[];
    by: Prisma.MemoryScalarFieldEnum[] | Prisma.MemoryScalarFieldEnum;
    having?: Prisma.MemoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MemoryCountAggregateInputType | true;
    _min?: MemoryMinAggregateInputType;
    _max?: MemoryMaxAggregateInputType;
};
export type MemoryGroupByOutputType = {
    id: string;
    title: string | null;
    images: string[];
    text: string;
    creatorId: string;
    relativesId: string[];
    _count: MemoryCountAggregateOutputType | null;
    _min: MemoryMinAggregateOutputType | null;
    _max: MemoryMaxAggregateOutputType | null;
};
type GetMemoryGroupByPayload<T extends MemoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MemoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MemoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MemoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MemoryGroupByOutputType[P]>;
}>>;
export type MemoryWhereInput = {
    AND?: Prisma.MemoryWhereInput | Prisma.MemoryWhereInput[];
    OR?: Prisma.MemoryWhereInput[];
    NOT?: Prisma.MemoryWhereInput | Prisma.MemoryWhereInput[];
    id?: Prisma.StringFilter<"Memory"> | string;
    title?: Prisma.StringNullableFilter<"Memory"> | string | null;
    images?: Prisma.StringNullableListFilter<"Memory">;
    text?: Prisma.StringFilter<"Memory"> | string;
    creatorId?: Prisma.StringFilter<"Memory"> | string;
    relativesId?: Prisma.StringNullableListFilter<"Memory">;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    relatives?: Prisma.UserListRelationFilter;
};
export type MemoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    images?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    relativesId?: Prisma.SortOrder;
    creator?: Prisma.UserOrderByWithRelationInput;
    relatives?: Prisma.UserOrderByRelationAggregateInput;
};
export type MemoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MemoryWhereInput | Prisma.MemoryWhereInput[];
    OR?: Prisma.MemoryWhereInput[];
    NOT?: Prisma.MemoryWhereInput | Prisma.MemoryWhereInput[];
    title?: Prisma.StringNullableFilter<"Memory"> | string | null;
    images?: Prisma.StringNullableListFilter<"Memory">;
    text?: Prisma.StringFilter<"Memory"> | string;
    creatorId?: Prisma.StringFilter<"Memory"> | string;
    relativesId?: Prisma.StringNullableListFilter<"Memory">;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    relatives?: Prisma.UserListRelationFilter;
}, "id">;
export type MemoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    images?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    relativesId?: Prisma.SortOrder;
    _count?: Prisma.MemoryCountOrderByAggregateInput;
    _max?: Prisma.MemoryMaxOrderByAggregateInput;
    _min?: Prisma.MemoryMinOrderByAggregateInput;
};
export type MemoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.MemoryScalarWhereWithAggregatesInput | Prisma.MemoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.MemoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MemoryScalarWhereWithAggregatesInput | Prisma.MemoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Memory"> | string;
    title?: Prisma.StringNullableWithAggregatesFilter<"Memory"> | string | null;
    images?: Prisma.StringNullableListFilter<"Memory">;
    text?: Prisma.StringWithAggregatesFilter<"Memory"> | string;
    creatorId?: Prisma.StringWithAggregatesFilter<"Memory"> | string;
    relativesId?: Prisma.StringNullableListFilter<"Memory">;
};
export type MemoryCreateInput = {
    id?: string;
    title?: string | null;
    images?: Prisma.MemoryCreateimagesInput | string[];
    text: string;
    relativesId?: Prisma.MemoryCreaterelativesIdInput | string[];
    creator: Prisma.UserCreateNestedOneWithoutCreatedMemoriesInput;
    relatives?: Prisma.UserCreateNestedManyWithoutMemoriesInput;
};
export type MemoryUncheckedCreateInput = {
    id?: string;
    title?: string | null;
    images?: Prisma.MemoryCreateimagesInput | string[];
    text: string;
    creatorId: string;
    relativesId?: Prisma.MemoryCreaterelativesIdInput | string[];
    relatives?: Prisma.UserUncheckedCreateNestedManyWithoutMemoriesInput;
};
export type MemoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.MemoryUpdateimagesInput | string[];
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    relativesId?: Prisma.MemoryUpdaterelativesIdInput | string[];
    creator?: Prisma.UserUpdateOneRequiredWithoutCreatedMemoriesNestedInput;
    relatives?: Prisma.UserUpdateManyWithoutMemoriesNestedInput;
};
export type MemoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.MemoryUpdateimagesInput | string[];
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    creatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    relativesId?: Prisma.MemoryUpdaterelativesIdInput | string[];
    relatives?: Prisma.UserUncheckedUpdateManyWithoutMemoriesNestedInput;
};
export type MemoryCreateManyInput = {
    id?: string;
    title?: string | null;
    images?: Prisma.MemoryCreateimagesInput | string[];
    text: string;
    creatorId: string;
    relativesId?: Prisma.MemoryCreaterelativesIdInput | string[];
};
export type MemoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.MemoryUpdateimagesInput | string[];
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    relativesId?: Prisma.MemoryUpdaterelativesIdInput | string[];
};
export type MemoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.MemoryUpdateimagesInput | string[];
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    creatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    relativesId?: Prisma.MemoryUpdaterelativesIdInput | string[];
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type MemoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    images?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    relativesId?: Prisma.SortOrder;
};
export type MemoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
};
export type MemoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
};
export type MemoryListRelationFilter = {
    every?: Prisma.MemoryWhereInput;
    some?: Prisma.MemoryWhereInput;
    none?: Prisma.MemoryWhereInput;
};
export type MemoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MemoryCreateimagesInput = {
    set: string[];
};
export type MemoryCreaterelativesIdInput = {
    set: string[];
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type MemoryUpdateimagesInput = {
    set?: string[];
    push?: string | string[];
};
export type MemoryUpdaterelativesIdInput = {
    set?: string[];
    push?: string | string[];
};
export type MemoryCreateNestedManyWithoutRelativesInput = {
    create?: Prisma.XOR<Prisma.MemoryCreateWithoutRelativesInput, Prisma.MemoryUncheckedCreateWithoutRelativesInput> | Prisma.MemoryCreateWithoutRelativesInput[] | Prisma.MemoryUncheckedCreateWithoutRelativesInput[];
    connectOrCreate?: Prisma.MemoryCreateOrConnectWithoutRelativesInput | Prisma.MemoryCreateOrConnectWithoutRelativesInput[];
    connect?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
};
export type MemoryCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.MemoryCreateWithoutCreatorInput, Prisma.MemoryUncheckedCreateWithoutCreatorInput> | Prisma.MemoryCreateWithoutCreatorInput[] | Prisma.MemoryUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.MemoryCreateOrConnectWithoutCreatorInput | Prisma.MemoryCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.MemoryCreateManyCreatorInputEnvelope;
    connect?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
};
export type MemoryUncheckedCreateNestedManyWithoutRelativesInput = {
    create?: Prisma.XOR<Prisma.MemoryCreateWithoutRelativesInput, Prisma.MemoryUncheckedCreateWithoutRelativesInput> | Prisma.MemoryCreateWithoutRelativesInput[] | Prisma.MemoryUncheckedCreateWithoutRelativesInput[];
    connectOrCreate?: Prisma.MemoryCreateOrConnectWithoutRelativesInput | Prisma.MemoryCreateOrConnectWithoutRelativesInput[];
    connect?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
};
export type MemoryUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.MemoryCreateWithoutCreatorInput, Prisma.MemoryUncheckedCreateWithoutCreatorInput> | Prisma.MemoryCreateWithoutCreatorInput[] | Prisma.MemoryUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.MemoryCreateOrConnectWithoutCreatorInput | Prisma.MemoryCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.MemoryCreateManyCreatorInputEnvelope;
    connect?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
};
export type MemoryUpdateManyWithoutRelativesNestedInput = {
    create?: Prisma.XOR<Prisma.MemoryCreateWithoutRelativesInput, Prisma.MemoryUncheckedCreateWithoutRelativesInput> | Prisma.MemoryCreateWithoutRelativesInput[] | Prisma.MemoryUncheckedCreateWithoutRelativesInput[];
    connectOrCreate?: Prisma.MemoryCreateOrConnectWithoutRelativesInput | Prisma.MemoryCreateOrConnectWithoutRelativesInput[];
    upsert?: Prisma.MemoryUpsertWithWhereUniqueWithoutRelativesInput | Prisma.MemoryUpsertWithWhereUniqueWithoutRelativesInput[];
    set?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
    disconnect?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
    delete?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
    connect?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
    update?: Prisma.MemoryUpdateWithWhereUniqueWithoutRelativesInput | Prisma.MemoryUpdateWithWhereUniqueWithoutRelativesInput[];
    updateMany?: Prisma.MemoryUpdateManyWithWhereWithoutRelativesInput | Prisma.MemoryUpdateManyWithWhereWithoutRelativesInput[];
    deleteMany?: Prisma.MemoryScalarWhereInput | Prisma.MemoryScalarWhereInput[];
};
export type MemoryUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.MemoryCreateWithoutCreatorInput, Prisma.MemoryUncheckedCreateWithoutCreatorInput> | Prisma.MemoryCreateWithoutCreatorInput[] | Prisma.MemoryUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.MemoryCreateOrConnectWithoutCreatorInput | Prisma.MemoryCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.MemoryUpsertWithWhereUniqueWithoutCreatorInput | Prisma.MemoryUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.MemoryCreateManyCreatorInputEnvelope;
    set?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
    disconnect?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
    delete?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
    connect?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
    update?: Prisma.MemoryUpdateWithWhereUniqueWithoutCreatorInput | Prisma.MemoryUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.MemoryUpdateManyWithWhereWithoutCreatorInput | Prisma.MemoryUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.MemoryScalarWhereInput | Prisma.MemoryScalarWhereInput[];
};
export type MemoryUncheckedUpdateManyWithoutRelativesNestedInput = {
    create?: Prisma.XOR<Prisma.MemoryCreateWithoutRelativesInput, Prisma.MemoryUncheckedCreateWithoutRelativesInput> | Prisma.MemoryCreateWithoutRelativesInput[] | Prisma.MemoryUncheckedCreateWithoutRelativesInput[];
    connectOrCreate?: Prisma.MemoryCreateOrConnectWithoutRelativesInput | Prisma.MemoryCreateOrConnectWithoutRelativesInput[];
    upsert?: Prisma.MemoryUpsertWithWhereUniqueWithoutRelativesInput | Prisma.MemoryUpsertWithWhereUniqueWithoutRelativesInput[];
    set?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
    disconnect?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
    delete?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
    connect?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
    update?: Prisma.MemoryUpdateWithWhereUniqueWithoutRelativesInput | Prisma.MemoryUpdateWithWhereUniqueWithoutRelativesInput[];
    updateMany?: Prisma.MemoryUpdateManyWithWhereWithoutRelativesInput | Prisma.MemoryUpdateManyWithWhereWithoutRelativesInput[];
    deleteMany?: Prisma.MemoryScalarWhereInput | Prisma.MemoryScalarWhereInput[];
};
export type MemoryUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.MemoryCreateWithoutCreatorInput, Prisma.MemoryUncheckedCreateWithoutCreatorInput> | Prisma.MemoryCreateWithoutCreatorInput[] | Prisma.MemoryUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.MemoryCreateOrConnectWithoutCreatorInput | Prisma.MemoryCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.MemoryUpsertWithWhereUniqueWithoutCreatorInput | Prisma.MemoryUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.MemoryCreateManyCreatorInputEnvelope;
    set?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
    disconnect?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
    delete?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
    connect?: Prisma.MemoryWhereUniqueInput | Prisma.MemoryWhereUniqueInput[];
    update?: Prisma.MemoryUpdateWithWhereUniqueWithoutCreatorInput | Prisma.MemoryUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.MemoryUpdateManyWithWhereWithoutCreatorInput | Prisma.MemoryUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.MemoryScalarWhereInput | Prisma.MemoryScalarWhereInput[];
};
export type MemoryCreateWithoutRelativesInput = {
    id?: string;
    title?: string | null;
    images?: Prisma.MemoryCreateimagesInput | string[];
    text: string;
    relativesId?: Prisma.MemoryCreaterelativesIdInput | string[];
    creator: Prisma.UserCreateNestedOneWithoutCreatedMemoriesInput;
};
export type MemoryUncheckedCreateWithoutRelativesInput = {
    id?: string;
    title?: string | null;
    images?: Prisma.MemoryCreateimagesInput | string[];
    text: string;
    creatorId: string;
    relativesId?: Prisma.MemoryCreaterelativesIdInput | string[];
};
export type MemoryCreateOrConnectWithoutRelativesInput = {
    where: Prisma.MemoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemoryCreateWithoutRelativesInput, Prisma.MemoryUncheckedCreateWithoutRelativesInput>;
};
export type MemoryCreateWithoutCreatorInput = {
    id?: string;
    title?: string | null;
    images?: Prisma.MemoryCreateimagesInput | string[];
    text: string;
    relativesId?: Prisma.MemoryCreaterelativesIdInput | string[];
    relatives?: Prisma.UserCreateNestedManyWithoutMemoriesInput;
};
export type MemoryUncheckedCreateWithoutCreatorInput = {
    id?: string;
    title?: string | null;
    images?: Prisma.MemoryCreateimagesInput | string[];
    text: string;
    relativesId?: Prisma.MemoryCreaterelativesIdInput | string[];
    relatives?: Prisma.UserUncheckedCreateNestedManyWithoutMemoriesInput;
};
export type MemoryCreateOrConnectWithoutCreatorInput = {
    where: Prisma.MemoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemoryCreateWithoutCreatorInput, Prisma.MemoryUncheckedCreateWithoutCreatorInput>;
};
export type MemoryCreateManyCreatorInputEnvelope = {
    data: Prisma.MemoryCreateManyCreatorInput | Prisma.MemoryCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type MemoryUpsertWithWhereUniqueWithoutRelativesInput = {
    where: Prisma.MemoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.MemoryUpdateWithoutRelativesInput, Prisma.MemoryUncheckedUpdateWithoutRelativesInput>;
    create: Prisma.XOR<Prisma.MemoryCreateWithoutRelativesInput, Prisma.MemoryUncheckedCreateWithoutRelativesInput>;
};
export type MemoryUpdateWithWhereUniqueWithoutRelativesInput = {
    where: Prisma.MemoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.MemoryUpdateWithoutRelativesInput, Prisma.MemoryUncheckedUpdateWithoutRelativesInput>;
};
export type MemoryUpdateManyWithWhereWithoutRelativesInput = {
    where: Prisma.MemoryScalarWhereInput;
    data: Prisma.XOR<Prisma.MemoryUpdateManyMutationInput, Prisma.MemoryUncheckedUpdateManyWithoutRelativesInput>;
};
export type MemoryScalarWhereInput = {
    AND?: Prisma.MemoryScalarWhereInput | Prisma.MemoryScalarWhereInput[];
    OR?: Prisma.MemoryScalarWhereInput[];
    NOT?: Prisma.MemoryScalarWhereInput | Prisma.MemoryScalarWhereInput[];
    id?: Prisma.StringFilter<"Memory"> | string;
    title?: Prisma.StringNullableFilter<"Memory"> | string | null;
    images?: Prisma.StringNullableListFilter<"Memory">;
    text?: Prisma.StringFilter<"Memory"> | string;
    creatorId?: Prisma.StringFilter<"Memory"> | string;
    relativesId?: Prisma.StringNullableListFilter<"Memory">;
};
export type MemoryUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.MemoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.MemoryUpdateWithoutCreatorInput, Prisma.MemoryUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.MemoryCreateWithoutCreatorInput, Prisma.MemoryUncheckedCreateWithoutCreatorInput>;
};
export type MemoryUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.MemoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.MemoryUpdateWithoutCreatorInput, Prisma.MemoryUncheckedUpdateWithoutCreatorInput>;
};
export type MemoryUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.MemoryScalarWhereInput;
    data: Prisma.XOR<Prisma.MemoryUpdateManyMutationInput, Prisma.MemoryUncheckedUpdateManyWithoutCreatorInput>;
};
export type MemoryCreateManyCreatorInput = {
    id?: string;
    title?: string | null;
    images?: Prisma.MemoryCreateimagesInput | string[];
    text: string;
    relativesId?: Prisma.MemoryCreaterelativesIdInput | string[];
};
export type MemoryUpdateWithoutRelativesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.MemoryUpdateimagesInput | string[];
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    relativesId?: Prisma.MemoryUpdaterelativesIdInput | string[];
    creator?: Prisma.UserUpdateOneRequiredWithoutCreatedMemoriesNestedInput;
};
export type MemoryUncheckedUpdateWithoutRelativesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.MemoryUpdateimagesInput | string[];
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    creatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    relativesId?: Prisma.MemoryUpdaterelativesIdInput | string[];
};
export type MemoryUncheckedUpdateManyWithoutRelativesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.MemoryUpdateimagesInput | string[];
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    creatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    relativesId?: Prisma.MemoryUpdaterelativesIdInput | string[];
};
export type MemoryUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.MemoryUpdateimagesInput | string[];
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    relativesId?: Prisma.MemoryUpdaterelativesIdInput | string[];
    relatives?: Prisma.UserUpdateManyWithoutMemoriesNestedInput;
};
export type MemoryUncheckedUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.MemoryUpdateimagesInput | string[];
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    relativesId?: Prisma.MemoryUpdaterelativesIdInput | string[];
    relatives?: Prisma.UserUncheckedUpdateManyWithoutMemoriesNestedInput;
};
export type MemoryUncheckedUpdateManyWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.MemoryUpdateimagesInput | string[];
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    relativesId?: Prisma.MemoryUpdaterelativesIdInput | string[];
};
export type MemoryCountOutputType = {
    relatives: number;
};
export type MemoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    relatives?: boolean | MemoryCountOutputTypeCountRelativesArgs;
};
export type MemoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryCountOutputTypeSelect<ExtArgs> | null;
};
export type MemoryCountOutputTypeCountRelativesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type MemorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    images?: boolean;
    text?: boolean;
    creatorId?: boolean;
    relativesId?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    relatives?: boolean | Prisma.Memory$relativesArgs<ExtArgs>;
    _count?: boolean | Prisma.MemoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["memory"]>;
export type MemorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    images?: boolean;
    text?: boolean;
    creatorId?: boolean;
    relativesId?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["memory"]>;
export type MemorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    images?: boolean;
    text?: boolean;
    creatorId?: boolean;
    relativesId?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["memory"]>;
export type MemorySelectScalar = {
    id?: boolean;
    title?: boolean;
    images?: boolean;
    text?: boolean;
    creatorId?: boolean;
    relativesId?: boolean;
};
export type MemoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "images" | "text" | "creatorId" | "relativesId", ExtArgs["result"]["memory"]>;
export type MemoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    relatives?: boolean | Prisma.Memory$relativesArgs<ExtArgs>;
    _count?: boolean | Prisma.MemoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MemoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MemoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MemoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Memory";
    objects: {
        creator: Prisma.$UserPayload<ExtArgs>;
        relatives: Prisma.$UserPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string | null;
        images: string[];
        text: string;
        creatorId: string;
        relativesId: string[];
    }, ExtArgs["result"]["memory"]>;
    composites: {};
};
export type MemoryGetPayload<S extends boolean | null | undefined | MemoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MemoryPayload, S>;
export type MemoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MemoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MemoryCountAggregateInputType | true;
};
export interface MemoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Memory'];
        meta: {
            name: 'Memory';
        };
    };
    findUnique<T extends MemoryFindUniqueArgs>(args: Prisma.SelectSubset<T, MemoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MemoryClient<runtime.Types.Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MemoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MemoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MemoryClient<runtime.Types.Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MemoryFindFirstArgs>(args?: Prisma.SelectSubset<T, MemoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__MemoryClient<runtime.Types.Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MemoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MemoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MemoryClient<runtime.Types.Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MemoryFindManyArgs>(args?: Prisma.SelectSubset<T, MemoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MemoryCreateArgs>(args: Prisma.SelectSubset<T, MemoryCreateArgs<ExtArgs>>): Prisma.Prisma__MemoryClient<runtime.Types.Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MemoryCreateManyArgs>(args?: Prisma.SelectSubset<T, MemoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MemoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MemoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MemoryDeleteArgs>(args: Prisma.SelectSubset<T, MemoryDeleteArgs<ExtArgs>>): Prisma.Prisma__MemoryClient<runtime.Types.Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MemoryUpdateArgs>(args: Prisma.SelectSubset<T, MemoryUpdateArgs<ExtArgs>>): Prisma.Prisma__MemoryClient<runtime.Types.Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MemoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, MemoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MemoryUpdateManyArgs>(args: Prisma.SelectSubset<T, MemoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MemoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MemoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MemoryUpsertArgs>(args: Prisma.SelectSubset<T, MemoryUpsertArgs<ExtArgs>>): Prisma.Prisma__MemoryClient<runtime.Types.Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MemoryCountArgs>(args?: Prisma.Subset<T, MemoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MemoryCountAggregateOutputType> : number>;
    aggregate<T extends MemoryAggregateArgs>(args: Prisma.Subset<T, MemoryAggregateArgs>): Prisma.PrismaPromise<GetMemoryAggregateType<T>>;
    groupBy<T extends MemoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MemoryGroupByArgs['orderBy'];
    } : {
        orderBy?: MemoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MemoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MemoryFieldRefs;
}
export interface Prisma__MemoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    creator<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    relatives<T extends Prisma.Memory$relativesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Memory$relativesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MemoryFieldRefs {
    readonly id: Prisma.FieldRef<"Memory", 'String'>;
    readonly title: Prisma.FieldRef<"Memory", 'String'>;
    readonly images: Prisma.FieldRef<"Memory", 'String[]'>;
    readonly text: Prisma.FieldRef<"Memory", 'String'>;
    readonly creatorId: Prisma.FieldRef<"Memory", 'String'>;
    readonly relativesId: Prisma.FieldRef<"Memory", 'String[]'>;
}
export type MemoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemorySelect<ExtArgs> | null;
    omit?: Prisma.MemoryOmit<ExtArgs> | null;
    include?: Prisma.MemoryInclude<ExtArgs> | null;
    where: Prisma.MemoryWhereUniqueInput;
};
export type MemoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemorySelect<ExtArgs> | null;
    omit?: Prisma.MemoryOmit<ExtArgs> | null;
    include?: Prisma.MemoryInclude<ExtArgs> | null;
    where: Prisma.MemoryWhereUniqueInput;
};
export type MemoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MemoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MemoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MemoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemorySelect<ExtArgs> | null;
    omit?: Prisma.MemoryOmit<ExtArgs> | null;
    include?: Prisma.MemoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemoryCreateInput, Prisma.MemoryUncheckedCreateInput>;
};
export type MemoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MemoryCreateManyInput | Prisma.MemoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MemoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MemoryOmit<ExtArgs> | null;
    data: Prisma.MemoryCreateManyInput | Prisma.MemoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MemoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MemoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemorySelect<ExtArgs> | null;
    omit?: Prisma.MemoryOmit<ExtArgs> | null;
    include?: Prisma.MemoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemoryUpdateInput, Prisma.MemoryUncheckedUpdateInput>;
    where: Prisma.MemoryWhereUniqueInput;
};
export type MemoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MemoryUpdateManyMutationInput, Prisma.MemoryUncheckedUpdateManyInput>;
    where?: Prisma.MemoryWhereInput;
    limit?: number;
};
export type MemoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MemoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemoryUpdateManyMutationInput, Prisma.MemoryUncheckedUpdateManyInput>;
    where?: Prisma.MemoryWhereInput;
    limit?: number;
    include?: Prisma.MemoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MemoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemorySelect<ExtArgs> | null;
    omit?: Prisma.MemoryOmit<ExtArgs> | null;
    include?: Prisma.MemoryInclude<ExtArgs> | null;
    where: Prisma.MemoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemoryCreateInput, Prisma.MemoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MemoryUpdateInput, Prisma.MemoryUncheckedUpdateInput>;
};
export type MemoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemorySelect<ExtArgs> | null;
    omit?: Prisma.MemoryOmit<ExtArgs> | null;
    include?: Prisma.MemoryInclude<ExtArgs> | null;
    where: Prisma.MemoryWhereUniqueInput;
};
export type MemoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemoryWhereInput;
    limit?: number;
};
export type Memory$relativesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MemoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemorySelect<ExtArgs> | null;
    omit?: Prisma.MemoryOmit<ExtArgs> | null;
    include?: Prisma.MemoryInclude<ExtArgs> | null;
};
export {};
