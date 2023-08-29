import React, { useState } from 'react'
import {BsBookmark,BsBookmarkStarFill} from './Icon'

type Props = {}

function BookMark({}: Props) {
    // sau nay se goi request bookmarks
  const [mark,setMark] = useState<boolean>(false)
  return (
    <>{
        !mark?
        <BsBookmark size={20} onClick={()=> setMark(true)}></BsBookmark>:
        <BsBookmarkStarFill color='#ee0033' size={20} onClick={()=> setMark(false)}></BsBookmarkStarFill>
    }
    </>
  )
}

export default BookMark