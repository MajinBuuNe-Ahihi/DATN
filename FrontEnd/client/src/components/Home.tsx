import BannerHome from './bannerhome';
import HomeSection from './homesection';
import HomeSlide from './homesection/HomeSlide';
import ListItemFamous from './homesection/ListItemFamous';
import image from '../assets/suggest-place.svg'
import '../styles/home-banner.scss';
import { Button } from './common';
import {useScrollPostion} from '../hooks';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const card = [{
  children: <h1>Lam viec</h1>,
  image: {
    src: 'https://toidicafe.vn/static/images/purpose/lam-viec-1647441292275.jpeg?w=960',
    alt: 'text'
  }
  },
  {
  children: <h1>hen ho</h1>,
  image: {
    src: 'https://toidicafe.vn/static/images/purpose/hen-ho-1647441284779.jpeg',
    alt: 'text'
  }
  },
  {
  children: <h1>doc sach</h1>,
  image: {
    src: 'https://toidicafe.vn/static/images/purpose/doc-sach-1647441276414.jpeg',
    alt: 'text'
  }
  },
  {
  children: <h1>chill</h1>,
  image: {
    src: 'https://toidicafe.vn/static/images/purpose/chill-1647441264959.jpeg?w=960',
    alt: 'text'
  }
  },
  {
  children: <h1>song ao</h1>,
  image: {
    src: 'https://toidicafe.vn/static/images/purpose/song-ao-1647441301274.jpeg?w=960',
    alt: 'text'
  }
  }
]
const card2 = [{
  children: <>
    <h1>Tay Ho</h1>
    <span>41 quan cafe</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/region/tay-ho-1647433156043.jpeg?w=960',
    alt: 'text'
  }
  },
  {
  children: <>
    <h1>Ba Dinh</h1>
    <span>77 quan cafe</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/region/ba-dinh-1647433057947.jpeg',
    alt: 'text'
  }
  },
  {
  children: <>
    <h1>Hoan Kiem</h1>
    <span>101 quan cafe</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/region/hoan-kiem-1647433147220.jpeg',
    alt: 'text'
  }
  },
  {
  children:<>
    <h1>Dong Da</h1>
    <span>82 quan cafe</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/region/dong-da-1647433142184.jpeg',
    alt: 'text'
  }
  },
  {
  children:<>
    <h1>Cau Giay</h1>
    <span>31 quan cafe</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/region/cau-giay-1647433134263.jpeg?w=960',
    alt: 'text'
  }
  }
]

type Props = {}
export default function Home({ }: Props) {
  const nav = useNavigate();
  const redrictAddplace = () => {
    nav('/add-place')
  }

  return (
    <div className='home-section'>
      <BannerHome />
      <Container>
        <HomeSection subclass='pupose-need' title='Mục đích bạn cần ?' children={<HomeSlide card={card} type={'pupose-need'} />} />
        <HomeSection subclass='near-you' title='Khu vực gần đây' children={<HomeSlide card={card2} type={'near-you'} />} /> 
        <HomeSection subclass='famous-destination' title='Địa điểm nổi bật' children={<ListItemFamous />} /> 
        <div className='home-section-suggest-place'>
          <img className='home-section-suggest-place__img' src={image} alt='suggest place' />
          <span className='home-section-suggest-place__text' >Chúng tôi có bỏ lỡ địa điểm nào mà bạn biết</span>
          <Button onClick = {()=>redrictAddplace()} className={'home-section-suggest-place__button-suggest-palace'} type={2} bg={1} children={<>Đóng góp địa điểm</>} ></Button>
        </div>
     </Container>
    </div>
  )
}