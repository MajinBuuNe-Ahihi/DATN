import { Form, Formik } from "formik";
import { Button } from "../common/Button";
import { HandleUpload } from "../common/upload";
import Rates from "./form-preview/Rates";
import YourReview from "./form-preview/YourReview";
import AnonymousButton from "./form-preview/AnonymousButton";
import * as Yup from "yup";
import { Col, Container, Row } from "react-bootstrap";
import ChooosePreviewPlace from "./addplacepreview/ChoosePreviewPlace";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ADD_REVIEW = gql`
  mutation CreateReview($review: ReviewInput) {
    createReview(review: $review) {
      reviewID
      userID
      storeID
      title
      description
      locationRate
      placeRate
      serviceRate
      foodRate
      priceRate
      like
      view
      createBy
      createDate
      modifiedBy
      modifiedDate
    }
  }
`;

type Props = {};

const SignupSchema = Yup.object().shape({
  title: Yup.string().required("Tiêu đề không được bỏ trống"),
  content: Yup.string().required().min(10, "không được nhỏ hơn 10 ký tự"),
});

export default function AddPlaceForm({}: Props) {
  const [mutateFunction, { data, loading, error }] = useMutation(ADD_REVIEW);
  const [storeID, setStoreID] = useState<string>("");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();
  const showToast = () => {
    toast.success("🦄 Bạn đã thêm thành công", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const showToastError = () => {
    toast.error("🦄 Có lỗi xảy ra vui lòng thử lại", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <Formik
      initialValues={{
        title: "",
        content: "",
        anonymous: false,
        locationRate: "",
        placeRate: "",
        serviceRate: "",
        foodRate: "",
        priceRate: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        if (storeID && user.userID) {
          await mutateFunction({
            variables: {
              review: {
                view: 0,
                userID: user.userID,
                title: values.title,
                storeID: storeID,
                serviceRate: Number(values.serviceRate) + 1,
                reviewID: uuidv4(),
                priceRate: Number(values.priceRate) + 1,
                placeRate: Number(values.placeRate) + 1,
                modifiedDate: Date.now(),
                modifiedBy: user.userName,
                locationRate: Number(values.locationRate) + 1,
                like: 0,
                foodRate: Number(values.foodRate) + 1,
                createDate: Date.now(),
                description: values.content,
                createBy: user.userName,
              },
            },
        }).then(()=> {
          navigate(`/explore`);
          showToast();
        }).catch(()=> {
          showToastError();
        });
        }
      }}
    >
      {({ errors, touched, handleChange }) => (
        <Form className="preview__form">
          {(loading) && (
            <div className="loader-overlay">
              {" "}
              <div className="loader"></div>{" "}
            </div>
          )}
          <Container fluid>
            <Row className="justify-content-between">
              <Col md={6} xs={12}>
                <div className="preview__form-left">
                  <Rates handleChange={handleChange}></Rates>
                  <YourReview
                    handleChange={handleChange}
                    touched={touched}
                    errors={errors}
                  ></YourReview>
                  <HandleUpload></HandleUpload>
                  {/* <AnonymousButton handleChange={handleChange} ></AnonymousButton> */}
                  <Button
                    typefunc={{ type: "submit" }}
                    className="preview__submit"
                    type={2}
                    bg={1}
                    children={<span>Gửi đánh giá của bạn</span>}
                  />
                </div>
              </Col>
              <Col md={6} xs={12}>
                <ChooosePreviewPlace setStoreID={setStoreID} />
              </Col>
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  );
}
