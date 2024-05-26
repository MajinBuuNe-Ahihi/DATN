import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSearch, Button, Input } from "../common";
import Paging from "../common/Paging";
import CheckBox from "../common/check-box/CheckBox";
import InventoryItem from "./InventoryItem";
import './menu-order.scss';

type InventoryItemEntity =  {
    name?: string;
    img?: string;
    description?: string;
    price?: string;
    promotionPercent?: number;
    id?: string;
};

const ListInventoryItems:Array<InventoryItemEntity> = [
  {
    name: "món 1",
    img:  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "món 1 ddiwuowcj nấu từ abc xzzy",
    price: "12000-33000",
    promotionPercent: 10,
    id: "12321123112"
  },
  {
    name: "món 2",
    img:  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "món 2 được nấu từ abc xzzy",
    price: "12000-34000",
    promotionPercent: 10,
    id: "1232112312"
  },
  
  {
    name: "món 1",
    img:  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "món 1 ddiwuowcj nấu từ abc xzzy",
    price: "12000-33000",
    promotionPercent: 10,
    id: "123211112"
  },
  
  {
    name: "món 1",
    img:  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "món 1 ddiwuowcj nấu từ abc xzzy",
    price: "12000-33000",
    promotionPercent: 14,
    id: "123123112"
  },
  
  
]

type Props = {};

const imgBanner = [
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6444367/pexels-photo-6444367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

export default function MenuOrder({}: Props) {
  const [paging,setPaging] = useState<number>(1)
  return (
    <Container className="menu-order">
      <Row className="menu-order__header">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}

          modules={[Autoplay]}
          className={`menu-order__slide`}
        >
          {imgBanner.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="menu-order__slide-item" style={{backgroundImage:  `url(${item})`}}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </Row>
      <Row className="menu-order__container">
        <Col className="menu-order__filter" sm={3}>
          <div className="menu-order__filter-contain">
            <div className="menu-order__title">Tìm kiếm</div>
            <Input
              className="menu-order__search"
              name="search-menu"
              placeholder="Tìm kiếm món"
              type="text"
            ></Input>
            <div className="menu-order__item-control">
              <CheckBox size={20} name="language" id="time-open2"></CheckBox>
              <div className="menu-order__item-control-label">Tất cả</div>
            </div>
            <div className="menu-order__item-control">
              <CheckBox size={20} name="language" id="time-open2"></CheckBox>
              <div className="menu-order__item-control-label">Menu 1</div>
            </div>
            <div className="menu-order__item-control">
              <CheckBox size={20} name="language" id="time-open2"></CheckBox>
              <div className="menu-order__item-control-label">Menu 2</div>
            </div>
            <div className="menu-order__item-control">
              <CheckBox size={20} name="language" id="time-open2"></CheckBox>
              <div className="menu-order__item-control-label">Cafe</div>
            </div>
            <div className="menu-order__item-control">
              <CheckBox size={20} name="language" id="time-open2"></CheckBox>
              <div className="menu-order__item-control-label">Sinh tố</div>
            </div>
            <Button
              className="menu-order__item-control-button"
              bg={1}
              type={2}
              padding={"10px 12px"}
            >
              <div className="menu-order__button-contain">
                <BiSearch size={20} ></BiSearch>
                <span>Tìm kiếm</span>
              </div>
            </Button>
          </div>
        </Col>
        <Col className="menu-order__main">
            <div className="menu-order__grid">
              {
                ListInventoryItems.map((item:InventoryItemEntity) =>(
                  <div className="menu-order__grid-item" key={item.id} >
                    <InventoryItem  id={item.id} description={item.description} img={item.img} price={item.price} promotionPercent={item.promotionPercent} />
                </div>
                ))
              }
            </div>
            <Paging index={paging} setPaging={setPaging} total={40}></Paging>
        </Col>
      </Row>
    </Container>
  );
}
