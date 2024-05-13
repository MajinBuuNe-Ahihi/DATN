import type { BaseType } from './base-type'

export type InventoryStructType = {
  id: string
  quantity: number
} & BaseType

export type UnitType = {
    id: string
    unitName: string
  } & BaseType
  

export type InventoryItemBaseType = {
  id: string
  iNo: string
  name: string
  img: string
  unit: string
  description?: string
  priceS?: number
  priceM?: number
  priceL?: number
  priceXL?: number
  type?: number
  active?: number
}& BaseType


export type InventoryItemDTOType = InventoryItemBaseType & {unitName: string}