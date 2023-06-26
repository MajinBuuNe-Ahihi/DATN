import React from 'react'

type Props = {
  type: string,
  name: string,
  id?:string,
  className: string,
  value?: string,
  ref?: any,
  onChange?: any,
  onFocus?: any,
  onBlur?:any,
  placeholder?: string
}

export const Input = (props: Props) => {
  return (
    <input {...props} autoComplete='off' />
  )
}