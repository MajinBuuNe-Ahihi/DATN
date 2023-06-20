import React from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { overlay } from '../../sliceredux';
import { close } from '../../sliceredux/preview-image.slice';

type Props = {}

export function Overlay({ }: Props) {
  const trigger = useAppSelector((state) => state.trigger.value)
  const dispatch = useAppDispatch()
  return (
    <>
      {
        ([5, 6, 7, 8, 9].includes(trigger)) && <div id='overlay-component' onClick={() => {
          dispatch(overlay());
          dispatch(close());
        }}>

    </div>
    }
    </>
  )
}