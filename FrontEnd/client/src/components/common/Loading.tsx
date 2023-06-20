import React, { useEffect, useState } from 'react'
import '../../styles/loading.scss'

type Props = {}

export default function Loading({}: Props) {
  const [loading, setLoading] = useState<number>(0);
  useEffect(() => {
    let settime = setTimeout(() => {
      setLoading(pre => pre+1 > 2?0:pre+1)
    },120)
    return () => {
      clearTimeout(settime)
    }
  })
  return (
    <div className='loading-bullet'>
      <div key={loading} className='loading-bullet__list-bullet'>
        <span className={loading == 0?'active':''}></span>
        <span className={loading == 1?'active':''}></span>
        <span className={loading == 2?'active':''}></span>
      </div>
    </div>
  )
}