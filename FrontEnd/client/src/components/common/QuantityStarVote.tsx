import React from 'react'
import {BsStarHalf,BsFillStarFill} from './Icon'
import '../../styles/quantitystarvote.scss'
type Props = {
    quantity: number // quantity of number vote 
}

export default function QuantityStarVote({quantity}: Props) {
  return (
    <div className="quantity-star-vote">
        {
            quantity%1 > 0? <>
            {
                Array.apply(null,new Array(Math.floor(quantity) -1)).map((i,index) => <BsFillStarFill key={index} size={18} className='quantity-star-vote__fill'></BsFillStarFill>)
            }
            <BsStarHalf size={18} className='quantity-star-vote__half'></BsStarHalf>
            </>:
             Array.apply(null,new Array(quantity)).map((i,index) => <BsFillStarFill key={index} size={18} className='quantity-star-vote__fill'></BsFillStarFill>)
        }
    </div>
  )
}