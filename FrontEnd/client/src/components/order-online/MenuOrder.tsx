import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, CardItem, Input } from "../common";
import {BiSearch} from "../common";
import CheckBox from "../common/check-box/CheckBox";
import InventoryItem from "./InventoryItem";
import './menu-order.scss'

type Props = {};

const imgBanner = [
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6444367/pexels-photo-6444367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

export default function MenuOrder({}: Props) {
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
                <div>Tìm kiếm</div>
              </div>
            </Button>
          </div>
        </Col>
        <Col className="menu-order__main">
            <div className="menu-order__grid">
                <div className="menu-order__grid-item">
                    <InventoryItem />
                </div>
                <div className="menu-order__grid-item">
                    <InventoryItem />
                </div>
                <div className="menu-order__grid-item">
                    <InventoryItem />
                </div>
                <div className="menu-order__grid-item">
                    <InventoryItem />
                </div>
                <div className="menu-order__grid-item">
                    <InventoryItem />
                </div>
                <div className="menu-order__grid-item">
                    <InventoryItem />
                </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
}
