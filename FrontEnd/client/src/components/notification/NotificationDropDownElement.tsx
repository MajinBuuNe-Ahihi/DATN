import React, { useState } from 'react'
import * as ICON from '../common'
import { formatDistance } from 'date-fns'
import '../../styles/notification.scss'
type Props = {
  id: string,
  status: boolean,
  content: string,
  time: Date
}

export const NotificationDropDownElement = (props: Props) => {
  const [status, setStatus] = useState<boolean>(props.status)
  const seenNotification = () => !status && setStatus(pre => !pre)

  return (
    <div id={props.id} className={`header__noti-drop-down-element ${status?'seen':''}`} onClick = {()=> seenNotification()}>
      <span className='header__noti-drop-down-element-icons'>
        {
          status?<ICON.BsCheckAll/>:<ICON.BsThreeDots/>
        }
      </span>
      <span className='header__noti-drop-down-element-content'>
        {props.content}
      </span>
      <span className='header__noti-drop-down-element-time'>
        {formatDistance(props.time,new Date(),{ addSuffix: true })}
      </span>
    </div>
  )
}