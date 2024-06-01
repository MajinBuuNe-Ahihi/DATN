import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../../styles/login.scss";
import { AiOutlineEye, HiOutlineMail, AiOutlineUser } from "../common";
import { useAppDispatch, useAppSelector, useCheckpoint } from "../../hooks";
import SocialLogin from "./SocialLogin";
import { gql, useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";

const ADD_USER = gql`
  mutation Mutation($user: UserInput) {
    createUser(user: $user) {
      userID
      userName
      password
      fullName
      email
      modifiedDate
      modifiedBy
      createDate
      createBy
    }
  }
`;

type Props = {
  changePage: React.Dispatch<React.SetStateAction<number>>;
};

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("invalid email"),
  password: Yup.string().required("password is not blank"),
});

export default function Register({ changePage }: Props) {
  const [mutateFunction, { data, loading, error }] = useMutation(ADD_USER);
  return (
    <div className="login__form">
      <div className="login__heading">Tạo tài khoản</div>
      <Formik
        initialValues={{
          email: "",
          name: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
        c
 
        if (data) {
          localStorage.setItem("user", JSON.stringify(data.createUser));
          values = { email: "", name: "", password: "" };
          (() => changePage(0))()
        }
        }}
      >
        {({ errors, touched }) => (
          <Form className="login__form-form">
            <label className="login__label" htmlFor="email">
              Email{" "}
            </label>
            <div className="login__input-contain">
              <Field className="login__input" name="email" />
              <HiOutlineMail size={25} className="login__icon"></HiOutlineMail>
            </div>
            {errors.email && touched.email ? (
              <span className="login__error-message">{errors.email}</span>
            ) : null}
            <label className="login__label" htmlFor="info">
              Tên hiển thị
            </label>
            <div className="login__input-contain">
              <Field className="login__input" name="name" />
              <AiOutlineUser className="login__icon" size={25}></AiOutlineUser>
            </div>
            {errors.name && touched.name ? (
              <span className="login__error-message">{errors.name}</span>
            ) : null}
            <label className="login__label" htmlFor="info">
              Mật khẩu
            </label>
            <div className="login__input-contain">
              <Field className="login__input" name="password" />
              <AiOutlineEye className="login__icon" size={25}></AiOutlineEye>
            </div>
            {errors.email && touched.email ? (
              <span className="login__error-message">{errors.password}</span>
            ) : null}
            <Field
              type={"submit"}
              value={loading?"Loading...":"Tạo Tài Khoản"}
              class="login__submit-button"
            ></Field>
          </Form>
        )}
      </Formik>
      <div className="login__label-other-method">
        <span></span>
        <span>Hoặc tiếp tục với</span>
        <span></span>
      </div>
      <div className="login__social-contain">
        <SocialLogin type="google"></SocialLogin>
        <SocialLogin type="facebook"></SocialLogin>
      </div>
      <div className="login__signup">
        Bạn đã có tài khoản?{" "}
        <span className="login__signup-button" onClick={() => changePage(0)}>
          Đăng nhập
        </span>
      </div>
    </div>
  );
}
