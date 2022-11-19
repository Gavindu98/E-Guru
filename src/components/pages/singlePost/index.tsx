import React, { useContext, useState, useEffect } from "react";
import defaultDp from "../../vendors/images/user.png";
import { RouteName } from "../../../RouteName";
import AuthContext from "../../../context/AuthProvider";
import Cover from "../../vendors/images/img1.jpg";
import CommentList from "../dashboard/CommentList";
import { ArticleService } from "../../../services/ArticleService";
const Index: React.FC = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const [show, setShow] = useState(false)
    const [postId, setPostId] = useState<any>()
    useEffect(() => {
        const post_Id = localStorage.getItem("onClikedSinglePostId");
        setPostId(post_Id)
        if (post_Id) {
            // ArticleService.getSingleArticle(post_Id).then((res) => {
            //     console.log(res)
            //     if (res.success) {
            //         console.log("success")
            //     } else {
            //         console.log("error")
            //     }
            // });
        }
    }, []);
    console.log("clicked Id", postId)
    return (
        <React.Fragment>
            <div className="container-lg h-full">
                <div className="row justify-content-center pb-12 pt-12">
                    <div className="col-12 col-sm-12 col-lg-8 col-md-8 order-2 order-sm-2 order-md-1 order-lg-1">
                        <div className=" bg-light text-white pb-3" >
                            <div className="dp-card">
                                <img className="dp-icon" src={defaultDp} alt="Dp" />
                                <div className="mt-1">
                                    <h6 className="text-info font-13">James warn </h6>
                                    <p className="text-info  font-11">email of user</p>
                                    <p className="paddingTop font-9 text-muted">10 min ago</p>
                                </div>
                            </div>
                            <div className="pb-4 pt-2">
                                <div className="container">
                                    <div className="d-flex justify-content-start">
                                        <div className="">
                                            <a href={`/single-post`}>
                                                <h6 className="text-dark font-13 pl-4 pr-4">title </h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-4 pt-2">
                                <div className="container">
                                    <div className="d-flex justify-content-start">
                                        <div className="">
                                            <a href={`/single-post`}>
                                                <p className="text-dark font-13 pl-4 pr-4">description</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <img className="card-img" src={Cover} alt="Card image" />
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
                                                <h6 className="text-dark font-13 pl-4 pr-4">10 Like</h6>
                                            </div>
                                            <div className=""></div>
                                            <div className=" d-flex flex-row-reverse">
                                                <h6 className="text-dark font-13 pl-4 pr-4">10 Comment</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="bg-warning border-2 border-top border-primary"></hr>
                                <div className="dp-card pl-4 pr-4 ">
                                    <div className="container">
                                        <div className="d-flex justify-content-between">
                                            <div className="">
                                                <button className="btn btn-warning font-13 ">Like</button>
                                            </div>
                                            <div className=""></div>
                                            <div className=" ">
                                                <button className="btn btn-warning font-13 " onClick={() => setShow(!show)}>Comment</button>
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
                                                    <img src="https://i.imgur.com/hczKIze.jpg" width="30" className="user-img rounded-circle mr-2" />
                                                    <span><small className="font-weight-bold text-primary">james_olesenn</small></span>
                                                </div>
                                                <div>
                                                    <small className="font-weight-bold text-primary">
                                                        <input className="w-full" type="text" placeholder="Type here..." />
                                                    </small>
                                                </div>
                                                <div>
                                                    <button className="btn btn-warning">send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {
                                show ? <CommentList /> : null
                            }

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Index;
