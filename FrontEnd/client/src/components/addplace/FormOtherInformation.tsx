import { Field, FormikErrors, FormikTouched } from 'formik'
import React from 'react'
import '../../styles/form-other-information.scss'
import { v4 as uuidv4 } from 'uuid';

type Props = {
  errors: FormikErrors<{
    time_open: string,
    time_closed: string,
  }>,
  touched: FormikTouched<{
    time_open: string,
    time_closed: string,
  }>
}

let style_shop = [{ value: '8EBA5E2A-C3FF-49A7-AFED-FF422889294E', name: 'Cafe Acoustic' },
  { value: '88B20369-1619-4E8B-A8A3-B6B634DB2114', name: 'Cafe Cổ điển' },
  { value: '75F3A8F6-943C-47BE-A535-FD1F2F8198DE', name: 'Cafe Ngoài trời' },
  { value: 'B5EAC4C9-75C3-461D-AF1C-57CF055C5512', name: 'Cafe Sang trọng' },
  { value: '13D5E472-F4D8-4130-A419-6128E85B70D1', name: 'Cafe Tone màu' },
  { value: 'A6C5266A-A4D3-4D20-808E-F46B1CDC9A5A', name: 'Cafe View đẹp' },
  { value: '5791134A-CCAA-47CE-8385-BD575AF7BDB9', name: 'PUB' },
  { value: 'D83E66D1-AE97-4A31-9213-964B025B1CBA', name: 'Cafe Bình dân' },
  { value: 'CE731A89-3071-4C81-9FB8-37D847894D6C', name: 'Cafe Lounge' },
  { value: '31297DA4-F1C8-4FC8-9868-2B8820176D54', name: 'Cafe Sách' },
  { value: '8BB2772B-92CD-41C5-8715-475EC2FCBFA7', name: 'Cafe Thú Cưng' },
  { value: '28C84A36-2543-4889-B6CC-57C7D593596E', name: 'Cafe Trên cao' },
  { value: 'ED726294-57D8-4D7D-80F0-40C999611FCC', name: 'Cafe Vườn' }]
  
let convenient = [{ value: '1702C5E8-0437-4A93-B0BE-C4F594DBF265', name: 'Bàn ngoài trời' },
  { value: 'ED67CE7D-A5FC-4EE2-A7AF-6465810CC89C', name: 'Chiếu bóng đá' },
  { value: 'ABB06119-0D7C-406C-AF35-87C83E61310B', name: 'Bánh ngọt' },
  { value: '69C44411-8340-4D03-963E-BC6C59651D5B', name: 'Chỗ đỗ ôtô' },
  { value: 'DE808EA0-E6AE-443D-9B33-2E4DC6FA0202', name: 'Chỗ chơi cho trẻ' },
  { value: '8D274479-2E71-4231-B648-D5D65A14171B', name: 'Gửi xe máy' },
  { value: '768E9805-D103-4F20-92C0-2C4A1FF3C0B0', name: 'Mang đồ ăn ngoài' },
  { value: '14AE3767-CA9F-4C73-A55E-5B02537C6002', name: 'Mang thú cưng' },
  { value: '42880498-DFF5-4FB7-9267-39C51018B3EA', name: 'Máy lạnh và điều hòa' },
  { value: 'CDBCD51A-0C50-4EF0-A5FF-AB80FA5F04E5', name: 'Nhạc sống' },
  { value: '14C2DB29-53FF-4B08-A2EE-1E51C352A35F', name: 'Thanh toán bằng thẻ' },
  { value: 'B0BA038D-E016-43D3-ADF7-9DBF6ED5D76B', name: 'Wifi miễn phí' }
]

export default function FormOtherInformation({errors,touched}: Props) {
  return (
    <div className='form-other-information__container'>
      <div className='form-other-information__row'>
        <label className='form-other-information__label' > Thời gian mở </label>
        <div className='form-other-information__input-contain'>
          <div className='form-other-information__input-has-error'>
          <Field type='text' name='time_open' className={`form-input form-other-information__input ${errors.time_open && touched.time_open && 'error'}`} />
          {errors.time_open && touched.time_open ? (
          <span className='form-error-message'>{errors.time_open}</span>
          ) : null}
          </div>
          <span className='form-other-information__distance'>đến</span>
          <div className='form-other-information__input-has-error'>
            <Field type='text'  name='time_closed'  className={`form-input form-other-information__input ${errors.time_closed && touched.time_closed && 'error'}`} />
          {errors.time_closed && touched.time_closed ? (
          <span className='form-error-message'>{errors.time_closed}</span>
          ) : null}
          </div>
        </div>
      </div>
      <div className='form-other-information__row'>
        <label className='form-other-information__label' >Khoảng giá</label>
        <div className='form-other-information__input-contain'>
          <Field type='number' name='min_cost' className='form-input form-other-information__input-left' min={10000}  step={1000}/>
          <span className='form-other-information__distance'>đến</span>
          <Field type='number' name='max_cost' className='form-input form-other-information__input-right' min={10000} step={1000} />
        </div>
      </div>
      <div className='form-other-information__row'>
        <label className='form-other-information__label' >Wifi(nếu có) </label>
        <div className='form-other-information__input-contain'>
          <Field type='text' className='form-input form-other-information__input-left'  name='wifi'/>
          <span className='form-other-information__distance'>-</span>
          <Field type='text' className='form-input form-other-information__input-right' name='pass_wifi'/>
        </div>
      </div>
      <div className='form-other-information__row'>
        <label className='form-other-information__label' >Kiểu quán </label>
        <div className='form-other-information__input-contain'>
          {
            style_shop.map((item:{value:string,name:string},index:number)=><label key={index} className='form-other-information_checkbox'>
              <Field key={index} type='checkbox' name='style_shop' value={item.value} />
               <span className='checkmark'></span>
              {item.name}
            </label>)
          }
        </div>
      </div>
      <div className='form-other-information__row'>
        <label className='form-other-information__label' > Tiện ích</label>
        <div className='form-other-information__input-contain'>
          {
            convenient.map((item:{value:string,name:string},index:number)=><label key={index} className='form-other-information_checkbox'>
              <Field type='checkbox' name='convenient' value={item.value} />
              <span className='checkmark'></span>
              {item.name}
            </label>)
          }
        </div>
      </div>
    </div>
  )
}