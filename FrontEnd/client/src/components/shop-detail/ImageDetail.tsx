import React from 'react';
import {BsImages} from  '../common/Icon';
import { useNavigate } from "react-router-dom";
import {useAppDispatch} from '../../hooks/redux.hooks'
import {OpenPreview} from '../../sliceredux/preview-multiple-image.slice'
import './image-detail.scss';

type Props = {
  
}

const array = ['https://toidicafe.vn/static/images/place/thong-dong-cafe/35d89271-d074-45fc-b303-73beec4fedeb.jpeg?w=960',
'https://toidicafe.vn/static/images/place/thong-dong-cafe/92759129-171d-46a1-87d4-e555aaa19b13.jpeg',
'https://toidicafe.vn/static/images/place/thong-dong-cafe/b1cbf9ba-4462-4ccf-89ee-d4c1de06998a.jpeg?w=960',
'https://toidicafe.vn/static/images/place/thong-dong-cafe/ad0c3c7f-7719-450c-9020-afeafbe6b68d.jpeg?w=960',
'https://toidicafe.vn/static/images/place/thong-dong-cafe/be8ca465-785d-40b7-a416-7d4bfb36d660.jpeg?w=960',
'https://toidicafe.vn/static/images/place/thong-dong-cafe/f26836ad-8077-4c42-84f7-71cfc76cfc99.jpeg?w=960',
'https://toidicafe.vn/static/images/place/thong-dong-cafe/67c2d87b-d6bd-4987-aa5f-c6263fce73fa.jpeg?w=960',
'https://toidicafe.vn/static/images/place/thong-dong-cafe/a104e9b6-4377-40a6-9b49-2649cd439cef.jpeg?w=960',
'https://toidicafe.vn/static/images/place/thong-dong-cafe/df252a11-7238-42a0-bc97-ef125efcb143.jpeg?w=960',
'https://toidicafe.vn/static/images/place/thong-dong-cafe/d7b76cb9-692b-4f4f-8fd8-463abb00d542.jpeg?w=960',
'https://toidicafe.vn/static/images/place/thong-dong-cafe/1c0d6e65-6bcd-4411-a650-2e66b10b19a3.jpeg?w=960',
'https://toidicafe.vn/static/images/place/thong-dong-cafe/3dcc71b1-a926-4f0a-967f-c53d1b7c4156.jpeg?w=960',
'https://toidicafe.vn/static/images/place/thong-dong-cafe/36a61c9e-5fdd-4405-ae96-ff4c33747d35.jpeg?w=960',
'https://toidicafe.vn/static/images/place/thong-dong-cafe/635d8311-5f0b-4a3b-8066-148fd050bab4.jpeg',
'https://toidicafe.vn/static/images/place/thong-dong-cafe/9f9d07c9-6f69-4b02-932e-868ad3e97114.jpeg?w=960',
'https://toidicafe.vn/static/images/place/thong-dong-cafe/f1cc2f72-47f2-4232-a944-91fea48b6126.jpeg?w=960',
'https://toidicafe.vn/static/images/place/thong-dong-cafe/ae46567e-29fa-487c-9465-fc775edcf2ef.jpeg?w=960']
const ImageDetail = (props: Props) => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const OpenMultipleImage = (url: string) => {
    console.log(url)
    dispatch(OpenPreview({currentImage:url,images:array}))
  }

  return (
    <div className="image-detail"> {
      array.length > 0 && ( <>
      <div className={"image-detail__list " +`image-detail__list-${array.length < 5? array.length : 5}` }> 
      {
        array.map((item:string,index:number) => index < 5 ? (
        <div key={index} className={`image-detail__contain item-${index + 1}`} style={{gridArea:`i-${index + 1 }`}} onClick={()=>OpenMultipleImage(item)}>
          {
            index == 4 && (
              <div className="image-detail__show-more" onClick={(e)=>{e.stopPropagation();navigate(`/place/eeshop/photos`)}}>
                <div className="image-detail__show-more-count">
                  +{array.length - 5} ảnh
                </div>
              </div>
            )
          }
          <img src={item} alt="" />
        </div>
        ):null)
      }
      </div>
      <div className="image-detail__button-show-more" onClick={()=>navigate(`/place/eeshop/photos`)}>
        <BsImages></BsImages> <span>Xem tất cả &#40; {array.length} &#41;</span>
      </div>
      </>
      )
    }
    </div>
  )
}

export default ImageDetail