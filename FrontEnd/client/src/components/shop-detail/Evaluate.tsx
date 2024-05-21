import React from 'react'
import './evaluate.scss'
type Props = {
    data: any
}

export default function Evaluate(props:Props) {
  return (
    <div className="evaluate">
        <div className="evaluate__contain">
            <div className="evaluate__top">
                <div className="evaluate__title">
                    Đánh giá
                </div>
                <div className="evaluate__score">
                    <div className="evaluate__score-number">
                        5.0
                    </div>
                    <div className="evaluate__score-text">
                        <span>Tuyệt vời</span>
                        <span>{`/5 ( 12 đánh giá)`}</span>
                    </div>                 
                </div>
            </div>
            <div className="evaluate__content">
                <div className="evaluate__content-item">
                    <div className="evaluate__content-label">
                        Vị trí
                    </div>
                    <div className="evaluate__content-value">
                        <div className="evaluate__content-track">
                        </div>
                    </div>
                    <div className="evaluate__content-score">
                        {props.data.score}
                    </div>
                </div>
                <div className="evaluate__content-item">
                    <div className="evaluate__content-label">
                        Không gian
                    </div>
                    <div className="evaluate__content-value">
                        <div className="evaluate__content-track">
                        </div>
                    </div>
                    <div className="evaluate__content-score">
                        5.0
                    </div>
                </div>
                <div className="evaluate__content-item">
                    <div className="evaluate__content-label">
                        Đồ uống
                    </div>
                    <div className="evaluate__content-value">
                        <div className="evaluate__content-track">
                        </div>
                    </div>
                    <div className="evaluate__content-score">
                        5.0
                    </div>
                </div>
                <div className="evaluate__content-item">
                    <div className="evaluate__content-label">
                        Phục vụ
                    </div>
                    <div className="evaluate__content-value">
                        <div className="evaluate__content-track">
                        </div>
                    </div>
                    <div className="evaluate__content-score">
                        5.0
                    </div>
                </div>
                <div className="evaluate__content-item">
                    <div className="evaluate__content-label">
                        Giá cả
                    </div>
                    <div className="evaluate__content-value">
                        <div className="evaluate__content-track">
                        </div>
                    </div>
                    <div className="evaluate__content-score">
                        5.0
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
