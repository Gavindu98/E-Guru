import React, { useEffect, useState } from "react";
import "../vendors/styles/core.css";
import "../vendors/styles/style.css";
import loginImage from "../../components/vendors/images/logoColor.png";
import { AuthService } from "../../services/AuthService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Register: React.FC = () => {
  const initialState = { role: "", firstname: "", lastname: "", email: "", password: "", ConfirmPassword: "" };
  const navigate = useNavigate();
  const [userData, setUserData] = useState(initialState);
  const [userRole, setUserRole] = useState<any>();
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");

  const registerUser = (): void => {
    if ((!userData.firstname) && (userData.firstname.length > 3)) {
      setErrorMsg("Please enter first name");
      setSuccessMsg("");
    }
    if ((!userData.lastname) && (userData.lastname.length > 3)) {
      setErrorMsg("Please enter last name");
      setSuccessMsg("");
    }
    if (!userData.email) {
      setErrorMsg("Please valid email address");
      setSuccessMsg("");
    }
    if (!userData.password) {
      setErrorMsg("Please enter the password");
      setSuccessMsg("");
    }
    if (!userData.ConfirmPassword) {
      setErrorMsg("Please confirm the password");
      setSuccessMsg("");
    }
    if ((userData.ConfirmPassword != userData.password) && (userData.ConfirmPassword) && (userData.password)) {
      setErrorMsg("password is not similar with re-entered password");
      setSuccessMsg("");
    }
    if ((!userRole?.role)) {
      setErrorMsg("Please enter your role");
      setSuccessMsg("");
    }
    const data = {
      firstname: userData.firstname,
      lastname: userData.lastname,
      email: userData.email,
      pwd: userData.password,
      role: userRole?.role
    };

    console.log("reg form data", data)
    AuthService.registerUser(data).then((res) => {
      if (res.data.message) {
        console.log("registered", res.data)
        Swal.fire({
          title: res.data.message,
          icon: "success",
          confirmButtonColor: "#181641",
          iconColor: "#f8f9fe",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "Ok",
        })
        navigate('/');



      } else {
        console.log(res.data.message);
        setErrorMsg("Something went wrong");
        Swal.fire({
          title: "Something went wrong please try again",
          icon: "error",
          confirmButtonColor: "#181641",
          iconColor: "#f8f9fe",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "Ok",
        })
      }
    });
  };


  return (
    <div className="login-page">

      <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
        <div className="container mt-100">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-7">
              <img src={loginImage} />
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="login-box bg-white box-shadow border-radius-10">
                <div className="login-title">
                  <h2 className="text-center " style={{color: "#181641"}}>Register Now</h2>
                </div>
                {errorMsg.length ?
                  <div className="bg-muted border border-danger rounded">
                    <p className="text-danger fs-12 p-2">{errorMsg}</p>
                  </div>
                  : null}
                <div
                  // onSubmit={submitLogin}
                  className="pt-4"
                >
                  <div className="input-group custom">
                    {/* <label htmlFor="name">Reason to report"</label> */}
                    <select
                      className="form-control select2"
                      title="Country"
                      // value={userRole?.role}
                      onChange={(e) => setUserRole({ ...userRole, role: e.target.value })}
                    >
                      <option value="">Select Your role</option>
                      <option value="1">I'm student</option>
                      <option value="2">I'm tutor</option>
                    </select>
                    {/* <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Role"
                      onChange={(e) => setUserData({ ...userData, role: e.target.value })}
                    /> */}
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
                      placeholder="first name..."
                      onChange={(e) => setUserData({ ...userData, firstname: e.target.value })}
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
                      placeholder="last name..."
                      onChange={(e) => setUserData({ ...userData, lastname: e.target.value })}
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
                  <div className="input-group custom">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Confirm Password"
                      onChange={(e) => setUserData({ ...userData, ConfirmPassword: e.target.value })}
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
                        <button onClick={() => registerUser()} className="btn btncolor btn-lg btn-block">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;



