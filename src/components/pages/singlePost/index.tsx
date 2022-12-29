import React, { useContext, useState, useEffect } from "react";
import defaultDp from "../../vendors/images/user.png";
import { RouteName } from "../../../RouteName";
import AuthContext from "../../../context/AuthProvider";
import Cover from "../../vendors/images/img1.jpg";
import CommentList from "../dashboard/CommentList";
import { ArticleService } from "../../../services/ArticleService";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import {
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
} from "reactstrap";
import Swal from "sweetalert2";
import { updatePostfix } from "typescript";
const Index: React.FC = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const [show, setShow] = useState(false)
    const [postId, setPostId] = useState<any>();
    const [postDetails, setPostDetails] = useState<any>();
    const [like, setLike] = useState(true);
    const [authId, setAuthId] = useState<any>();
    const [numberOflikes, setNumberOfLikes] = useState<any>();
    const [comment, setComment] = useState({ body: "" })
    const [newComment, setNewComment] = useState<any>();
    const navigate = useNavigate();
    const [numberOfComments, setNumberOfComments] = useState<any>();
    useEffect(() => {
        const post_Id = localStorage.getItem("onClikedSinglePostId");
        const commentCoun = postDetails?.post?.commentCount
        console.log("postDetails.post==>", postDetails?.post?.commentCount)
        setPostId(post_Id)
        const id = localStorage.getItem("userId");
        setAuthId(id)
        if (post_Id) {
            ArticleService.getSingleArticle(post_Id).then((res) => {
                //console.log(res.data)
                if (res.data) {
                    console.log("success")
                    setPostDetails(res.data)
                    const postD = res.data
                    if (postDetails?.post) {
                        setNumberOfLikes(postDetails?.post?.likeArray.length)
                        const likeArr = postDetails?.post?.likeArray
                        console.log("setNumberOfLikes ", postDetails?.post?.likeArray.length)
                        // console.log(likeArr.includes(id))
                        if (likeArr.includes(id)) {
                            setLike(false);
                        } else {
                            setLike(true);
                        }
                        //console.log( "likecount", postDetails?.post?.likeCount)
                    }
                } else {
                    console.log("error")
                }
            });
        }
        setNumberOfComments(commentCoun)

    }, []);
    useEffect(() => {
        if (newComment) {
            setNumberOfComments(numberOfComments + 1)
        }

    }, [newComment]);
    console.log("numberOflikes", numberOflikes)
    const handleClickLike = () => {
        // console.log("postId", postId)
        // console.log("authId", authId)
        // console.log("like", like)
        const articleId = postId;
        const userId = authId;
        const boolVal = like;
        ArticleService.likeUnlikeArticle(articleId, userId, boolVal).then((res) => {
            //console.log(res)
            if (res.data.success) {
                //console.log(res.message)
                if (like) {
                    setNumberOfLikes(numberOflikes + 1)
                } else if (!like && (numberOflikes != 0)) {
                    setNumberOfLikes(numberOflikes - 1)
                }
                setLike(!like)

            } else {
                console.log("error")
            }
        });
    }
    const handleClickAddComment = (postId: string) => {
        const commentData = {
            postID: postId,
            userID: authId,
            comment: comment.body
        };
        console.log("commentData", commentData)
        ArticleService.addCommentToArticle(commentData).then((res) => {
            //console.log(res)
            if (res.data.success) {
                console.log(res.data.newComment)
                setNewComment(res.data.newComment)
                setComment({ body: " " });

            } else {
                console.log("error")
            }
        });
    }
    const deleteArticle = (postId: string) => {
        const data = {
            postID: postId
        };
        console.log("data", data)
        ArticleService.deleteArticle(data).then((res) => {
            console.log(res)
            if (res.data) {
                console.log(res.data)
                Swal.fire({
                    title: "Successfully deleted!",
                    icon: "success",
                    confirmButtonColor: "#012677",
                    iconColor: "#00b4fc",
                    showDenyButton: false,
                    showCancelButton: false,
                    confirmButtonText: "Ok",
                })
                navigate('/dashboard');
            } else {
                console.log("error")
            }
        });
    }
    const updatePost = (postId: string) => {

        localStorage.setItem("updatePostId", postId);
        console.log("updatePostId", postId)
        navigate('/single-post/create-article');
    }
    // console.log("postDetails", postDetails?.post
    // )
    return (
        <React.Fragment>
            <div className="container-lg h-full ">
                <div className="row justify-content-center pb-12 pt-12">
                    <div className="col-12 col-sm-12 col-lg-8 col-md-8 order-2 order-sm-2 order-md-1 order-lg-1 ">
                        <div className="border borer-design bg-blue5 text-primary pb-3 borer-design" >
                            <div className="dp-card justify-content-between ">

                                <div className="mt-1 d-flex justify-content-start">
                                    <div>
                                        {
                                            postDetails?.post?.creatorImgUrl ?
                                                <img className="dp-icon" src={postDetails?.post?.creatorImgUrl} alt="Dp" />
                                                :
                                                <img className="dp-icon" src={"https://res.cloudinary.com/dhtofzfhq/image/upload/cld-sample.jpg"} alt="Dp" />
                                        }

                                    </div>
                                    <div>
                                        <h6 className="font-blue1 font-13">{postDetails?.post?.creatorFirstName}{" "}{postDetails?.post?.creatorLastName} </h6>
                                        <p className="font-blue1  font-11">{postDetails?.post?.creatorEmail}</p>
                                        <p className="paddingTop font-9 font-blue2">{moment(postDetails?.post?.creator?.createdAt).fromNow()}</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    {(authId == postDetails?.post?.creatorID) ?
                                        <UncontrolledDropdown className="dropdown mt-2 mr-2 ">
                                            <DropdownToggle className="text-primary font-size-16 bg-blue1" >
                                                <i className="bi bi-three-dots-vertical text-primary"></i>
                                                <h6 className="pb-0 text-white">More</h6>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-end ">

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

                                                <Link className="dropdown-item " to="#">
                                                    <button
                                                        className="btn "
                                                        onClick={() => deleteArticle(postDetails?.post?._id)}
                                                        title={"Delete"}
                                                    // disabled={post?.coverId === null ? true : false}
                                                    >
                                                        <i className="bx bx-trash align-middle buttonIcon " style={{ fontSize: "23px" }}></i>
                                                        <span className="buttonIcon ms-1">{"Delete"}</span>
                                                    </button>
                                                </Link>

                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        : null}
                                </div>
                            </div>
                            <div className="pb-4 pt-2">
                                <div className="container">
                                    <div className="d-flex justify-content-start">
                                        <div className="">
                                            {/* <a href={`/single-post`}> */}
                                            <h6 className="font-blue1 font-13 pl-4 pr-4">{postDetails?.post?.title}</h6>
                                            {/* </a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-4 pt-2">
                                <div className="container">
                                    <div className="d-flex justify-content-start">
                                        <div className="">
                                            {/* <a href={`/single-post`}> */}
                                            <p className="font-blue1 font-13 pl-4 pr-4">{postDetails?.post?.description}</p>
                                            {/* </a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                postDetails?.post?.filePath ?
                                    <img className="card-img" src={postDetails?.post?.filePath} alt="Card image" />
                                    :
                                    <img className="card-img" src={Cover} alt="Card image" />
                            }

                            {/* <div className="card-img-overlay mt-70">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">Last updated 3 mins ago</p>
      </div> */}
                            <div>
                                <div className=" pt-2">
                                    <div className="container">
                                        <div className="d-flex justify-content-between">
                                            <div className="">
                                                <h6 className="font-blue1 font-13 pl-4 pr-4">{numberOflikes} {numberOflikes > 1 ? <>Likes</> : <>Like</>}</h6>
                                            </div>
                                            <div className=""></div>
                                            <div className=" d-flex flex-row-reverse">
                                                <h6 className="font-blue1 font-13 pl-4 pr-4">{numberOfComments} Comment</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="bg-blue3 border-2 border-top border-primary"></hr>
                                <div className="dp-card pl-4 pr-4 ">
                                    <div className="container">
                                        <div className="d-flex justify-content-between">
                                            <div className="">
                                                <button className="btn bg-blue2 font-blue5 font-13 " onClick={() => handleClickLike()}>{like ? <>Like</> : <>Liked</>}</button>
                                            </div>
                                            <div className=""></div>
                                            <div className=" ">
                                                <button className="btn bg-blue2 font-blue5 font-13 " onClick={() => setShow(!show)}>Comment</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="bg-warning border-2 border-top border-primary"></hr>

                            </div>
                            <div className="container mt-1">
                                <div className="row  d-flex justify-content-center">
                                    <div className="">
                                        <div className=" p-3">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="user d-flex flex-row align-items-center">
                                                    {
                                                        postDetails?.post?.creatorImgUrl ?
                                                            <img className="dp-icon" src={postDetails?.post?.creatorImgUrl} alt="Dp" />
                                                            :
                                                            <img className="dp-icon" src={"https://res.cloudinary.com/dhtofzfhq/image/upload/cld-sample.jpg"} alt="Dp" />
                                                    }
                                                    <span><small className="font-weight-bold text-primary">james_olesenn</small></span>
                                                </div>
                                                <div>
                                                    <small className="font-weight-bold text-primary">
                                                        <input className="w-full bg-blue4 h-8 ml-1 border rounded"
                                                            type="text"
                                                            placeholder="Type here..."
                                                            onChange={(e) =>
                                                                setComment({
                                                                    ...comment,
                                                                    body: e.target.value,
                                                                })
                                                            } />
                                                    </small>
                                                </div>
                                                <div>
                                                    <button className="btn bg-blue2 font-blue5 ml-2" onClick={() => handleClickAddComment(postDetails?.post?._id)}>send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {
                                show ? <CommentList postId={postDetails?.post?._id} newComment={newComment} /> : null
                            }

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Index;
