import React from 'react'
import {BsFillStarFill} from '../../common/Icon'
import './previewed.scss'
import { useQuery,gql } from '@apollo/client'

const REVIEWD =gql `
query GetReviewedByUser($userId: String) {
  getReviewedByUser(userId: $userId) {
    user {
      userID
      userName
      password
      fullName
      email
      createBy
      createDate
      modifiedBy
      modifiedDate
    }
    review {
      reviewID
      userID
      storeID
      title
      description
      locationRate
      placeRate
      serviceRate
      foodRate
      priceRate
      like
      view
      createBy
      createDate
      modifiedBy
      modifiedDate
    }
  }
}
`

type Props = {
  value?: any;
}
 function PreviewdCard({value}: Props) {
 
  return (
    <div className="previewed-card">
      <div className="previewed-card__container">
        <div className="previewed-card__main">
          <div className="previewed-card__avatar">
            <img src="https://lh3.googleusercontent.com/a-/AOh14GhmcnmpPwqLi-KfLHqizXlRxovjOQ7QTT_z04wO=s96-c" alt="" />
          </div>
          <div className="previewed-card__info">
            <div className="previewed-card__info-name">
             {value.user.userName}
            </div>
            <div className="previewed-card__time">
              {value.review.createDate}
            </div>
          </div>
          <div className="previewed-card__star">
            <BsFillStarFill size={20} className='star'></BsFillStarFill>
            <span className='point'>{(value.review.locationRate + 
      value.review.placeRate +
      value.review.serviceRate +
      value.review.foodRate +
      value.review.priceRate)/5}</span>
            <span>/ 5 điểm</span>
          </div>
        </div>
        <div className="previewed-card__text">
          {value.review.title}
        </div>
      </div>
    </div>
  )
}
export default function Previewed({}: Props) {
  let user = JSON.parse(localStorage.getItem('user') as string)
  const {error,loading,data,refetch} = useQuery(REVIEWD,{
    variables:{
      userId: user.userID
    }
  })
  return (
    <div className="list-previewed">
      {
        data && data.getReviewedByUser && data.getReviewedByUser.map((item:any) => <PreviewdCard value={item}></PreviewdCard>)
      }
    </div>
  )
}