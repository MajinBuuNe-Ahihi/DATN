import React from 'react'
import './check-box.scss'
type Props = {
    id?: string,
    value?: any,
    name?: string,
    setValue?: React.Dispatch<React.SetStateAction<any>>
    ref?: any // giá trị tham chiếu cho trường hợp nó bao gồm 1 group radio button
    size: number // hxw
}


export default function CheckBox({id,name,value,setValue,ref,size}: Props) {
  return (
    <>
    <input className='check-box-input' onChange={(e)=>{}} style={{position:"absolute",height:0,width:0,background:"transfer"}} 
     type="checkbox" name={name} id={id} value={value} />
    <label className='check-box-label' htmlFor={id} style={{height: `${size || 20}px`,width: `${size || 20}px`}}>
      <div>
        <i className="gg-check"></i>
      </div>
    </label>
    </>
  )
}