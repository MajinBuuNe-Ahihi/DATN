import Typewriter from 'typewriter-effect';
import { useAppSelector, useCheckpoint } from '../../hooks';
import '../../styles/home-banner.scss';
import { SearchComponent } from '../search';

type Props = {}

export default function TitleAndSearch({ }: Props) {
  const trigger = useAppSelector(state => state.trigger.value);
  const { deviceCurrent } = useCheckpoint('');
  return (
    <div className='banner-slogan-desktop' style={trigger==7?{ zIndex: 99999, transform: 'translate(-50%,-70%)'}:{}}>
    <h1 className='banner-slogan-desktop__slogan'>
        <Typewriter
        options={{
          strings: ['Đi & Khám Phá Điểm Hẹn Hấp Dẫn'],
          autoStart: true,
          loop: true,
        }}
      />
      </h1>
      <h3 className='banner-slogan-desktop__title'>
       Mang đến cho bạn những sự lựa chọn tốt nhất cho điểm hẹn cafe
      </h3>
      <SearchComponent placeholder='Tìm quán cafe, kiểu quán, khu vực' type={deviceCurrent == 'mobile'?'home-search-mobile':'home-search'} currentPath={'/'} />
    </div>
  )
}