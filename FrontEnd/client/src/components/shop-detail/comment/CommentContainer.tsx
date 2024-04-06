import React from 'react'
import './comment-container.scss'
import Comment from './Comment'
import { Button,AiTwotoneHeart} from '../../common'
import overview from '../../../assets/overview.svg';


type Props = {}

const CommentContainer = (props: Props) => {
  return (
    <div className="comment-container">
        <div className="comment-container__header">
            <div className="comment-container__title">
                Đánh giá từ cộng đồng (2)
            </div>
            <Button  className='button' bg={1} >
                <span>Viết đánh giá</span>
            </Button>
        </div>
        <div className="comment-container__overview">
            <div className="comment-container__overview-image">
                <img src={overview} alt="" />
            </div>
            <div className="comment-container__overview-contain">
                <div className="comment-container__overview-title">
                    Bạn đã từng đến đây?
                </div>
                <div className="comment-container__overview-text">
                    Chia sẻ trải nghiệm và cảm nhận của bản tân cho mọi người cùng biết <AiTwotoneHeart size={15} color={'#ee0033'}/>
                </div>
                <div className="comment-container__overview-text">
                    Những review chất lượng sẽ dược xuất hiện ở bảng tin đấy!
                </div>
            </div>
        </div>
        <div className="comment-container__main">
            <div className="comment-container__list">
                <Comment/>
            </div>
        </div>
    </div>
  )
}

export default CommentContainer;