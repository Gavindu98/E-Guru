// import React from "react";
import LandingPageNavBar from "./LandingPageNavBar";
import React, { useEffect, useState, useContext } from "react";
// import { AuthService } from "../../services/AuthService";
// import { RequestState } from "../../RequestState";
// import swal from "sweetalert";
// import { Redirect } from "react-router";
import { RouteName } from "../../RouteName";
import { useNavigate } from "react-router-dom";
import "../vendors/styles/core.css";
import "../vendors/styles/style.css";
import loginImage from "../../components/vendors/images/logoColor.png";
import logo from "../../components/vendors/images/xpGrowthLogo.png";
import { AuthService } from "../../services/AuthService";
import AuthContext from "../../context/AuthProvider";
import Swal from "sweetalert2";
const Login: React.FC = () => {
  const initialState = { email: "", password: "" };
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [userData, setUserData] = useState(initialState);
  const [userRole, setUserRole] = useState<any>();
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");

  const loginUser = (): void => {
    if (!userData.email) {
      setErrorMsg("Please valid email address");
      setSuccessMsg("");
    }
    if (!userData.password) {
      setErrorMsg("Please enter the password");
      setSuccessMsg("");
    }
    const data = {
      email: userData.email,
      pwd: userData.password,
    };
    //test
    //console.log("reg form data",data)
    AuthService.loginUser(data).then((res) => {
      console.log("", res)
      if (res.data) {
        //console.log("registered",res.data)
        Swal.fire({
          title: "Success!",
          icon: "success",
          confirmButtonColor: "#012677",
          iconColor: "#00b4fc",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "Ok",
        })
        setErrorMsg("");
        navigate('/dashboard');
        console.log("token", res.data.accessToken)
        console.log("üser", res.data)
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("auth", res.data);
        localStorage.setItem("userId", res.data.id);
        setAuth(res.data)
      } else {
        console.log(res)
        setErrorMsg("Something went wrong");
        Swal.fire({
          title: "Something went wrong please try again",
          icon: "error",
          confirmButtonColor: "#012677",
          iconColor: "#00b4fc",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "Ok",
        })
      }
    });
  };
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
  //console.log("localStorage.setItem", localStorage.getItem("token"))
  return (
    <div className="login-page container-Main">
      {/* <div className="login-header box-shadow">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="brand-logo">
            <a href="/home">
              E-Guru
            </a>
          </div>
        </div>
      </div> */}
      <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
        <div className="container mt-100">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-7">
              <img src={loginImage} />
            </div>
            <div className="col-md-6 col-lg-5 mb-8">
              <div className="login-box bg-white box-shadow border-radius-10">
                <div className="login-title">
                  <h2 className="text-center text-primary">Login</h2>
                </div>
                <div
                // onSubmit={submitLogin}
                >
                  {errorMsg.length ?
                    <div className="bg-muted border border-danger rounded">
                      <p className="text-danger fs-12 p-2">{errorMsg}</p>
                    </div>
                    : null}
                  <div className="input-group custom">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Email"

                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
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
                      onChange={(e) => setUserData({ ...userData, password: e.target.value })}
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
                        <button onClick={() => loginUser()} className="btn btncolor btn-lg btn-block">
                          Sign In
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-0">
                  <a href="/register" className="btn btn-secondary mt-2 btn-lg btn-block">Register Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;



