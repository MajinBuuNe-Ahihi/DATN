import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { GiFallingStar,FaUserCheck } from '../common/Icon'
import Feed from './Feed'
import './explore.scss'
import MostDestination from './MostDestination'
import PositiveUser from './PositiveUser'

type Props = {}

type EnumFilter = {
    [key: string]: number
}


const EnumF = Object.freeze<EnumFilter>({
    Popular: 0,
    Follower: 1,
})

export default function Explore({}: Props) {
    const [optionFilter,setOptionfilter] = useState<number>(EnumF.Popular)
  return (
    <Container className='explore'>
        <Row className="explore__main" style={{ gap: "24px", flexFlow: 'nowrap' }}>
            <Col className="explore__feed" sm={12}>
                <Feed/>
            </Col>
            {/* <Col className="explore__explore" sm={'auto'}>
                <Row className="explore__options">
                    <div onClick={()=>setOptionfilter(EnumF.Popular)}  className={`explore__options-newfeed ${optionFilter === EnumF.Popular?'choose_option':''}`}>
                        <GiFallingStar size={20}></GiFallingStar> Bài nổi bật
                    </div>
                    <div onClick={()=>setOptionfilter(EnumF.Follower)} className= {`explore__options-followed ${optionFilter !== EnumF.Popular?'choose_option':''}`}>
                         <FaUserCheck size={20}></FaUserCheck> Đang theo dõi
                    </div>
                </Row>
                <Row className="explore__popular-destination">
                    <MostDestination />
               </Row>
                <Row className="explore__user-positive">
                    <PositiveUser/>
                </Row>
            </Col> */}
        </Row>
    </Container>
  )
}