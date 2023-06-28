import React from 'react'
import './near-you.scss'
import { Col, Container, Row } from 'react-bootstrap'
import ViewMap from '../map/Index'
import FilterContain from './filter/Index'

type Props = {}

export default function NearYou({}: Props) {
  return (
    <div className="near-you-containter">
        <Container>
        <Row>
            <Col sm={3} className='near-you-containter__col-left'>
                <Row>
                    <ViewMap height={200}></ViewMap>
                </Row>
                <Row>
                    <FilterContain></FilterContain>
                </Row>
            </Col>
            <Col style={{marginLeft: "30px"}}>
                <Row>
                    place - select filter
                </Row>
                <Row>
                    access filter
                </Row>
                <Row>
                    Place
                </Row>
            </Col>
        </Row>
        </Container>

    </div>
  )
}