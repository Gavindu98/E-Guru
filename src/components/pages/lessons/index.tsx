// import React from "react";
import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import SideBar from "../../common/SideBar";

const Index: React.FC = () => {
  const [shownavBar, setShownavBar] = useState(true);

  const HandleClickShowNavbar = () => {
    setShownavBar(true);
  };
  const HandleClickClose = () => {
    setShownavBar(false);
  };
  return (
    <React.Fragment>
      <div
        className="container-lg h-full justify-cotent-center "
        style={{ minHeight: "500px" }}
      >
        <div className="pt-4">
          <ul className="nav justify-content-center">
            <li className="nav-item pl-2">
              <select
                className="form-select form-select-sm btn btn-primary"
                aria-label=".form-select-sm example"
              >
                <option selected>Language</option>
                <option value="sinhala">Sinhala</option>
                <option value="english">English</option>
                <option value="tamil">Tamil</option>
              </select>
            </li>
            <li className="nav-item pl-2">
            <select
                className="form-select form-select-sm btn btn-primary"
                aria-label=".form-select-sm example"
              >
                <option selected>Grade</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
              </select>
            </li>
            <li className="nav-item pl-2">
            <select
                className="form-select form-select-sm btn btn-primary"
                aria-label=".form-select-sm example"
              >
                <option selected>Lesson</option>
                <option value="09">Flutter</option>
                <option value="10">React</option>
                <option value="11">Larravel</option>
              </select>
            </li>
            <li className="nav-item pl-2">
              <button className="btn btn-warning">Filter</button>
            </li>
          </ul>
        </div>
        <div className="pt-4">
        <table className="table table table-light table-striped">
              {/* <caption>List of users</caption> */}
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Author</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="user d-flex flex-row align-items-center">
                        <img
                          src="https://i.imgur.com/hczKIze.jpg"
                          width="30"
                          className="user-img  mr-2"
                        />
                      </div>
                    </div>
                  </th>
                  <td>Gavindu</td>
                  <td>Otto</td>
                  <td>published</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="user d-flex flex-row align-items-center">
                        <img
                          src="https://i.imgur.com/hczKIze.jpg"
                          width="30"
                          className="user-img  mr-2"
                        />
                      </div>
                    </div>
                  </th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>publish</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="user d-flex flex-row align-items-center">
                        <img
                          src="https://i.imgur.com/hczKIze.jpg"
                          width="30"
                          className="user-img  mr-2"
                        />
                      </div>
                    </div>
                  </th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>published</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
