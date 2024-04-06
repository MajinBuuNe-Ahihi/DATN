import React from 'react'
import {AiOutlineTags, BiEnvelope, FaDollarSign,FaRegClock} from '../common/Icon'
import './detail-information.scss'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Utility from '../../utility/Index';

type Props = {}

type TimeOpenClose = {
    type: number,
    label: string,
    date: string,
    opentime: number,
    closetime: number
}

const timeOpen:Array<TimeOpenClose> = [
    {
        type: 1,
        label: '7:00 AM - 11:00 PM',
        date: 'Thứ 2',
        opentime: 7,
        closetime: 23
    },
    {
        type: 2,
        label: '7:00 AM - 11:00 PM',
        date: 'Thứ 3',
        opentime: 7,
        closetime: 23
    },
    {
        type: 3,
        label: '7:00 AM - 11:00 PM',
        date: 'Thứ 4',
        opentime: 7,
        closetime: 23
    },
    {
        type: 4,
        label: '7:00 AM - 11:00 PM',
        date: 'Thứ 5',
        opentime: 7,
        closetime: 23
    },{
        type: 5,
        label: '7:00 AM - 11:00 PM',
        date: 'Thứ 6',
        opentime: 7,
        closetime: 23
    },
    {
        type: 6,
        label: '7:00 AM - 11:00 PM',
        date: 'Thứ 7',
        opentime: 7,
        closetime: 23
    },
    {
        type: 0,
        label: '7:00 AM - 11:00 PM',
        date: 'Chủ nhật',
        opentime: 7,
        closetime: 23
    },
]

export default function DetaiInfomation({}: Props) {
    const currentTime = new Date();
    const currentDate = timeOpen.filter((item:TimeOpenClose)=> item.type == currentTime.getDay())[0]
    const statusClosing = Utility.CheckClosingTimes(currentTime,currentDate.opentime,currentDate.closetime)
    

  return (
    <div className="detail-information m-card">
        <div className="detail-information__title">
            Thông tin chi tiết
        </div>
        <div className="detail-information__main">
            <div className="detail-information__item">
                <div className="detail-information__icon">
                    <FaDollarSign/>
                </div>
                 <div className="detail-information__content">
                    350000 đ - 20000 đ
                 </div>
            </div>
            <div className="detail-information__item">
                <div className="detail-information__icon">
                    <FaRegClock/>
                </div>
                 <div className="detail-information__content time">
                    <span  className={`${statusClosing.value}`}>{statusClosing.label}</span>
                    <Dropdown>
                        <Dropdown.Toggle  id="dropdown-basic" className='detail-information__select'>
                            {currentDate.label}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='detail-information__select-list'>
                            {
                                timeOpen.map((item:TimeOpenClose,index:number) => {
                                    return (
                                        <Dropdown.Item key={index}><span>{item.date}</span><span>{item.label}</span></Dropdown.Item>
                                    )
                                })
                            }
                        </Dropdown.Menu>
                      </Dropdown>
                 </div>
            </div>
            <div className="detail-information__item">
                <div className="detail-information__icon">
                    <BiEnvelope/>
                </div>
                 <div className="detail-information__content">
                   <span>hoangvmanh10.qn@gmail.com</span>
                 </div>
            </div>
            <div className="detail-information__item">
                <div className="detail-information__icon">
                    <AiOutlineTags/>
                </div>
                 <div className="detail-information__content">
                    <Link to={'sang'}>Sang chảnh</Link>
                 </div>
            </div>
        </div>
    </div>
  )
}