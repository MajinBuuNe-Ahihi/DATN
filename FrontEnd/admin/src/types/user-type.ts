import type { BaseType } from "./base-type";

export type UserBaseType = {
    id: string,
    eNo: string,
    name: string,
    fullName: string,
    address: string,
    email: string,
    phone: string,
    role: number,
    status: string,
    userName: string,
}& BaseType;

export type UserRegisterType  = {
    password: string
} & UserBaseType;

export type UserDTOType  = {
    avatar: string,
} & UserBaseType;
