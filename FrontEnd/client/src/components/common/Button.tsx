import React from 'react'
import classes from '@styles/button.module.scss';


type Props = {
  children: React.ReactElement;
  type?: number,
  bg?: number,
  padding?: string,
  className?: string,
  onClick?: () => void,
  typefunc?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

export  function Button({children,type,bg,padding,className,onClick,typefunc}: Props) {
  return (
    <button type={typefunc?.type || 'button'} onClick={onClick} className={`${classes.button} ${type == 1 ? classes['button--type1'] : classes['button--type2']}
    ${bg == 1 ? classes['button--bg1'] : classes['button--bg2']} ${className}
    `} style={{padding:padding}}>
      {children}
    </button>
  )
}