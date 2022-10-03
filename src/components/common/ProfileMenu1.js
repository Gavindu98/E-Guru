import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import defaultUserImg from "../vendors/images/default/defaultUserImg.png";
import { withRouter, Link } from "react-router-dom";


const ProfileMenu = (props) => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);
  const [adminMenu, setAdminMenu] = useState(false);
  /* const [userData, setUserData] = useState() */
  const auth = {}
  const [username, setusername] = useState("Admin");
  /*   useEffect(() => {
    AuthService.getMe().then((res) => {
      if (res.success) {
        setAuth(res.data);
      }
    });
  }, []); */
  useEffect(() => {
    console.log("asdddddddddddddddddddddddddddddddddd", auth);
  }, []);
 // console.log("auth", auth);
  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        const obj = JSON.parse(localStorage.getItem("authUser"));
        setusername(obj.displayName);
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        const obj = JSON.parse(localStorage.getItem("authUser"));
        setusername(obj.username);
      }
    }
    setusername("Henry");
  }, [props.success]);

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item "
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            style={{ objectFit: "cover" }}
            className="rounded-circle header-profile-user"
            src={
              auth?.profileImageId ? auth.profileImageId.url : defaultUserImg
            }
            alt="Header Avatar"
          />
          {/* {
            auth.profileImageId? 
            <img className="rounded-circle header-profile-user" src={auth?.profileImageId ? auth.profileImageId.url : defaultUserImg} alt="Header Avatar" />
            : 
            <span
                  style={{borderColor: "red"}}
                  className={
                    
                    "avatar-title rounded-circle bg-soft bg-secondary" +
                    " text-" +
                    auth.color +
                    " font-size-16"
                  }
                >
                  {auth.name.charAt(0)}
                </span>
          } */}

          <span className="d-none d-xl-inline-block ms-2 me-1">
            {auth?.name}
          </span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          {/*           <DropdownItem tag="a" href="/profile">
            {" "}
            <i className="bx bx-user font-size-16 align-middle me-1"/>
            {props.t("Profile")}{" "}
          </DropdownItem> */}
          <Link
            to="/profile"
            className="dropdown-item"
            onClick={() => setMenu(false)}
          >
            {" "}
            <i className="bx bx-cog font-size-16 align-middle me-1" />
            {props.t("Settings")}{" "}
          </Link>
          <Link
            to="/profile"
            className="dropdown-item"
            onClick={() => setMenu(false)}
          >
            {" "}
            <i className="bx bx-cog font-size-16 align-middle me-1" />
            {props.t("Settings")}{" "}
          </Link>
          <Link
            to="/profile"
            className="dropdown-item"
            onClick={() => setMenu(false)}
          >
            {" "}
            <i className="bx bx-cog font-size-16 align-middle me-1" />
            {props.t("Settings")}{" "}
          </Link>
          <Link
            to="/profile"
            className="dropdown-item"
            onClick={() => setMenu(false)}
          >
            {" "}
            <i className="bx bx-cog font-size-16 align-middle me-1" />
            {props.t("Settings")}{" "}
          </Link>

          {/* <DropdownItem tag="a" href="/crypto-wallet">
            <i className="bx bx-wallet font-size-16 align-middle me-1"/>
            {props.t("My Wallet")}
          </DropdownItem>
          <DropdownItem tag="a" href="#">
            <span className="badge bg-success float-end">11</span>
            <i className="bx bx-wrench font-size-16 align-middle me-1"/>
            {props.t("Settings")}
          </DropdownItem>*/}
          {/* <DropdownItem tag="a" toggle={() => setAdminMenu(!adminMenu)} isOpen={adminMenu}>
            <i className="bx bx-lock-open font-size-16 align-middle me-1"/>
            {props.t("My Post")}
            
          </DropdownItem>  */}

          {/* {auth?.role == Role.SUPER_ADMIN || auth?.role == Role.ADMIN ? (
            <>
              <div className="dropdown-divider" />
              <div className="dropdown-item">
                
                <span>
                  <Dropdown
                    isOpen={adminMenu}
                    direction="right"
                    className="d-inline-block dropend"
                    toggle={() => setAdminMenu(!adminMenu)}
                  >
                    <DropdownToggle classname="btn header-item ">
                      Admin <i className="mdi mdi-chevron-right" />
                    </DropdownToggle>
                    <DropdownMenu data-popper-placement="right-start">
                      <Link
                        to="/admin/manage-users"
                        className="dropdown-item"
                        onClick={() => setMenu(false)}
                      >
                        <i className="bx bx-group font-size-16 align-middle me-1 " />
                        <span>{props.t("Manage Users")}</span>
                      </Link>
                      <Link
                        to="/admin/view-message"
                        className="dropdown-item"
                        onClick={() => setMenu(false)}
                      >
                        <i className="bx bx-message-alt font-size-16 align-middle me-1 " />
                        <span>{props.t("View Message")}</span>
                      </Link>
                      <Link
                        to="/admin/dashboard"
                        className="dropdown-item"
                        onClick={() => setMenu(false)}
                      >
                        <i className="bx bx-dollar font-size-16 align-middle me-1 " />
                        <span>{props.t("Set Commision")}</span>
                      </Link>
                      <Link
                        to="/admin/report"
                        className="dropdown-item"
                        onClick={() => setMenu(false)}
                      >
                        <i className="bx bx-pie-chart-alt font-size-16 align-middle me-1 r" />
                        <span>{props.t("Report")}</span>
                      </Link>
                      {auth?.role == Role.SUPER_ADMIN && (
                        <>
                          <Link
                            to="/admin/register-admin"
                            className="dropdown-item"
                            onClick={() => setMenu(false)}
                          >
                            <i className="bx bx-shield-quarter font-size-16 align-middle me-1 r" />
                            <span>{props.t("Register Admin")}</span>
                          </Link>
                          <Link
                            to="/admin/manage-admin"
                            className="dropdown-item"
                            onClick={() => setMenu(false)}
                          >
                            <i className="bx bx-group font-size-16 align-middle me-1 r" />
                            <span>{props.t("Manage Admins")}</span>
                          </Link>
                        </>
                      )}
                      <Link
                        to="/admin/add-tags"
                        className="dropdown-item"
                        onClick={() => setMenu(false)}
                      >
                        <i className="bx bx-plus font-size-16 align-middle me-1 r" />
                        <span>{props.t("Add Tags")}</span>
                      </Link>
                    </DropdownMenu>
                  </Dropdown>
                </span>
              </div>
            </>
          ) : null} */}

          <div className="dropdown-divider" />
          <Link
            to="/logout"
            className="dropdown-item"
            onClick={() => setMenu(false)}
          >
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{props.t("Logout")}</span>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any,
};

const mapStatetoProps = (state) => {
  const { error, success } = state.Profile;
  return { error, success };
};

export default ProfileMenu;
