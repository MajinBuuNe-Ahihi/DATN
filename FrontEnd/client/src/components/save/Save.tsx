import React, { useState } from 'react'
import { Container,Col, Row } from 'react-bootstrap'
import './save.scss'
import PlaceCard from '../common/PlaceCard'
import ButtonRadio from '../common/button-radio/ButtonRadio'
import Paging from '../common/Paging'

type Props = {}

export default function Save({}: Props) {
    const [currentPaging,setCurrentPaging] = useState<number>(1)
  return (
    <Container className='save'>
    <Row className="save__main" style={{ gap: "24px", flexFlow: 'nowrap' }}>
        <Col className="save__filter" sm={3}>
            <div className="save__contain-filter">
                <div className="save__contain-filter-header">
                    <div className="save__contain-filter-title">
                        Bộ lọc địa điểm
                    </div>
                    <div className="save__contain-filter-text">
                        Hiển thị kết quả theo ưu tiên của bạn
                    </div>
                </div>
                <div className="save__contain-filter-content">
                    <div className="save__contain-label">
                        Giờ mở cửa
                    </div>
                    <div className="save__contain-list-control">
                        <div className="save__item-control">
                            <ButtonRadio size={20} name="language" id="time-open"></ButtonRadio>
                            <div className="save__item-control-label">
                                Tất cả
                            </div>
                        </div>
                        <div className="save__item-control">
                            <ButtonRadio size={20} name="language" id="time-open2"></ButtonRadio>
                            <div className="save__item-control-label">
                                Đang mở cửa
                            </div>
                        </div>
                    </div>
                    <div className="save__contain-label">
                        Khu vực
                    </div>
                    <div className="save__contain-list-control">
                        <div className="save__item-control">
                            <ButtonRadio size={20} name="language" id="time-open"></ButtonRadio>
                            <div className="save__item-control-label">
                                Tất cả
                            </div>
                        </div>
                        <div className="save__item-control">
                            <ButtonRadio size={20} name="language" id="time-open2"></ButtonRadio>
                            <div className="save__item-control-label">
                                Quận Ba Đình
                            </div>
                        </div>
                        <div className="save__item-control">
                            <ButtonRadio size={20} name="language" id="time-open2"></ButtonRadio>
                            <div className="save__item-control-label">
                                Quận Đống Đa
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
        <Col className="save__list" sm={9}>
            <PlaceCard></PlaceCard>
            <PlaceCard></PlaceCard>
            <PlaceCard></PlaceCard>
            <PlaceCard></PlaceCard>
            <PlaceCard></PlaceCard>
        <Row className="save__paging" style={{ gap: "24px", flexFlow: 'nowrap', marginTop: '24px', justifyContent: 'center' }}>
            <Paging index={currentPaging} setPaging={setCurrentPaging} total={40}></Paging>       
        </Row>
        </Col>
    </Row>
</Container>
  )
}