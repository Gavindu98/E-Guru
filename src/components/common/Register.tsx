// import React from "react";
import LandingPageNavBar from "./LandingPageNavBar";
import React, { useEffect, useState } from "react";
// import { AuthService } from "../../services/AuthService";
// import { RequestState } from "../../RequestState";
// import swal from "sweetalert";
// import { Redirect } from "react-router";
import { RouteName } from "../../RouteName";
import "../vendors/styles/core.css";
import "../vendors/styles/style.css";
import loginImage from "../../components/vendors/images/login-page-img.png";
import logo from "../../components/vendors/images/xpGrowthLogo.png";
const Register: React.FC = () => {
    // const token = AuthService.getToken();
    // const initialState = { email: "", password: "" };
  
    // const [userData, setUserData] = useState(initialState);
    // const [error, setError] = useState<string>();
    // const [loginRequestState, setLoginRequestState] = useState<RequestState>(RequestState.INITIAL);
  
    // useEffect(() => {
    //   if (loginRequestState === RequestState.LOADING) {
    //     AuthService.userLogin(userData)
    //       .then((res) => {
    //         if (res.success) {
    //           AuthService.setToken(res.data);
    //           setLoginRequestState(RequestState.SUCCESS);
    //         } else {
    //           setError(res.error);
    //           setLoginRequestState(RequestState.FAILED);
    //         }
    //       })
    //       .catch((e) => {
    //         setError(e);
    //         setLoginRequestState(RequestState.FAILED);
    //       });
    //   } else if (loginRequestState === RequestState.FAILED) {
    //     swal({ title: error, icon: "error" });
    //   }
    // }, [loginRequestState]);
  
    // const submitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    //   event.preventDefault();
    //   setLoginRequestState(RequestState.LOADING);
    //   console.log("LOGIN REQUEST", loginRequestState);
    // };
  
    // if (token || loginRequestState === RequestState.SUCCESS) {
    //   return <Redirect to={RouteName.ROOT} />;
    // }

    return (
        <div className="login-page">
      <div className="login-header box-shadow">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="brand-logo">
            <a href="/home">
              {/* <img src={logo} /> */}
              E-Guru
            </a>
          </div>
        </div>
      </div>
      <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
        <div className="container mt-100">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-7">
              <img src={loginImage} />
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="login-box bg-white box-shadow border-radius-10">
                <div className="login-title">
                  <h2 className="text-center text-primary">Register Now</h2>
                </div>
                <form 
                // onSubmit={submitLogin}
                >
                    <div className="input-group custom">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Role"
                    //   onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                    <div className="input-group-append custom">
                      <span className="input-group-text">
                        <i className="icon-copy dw dw-user1"></i>
                      </span>
                    </div>
                  </div>
                    <div className="input-group custom">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Username"
                    //   onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                    <div className="input-group-append custom">
                      <span className="input-group-text">
                        <i className="icon-copy dw dw-user1"></i>
                      </span>
                    </div>
                  </div>
                  <div className="input-group custom">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Email"
                    //   onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                    <div className="input-group-append custom">
                      <span className="input-group-text">
                        <i className="icon-copy dw dw-user1"></i>
                      </span>
                    </div>
                  </div>
                  <div className="input-group custom">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                    //   onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                    />
                    <div className="input-group-append custom">
                      <span className="input-group-text">
                        <i className="dw dw-padlock1"></i>
                      </span>
                    </div>
                  </div>
                  <div className="input-group custom">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Confirm Password"
                    //   onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                    />
                    <div className="input-group-append custom">
                      <span className="input-group-text">
                        <i className="dw dw-padlock1"></i>
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <div className="input-group mb-0">
                        <a href="/login" type="submit" className="btn btncolor btn-lg btn-block">
                          Sign Up
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Register;



