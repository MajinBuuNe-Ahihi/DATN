import { Field } from 'formik';
import React, { useEffect, useState } from 'react'
import { SwitchButton } from '../../common/SwitchButton'

type Props = {
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void
  }
}

export default function AnonymousButton({ handleChange}: Props) {
   const [anonymous, setAnonymous] = useState<boolean>(false)
    useEffect(() => {
    let input = document.getElementById('anonymous-input') as HTMLInputElement
    input.addEventListener('changee', (e:Event) => handleChange(e) )
    let e = new Event('changee')
    input.dispatchEvent(e)
    return () => {
      input.removeEventListener('changee', (e:Event) => handleChange(e))
    }
  },[anonymous])

  return (
      <div className="preview__anonymous-button">
        <div className="preview__section-name">
          Đánh giá ẩn danh
          <SwitchButton state={setAnonymous}></SwitchButton>
        </div>
        <div className="preview__label">
          Tên của bạn sẽ hiển thị như h*****g và không hiển thị trên dòng thời gian của bạn
        </div>
      <Field type="hidden" value={anonymous} id={"anonymous-input"} name="anonymous"></Field>
      </div>
  )
}