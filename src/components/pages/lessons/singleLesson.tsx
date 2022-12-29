import React, { useContext, useState, useEffect } from "react";
import defaultDp from "../../vendors/images/user.png";
import { Link } from "react-router-dom"
import { LibraryService } from "../../../services/LibraryService"
import Swal from "sweetalert2";
import moment from "moment";
import Cover from "../../vendors/images/img1.jpg";
import { useNavigate } from "react-router-dom";
import {
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
} from "reactstrap";

const SingleLesson: React.FC = () => {
    const [lessonData, setLessonData] = useState<any>();
    const [lessonID, setPostId] = useState<any>();
    const [userId, setUserId] = useState<any>();
    const navigate = useNavigate();
    useEffect(() => {

        const lessonId = localStorage.getItem("clickedLessonId");

        const userID = localStorage.getItem("userId");
        setUserId(userID)
        setPostId(lessonId)
        LibraryService.getSingleLesson(lessonId).then((res) => {
            //console.log(res?.data)
            // console.log(res.data)
            if (res.data) {
                //console.log("book List ==>", res.data);
                setLessonData(res.data)

            } else {
                console.log("error");
            }
        });
    }, []);
    console.log("lessonData", lessonData)
    const deleteLesson = () => {
        const lessonId = localStorage.getItem("clickedLessonId");
        if (lessonId) {
            const data = {
                lessonID: lessonId
            }
            LibraryService.deleteLesson(data).then((res) => {
                if (res.data) {
                    console.log("res.data")
                    Swal.fire({
                        title: "Succesfully deleted!",
                        icon: "success",
                        confirmButtonColor: "#012677",
                        iconColor: "#00b4fc",
                        showDenyButton: false,
                        showCancelButton: false,
                        confirmButtonText: "Ok",
                    })
                    navigate('/lessons');
                } else {
                    console.log("error");
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
        }
    }

    return (
        <React.Fragment>
            <div className="container-lg container-Main">
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-12 col-md-12">
                        <div className="d-flex justify-content-center">
                            <div className="card border bg-blue5 border-rounded w-full h-full mt-4 mb-4">
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
                                            {
                                                lessonData?.singleLesson?.creatorImgUrl ?
                                                    <img className="dp-icon" src={lessonData?.singleLesson?.creatorImgUrl} alt="Dp" />
                                                    :
                                                    <img className="dp-icon" src={"https://res.cloudinary.com/dhtofzfhq/image/upload/cld-sample.jpg"} alt="Dp" />
                                            }
                                        </div>
                                        <div>
                                            <h6 className="font-blue1 font-13">{lessonData?.singleLesson?.creatorFirstName}{" "}{lessonData?.singleLesson?.creatorLastName} </h6>
                                            <p className="font-blue1  font-11">{lessonData?.singleLesson?.creatorEmail}</p>
                                            <p className="paddingTop font-9 font-blue3">{moment(lessonData?.singleLesson?.createdAt).fromNow()}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        {
                                            userId == lessonData?.singleLesson?.creatorID ?
                                                <UncontrolledDropdown className="dropdown mt-2 mr-2  ">
                                                    <DropdownToggle className="text-primary font-size-16 bg-blue2" >
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
                                                                onClick={() => deleteLesson()}
                                                                title={"Delete"}
                                                            // disabled={post?.coverId === null ? true : false}
                                                            >
                                                                <i className="bx bx-trash align-middle buttonIcon " style={{ fontSize: "23px" }}></i>
                                                                <span className="buttonIcon ms-1">{"Delete"}</span>
                                                            </button>
                                                        </Link>

                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                                : null
                                        }
                                    </div>
                                </div>

                                <div className="dp-card p-3">
                                    <div className="mt-3">
                                        <h6 className="font-blue1 font-14">{lessonData?.singleLesson?.heading}</h6>
                                        <p className="paddingTop font-blue1  font-11 mt-0">
                                            Grade : {lessonData?.singleLesson?.grade}<br></br>
                                            Subject : {lessonData?.singleLesson?.subject}<br></br>
                                            Chapter : {lessonData?.singleLesson?.Chapter}<br></br>
                                        </p>
                                        <p className="font-blue1  font-13 mt-3">{lessonData?.singleLesson?.content}</p>

                                    </div>
                                </div>

                                <div className="p-3">
                                    {
                                        lessonData?.singleLesson?.filePath && (lessonData?.singleLesson?.filePath.slice(-3) != 'pdf') ?
                                            <img className="w-full h-auto" src={lessonData?.singleLesson?.filePath} alt="Dp" />
                                            :
                                            <img className="w-full h-auto" src={Cover} alt="Dp" />
                                    }

                                </div>

                                <div className="dp-card p-3 font-blue2">
                                    <div className="mt-3">
                                        <h6 className="font-blue2 font-13">{"dwnload as pdf"}{" "}{"heading"}</h6>
                                        <Link to={lessonData?.singleLesson?.filePath} className="font-blue3" target="_blank" download>Download</Link>
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

export default SingleLesson;
