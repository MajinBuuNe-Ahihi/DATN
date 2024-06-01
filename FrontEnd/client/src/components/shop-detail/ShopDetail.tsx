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
import DetailLocation from './DetailLocation'
import SlideConvenience from './SlideConvenience'
import CommentContainer from './comment/CommentContainer'
import RelationShop from './RelationShop'
import { Link, useParams } from 'react-router-dom'
import { gql, useQuery } from "@apollo/client";
type Props = {}

const GET_DETAIL = gql `
query GetStore($getStoreId: String) {
    getStore(id: $getStoreId) {
      store {
        storeID
        storeName
        areaID
        storeAddress
        longtitude
        latitude
        directInfo
        openTime
        closeTime
        toPrice
        description
        fromPrice
        wifiName
        wifiPassword
        types
        convenients
        phoneNumber
        email
        facebookLink
        instagramLink
        website
        createBy
        createDate
        modifiedBy
        modifiedDate
      }
      convenients {
        convenientID
        convenientName
      }
      shopType {
        shopTypeID
        shopTypeName
      }
    }
  }
  
`

export default function ShopDetail({}: Props) {
    const dispatch = useAppDispatch();
    let { name } = useParams();
    const { loading, error, data ,refetch } = useQuery(GET_DETAIL,{variables:{
        getStoreId: name
    }});
   
    useEffect(()=> {
        console.log(data);
    },[data])
    if (loading) return <> {( loading) && (
        <div className="loader-overlay">
          {" "}
          <div className="loader"></div>{" "}
        </div>
      )}</>;
  return (
    <>
    <Container className='detail-info'>
        <Row className='detail-info__image-and-adress'>
            <div className="detail-info__image-and-adress-contain">
                <div className="detail-info__name">
                    {data.getStore.store.storeName}
                </div>
                <div className="detail-info__slogan">
                {data.getStore.store.description}
                </div>
                <div className="detail-info__address-more-option">
                <HiLocationMarker size={20}></HiLocationMarker>{ data.getStore.store.directInfo +" " + data.getStore.store.storeAddress}- <a onClick={()=>dispatch(OpenMapModalState())}>Hiển thị bản đồ</a> - <a href={`https://www.google.com/maps/dir/?api=1&destination=${data.getStore.store.latitude},${data.getStore.store.longtitude}`} target='_blank'> Xem đường đi</a> - <ViewMenuDetail></ViewMenuDetail> - <Link  to="menu" >order</Link>
                </div>
                <div className="detail-info__book-mark">
                    <BookMark></BookMark>
                </div>
                <ImageDetail></ImageDetail>
            </div>
        </Row>
        <Row style={{gap: '10px',alignItems:'stretch'}}>
            <Col>
                <Evaluate data={data.getStore.store}/>
            </Col>
            <Col> <DetaiInfomation data={data.getStore.store} typeShop={data.getStore.shopType}/> </Col>
            <Col><DetailLocation data={data.getStore.store}/></Col>
        </Row>
        <Row>
            <SlideConvenience conveniences={data.getStore.convenients}/>
        </Row>
        <Row style={{gap: '10px'}} >
            <Col>
                <CommentContainer/>
            </Col>
            <Col sm={4}>
            <Row style={{justifyContent: 'center'}}>
                <Evaluate data={data.getStore.store}/>
            </Row>
            </Col>
        </Row>
        <Row>
            <RelationShop/>
        </Row>
    </Container>
    </>
  )
}

