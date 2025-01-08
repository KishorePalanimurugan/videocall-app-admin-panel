import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { LOGIN } from "../../helpers/url_helper";
import { post } from "../../helpers/api_helper";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  Form,
  Input,
  FormFeedback,
  Label,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// actions
import { loginUser } from "../../store/actions";

const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use navigate for manual navigation

  // const validation = useFormik({
  //   enableReinitialize: true,

  //   initialValues: {
  //     email: "Hello123@gmail.com" || "",
  //     password: "John@123456" || "",
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string().required("Please Enter Your Email"),
  //     password: Yup.string().required("Please Enter Your Password"),
  //   }),
  //   onSubmit: async (values) => {
  //     try {
  //       // Call the API with user credentials
  //       const response = await post(LOGIN, {
  //         email: values.email,
  //         password: values.password,
  //       });

  //       if (response && response?.tokens?.access) {
  //         const userRole = response.user?.role;
  //         // const userId = response.user?.id;
  //         console.log(userRole);
  //         // console.log(userId);

  //         sessionStorage.setItem("userRole", userRole);
  //         // sessionStorage.setItem("userId", userId);

  //         // console.log("Access Token:", response.tokens.access.token);
  //         sessionStorage.setItem("accessToken", response.tokens.access.token);
  //         // alert("Login Successfull");

  //         toast.success("Login Successful!", {
  //           position: "top-right",
  //           autoClose: 1000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //         });

  //         setTimeout(() => {
  //           navigate("/dashboard"); // Replace with your desired path
  //         }, 1000);
  //       } else {
  //         // Show error toast for invalid credentials
  //         toast.error("Invalid email or password!");
  //       }
  //     } catch (error) {
  //       // Handle API errors
  //       toast.error("Something went wrong. Please try again!");
  //       console.error("Login Error:", error);
  //     }
  //   },
  // });
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: "Hello123@gmail.com" || "",
      password: "John@123456" || "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      // Simulate a successful login
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        navigate("/dashboard"); // Navigate to the dashboard
      }, 1000);
    },
  });

  const LoginProperties = createSelector(
    (state) => state.Login,
    (login) => ({
      error: login.error,
    })
  );

  const { error } = useSelector(LoginProperties);

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary-subtle">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={""} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      {error ? <Alert color="danger">{error}</Alert> : null}

                      <div className="mb-3">
                        <Label className="form-label">Email</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email
                              ? true
                              : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">
                            {validation.errors.email}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Password</Label>
                        <Input
                          name="password"
                          autoComplete="off"
                          value={validation.values.password || ""}
                          type="password"
                          placeholder="Enter Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.password &&
                            validation.errors.password
                              ? true
                              : false
                          }
                        />
                        {validation.touched.password &&
                        validation.errors.password ? (
                          <FormFeedback type="invalid">
                            {validation.errors.password}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
