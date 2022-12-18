import React, { useContext, useState, useEffect } from "react";
import defaultDp from "../../vendors/images/user.png";
import { Link } from "react-router-dom"
import { LibraryService } from "../../../services/LibraryService"
import Swal from "sweetalert2";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import {
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
} from "reactstrap";

const SingleBook: React.FC = () => {
    const [bookData, setBookData] = useState<any>();
    const [postId, setPostId] = useState<any>();
    const navigate = useNavigate();
    useEffect(() => {

        const postId = localStorage.getItem("clickedBookId");
        setPostId(postId)
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
    const deleteArticle = () => {
        const postId = localStorage.getItem("clickedBookId");
        if (postId) {
            const data = {
                resourceID: postId
            }
            LibraryService.deleteBook(data).then((res) => {
                if (res.data) {
                    console.log("res.data")
                    Swal.fire({
                        title: "Succesfully deleted!",
                        icon: "success",
                        confirmButtonColor: "#0E134A",
                        iconColor: "#F7931E",
                        showDenyButton: false,
                        showCancelButton: false,
                        confirmButtonText: "Ok",
                    })
                    navigate('/library');
                } else {
                    console.log("error");
                    Swal.fire({
                        title: "Something went wrong please try again",
                        icon: "error",
                        confirmButtonColor: "#0E134A",
                        iconColor: "#F7931E",
                        showDenyButton: false,
                        showCancelButton: false,
                        confirmButtonText: "Ok",
                    })
                }
            });
        }
    }

    return (
        <React.Fragment>
            <div className="container-lg h-full">
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-12 col-md-12">
                        <div className="d-flex justify-content-center">
                            <div className="card border border-rounded w-full h-full">
                                {/* <div className="dp-card">
                                    <img className="dp-icon" src={defaultDp} alt="Dp" />
                                    <div className="mt-3">
                                        <h6 className="text-info font-13">{bookData?.resource?.creatorFirstName}{" "}{bookData?.resource?.creatorLastName}</h6>
                                        <p className="text-info  font-11">{bookData?.resource?.creatorEmail}</p>
                                        <p className="paddingTop font-9 text-muted">
                                            {moment(bookData?.resource?.createdAt).fromNow()}
                                        </p>
                                    </div>
                                    <div className="d-flex flex-row-reverse">Delete Book</div>
                                </div> */}
                                <div className="dp-card justify-content-between">

                                    <div className="mt-1 d-flex justify-content-start">
                                        <div>
                                            <img className="dp-icon" src={defaultDp} alt="Dp" />
                                        </div>
                                        <div>
                                            <h6 className="text-info font-13">{bookData?.resource?.creatorFirstName}{" "}{bookData?.resource?.creatorLastName} </h6>
                                            <p className="text-info  font-11">{bookData?.resource?.creatorEmail}</p>
                                            <p className="paddingTop font-9 text-muted">{moment(bookData?.resource?.createdAt).fromNow()}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <UncontrolledDropdown className="dropdown">
                                            <DropdownToggle className="text-primary font-size-16" color="primary">
                                                <i className="bi bi-three-dots-vertical text-primary"></i>
                                                <h6 className="pb-0 text-white">More</h6>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-end">

                                                {/* <Link className="dropdown-item" to="#">
                                                    <button
                                                        className="btn "
                                                        onClick={() => updatePost(postDetails?.post?._id)}
                                                        title={"Update"}
                                                    >
                                                        <i className="bx bx-edit align-middle buttonIcon " style={{ fontSize: "23px" }}></i>
                                                        <span className="buttonIcon ms-1">{"Modify"}</span>
                                                    </button>
                                                </Link> */}

                                                <Link className="dropdown-item" to="#">
                                                    <button
                                                        className="btn "
                                                        onClick={() => deleteArticle()}
                                                        title={"Delete"}
                                                    // disabled={post?.coverId === null ? true : false}
                                                    >
                                                        <i className="bx bx-trash align-middle buttonIcon " style={{ fontSize: "23px" }}></i>
                                                        <span className="buttonIcon ms-1">{"Delete"}</span>
                                                    </button>
                                                </Link>

                                            </DropdownMenu>
                                        </UncontrolledDropdown>
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