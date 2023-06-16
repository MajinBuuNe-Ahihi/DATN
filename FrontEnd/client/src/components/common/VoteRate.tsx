import React, { useState } from 'react'
import {BsFillStarFill} from './Icon'

type Props = {
  type: boolean,
  value: number
}

export function VoteRate({type,value }: Props) {
  const defaultColor = '#5a565631';
  const activeColor = '#ee0033';
  const defaultTags = ['Qúa tệ', 'Trung bình', 'Bình Thường', 'Tốt', 'Rất Tốt'];
  const [index, setIndex] = useState<number>(value);
  const [pick, setPick] = useState<number>(value);
  const star = [0, 1, 2, 3, 4];
  return (
    <div className='vote-component'>
    <div className='vote-rate' onMouseLeave={()=>type?setIndex(pick):null}>
      {
          star.map((item) => <BsFillStarFill onClick={() => setPick(item)}
            key={item} size={25} onMouseEnter={() => setIndex(item)}
            color={index < item ?
            defaultColor : activeColor}
            >
          </BsFillStarFill>)
      }
      </div>
      <div className='vote-tag'>
        {
          defaultTags[pick]
        }
      </div>
    </div>
  )
}