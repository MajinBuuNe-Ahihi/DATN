import React from 'react'
import { Link } from 'react-router-dom'
import * as ICON from './Icon'
import '../../styles/footer.scss'
import partnericon from '../../assets/partnericons.webp'
import logo from '../../assets/logo.svg'
import carton from '../../assets/cartonfooter.png'
import { Social } from './Social'
import { Col, Container, Row } from 'react-bootstrap'


type Props = {}

export function Footer({ }: Props) {

  return (
    <div className='footer'>

      <Container>
        <Row className='footer__top'>
          <Container fluid className='footer__top-container'>
            <div className='footer-carton'>
              <img src={carton} alt='' className='footer-carton__image' />
            </div>
            <Row className="justify-content-between footer__top-list">
            <Col lg={4} md={6}  className='footer__top-col'>
              <div className='footer__top-logo' style={{fontFamily:"Brush Script MT",fontWeight: "bold",color: "#ee0033",fontSize: "35px"}}>
               CafeChill
              </div>
              <div className='footer__top-partner'>
                <Link to = {'/contact'} className='footer__top-footer-partner-button'>
                  <img src={partnericon} alt='tro thanh doi tac' />
                  <span>Hợp tác với chúng tôi</span>
                </Link>
              </div>
            </Col>
            <Col lg={4}  md={6} className='footer__top-col'>
              <h3 className='footer__top-about'>
                Về chúng tôi
              </h3>
              <ul className='footer__top-info'>
                <li className='footer__top-info-element'>
                  <Link to={'/about'}>Giới thiệu</Link>
                </li>
                <li className='footer__top-info-element'>
                  <Link to={'/'}>Giải đáp thắc mắc</Link>
                </li>
                <li className='footer__top-info-element'>
                  <Link to={'/contact'}>Liên hệ góp ý</Link>
                </li>
                <li className='footer__top-info-element'>
                  <Link to={'/'}>Điều khoản sử dụng</Link>
                </li>
              </ul>
            </Col>
            <Col lg={4}  md={6} className='footer__top-col'>
              <h3 className='footer__top-follow-us'>
                Theo dõi chúng tôi trên
              </h3>
              <ul className='footer__top-follow-social'>
                <Social/>
              </ul>
            </Col>
            </Row>
          </Container>
        </Row>
        <Row className='footer__copyright'>
            <span>Ban quyen <ICON.RiCopyrightLine size={25}/> 2024 <strong>ManhNeAhihi</strong></span>
        </Row>
      </Container>
    </div>
  )
}