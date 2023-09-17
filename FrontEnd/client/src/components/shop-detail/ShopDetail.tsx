import React,{useEffect,useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ViewMenuDetail from './ViewMenuDetail'
import ImageDetail from './ImageDetail'
import './shop-detail.scss'
import BookMark from '../common/BookMark'
import {HiLocationMarker} from '../common/Icon'
import {useAppDispatch} from '../../hooks/redux.hooks'
import {OpenMapModalState} from '../../sliceredux/modal-map.slice'
import Evaluate from './Evaluate'
import DetaiInfomation from './DetaiInfomation'

type Props = {}

export default function ShopDetail({}: Props) {
    const dispatch = useAppDispatch();

  return (
    <>
    <Container className='detail-info'>
        <Row className='detail-info__image-and-adress'>
            <div className="detail-info__image-and-adress-contain">
                <div className="detail-info__name">
                    EEBakery Coffee
                </div>
                <div className="detail-info__slogan">
                Có trà, có bánh, có những con cún dễ thương ❤️
                </div>
                <div className="detail-info__address-more-option">
                <HiLocationMarker size={20}></HiLocationMarker>8 Ngõ 24 Đào Tấn, Ba Đình - <a onClick={()=>dispatch(OpenMapModalState())}>Hiển thị bản đồ</a> - <a href='https://www.google.com/maps/dir/?api=1&destination=21.0336724,105.8109417' target='_blank'> Xem đường đi</a> - <ViewMenuDetail></ViewMenuDetail>
                </div>
                <div className="detail-info__book-mark">
                    <BookMark></BookMark>
                </div>
                <ImageDetail></ImageDetail>
            </div>
        </Row>
        <Row style={{gap: '10px',alignItems:'stretch'}}>
            <Col>
                <Evaluate/>
            </Col>
            <Col> <DetaiInfomation/> </Col>
            <Col>map</Col>
        </Row>
        <Row>
            slide
        </Row>
        <Row>
            <Col>
            comment
            </Col>
            <Col sm={4}>
            <Row >
                <Evaluate/>
            </Row>
            <Row>
                advertisement
            </Row>
            </Col>
        </Row>
        <Row>
            map
        </Row>
        <Row>
            list quan
        </Row>
    </Container>
    </>
  )
}

