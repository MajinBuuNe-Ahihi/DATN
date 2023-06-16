import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../styles/contact.scss'
import { toast } from 'react-toastify';
import { Col, Container, Row } from 'react-bootstrap';
type Props = {}
 
 const SignupSchema = Yup.object().shape({
   name: Yup.string().required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
   content: Yup.string().required('Required')
 });
export default function Contact({}: Props) {
  return (
    <div className='contact-wrapper'>
      <Container fluid="md" className='contact-contain'>
        <Row>
          <Col>
            <div className='contact-heading'>
              <div className='contact-heading__title'>
              Liên hệ với chúng tôi
              </div>
              <div className='contact-heading__text'>
              ToiDiCafe hoan nghênh mọi ý kiến đóng góp, chia sẻ về mọi vấn đề liên quan.
              Đừng ngần ngại liên hệ qua các kênh social hoặc email: <b>hoangvmanh10.qn@gmail.com</b>
              Hoặc điền vào form bên dưới để liên hệ với chúng tôi nhé.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} >
            <Formik
            initialValues={{
              name: '',
                content: '',
              email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              toast.success('Cam on ban da lien he toi chung toi! Chung toi se som lien he lai voi ban.');
              console.log(values)
            }}
          >
            {({ errors, touched }) => (
                <Form className='contact-form'>
                <label className='contact-form__label'  htmlFor='name'>Tên của bạn</label>
                <Field className = {`contact-form__input ${errors.name && touched.name ?'error':''}`} name='name' />
                {errors.name && touched.name ? (
                  <span className='contact-form__message'>{errors.name}</span>
                  ) : null}
                <label className='contact-form__label' htmlFor='email'>Email của bạn</label>
                <Field className = {`contact-form__input ${errors.email && touched.email ?'error':''}`} name='email' type='email' />
                  {errors.email && touched.email ? <span className='contact-form__message'>{errors.email}</span> : null}
                <label className='contact-form__label' htmlFor='content'>Lời nhắn của bạn</label>
                <Field className = {`contact-form__textarea ${errors.content && touched.content ?'error':''}`} name='content' as={'textarea'} />
                {errors.content&& touched.content ? <span className='contact-form__message'>{errors.content}</span> : null}
                <button className='contact-form__button'type='submit'>Gui</button>
              </Form>
            )}
            </Formik>
          </Col>
          <Col md={6} xs={0}>
            <Row className="algin-items-end justify-content-center">      
              <img src={'https://toidicafe.vn/images/Contact%20us-amico.svg'} alt='' className='contact-image' />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}