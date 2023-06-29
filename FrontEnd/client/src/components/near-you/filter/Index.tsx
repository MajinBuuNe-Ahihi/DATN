import React,{useState} from 'react'
import ButtonRadio from '../../common/button-radio/ButtonRadio'
import CheckBox from '../../common/check-box/CheckBox'
import './filter-map.scss'
import RangeSlider from '../../common/range-slider/RangeSlider'

type Props = {}

export default function FilterContain({}: Props) {
    const [price,setPrice] = useState<number>(30000)
  return (
    <div className="filter-map">
        <div className="filter-map__title">
            Lọc kết quả
        </div>
        <div className="filter-map__contain">
            <div className="filter-map__main">
                <div className="filter-map__label">
                    Giờ mở cửa
                </div>
                <div className="filter-map__list-control">
                    <div className="filter-map__item-control">
                        <ButtonRadio size={20} name="language" id="all"></ButtonRadio>
                        <div className="filter-map__item-control-label">
                        Tất cả
                        </div>
                    </div>
                    <div className="filter-map__item-control">
                        <ButtonRadio size={20} name="language" id="time-open"></ButtonRadio>
                        <div className="filter-map__item-control-label">
                        Đang mở cửa
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-map__main">
                <div className="filter-map__label">
                   Khu vực
                </div>
                <div className="filter-map__list-control">
                    <div className="filter-map__item-control">
                        <CheckBox size={20} name="language" id="qhbt"></CheckBox>
                        <div className="filter-map__item-control-label">
                            Quận Hai Bà Trưng
                        </div>
                    </div>
                    <div className="filter-map__item-control">
                        <CheckBox size={20} name="language" id="qtx"></CheckBox>
                        <div className="filter-map__item-control-label">
                            Quận Thanh Xuân
                        </div>
                    </div>
                    <div className="filter-map__item-control">
                        <CheckBox size={20} name="language" id="qcg"></CheckBox>
                        <div className="filter-map__item-control-label">
                            Quận Cầu Giấy
                        </div>
                    </div>
                    <div className="filter-map__item-control">
                        <CheckBox size={20} name="language" id="qbtl"></CheckBox>
                        <div className="filter-map__item-control-label">
                            Quận Bắc Từ Liêm
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-map__main">
                <div className="filter-map__label">
                    Mục đích
                </div>
                <div className="filter-map__list-control">
                    <div className="filter-map__item-control">
                        <CheckBox size={20} name="language" id="chill"></CheckBox>
                        <div className="filter-map__item-control-label">
                            Chill
                        </div>
                    </div>
                    <div className="filter-map__item-control">
                        <CheckBox size={20} name="language" id="readbook"></CheckBox>
                        <div className="filter-map__item-control-label">
                            Đọc sách
                        </div>
                    </div>
                    <div className="filter-map__item-control">
                        <CheckBox size={20} name="language" id="date"></CheckBox>
                        <div className="filter-map__item-control-label">
                            Hẹn hò
                        </div>
                    </div>
                    <div className="filter-map__item-control">
                        <CheckBox size={20} name="language" id="work"></CheckBox>
                        <div className="filter-map__item-control-label">
                            Làm việc
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-map__main">
                <div className="filter-map__label">
                   Kiểu quán
                </div>
                <div className="filter-map__list-control">
                    <div className="filter-map__item-control">
                        <CheckBox size={20} name="language" id="cfacoustic"></CheckBox>
                        <div className="filter-map__item-control-label">
                            Cafe Acoustic
                        </div>
                    </div>
                    <div className="filter-map__item-control">
                        <CheckBox size={20} name="language" id="cfnormal"></CheckBox>
                        <div className="filter-map__item-control-label">
                            Cafe Bình Dân
                        </div>
                    </div>
                    <div className="filter-map__item-control">
                        <CheckBox size={20} name="language" id="cfvintage"></CheckBox>
                        <div className="filter-map__item-control-label">
                            Cafe Cổ Điển
                        </div>
                    </div>
                    <div className="filter-map__item-control">
                        <CheckBox size={20} name="language" id="cflouge"></CheckBox>
                        <div className="filter-map__item-control-label">
                            Cafe Lounge
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-map__main">
                <div className="filter-map__label">
                   Khoảng giá
                </div>
                <div className="filter-map__list-control">
                    <div className="filter-map__price">
                        0 ~ {price} VNĐ
                    </div>
                    <div className="filter-map__item-control">
                        <RangeSlider setValue={setPrice} total={30000} step={1000} ></RangeSlider>
                    </div>
                </div>
            </div>
            <div className="filter-map__main">
                <div className="filter-map__label">
                   Tiện ích
                </div>
                <div className="filter-map__list-control">
                    <div className="filter-map__item-control">
                        <CheckBox size={20} name="language" id="sky"></CheckBox>
                        <div className="filter-map__item-control-label">
                            Bàn ngoài trời
                        </div>
                    </div>
                    <div className="filter-map__item-control">
                        <CheckBox size={20} name="language" id="cake"></CheckBox>
                        <div className="filter-map__item-control-label">
                            Bánh ngọt
                        </div>
                    </div>
                    <div className="filter-map__item-control">
                        <CheckBox size={20} name="language" id="football"></CheckBox>
                        <div className="filter-map__item-control-label">
                            Chiếu bóng đá
                        </div>
                    </div>
                    <div className="filter-map__item-control">
                        <CheckBox size={20} name="language" id="children"></CheckBox>
                        <div className="filter-map__item-control-label">
                            Chỗ chơi cho trẻ em
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}