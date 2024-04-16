import React,{useState} from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import Feed from '../explore/Feed'
import {AiOutlineCamera, AiOutlineHeart, BsPencilSquare, PiShareNetworkBold, FaCalendar, FaCommentDots} from '../common/Icon'
import './main-profile.scss'
import Paging from '../common/Paging'

type Props = {}

export default function MainProfile({}: Props) {
    const [currentPaging,setCurrentPaging] = useState<number>(1)
  return (
    <Container className='main-profile'>
    <Row className="main-profile__header" style={{ gap: "24px", flexFlow: 'nowrap' }}>
        <div className="main-profile__background">
        </div>
        <div className="main-profile__avatar">
            <div className="main-profile__image">
                <img src="http://localhost:5173/src/assets/404.svg" alt="" />
                <div className="main-profile__upload">
                    <AiOutlineCamera size={30} />
                </div>
            </div>
        </div>
        <div className="main-profile__name">
            Hoàng Văn Mạnh
        </div>
    </Row>
    <Row className="main-profile__tool" style={{ gap: "24px", flexFlow: 'nowrap' }}>
       <div className="main-profile__tool-left">
        <div className="main-profile__tool-direct">
            Đánh giá
        </div>
       </div>
       <div className="main-profile__tool-right">
        <div className="main-profile__tool-button">
            <BsPencilSquare size={20}/> Chỉnh sửa
        </div>
       </div>
    </Row>
    <Row className="main-profile__main" style={{ gap: "24px", flexFlow: 'nowrap', justifyContent: 'space-between' }}>
        <Col className="main-profile__infor" sm={"auto"}>
           <div className="main-profile__info-main">
            <div className="main-profile__info-title">
                Bảng chiến tích
            </div>
            <div className="main-profile__info-item">
                <div className="main-profile__info-item-title">
                <BsPencilSquare size={20}/>  Đánh giá
                </div>
                <div className="main-profile__info-item-count">
                    0
                </div>
            </div>
            <div className="main-profile__info-item">
                <div className="main-profile__info-item-title">
                <FaCommentDots size={20}/>  Thảo luận
                </div>
                <div className="main-profile__info-item-count">
                    0
                </div>
            </div>
            <div className="main-profile__info-item">
                <div className="main-profile__info-item-title">
                <AiOutlineHeart size={20}/>  Được thích
                </div>
                <div className="main-profile__info-item-count">
                    0
                </div>
            </div>
            <div className="main-profile__info-item">
                <div className="main-profile__info-item-title">
                <PiShareNetworkBold size={20}/>  Người theo dõi
                </div>
                <div className="main-profile__info-item-count">
                    0
                </div>
            </div>

            <div className="main-profile__info-item">
                <div className="main-profile__info-item-title">
                <FaCalendar size={20}/>  Ngày tham gia
                </div>
                <div className="main-profile__info-item-count">
                    14/4/2024
                </div>
            </div>
           </div>
        </Col>
        <Col className="main-profile__wrote" sm={9}>
            <Feed/>
            <Row className="main-profile__paging" style={{ gap: "24px", flexFlow: 'nowrap', marginTop: '24px', justifyContent: 'center' }}>
                <Paging index={currentPaging} setPaging={setCurrentPaging} total={40}></Paging>    
        </Row>
        </Col>
    </Row>
</Container>
  )
}