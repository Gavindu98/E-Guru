// import React from "react";
import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import SideBar from "../../common/SideBar";

const Index: React.FC = () => {
  const [shownavBar, setShownavBar] = useState(true);
  const [tab, setTab] = useState(1);
  const [paperTab, setPaperTab] = useState("MODEL");

  const HandleClickShowNavbar = () => {
    setShownavBar(true);
  };
  const HandleClickClose = () => {
    setShownavBar(false);
  };
  const handleClickBooks = () => {
    setTab(1);
  };
  const handleClickPapers = () => {
    setTab(2);
  };
  const handleClickModelPapers = () => {
    setTab(2);
    setPaperTab("MODEL");
  };
  const handleClickPastPapers = () => {
    setTab(2);
    setPaperTab("PAST");
  };
  const handleClickQuizes = () => {
    setTab(3);
  };
  const handleClickArticles = () => {
    setTab(4);
  };
  return (
    <React.Fragment>
      <div className="container-lg h-full">
        
        <div className="d-flex justify-cotent-center">
          <div className=" p-2">
            <div className="card">
              <div className="card-body">
                <ul className="nav justify-content-center">
                  <li className="nav-item pl-2">
                    <button
                      className="btn btn-warning"
                      onClick={handleClickBooks}
                    >
                      Books
                    </button>
                  </li>
                  <li className="nav-item pl-2">
                    <button
                      className="btn btn-warning"
                      onClick={handleClickPapers}
                    >
                      Papers
                    </button>
                  </li>
                  <li className="nav-item pl-2">
                    <button
                      className="btn btn-warning"
                      onClick={handleClickQuizes}
                    >
                      Quizes
                    </button>
                  </li>
                  <li className="nav-item pl-2">
                    <button
                      className="btn btn-warning"
                      onClick={handleClickArticles}
                    >
                      Articles
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: -565 }}>
          <div className="col-2"></div>
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                {tab === 1 ? (
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
                ) : tab === 2 ? (
                  <>
                    <ul className="nav justify-content-left">
                      <li className="nav-item pl-2">
                        <button
                          className="btn btn-warning"
                          onClick={handleClickPastPapers}
                        >
                          Past Papers
                        </button>
                      </li>
                      <li className="nav-item pl-2">
                        <button
                          className="btn btn-warning"
                          onClick={handleClickModelPapers}
                        >
                          Model Papers
                        </button>
                      </li>
                    </ul>
                    {paperTab === "PAST" ? (
                      <>
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
                              <td>Vikum</td>
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
                      </>
                    ) : (
                      <>
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
                              <td>Vikum</td>
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
                      </>
                    )}
                  </>
                ) : tab === 3 ? (
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
                        <td>Suraja</td>
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
                ) : (
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
                        <td>Lahiru</td>
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
                )}
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
