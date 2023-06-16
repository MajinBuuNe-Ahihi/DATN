import React from 'react'
import { CardItem } from '@components/common';
import { useCheckpoint } from '@hooks/checkponit.hooks';
import '@styles/home.scss'
import { Col, Container, Row } from 'react-bootstrap';

type Props = {}
const card2 = [{
  children: <>
    <h1>M.O.A 98 ang Buom</h1>
    <span>98 Hang buom, hoan kiem </span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/place/moa-98-hang-buom/moa-98-hang-buom-avatar.jpg?w=960',
    alt: 'text'
  }
  },
  {
  children: <>
    <h1>The XX - Coffe Bar</h1>
    <span>136 Ho Tung Mau (332 Hoang Cong)</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/2022/06/12/b9438fdf-f6e4-4565-902b-a702dabd545c-283409553_132609869380769_3004.jpeg?w=960',
    alt: 'text'
  }
  },
  {
  children: <>
    <h1>Mobius Space - Cafe</h1>
    <span>137 Nguyen Chi Thanh, Dong Da</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/place/mobius-space-cafe-boardgame/mobius-space-cafe-boardgame-avatar.png',
    alt: 'text'
  }
  },
  {
  children:<>
    <h1>LaiKa Cafe - Tho Nhuom</h1>
    <span>34 Tho nhuom, Hoan Kiem</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/place/laika-cafe-tho-nhuom/laika-cafe-tho-nhuom-avatar.jpeg',
    alt: 'text'
  }
  },
  {
  children:<>
    <h1>La Mensa - Vu Trong Phung</h1>
    <span>54i vu trong phung, thanh xuan</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/place/la-mensa-vu-trong-phung/la-mensa-vu-trong-phung-avatar.jpeg?w=960',
    alt: 'text'
  }
  },
    {
  children:<>
    <h1>Sixdoong Cafe & Camping</h1>
    <span>vuon hoa bai da song hong</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/place/sixdoong-cafe-camping/sixdoong-cafe-camping-avatar.jpeg?w=960',
    alt: 'text'
  }
  },
      {
  children:<>
    <h1>The Sipping Bar Waterfront </h1>
    <span>Khuon vien cong vien thong nhat</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/place/the-sipping-bar-waterfront/the-sipping-bar-waterfront-avatar.jpeg',
    alt: 'text'
  }
  },
  {
  children:<>
    <h1>The Running Bean</h1>
    <span>22 Nha tho, hoan kiem</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/place/the-running-bean/the-running-bean-avatar.jpeg?w=960',
    alt: 'text'
  }
  }
]
function ListItemFamous({ }: Props) {
  const { deviceCurrent} = useCheckpoint('')
  return (
    <Container className='famous-destionation-wrapper'>
      <Row className = {"gy-3"}>
      { 
        card2.slice(0,deviceCurrent == 'mobile'?3:card2.length).map((item,index) =>
          <Col xs={11} md={6} lg={4} xl = {3}> <CardItem key={index} image={item.image} children={item.children} type={'famous-destination'} /></Col>
        )
      }
      </Row>
    </Container>
  )
}

export default ListItemFamous