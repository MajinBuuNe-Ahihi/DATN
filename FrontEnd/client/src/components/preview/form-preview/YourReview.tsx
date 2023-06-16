import { Field, FormikErrors, FormikTouched } from 'formik'
import React, { useState } from 'react'

type Props = {
  errors: FormikErrors<{
    title: string,
    content: string
  }>,
  touched: FormikTouched<{
    title: string,
    content: string
  }>,
  handleChange:  {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
  }
}

export default function YourReview({ errors, touched,handleChange }: Props) {
  const [letter, setLetter] = useState<string>("");
  const textAreaHandle = (e: InputEvent) => {
    let target = e.target as HTMLInputElement;
    setLetter(target.value);
    handleChange(e);
  }
  return (
    <div className="preview__your-preview">
       <div className="preview__section-name">
          Đánh giá của bạn
      </div>
      <div className="preview__your-preview-row">
        <Field className ='form-input' name='title' placeholder="Nhập tiêu đề đánh giá"/>
        {errors.title && touched.title ? (
          <span className='form-error-message'>{errors.title}</span>
        ) : null}
        <Field onChange={(e: InputEvent) => textAreaHandle(e)}
          className='form-input form-input-textarea'  name='content' as='textarea' placeholder="Nhập nội dung đánh giá" />
        <span className="preview__label">
          {letter.length} ký tự <span className = {errors.content && touched.content && 'error' || ''}>(tối thiểu 10 ký tự)</span>
        </span>
      </div>
    </div>
  )
}