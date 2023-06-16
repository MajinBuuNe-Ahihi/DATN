import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as ICON from './Icon'
import '@styles/footer.scss'
import partnericon from '@assets/partnericons.webp'
import logo from '@assets/logo.svg'
import carton from '@assets/cartonfooter.png'
import { Social } from './Social'


type Props = {}

export function Footer({ }: Props) {

  return (
    <div className='footer'>

      <Container>
        <Row className='footer__top'>
          <Container fluid className='footer__top-container'>
            <div className='footer-carton'>
              <Image src={carton} alt='' className='footer-carton__image' />
            </div>
            <Row className="justify-content-between footer__top-list">
            <Col lg={4} md={6}  className='footer__top-col'>
              <div className='footer__top-logo'>
                <Image src={logo} alt='toificafe' className='footer__top-logo__image' />
              </div>
              <div className='footer__top-partner'>
                <Link href= {'/contact'} className='footer__top-footer-partner-button'>
                  <Image src={partnericon} alt='tro thanh doi tac' />
                  <span>Hop tac voi chung toi</span>
                </Link>
              </div>
            </Col>
            <Col lg={4}  md={6} className='footer__top-col'>
              <h3 className='footer__top-about'>
                Ve chung toi
              </h3>
              <ul className='footer__top-info'>
                <li className='footer__top-info-element'>
                  <Link href={'/about'}>Gioi thieu</Link>
                </li>
                <li className='footer__top-info-element'>
                  <Link href={'/'}>Giai dap thac mac</Link>
                </li>
                <li className='footer__top-info-element'>
                  <Link href={'/contact'}>Lien he - gop y</Link>
                </li>
                <li className='footer__top-info-element'>
                  <Link href={'/'}>Dieu khoan su dung</Link>
                </li>
              </ul>
            </Col>
            <Col lg={4}  md={6} className='footer__top-col'>
              <h3 className='footer__top-follow-us'>
                Theo doi chung toi tren 
              </h3>
              <ul className='footer__top-follow-social'>
                <Social/>
              </ul>
            </Col>
            </Row>
          </Container>
        </Row>
        <Row className='footer__copyright'>
            <span>Ban quyen <ICON.RiCopyrightLine size={25}/> 2022 <strong>ManhNeAhihi</strong></span>
        </Row>
      </Container>
    </div>
  )
}