import type { BaseType } from "./base-type";

export type PromotionType = {
    promotionID: string,
    promotionName: string,
    promotionCode: string,
    image: string,
    promotionType: number,
    value: number,
    exprie: Date
} & BaseType