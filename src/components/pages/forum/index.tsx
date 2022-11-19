// import React from "react";
import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import SideBar from "../../common/SideBar";
import InputAnswer from "./InputAnswerComponent";

const Index: React.FC = () => {
  const [shownavBar, setShownavBar] = useState(true);
  const [showReply, setShowReply] = useState(false);

  const handleClickShowReply = () => {
    setShowReply(!showReply);
  };
  const HandleClickClose = () => {
    setShownavBar(false);
  };
  return (
    <React.Fragment>
      <div className="container mt-1">

        <div className="row  d-flex justify-content-center">

          <div className="">
            <div className="card p-3 mt-2">

              <div className="d-flex justify-content-between align-items-center">

                <div className="user d-flex flex-row align-items-center">

                  <img src="https://i.imgur.com/C4egmYM.jpg" width="30" className="user-img rounded-circle mr-2" />
                  <span><small className="font-weight-bold text-primary">olan_sams</small> <small className="font-weight-bold"></small></span>

                </div>


                {/* <small>3 days ago</small> */}

              </div>


              <div className="action d-flex justify-content-between mt-2 align-items-center">

                <div className="reply px-4">
                  <textarea rows={4} placeholder="Add your quection" />

                </div>

                <div className="icons align-items-center">
                  <i className="fa fa-check-circle-o check-icon text-primary"></i>

                </div>
                <div className="reply px-4">
                  <small><button className="btn btn-primary">Add Quection</button></small>

                </div>

              </div>



            </div>

            <div className="card p-3 mt-2">

              <div className="d-flex justify-content-between align-items-center">

                <div className="user d-flex flex-row align-items-center">

                  <img src="https://i.imgur.com/C4egmYM.jpg" width="30" className="user-img rounded-circle mr-2" />
                  <span><small className="font-weight-bold text-primary">olan_sams</small> <small className="font-weight-bold">Loving your work and profile! </small></span>

                </div>


                <small>3 days ago</small>

              </div>


              <div className="action d-flex justify-content-between mt-2 align-items-center">

                <div className="reply px-4">
                  <small>Nice post</small>

                </div>

                <div className="icons align-items-center">
                  <i className="fa fa-check-circle-o check-icon text-primary"></i>

                </div>
                <div className="reply px-4">
                  <small onClick={() => handleClickShowReply()}>View Answers</small>

                </div>

              </div>

              {
                showReply ?
                  <>
                    <InputAnswer />
                  </> : null
              }



            </div>

            <div className="card p-3 mt-2">

              <div className="d-flex justify-content-between align-items-center">

                <div className="user d-flex flex-row align-items-center">

                  <img src="https://i.imgur.com/C4egmYM.jpg" width="30" className="user-img rounded-circle mr-2" />
                  <span><small className="font-weight-bold text-primary">olan_sams</small> <small className="font-weight-bold">Loving your work and profile! </small></span>

                </div>


                <small>3 days ago</small>

              </div>


              <div className="action d-flex justify-content-between mt-2 align-items-center">

                <div className="reply px-4">
                  <small>Nice post</small>

                </div>

                <div className="icons align-items-center">
                  <i className="fa fa-check-circle-o check-icon text-primary"></i>

                </div>
                <div className="reply px-4">
                  <small onClick={() => handleClickShowReply()}>View Answers</small>

                </div>

              </div>

              {
                showReply ?
                  <>
                    <InputAnswer />
                  </> : null
              }



            </div>


            <div className="card p-3 mt-2">

              <div className="d-flex justify-content-between align-items-center">

                <div className="user d-flex flex-row align-items-center">

                  <img src="https://i.imgur.com/C4egmYM.jpg" width="30" className="user-img rounded-circle mr-2" />
                  <span><small className="font-weight-bold text-primary">olan_sams</small> <small className="font-weight-bold">Loving your work and profile! </small></span>

                </div>


                <small>3 days ago</small>

              </div>


              <div className="action d-flex justify-content-between mt-2 align-items-center">

                <div className="reply px-4">
                  <small>Nice post</small>

                </div>

                <div className="icons align-items-center">
                  <i className="fa fa-check-circle-o check-icon text-primary"></i>

                </div>
                <div className="reply px-4">
                  <small onClick={() => handleClickShowReply()}>View Answers</small>

                </div>

              </div>

              {
                showReply ?
                  <>
                    <InputAnswer />
                  </> : null
              }



            </div>



          </div>

        </div>

      </div>
    </React.Fragment>


  );
};

export default Index;
