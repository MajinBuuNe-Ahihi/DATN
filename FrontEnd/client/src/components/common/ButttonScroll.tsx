import React from 'react'
import { useAppSelector, useCheckpoint, useScrollPostion } from '../../hooks'
import { RiArrowUpCircleFill } from './Icon'
import '../../styles/button.scroll.scss'
import { CSSTransition } from 'react-transition-group'
type Props = {}

export function ButtonScroll({ }: Props) {
  const trigger = useAppSelector(state => state.trigger.value)
  const { position } = useScrollPostion('')
  const { deviceCurrent } = useCheckpoint('')
  const scrollToTop = () => {
    window.scrollTo(0,0)
  }
  
  return (
    <>
      {
       !trigger &&
        <CSSTransition
        in={position.y > (deviceCurrent == 'mobile'?100:250)}
        timeout={500}
        unmountOnExit
        classNames='button-scroll'>
          <div className='button-scroll-top' onClick={()=>scrollToTop()}>
            <RiArrowUpCircleFill size={25}/>
          </div>
        </CSSTransition>
      }
    </>
  )
}