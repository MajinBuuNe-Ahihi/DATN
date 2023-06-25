import { BsFillStarFill, FaTimes } from '../common/Icon';

type Props = {
    closeFunction: ()=>void
}

export default function PopupPoint({closeFunction}: Props) {
    const defaultColor = '#5a565631';
    const activeColor = '#ee0033';
    const star = [0, 1, 2, 3, 4];

  return (
    <div className="map-popup">
        <div className="map-popup__main-close" onClick={()=>closeFunction()}>
            <FaTimes size={10}></FaTimes>
        </div>
        <div className="map-popup__image" style={{background: "url(https://toidicafe.vn/static/images/place/soranchi/soranchi-avatar-1648345368026.jpg?w=960)"}}>
        </div>
        <div className="map-popup__main">
            <div className="map-popup__name">
                Style City coffeee
            </div>
            <div className="map-popup__address">
                số 31lk32, khu đô thị Vân Canh, Hoài Đức, Hà Nội
            </div>
            <div className="map-popup__review">
                <div className="map-popup__review-star">
                {
                    star.map((item) => <BsFillStarFill 
                        key={item} size={10} 
                        color={-1 < item ?
                        defaultColor : activeColor}
                        >
                    </BsFillStarFill>)
                }
                </div>
                <div className="map-popup__review-count">
                    <span>chưa có đánh giá</span>
                </div>
            </div>
        </div>
    </div>
  )
}