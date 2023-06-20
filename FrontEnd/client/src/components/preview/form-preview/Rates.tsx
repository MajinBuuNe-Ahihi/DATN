import React from 'react'
import { VoteRate } from '../../common/VoteRate'

type Props = {}

export default function Rates({}: Props) {
  return (
    <div className="preview__vote-rate">
      <div className="preview__section-name">
        Xếp hạng của bạn
      </div>
      <div className="preview__vote-rate-row">
        <div className="preview__label">
          Vị trí
        </div>
        <VoteRate type={true} value={4} ></VoteRate>
      </div>
      <div className="preview__vote-rate-row">
        <div className="preview__label">
          Không gian
        </div>
        <VoteRate type={true} value={4} ></VoteRate>
      </div>
      <div className="preview__vote-rate-row">
        <div className="preview__label">
          Đồ uống
        </div>
        <VoteRate type={true} value={4} ></VoteRate>
      </div>
      <div className="preview__vote-rate-row">
        <div className="preview__label">
          Phục vụ
        </div>
        <VoteRate type={true} value={4} ></VoteRate>
      </div>
      <div className="preview__vote-rate-row">
        <div className="preview__label">
          Giá cả
        </div>
        <VoteRate type={true} value={4} ></VoteRate>
      </div>
    </div>
  )
}