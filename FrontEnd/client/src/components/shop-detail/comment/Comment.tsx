import React, { useState } from 'react'
import {AiOutlineHeart} from '../../common';
import './comment.scss'

type Props = {}

const Comment = (props: Props) => {
    const [open,setOpen] = useState<boolean>(false);

  return (
    <div className="comment">
        <div className="comment-main__image">
            <img src="https://toidicafe.vn/static/images/review/2022-03-18/b4a701b3-0100-4df4-9f26-31c410c6ef56.jpeg" alt="" />
        </div>
        <div className="comment-main">
            <div className="comment-main__top">
                <div className="comment-main__name">
                    Quỳnh Tít
                </div>
                <div className="comment-main__commented-time">
                    Đã đánh giá 2 năm trước
                </div>
            </div>
            <div className="comment-main__center">
                <div className={open?"comment-main__text":"comment-main__text open"} >
                Đây là quán cafe đầu tiên mình chọn ghé qua nhân dịp hết giãn cách, "giải phóng" các quán cafe hihi, cũng vì xem ảnh quá mê mẩn với chiếc view triệu đô khu đệm ngồi trông như sân vận động của quán.
                De Ville (đọc là ) nằm ở bên trong toà A2 khu Vinhome, quán có 2 tầng với tone chủ đạo là trắng - nâu gỗ - xám đen nên trông tổng thể rất là Châu Âu chanh xả các thứ 🧁 Hôm mình đi trời âm u nhưng vào quán kiểu bừng sáng vì hệ thống đèn đóm xịn như studio, thêm cả cửa kính đón ánh sáng tự nhiên nữa. Bàn ghế ở đây trông cũng xịn, nhiều bàn cao phù hợp tới làm việc nè 🤓
                Menu của quán cũng khá đa dạng, mạnh về các dòng cafe máy. Mình gọi Cafe kem nướng có lớp kem thơmmm ngầy ngậy và Trà nhài hoa cúc heo thi 😋, hơi tiếc vì vừa mở lại nên quán chưa bán bánh.
                Điểm cộng to đùng của quán là các bạn nhân viên dễ huông cực kìii kiểu từ lúc mình vào tới lúc mình về cứ thấy các bạn í cười suốt thôi 🥺🥺
                Lưu í cho mng là tới quán thì gửi xe dưới hầm của toà nhà nhaa (phí 2 ka).
                </div>
                {
                    !open && <span className="comment-main__read-more" onClick={()=> setOpen(true)}>
                        Xem thêm 
                    </span>
                }
            </div>
            <div className="comment-main__bottom">
                <div className="comment-main__liked">
                    <AiOutlineHeart/> 7 thích
                </div>
                <div className="comment-main__reply">
                   Trả lời
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comment;