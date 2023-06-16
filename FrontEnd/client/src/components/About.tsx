import React from 'react'
import '../styles/about.scss'

type Props = {}

export default  function About({}: Props) {
  return (
    <div className='about-wrapper'>
      <div className='about-contain'>
        <div className='about-contain__heading'>
          <div className='about-contain__heading__title'>
            Đi và khám phá điểm hẹn hấp dẫn với Tôi Đi Cafe
          </div>
          <div className='about-contain__heading__text'>
            Mang đến cho bạn những sự lựa chọn tốt nhất cho điểm hẹn cafe
          </div>
        </div>
        <div className='about-contain__text'>
        <p>Là kênh tổng hợp và review các quán cafe đẹp ở Hà Nội, giúp bạn dễ dàng tìm kiếm một quán cafe nhanh chóng theo vị trí, nhu cầu mục đích của bản thân, tiết kiệm thời gian và đạt trải nghiệm ưng ý nhất để chọn ra quán có vị trí, không gian, đồ uống và giá tiền phù hợp.</p>
        <p>Với dữ liệu hơn 1000+ quán cafe được chúng tôi tổng hợp và cập nhật thông tin thường xuyên thì bạn sẽ không lo thiếu sự lựa chọn để trải nghiệm, tạo ra những bức ảnh sống ảo tuyệt vời.</p>
        <p>Chúng tôi cũng xây dựng tính năng giúp người dùng review, chia sẻ trải nghiệm và cảm nhận của bản thân về những quán từng đến, giúp cho người đến sau dựa vào đó dễ dàng đưa ra quyết định hơn. Vì vậy, chính bạn cũng hãy tích cực review vào nhé, cho đi và bạn sẽ nhận lại nhiều hơn!</p>
        <p>ToiDiCafe sẽ không chỉ dừng lại ở Hà Nội, chúng tôi sẽ đi, sẽ mở rộng ra các thành phố khác như Tp.Hồ Chí Minh, Đà Nẵng, Huế, ... Hãy ủng hộ và đồng hành cùng chúng tôi nhé ♥️</p>
        </div>
        <img src='https://toidicafe.vn/images/coffee-break.svg' alt='' className='about-contain__image-1' />
        <img src='https://toidicafe.vn/images/Feedback-amico.svg' alt='' className='about-contain__image-2' />
      </div>
    </div>
  )
}