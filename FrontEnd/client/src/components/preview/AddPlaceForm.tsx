import { Form, Formik } from 'formik';
import { Button } from '../common/Button';
import { HandleUpload } from '../common/upload';
import Rates from './form-preview/Rates';
import YourReview from './form-preview/YourReview';
import AnonymousButton from './form-preview/AnonymousButton';
import * as Yup from 'yup';
import { Col, Container, Row } from 'react-bootstrap';
import ChooosePreviewPlace from './addplacepreview/ChoosePreviewPlace';


type Props = {}

const SignupSchema = Yup.object().shape({
  title: Yup.string().required('title is not blank'),
  content: Yup.string().required().min(10,'content length must more than 10')
});

export default function AddPlaceForm({}: Props) {
  return (
      <Formik
        initialValues={{
          title: '',
          content: '',
          anonymous: false,
          start:[]
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
            console.log(values.content)
        }}
        >
        {({ errors, touched, handleChange }) => (
        <Form className="preview__form">
          <Container fluid>
            <Row className='justify-content-between'>
              <Col md={6} xs={12}>
                <div className="preview__form-left">
                  <Rates></Rates>
                  <YourReview handleChange={handleChange} touched={touched} errors={errors}></YourReview>
                  <HandleUpload></HandleUpload>
                  <AnonymousButton handleChange={handleChange} ></AnonymousButton>
                    <Button typefunc={{ type: 'submit' }} className='preview__submit' type={2}
                    bg={1} children={
                      <span>
                        Gửi đánh giá của bạn
                    </span>}
                  />
                </div>
              </Col>
              <Col md={6} xs={12}>
                <ChooosePreviewPlace/>
              </Col>
            </Row>
          </Container>
          </Form>)}
       </Formik>
  )
}