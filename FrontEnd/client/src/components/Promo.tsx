import React from 'react'
import discount from '../assets/discount.svg'
import { CardItem } from './common'
import '../styles/promo.scss'
import { Col, Container, Row } from 'react-bootstrap'
type Props = {}

let promotion = [{
    children: <>
      <div className='promo-card-inner'>
      <div className='promo-card-inner__name-promo'>
        Order tha ga - Hoan ngay nua gia
      </div>
      <hr />
      <div className='promo-card-inner__name-shop'>
        MONO Coffee Lab
      </div>
      <div className='promo-card-inner__address'>
        03 Hồ Xuân Hương, Hai Bà Trưng, Hà Nội
      </div>
      </div>
    </>,
    image: {
      src: 'https://ik.imagekit.io/reviewcafe/promo/128552575_3644428045635989_2538086445458530365_n_abXncx5LHTb.jpg?tr=w-400,q-80',
      alt: 'text'
    }
},
  {
    children: <>
      <div className='promo-card-inner'>
      <div className='promo-card-inner__name-promo'>
      Mừng Khai Trương - Ưu đãi 20% toàn bộ menu
      </div>
      <hr />
      <div className='promo-card-inner__name-shop'>
       BitterSweet Coffee
      </div>
      <div className='promo-card-inner__address'>
      Số 176-178 Thái Thịnh Đống Đa Hà Nội
      </div>
      </div>
    </>,
    image: {
      src: 'https://ik.imagekit.io/reviewcafe/promo/137543443_127473722541606_7012844933023691237_n_RH6NuRef8I_.png?tr=w-400,q-80',
      alt: 'text'
    }
  },
  {
    children: <>
      <div className='promo-card-inner'>
      <div className='promo-card-inner__name-promo'>
        Giảm 20% tổng hóa đơn khi đặt trên các App Giao Hàng
      </div>
      <hr />
      <div className='promo-card-inner__name-shop'>
      Foglian Cafe - Tây Sơn
      </div>
      <div className='promo-card-inner__address'>
      Số 56, ngõ 298 Tây Sơn, Đống Đa, Hà Nội
      </div>
      </div>
    </>,
    image: {
      src: 'https://ik.imagekit.io/reviewcafe/promo/188826554_4124717564273699_4276593579901636447_n_58fG5_dMjM.jpg?tr=w-400,q-80',
      alt: 'text'
    }
  },
  {
    children: <>
      <div className='promo-card-inner'>
      <div className='promo-card-inner__name-promo'>
      Ngồi nhà đặt trước, Lấy nước rinh quà
      </div>
      <hr />
      <div className='promo-card-inner__name-shop'>
      Highlands Coffee - PVI Tower
      </div>
      <div className='promo-card-inner__address'>
      Toà nhà PVI, số 1 Phạm Văn Bạch, Yên Hoà, Cầu Giấy, Hà Nội
      </div>
      </div>
    </>,
    image: {
      src: 'https://ik.imagekit.io/reviewcafe/promo/217415672_4341774135903397_5329500902239270033_n_5XoTA_iQeo.jpg?tr=w-400,q-80',
      alt: 'text'
    }
  },
  {
    children: <>
      <div className='promo-card-inner'>
      <div className='promo-card-inner__name-promo'>
       Deal khủng Cá Tháng Tư - Mua 3 tặng 1 đồ uống bất kỳ
      </div>
      <hr />
      <div className='promo-card-inner__name-shop'>
      The Pink House Coffee Lounge
      </div>
      <div className='promo-card-inner__address'>
      29B Phan Đình Phùng, Ba Đình, Hà Nội
      </div>
      </div>
    </>,
    image: {
      src: 'https://ik.imagekit.io/reviewcafe/promo/166490673_3952549374823853_488555794425273804_n_BdvjKNcYxha.jpg?tr=w-400,q-80',
      alt: 'text'
    }
  },
  {
    children: <>
      <div className='promo-card-inner'>
      <div className='promo-card-inner__name-promo'>
        Ưu đãi 20% toàn bộ đồ uống từ ngày 01/07 - 15/07
      </div>
      <hr />
      <div className='promo-card-inner__name-shop'>
        Artemis Pastry & Coffee Shop
      </div>
      <div className='promo-card-inner__address'>
        20 Ngô Quyền, Tràng Tiền, Hoàn Kiếm
      </div>
      </div>
    </>,
    image: {
      src: 'https://ik.imagekit.io/reviewcafe/promo/122878652_3548009975277797_6943584230145280813_n_1MyxdRTK9j.jpg?tr=w-400,q-80',
      alt: 'text'
    }
  },
  {
    children: <>
      <div className='promo-card-inner'>
      <div className='promo-card-inner__name-promo'>
      Mừng Khai Trương - Ưu đãi 30% toàn bộ menu
      </div>
      <hr />
      <div className='promo-card-inner__name-shop'>
       The Pink House Coffee Lounge
      </div>
      <div className='promo-card-inner__address'>
      29B Phan Đình Phùng, Ba Đình, Hà Nội
      </div>
      </div>
    </>,
    image: {
      src: 'https://ik.imagekit.io/reviewcafe/promo/81542967_2780714892007313_2870098585448349696_n_E5cK8icSFo.jpg?tr=w-400,q-80',
      alt: 'text'
    }
  },
  {
    children: <>
      <div className='promo-card-inner'>
      <div className='promo-card-inner__name-promo'>
      Giảm 20% tổng hóa đơn khi đặt trên các App Giao Hàng
      </div>
      <hr />
      <div className='promo-card-inner__name-shop'>
        Foglian Cafe - Tây Sơn
      </div>
      <div className='promo-card-inner__address'>
        Số 56, ngõ 298 Tây Sơn, Đống Đa, Hà Nội
      </div>
      </div>
    </>,
    image: {
      src: 'https://ik.imagekit.io/reviewcafe/promo/136346263_3724672934278166_3032532772111573066_n_ude-5lgY1uX.jpg?tr=w-400,q-80',
      alt: 'text'
    }
  }
  ,
  {
    children: <>
      <div className='promo-card-inner'>
      <div className='promo-card-inner__name-promo'>
      Combo rộn ràng - Ưu đãi ngập tràn
      </div>
      <hr />
      <div className='promo-card-inner__name-shop'>
       Gather Wellness Complex
      </div>
      <div className='promo-card-inner__address'>
        28A Xóm Hà Hồi, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội
      </div>
      </div>
    </>,
    image: {
      src: 'https://ik.imagekit.io/reviewcafe/promo/120134860_3449195515159244_8946805662430067762_n_nS95IkC67.jpg?tr=w-400,q-80',
      alt: 'text'
    }
  }
]

function Promo({}: Props) {
  return (
    <div className='promotion-wrapper'>
      <Container className='promotion-container' fluid="md">
        <Row className='promotion-header justify-content-between'>
          <Col lg={6} xs={12}>
            <div className='promotion-header__heading'>
              Cập nhật khuyến mãi hiện hành
            </div>
            <div className='promotion-header__text'>
              Bạn đang tìm kiếm một góc cafe để sống ảo? <br/>
              Hãy tiết kiệm hơn với các chương trình khuyến mãi của chúng tôi ở dưới đây.
            </div>
          </Col>
          <Col md={3} xs={12}>
            <img src={discount} alt='discount' className='promotion-header__image' />
          </Col>
        </Row>
        <Row className='promotion-list g-3 algin-items-stretch'>
          {
            promotion.map(item => <Col xs={12}  md={6} lg={4} xxl={3}>
            <CardItem image={item.image} children={item.children} type={'promotion'} />
            </Col> 
            )
          }
        </Row>
      </Container>
    </div>
  )
}

export default  Promo;