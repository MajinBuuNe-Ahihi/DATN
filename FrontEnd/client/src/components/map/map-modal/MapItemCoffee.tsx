import React from "react";
import { BsFillStarFill, FaTimes } from "../../common/Icon";
import "./map-item-coffee.scss";
type Props = {
  RedirectLocation: () => void;
  data?: any;
};

export default function MapItemCoffee({ RedirectLocation, data }: Props) {
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

  const caculateTime = () => {
    let [hours, minutes] = data?.store?.closeTime.split(":").map(Number);
    let [hours2, minutes2] = data?.store?.openTime.split(":").map(Number);
    let timeToCompare = new Date();
    timeToCompare.setHours(hours, minutes, 0, 0); // Set hours, minutes, seconds, and milliseconds
    let timeToCompare2 = new Date();
    timeToCompare2.setHours(hours2, minutes2, 0, 0);
    // Get the current time
    let currentTime = new Date();
    let timeWith30MinutesDiff = new Date(
      timeToCompare.getTime() - 30 * 60 * 1000
    );
    let timeWith30MinutesDiff1 = new Date(
      timeToCompare2.getTime() - 30 * 60 * 1000
    );
    // Compare the times
    if (currentTime < timeToCompare2 && currentTime > timeWith30MinutesDiff1) {
      return "Sắp mở cửa";
    }
    if (currentTime < timeToCompare && currentTime > timeWith30MinutesDiff) {
      return "Sắp đóng cửa";
    }
    if (currentTime < timeToCompare2) {
      return "Đang đóng cửa";
    } else if (currentTime > timeToCompare) {
      return "Đang đóng cửa";
    } else {
      return "Đang mở cửa";
    }
  };

  return (
    <div
      className="map-item-coffee"
      style={{ width: "100%" }}
      onClick={() => RedirectLocation()}
    >
      <div className="map-item-coffee__main">
        <div className="map-item-coffee__name">{data?.store?.storeName}</div>
        <div className="map-item-coffee__review">
          {rate > 0 ? (
            <>
              <div className="map-item-coffee__review-star">
                {star.map((item) => (
                  <BsFillStarFill
                    key={item}
                    size={10}
                    color={rate < item ? defaultColor : activeColor}
                  ></BsFillStarFill>
                ))}
              </div>
              <div className="map-item-coffee__review-count">
                <span>có {data.reviews.length} đánh giá</span>
              </div>
            </>
          ) : (
            <>
              <div className="map-item-coffee__review-star">
                {star.map((item) => (
                  <BsFillStarFill
                    key={item}
                    size={10}
                    color={-1 < item ? defaultColor : activeColor}
                  ></BsFillStarFill>
                ))}
              </div>
              <div className="map-item-coffee__review-count">
                <span>chưa có đánh giá</span>
              </div>
            </>
          )}
        </div>
        <div className="map-item-coffee__address">
          {data?.store?.directInfo + " " + data?.store?.storeAddress}
        </div>
        <div className="map-item-coffee__open-time">
          <span className="map-item-coffee__status">{caculateTime()}</span>
          <span>-</span>
          <span>{data?.store?.openTime}</span>
          <span>-</span>
          <span>{data?.store?.closeTime}</span>
        </div>
      </div>
      <div
        className="main-item-coffee__image"
        style={{
          background:
            "url(https://toidicafe.vn/static/images/place/the-coffee-people/the-coffee-people-avatar-1649653420038.jpg)",
        }}
      ></div>
    </div>
  );
}
