import React from "react";
import './inventory-item.scss'
type Props = {
  name?: string;
  img?: string;
  description?: string;
  price?: string;
  promotionPercent?: number;
  id?: string;
  BuyClick?: () => void;
  AddClick?: () => void;
};

export default function InventoryItem(props: Props) {
  return (
    <div className="inventory-item">
      <div className="inventory-item__imagew">
        <img src={props.img} alt="" />
       {
         (props.promotionPercent !== undefined && props.promotionPercent > 0) && <div className="inventory-item__promotion">
         {`Khuyến mãi ${props.promotionPercent} %`}
         </div>
       }
      </div>
      <div className="inventory-item__description">
            <div className="inventory-item__name">
                {props.name}
            </div>
            <div className="inventory-item__price">
                {props.price}
            </div>

            <div className="inventory-item__description">
                {props.description}
            </div>
      </div>
      <div className="inventory-item__handle">
        <div className="inventory-item__handle-button" onClick={() => {}}>
          Đặt hàng
        </div>
        <div className="inventory-item__handle-button" onClick={() => {}}>
          Thêm vào giỏ hàng
        </div>
      </div>
    </div>
  );
}
