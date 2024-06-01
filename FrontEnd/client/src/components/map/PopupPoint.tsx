import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../hooks';
import { CloseMapModalState } from '../../sliceredux/modal-map.slice'
import { BsFillStarFill, FaTimes } from "../common/Icon";
type Props = {
  closeFunction: () => void;
  data?: any;
};

export default function PopupPoint({ closeFunction, data }: Props) {
 const dispatch = useAppDispatch()
 const navigate = useNavigate();
  const defaultColor = "#5a565631";
  const activeColor = "#ee0033";
  const star = [0, 1, 2, 3, 4];
  let rate =
    data.reviews.reduce((a: any, b: any) => {
      return (
        a +
        b.locationRate +
        b.placeRate +
        b.serviceRate +
        b.foodRate +
        b.priceRate
      );
    }, 0) /
    (data.reviews.length * 5);

  return (
    <div className="map-popup" onClick={() => {dispatch(CloseMapModalState());navigate(`/place/${data?.store?.storeID}`);}}>
      <div className="map-popup__main-close" onClick={() => closeFunction()}>
        <FaTimes size={10}></FaTimes>
      </div>
      <div
        className="map-popup__image"
        style={{
          background:
            "url(https://toidicafe.vn/static/images/place/soranchi/soranchi-avatar-1648345368026.jpg?w=960)",
        }}
      ></div>
      <div className="map-popup__main">
        <div className="map-popup__name">{data?.store?.storeName}</div>
        <div className="map-popup__address">
          {data?.store?.directInfo + " " + data?.store?.storeAddress}
        </div>
        <div className="map-popup__review">
          {rate > 0 ? (
            <>
              <div className="map-popup__review-star">
                {star.map((item) => (
                  <BsFillStarFill
                    key={item}
                    size={10}
                    color={rate < item ? defaultColor : activeColor}
                  ></BsFillStarFill>
                ))}
              </div>
              <div className="map-popup__review-count">
                <span> có {data.reviews.length} đánh giá</span>
              </div>
            </>
          ) : (
            <>
              <div className="map-popup__review-star">
                {star.map((item) => (
                  <BsFillStarFill
                    key={item}
                    size={10}
                    color={-1 < item ? defaultColor : activeColor}
                  ></BsFillStarFill>
                ))}
              </div>
              <div className="map-popup__review-count">
                <span>chưa có đánh giá</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
