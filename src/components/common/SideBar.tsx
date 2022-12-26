// import React from "react";
import React, { useEffect, useState } from "react";
import "../vendors/styles/sideBar.css";
import Icon from "../vendors/images/icon.png"

const SideBar: React.FC<{ HandleClickClose: any }> = (props) => {
  // const [show, setShow] = useState(false);
  // const HandleClickClose = () => {
  //   setShow(true);
  // };
  // const HandleClickShow = () => {
  //   setShow(true);
  // };

  return (
    <div>

      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light row h-100 visiblity"
        style={{ width: 170 }}
      >
        <div className="d-flex flex-row col">
          <a
            href="/dashboard"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use />
            </svg>
            <span className="fs-4">
              <img
                src={Icon}
              />
            </span>
          </a>
          <div className="col"></div>
          <div
            className="col pe-auto"
            style={{ display: "flex", flexDirection: "row-reverse" }}
          >
            <a className="navbar-brand" href="#">
              <span className="p-2 fs-4 pe-auto" onClick={props.HandleClickClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <hr />

        <ul className="nav nav-pills flex-column mb-auto h-100">
          <li className="nav-item">
            <a href="/dashboard" className="nav-link font-white" aria-current="page">
              <svg className="bi me-2" width="16" height="16">
                <use href="/dashboard" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="/forum" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use href="/forum" />
              </svg>
              Forum
            </a>
          </li>
          <li>
            <a href="/library" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use href="/library" />
              </svg>
              Library
            </a>
          </li>
          <li>
            <a href="/lessons" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use href="/lessons" />
              </svg>
              Lessons
            </a>
          </li>
          <li>
            <a href="/my-section" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use href="/my-section" />
              </svg>
              My section
            </a>
          </li>
          <li>
            <a href="/bookmark" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use href="/bookmark" />
              </svg>
              Bookmark
            </a>
          </li>
          <li>
            <a href="/setting" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use href="/setting" />
              </svg>
              Setting
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use href="#people-circle" />
              </svg>

              Logout
            </a>
          </li>
          {/* <li>
                <a href="#" className="nav-link link-dark">
                  <svg className="bi me-2" width="16" height="16">
                    <use href="#people-circle" />
                  </svg>
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-dark">
                  <svg className="bi me-2" width="16" height="16">
                    <use href="#people-circle" />
                  </svg>
                  Customers
                </a>
              </li> */}
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default SideBar;
