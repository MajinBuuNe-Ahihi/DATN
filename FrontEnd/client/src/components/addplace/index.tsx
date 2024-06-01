import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import "../../styles/add-place.scss";
import { AiOutlinePlus, Button, HandleUpload } from "../common";
import FormContactInformation from "./FormContactInformation";
import FormInfomationBasic from "./FormInfomationBasic";
import FormOtherInformation from "./FormOtherInformation";
import * as geo from "opencage-api-client";
import { gql, useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ADD_STORE = gql`
  mutation Mutation($store: StoreInput) {
    createStore(store: $store) {
      storeID
      storeName
      areaID
      storeAddress
      longtitude
      latitude
      directInfo
      openTime
      closeTime
      toPrice
      fromPrice
      wifiName
      wifiPassword
      types
      convenients
      phoneNumber
      email
      facebookLink
      instagramLink
      website
      createBy
      createDate
      modifiedBy
      modifiedDate
    }
  }
`;

type Props = {};
const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Bắt buộc"),
  area: Yup.string().required("Bắt buộc"),
  address: Yup.string().required("Bắt buộc"),
  direct: Yup.string(),
  info: Yup.string(),
  owner: Yup.string(),
  phone: Yup.string().min(10, "Số điện thoại không hợp lệ"),
  email: Yup.string().email("email không hợp lệ"),
  time_open: Yup.string().matches(
    /^([0-1][0-9]|[2][0-3]):[0-5][0-9]$/,
    "Thời gian không hợp lệ"
  ),
  time_closed: Yup.string().matches(
    /^([0-1][0-9]|[2][0-3]):[0-5][0-9]$/,
    "Thời gian không hợp lệ"
  ),
});
export default function AddPlace({}: Props) {
  const [mutateFunction, { data, loading, error }] = useMutation(ADD_STORE);
  const [loadingCustom, setLoadingCustom] = useState(false);
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
    <div className="add-place-wrapper">
      <div className="add-place-container">
        <div className="add-place-header">
          <div className="add-place-header__heading">Thêm địa điểm</div>
          <div className="add-place-header__text">
            Những quán cafe yêu thích của bạn chưa có trên CafeChill? Chia sẻ
            với cộng đồng ngay!
          </div>
        </div>
        <Formik
          initialValues={{
            id: uuidv4(),
            name: "",
            area: "",
            address: "",
            direct: "",
            info: "",
            owner: "false",
            phone: "",
            email: "",
            facebook_url: "",
            instagram_url: "",
            website: "",
            time_open: "",
            time_closed: "",
            min_cost: 0,
            max_cost: 0,
            wifi: "",
            pass_wifi: "",
            style_shop: [],
            convenient: [],
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            try {
              setLoadingCustom(true);
              let location: { lat: Number; lng: Number } = { lng: 0, lat: 0 };
              if (values.address) {
                await geo
                  .geocode({
                    q: values.address,
                    key: "d2371614c5a4405ebb47894f54025aba",
                  })
                  .then((data) => {
                    if (data.status.code === 200 && data.results.length > 0) {
                      const place = data.results[0];
                      location = place.geometry;
                    } else {
                      console.log("Status", data.status.message);
                      console.log("total_results", data.total_results);
                    }
                  })
                  .catch((error) => {
                    console.log("Error", error.message);
                    if (error.status.code === 402) {
                      console.log("hit free trial daily limit");
                    }
                  });
              }

              await mutateFunction({
                variables: {
                  store: {
                    wifiPassword: values.pass_wifi,
                    wifiName: values.wifi,
                    website: values.website,
                    types: values.style_shop,
                    toPrice: values.max_cost.toString(),
                    storeName: values.name,
                    storeID: values.id,
                    storeAddress: values.address,
                    phoneNumber: values.phone,
                    openTime: values.time_open,
                    longtitude: location?.lng,
                    latitude: location?.lat,
                    instagramLink: values.instagram_url,
                    fromPrice: values.min_cost.toString(),
                    facebookLink: values.facebook_url,
                    email: values.email,
                    directInfo: values.direct,
                    description: values.info,
                    convenients: values.convenient,
                    closeTime: values.time_closed,
                    areaID: values.area,
                  },
                },
              })
                .then((data) => {
                  let id = values.id;
                  if (data) {
                    values = {
                      id: uuidv4(),
                      name: "",
                      area: "",
                      address: "",
                      direct: "",
                      info: "",
                      owner: "false",
                      phone: "",
                      email: "",
                      facebook_url: "",
                      instagram_url: "",
                      website: "",
                      time_open: "07:00",
                      time_closed: "23:00",
                      min_cost: 10000,
                      max_cost: 100000,
                      wifi: "",
                      pass_wifi: "",
                      style_shop: [],
                      convenient: [],
                    };
                  }
                  showToast();
                  navigate(`/place/${id}`);
                })
                .catch(() => {
                  showToastError();
                });
            } catch {
              showToastError();
            } finally {
              setLoadingCustom(false);
            }
          }}
        >
          {({ errors, touched, handleChange }) => (
            <Form className="form-add-place">
              <>
                {(loadingCustom || loading) && (
                  <div className="loader-overlay">
                    {" "}
                    <div className="loader"></div>{" "}
                  </div>
                )}
              </>
              <div className="add-place-name-section">Thông tin cơ bản</div>
              <hr />
              <FormInfomationBasic
                handleChange={handleChange}
                errors={errors}
                touched={touched}
              />
              <div className="add-place-name-section">Thông tin khác</div>
              <hr />
              <FormOtherInformation errors={errors} touched={touched} />
              <div className="add-place-name-section">Thông tin liên hệ</div>
              <hr />
              <FormContactInformation errors={errors} touched={touched} />
              <div className="add-place-name-section">Hình ảnh</div>
              <hr />
              <HandleUpload></HandleUpload>
              <div className="add-place-name-section">Menu</div>
              <hr />
              <HandleUpload></HandleUpload>
              <Button
                typefunc={{ type: "submit" }}
                className="add-place-button"
                type={2}
                bg={1}
                children={
                  <span className="add-place-button-container">
                    <AiOutlinePlus size={25} />
                    <span>Thêm quán</span>
                  </span>
                }
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
