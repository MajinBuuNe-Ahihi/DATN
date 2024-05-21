import React from 'react'
import { Field, FormikErrors, FormikTouched } from 'formik'
import '../../styles/form-contact-information.scss'

type Props = {
  errors: FormikErrors<{
    phone: string,
    email: string
  }>,
  touched: FormikTouched<{
    phone: string,
    email: string
  }>
}

let arrField = [{ name: 'phone', label: 'Điện thoại', placeholder: 'Nhập số điện thoại' },
  { name: 'email', label: 'Email', placeholder: 'Nhập email' },
  { name: 'facebook_url', label: 'Facebook', placeholder: 'Nhập link facebook' },
  { name: 'instagram_url', label: 'Instagram', placeholder: 'Nhập link instagram' },
  { name: 'website', label:'Website',placeholder: 'Nhập website'}]

export default function FormcontacttInformation({errors,touched }: Props) {
  return (
    <div className='form-contact-information'>
      {
        arrField.map(({ name, placeholder, label }, index) => 
        { let wrong = (name == 'email' || name == 'phone') && errors[`${name == 'email' ? 'email' : 'phone'}`] &&
          touched[`${name == 'email' ? 'email' : 'phone'}`] 
          return (
          <div className='form-contact-information__row' key={index}>
          <label className= {'form-contact-information__label'} htmlFor={name}>{label}:</label>
          <div className="form-contact-information__input">
           <Field className={'form-input  form-contact-information__info'.concat(wrong?' error':'')} name={name} placeholder={placeholder} />
          { wrong &&
          <span className={'form-error-message form-contact-information__error'}>{errors[`${name == 'email' ? 'email' : 'phone'}`]}</span>}
          </div>
          </div>
          )
        }
       ) 
      }
    </div>
  )
}