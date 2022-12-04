import React, { useContext, useState, useEffect } from "react";
import defaultDp from "../../vendors/images/user.png";
import { Link } from "react-router-dom"
import { LibraryService } from "../../../services/LibraryService"
import Swal from "sweetalert2";
import moment from "moment";

const SingleBook: React.FC = () => {
    const [bookData, setBookData] = useState<any>();
    useEffect(() => {

        const postId = localStorage.getItem("clickedBookId");
        LibraryService.getSingleBook(postId).then((res) => {
            //console.log(res?.data)
            // console.log(res.data)
            if (res.data) {
                //console.log("book List ==>", res.data);
                setBookData(res.data)
            } else {
                console.log("error");
            }
        });
    }, []);

    return (
        <React.Fragment>
            <div className="container-lg h-full">
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-12 col-md-12">
                        <div className="d-flex justify-content-center">
                            <div className="card border border-rounded w-full h-full">
                                <div className="dp-card">
                                    <img className="dp-icon" src={defaultDp} alt="Dp" />
                                    <div className="mt-3">
                                        <h6 className="text-info font-13">{bookData?.resource?.creatorFirstName}{" "}{bookData?.resource?.creatorLastName}</h6>
                                        <p className="text-info  font-11">{bookData?.resource?.creatorEmail}</p>
                                        <p className="paddingTop font-9 text-muted">
                                            {moment(bookData?.resource?.createdAt).fromNow()}
                                        </p>
                                    </div>
                                </div>

                                <div className="dp-card p-3">
                                    <div className="mt-3">
                                        <h6 className="text-info font-13">{"heading"}{" "}{"heading"}</h6>
                                        <p className="paddingTop font-9 text-muted mt-1">
                                            {/* 2022/02/28 */}
                                            {/* {moment(props.post?.createdAt).fromNow()} */}
                                        </p>
                                        <p className="text-info  font-11 mt-3">{bookData?.resource?.description}</p>

                                    </div>
                                </div>

                                <div className="p-3">
                                    <img className="w-full h-auto" src={defaultDp} alt="Dp" />
                                </div>

                                <div className="dp-card p-3">
                                    <div className="mt-3">
                                        <h6 className="text-info font-13">{"dwnload as pdf"}{" "}{"heading"}</h6>
                                        <Link to={bookData?.resource?.filePath} target="_blank" download>Download</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SingleBook;
