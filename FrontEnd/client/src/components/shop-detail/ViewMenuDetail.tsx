import React,{useState} from 'react'
import { FaTimes} from '../common/Icon'
import {useAppDispatch} from '../../hooks/redux.hooks'
import {OpenPreview} from '../../sliceredux/preview-multiple-image.slice'
import './view-menu.scss'

type Props = {}

const ViewMenuDetail = (props: Props) => {
  const dispath = useAppDispatch()
  const [openMenu,setOpenMenu] = useState<boolean>(false)

  return (
    <>{
      !openMenu ? 
    <div className='view-menu-detail__text'  onClick={()=>setOpenMenu(true)}>Xem menu</div>
    :<div className="view-menu-detail">
      <div className="view-menu-detail__overlay">
      </div>
      <div className="view-menu-detail__contain">
        <div className="view-menu-detail__head">
          <div className="view-menu-detail__name">
            Menu của Thong Dong Cafe
          </div>
          <div className="view-menu-detail__close" onClick={()=>setOpenMenu(false)}>
            <FaTimes size={25}></FaTimes>
          </div>
        </div>
        <div className="view-menu-detail__main">
          <div className="view-menu-detail__list">
            <img onClick={()=>dispath(OpenPreview({currentImage: 'https://toidicafe.vn/static/images/place/thong-dong-cafe/menu/18b13852-2fe5-45e7-9f23-16f0ec993c2f.jpeg?w=960',images:['https://toidicafe.vn/static/images/place/thong-dong-cafe/menu/18b13852-2fe5-45e7-9f23-16f0ec993c2f.jpeg?w=960']}))} src="https://toidicafe.vn/static/images/place/thong-dong-cafe/menu/18b13852-2fe5-45e7-9f23-16f0ec993c2f.jpeg?w=960" alt="" />
          </div>
        </div>
        </div>
    </div>
    }
    </>
  )
}

export default ViewMenuDetail;