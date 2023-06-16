import { Field, FormikErrors, FormikTouched } from 'formik'
import React from 'react'
import '@styles/styles/form-other-information.scss'
import { v4 as uuidv4 } from 'uuid';

type Props = {
  errors: FormikErrors<{
    time_open: string,
    time_closed: string,
    touched: FormikTouched<{
  }>,
    time_open: string,
    time_closed: string,
  }>
}

let style_shop = [{ value: 'Accoustic', name: 'Cafe Acoustic' },
  { value: 'Classic', name: 'Cafe Co dien' },
  { value: 'Outside', name: 'Cafe Ngoai Troi' },
  { value: 'Luxury', name: 'Cafe Sang trong' },
  { value: 'Tone', name: 'Cafe Tone Mau' },
  { value: 'View', name: 'Cafe View Dep' },
  { value: 'PUB', name: 'PUB' },
  { value: 'Popular', name: 'Cafe Binh dan' },
  { value: 'Lounge', name: 'Cafe Lounge' },
  { value: 'Book', name: 'Cafe Sach' },
  { value: 'Pet', name: 'Cafe Thu Cung' },
  { value: 'Onside', name: 'Cafe TRen Cao' },
  { value: 'Garden', name: 'Cafe Vuon' }]
  
let convenient = [{ value: 'Table', name: 'Ban ngoai troi' },
  { value: 'Football', name: 'Chieu bong da' },
  { value: 'Cake', name: 'Banh Ngot' },
  { value: 'Oto', name: 'Cho dau oto' },
  { value: 'Child', name: 'Cho choi cho tre' },
  { value: 'Shipping', name: 'Giao hang' },
  { value: 'Motobike', name: 'Giu xe may' },
  { value: 'Food', name: 'Mang do an ngoai' },
  { value: 'Pet', name: 'Mang thu cung' },
  { value: 'AirCondition', name: 'May lanh & dieu hoa' },
  { value: 'Music', name: 'Nhac song' },
  { value: 'Pay', name: 'Thanh toan bang the' },
  { value: 'Wifi', name: 'Wifi mien phi' }
]

export default function FormOtherInformation({errors,touched}: Props) {
  return (
    <div className='form-other-information__container'>
      <div className='form-other-information__row'>
        <label className='form-other-information__label' > Thoi gian mo </label>
        <div className='form-other-information__input-contain'>
          <div className='form-other-information__input-has-error'>
          <Field type='text' name='time_open' className={`form-input form-other-information__input ${errors.time_open && touched.time_open && 'error'}`} />
          {errors.time_open && touched.time_open ? (
          <span className='form-error-message'>{errors.time_open}</span>
          ) : null}
          </div>
          <span className='form-other-information__distance'>den</span>
          <div className='form-other-information__input-has-error'>
            <Field type='text'  name='time_closed'  className={`form-input form-other-information__input ${errors.time_closed && touched.time_closed && 'error'}`} />
          {errors.time_closed && touched.time_closed ? (
          <span className='form-error-message'>{errors.time_closed}</span>
          ) : null}
          </div>
        </div>
      </div>
      <div className='form-other-information__row'>
        <label className='form-other-information__label' >Khoang gia</label>
        <div className='form-other-information__input-contain'>
          <Field type='number' name='min_cost' className='form-input form-other-information__input-left' min={10000}  step={1000}/>
          <span className='form-other-information__distance'>den</span>
          <Field type='number' name='max_cost' className='form-input form-other-information__input-right' min={10000} step={1000} />
        </div>
      </div>
      <div className='form-other-information__row'>
        <label className='form-other-information__label' >Wifi(neu co) </label>
        <div className='form-other-information__input-contain'>
          <Field type='text' className='form-input form-other-information__input-left'  name='wifi'/>
          <span className='form-other-information__distance'>-</span>
          <Field type='text' className='form-input form-other-information__input-right' name='pass_wifi'/>
        </div>
      </div>
      <div className='form-other-information__row'>
        <label className='form-other-information__label' >Kieu quan </label>
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
        <label className='form-other-information__label' > Tien ich</label>
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