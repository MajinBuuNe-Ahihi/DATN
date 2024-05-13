import type { BaseType } from "./base-type";
import type { InventoryItemBaseType } from "./inventory-item-type";
import type { UserBaseType } from "./user-type";

export type WareHouseDetailType = {
    no: number,
    id: string,
    quantity: number,
    inventoryItem: string,
    name?: string,
    inventory?: InventoryItemBaseType,
}& BaseType;

export type WareHouseType  = {
    no: number,
    id: string,
    refNo: string,
    quantity: number,
    idUserCreated: string, // id
    details: Array<WareHouseDetailType>
    type?: number

} & BaseType;

export type WareHouseDTOType  = {
   user: UserBaseType, // user

} &WareHouseType;
