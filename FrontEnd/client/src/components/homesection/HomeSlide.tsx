import { ReactElement } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCheckpoint } from '@hooks/checkponit.hooks';
import { CardItem } from '@components/common';
import 'swiper/css';
import '@styles/slide.scss';
type Props = {
  card: { children: ReactElement, image: { src: string, alt: string } }[],
  type: string
}
export default function HomeSlide({ card,type }: Props) {
  const { deviceCurrent } = useCheckpoint('');
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={deviceCurrent == 'mobile'?1:deviceCurrent=='tablet'?2:3}
      autoplay={{
        delay: type == 'near-you'?2500:2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={`my-slide my-slide--${type}`}
    >
      {
        card.map((item,index) =>
        <SwiperSlide key={index}>
            <CardItem image={item.image} children={item.children} type={type} />
        </SwiperSlide>
       )
      }
    </Swiper>
  )
}