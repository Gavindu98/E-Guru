// import React from "react";
import React, { useEffect, useState } from "react";
// import Header from "../../common/Header";
// import Footer from "../../common/Footer";
// import SideBar from "../../common/SideBar";

const InputAnswer: React.FC = () => {
    // const [shownavBar, setShownavBar] = useState(true);
    // const [showReply, setShowReply] = useState(false);

    // const handleClickShowReply = () => {
    //     setShowReply(true);
    // };
    // const HandleClickClose = () => {
    //     setShownavBar(false);
    // };
    return (
        <React.Fragment>
            <div className="border border-rounded">
                <div className=" d-flex justify-content-center ">
                    <div className="reply px-4">
                        <input type="text" placeholder="Answer" />

                    </div>

                    <div className="icons align-items-center">
                        <i className="fa fa-check-circle-o check-icon text-primary"></i>

                    </div>
                    <div className="reply px-4">
                        <small><button>Add Answer</button></small>

                    </div>
                </div>
                <div>
                    <div className="card p-3 mt-2">

                        <div className="d-flex justify-content-between align-items-center">

                            <div className="user d-flex flex-row align-items-center">

                                <img src="https://i.imgur.com/ZSkeqnd.jpg" width="30" className="user-img rounded-circle mr-2" />
                                <span><small className="font-weight-bold text-primary">simona_rnasi</small> <small className="font-weight-bold text-primary">@macky_lones</small> <small className="font-weight-bold text-primary">@rashida_jones</small> <small className="font-weight-bold">Thanks </small></span>

                            </div>


                            <small>3 days ago</small>

                        </div>


                        <div className="action d-flex justify-content-between mt-2 align-items-center">

                            <div className="reply px-4">
                                <small>Good</small>

                            </div>

                            <div className="icons align-items-center">

                                <i className="fa fa-check-circle-o check-icon text-primary"></i>

                            </div>

                        </div>



                    </div>


                    <div className="card p-3 mt-2">

                        <div className="d-flex justify-content-between align-items-center">

                            <div className="user d-flex flex-row align-items-center">

                                <img src="https://i.imgur.com/ZSkeqnd.jpg" width="30" className="user-img rounded-circle mr-2" />
                                <span><small className="font-weight-bold text-primary">simona_rnasi</small> <small className="font-weight-bold text-primary">@macky_lones</small> <small className="font-weight-bold text-primary">@rashida_jones</small> <small className="font-weight-bold">Thanks </small></span>

                            </div>


                            <small>3 days ago</small>

                        </div>


                        <div className="action d-flex justify-content-between mt-2 align-items-center">

                            <div className="reply px-4">
                                <small>Good</small>

                            </div>

                            <div className="icons align-items-center">

                                <i className="fa fa-check-circle-o check-icon text-primary"></i>

                            </div>

                        </div>



                    </div>


                    <div className="card p-3 mt-2">

                        <div className="d-flex justify-content-between align-items-center">

                            <div className="user d-flex flex-row align-items-center">

                                <img src="https://i.imgur.com/ZSkeqnd.jpg" width="30" className="user-img rounded-circle mr-2" />
                                <span><small className="font-weight-bold text-primary">simona_rnasi</small> <small className="font-weight-bold text-primary">@macky_lones</small> <small className="font-weight-bold text-primary">@rashida_jones</small> <small className="font-weight-bold">Thanks </small></span>

                            </div>


                            <small>3 days ago</small>

                        </div>


                        <div className="action d-flex justify-content-between mt-2 align-items-center">

                            <div className="reply px-4">
                                <small>Good</small>

                            </div>

                            <div className="icons align-items-center">

                                <i className="fa fa-check-circle-o check-icon text-primary"></i>

                            </div>

                        </div>



                    </div>
                </div>
            </div>





        </React.Fragment>


    );
};

export default InputAnswer;
