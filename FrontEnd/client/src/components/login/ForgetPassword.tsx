import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { HiOutlineMail } from '../common'

type Props = {
  changePage: React.Dispatch<React.SetStateAction<number>>;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('invalid email')
});
 
export default function ForgetPassword({changePage}: Props) {
  return (
    <div className='login__forget'>
      <div className="login__heading">
        Quên mật khẩu
      </div>
      <div className='login__title'>
        Nhập địa chỉ email được liên kết với tài khoản của bạn và chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu
      </div>
      <Formik
        initialValues={{
            email: '',
            password: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values

        }}
        >
        {({ errors, touched }) => (
          <Form className='login__form-form'>
            <label className='login__label' htmlFor='email'>Email </label>
            <div className="login__input-contain">
              <Field className='login__input' name='email' />
              <HiOutlineMail size={25} className="login__icon"></HiOutlineMail>
            </div>
            {errors.email && touched.email ? (
              <span className='login__error-message'>{errors.email}</span>
            ) : null}
            <Field type={'submit'} value={'Gửi Liên Kết'} class="login__submit-button" ></Field>
          </Form>
        )}
      </Formik>
      <div className="login__back">
          Có sự nhầm lẫn? <span className="login__back-button" onClick={()=>changePage(0)} >Quay lại đăng nhập</span>
      </div>
    </div>
    
  )
}