import React, { useEffect, useState } from 'react'
import { Field , FormikErrors, FormikTouched } from 'formik'
import {Dropdown, Form} from 'react-bootstrap'
import { SwitchButton } from '../common'
import '../../styles/form-information-basic.scss'


type Props = {
  errors: FormikErrors<{
    name: string,
    area: string,
    address: string,
    direct: string,
    info: string,
  }>,
  touched: FormikTouched<{
    name: string,
    area: string,
    address: string,
    direct: string,
    info: string,
  }>,
  handleChange:  {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
}
}

export default function FormInfomationBasic({ errors, touched, handleChange }: Props) {
  const [area, setArea] = useState<string>("478AE210-BAD3-4A84-A650-45A88CF42457")

  useEffect(() => {
    let input = document.getElementById('area-input') as HTMLInputElement
    input.addEventListener('changee', (e:Event) => handleChange(e) )
    let e = new Event('changee')
    input.dispatchEvent(e)
    return () => {
      input.removeEventListener('changee', (e:Event) => handleChange(e))
    }
  },[area])

  return (
    <div className='form-information-basic'>
      <div className="form-infomation-basic__row">
        <label className='form-label  form__label-basic' htmlFor='name'>Tên quán <span>*</span></label>
        <div className="form-information-basic__contain-input">
        <Field className={'form-input '.concat(errors.name && touched.name ?' error':'')} name='name' placeholder="Nhập tên quán"/>
        {errors.name && touched.name ? (
          <span className='form-error-message form-error-message-1'>{errors.name}</span>
        ) : null}
        </div>
      </div>
      <div className="form-infomation-basic__row">
      <label className='form-label  form__label-basic' htmlFor='area'>Khu vực <span>*</span></label>
      <div className="form-information-basic__contain-input">
        <input type="hidden" id='area-input' name="area" value={area}/>
      <Form.Select onChange={(e)=>{setArea(e.target.value)}}>
        <option value="478AE210-BAD3-4A84-A650-45A88CF42457">Quận Bắc Từ Liêm</option>
        <option value="34E0A43B-8FD8-45DC-A07A-49ADBD1E12BF">Quận Hoàn Kiếm</option>
        <option value="BE6E2EFA-FA6C-491D-8EDB-4A57BFBBC24A">Quận Đống Đa</option>
        <option value="D16F0D34-4F9E-45D5-82C3-8756BDD722EF">Quận Cầu Giấy</option>
        <option value="5F844899-575C-4600-9241-D9366835A83B">Quận Hà Đông</option>
        <option value="333C589C-53D0-4CFA-A456-DDD98BCFFFD6">Quận Hai Bà Trưng</option>
        <option value="65FE1C82-2C9F-4170-BE88-E876C2BFD259">Quận Ba Đình</option>
      </Form.Select>
      {errors.area && touched.area ? (
        <span className='form-error-message form-error-message-2'>{errors.area}</span>
      ) : null}
      </div>
      </div>
      <div className="form-infomation-basic__row">
      <label className='form-label  form__label-basic' htmlFor='address'>Địa chỉ <span>*</span></label>
      <div className="form-information-basic__contain-input">
      <Field className ={'form-input '.concat(errors.address && touched.address ?' error':'')} name='address' placeholder="Nhập địa chỉ cụ thể"/>
      {errors.address && touched.address ? (
        <span className='form-error-message form-error-message-3'>{errors.address}</span>
      ) : null}
      </div>
      </div>
      <div className="form-infomation-basic__row">
      <label className='form-label form__label-basic' htmlFor='direct'>Chỉ đường:</label>
      <div className="form-information-basic__contain-input">  
      <Field className={`form-input `} name='direct' placeholder="Nhập chi tiết đường nếu có"/>
      {errors.direct && touched.direct ? (
        <span className='form-error-message form-error-message-4'>{errors.direct}</span>
      ) : null}
      </div>
      </div>
      <div className="form-infomation-basic__row form-infomation-basic__row--last"> 
      <label className='form-label form__label-basic' htmlFor='info'>Giới thiệu:</label>
      <div className="form-information-basic__contain-input">  
      <Field className ='form-input  form-input-textarea' name='info' as='textarea' placeholder="Nhập giới thiệu về quán"/>
      {errors.info && touched.info? (
        <span className='form-error-message form-error-message-5'>{errors.info}</span>
      ) : null}
      </div>
      </div>
    </div>
  )
}