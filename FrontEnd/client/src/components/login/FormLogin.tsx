import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import '../../styles/login.scss'
import { AiOutlineEye, HiOutlineMail } from '../common'
import SocialLogin from './SocialLogin'
import { gql, useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";

const LOGIN_USER = gql`
query Login($email: String, $password: String) {
  login(email: $email, password: $password) {
    email
    password
    userName
    userID
  }
}
`;
type Props = {
  changePage: React.Dispatch<React.SetStateAction<number>>;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('invalid email'),
  password: Yup.string().required('password is not blank')
});
 
export default function FormLogin({changePage}: Props) {
  const { loading, error, data ,refetch } = useQuery(LOGIN_USER);
  return (
    <div className="login__form">
      <div className="login__heading">
        Đăng nhập tài khoản
      </div>
      <Formik
      initialValues={{
          email: '',
          password: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
       await refetch({
           email: values.email,
           password:  values.password    
       }).then((data) => {
        localStorage.setItem("user", JSON.stringify(data.data.login));
        values = { email: "",  password: "" };
        (() => changePage(-1))()
       })

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

            <label className='login__label' htmlFor='info'>Mật khẩu</label>
            <div className="login__input-contain">
              <Field className='login__input' name='password' />
              <AiOutlineEye className="login__icon" size={25}></AiOutlineEye>
            </div>
            {errors.email && touched.email ? (
              <span className='login__error-message'>{errors.password}</span>
            ) : null}
            <Field type={'submit'} value={'Đăng Nhập'} class="login__submit-button" ></Field>
          </Form>
        )}
      </Formik>
      <div className="login__label-other-method">
        <span></span>
        <span>Hoặc tiếp tục với</span>
        <span></span>
      </div>
      <div className="login__social-contain">
        <SocialLogin type='google'></SocialLogin>
        <SocialLogin type='facebook'></SocialLogin>
      </div>
      <div className="login__forget-button" onClick={()=>changePage(1)}>
        Quên mật khẩu?
      </div>
      <div className="login__signup">
        Bạn chưa có tài khoản? <span className="login__signup-button"  onClick={()=>changePage(2)}>
          Tạo tài khoản
        </span>
      </div>
    </div>
  )
}