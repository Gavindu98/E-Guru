import React, { useEffect, useState, useContext } from "react";
import Cover from "../../vendors/images/img1.jpg";
import defaultDp from "../../vendors/images/user.png";
import CommentList from "./CommentList";
import moment from "moment";
import { ArticleService } from "../../../services/ArticleService";
import AuthContext from "../../../context/AuthProvider";
const PostCard: React.FC<{
  post: any;
  index: any;
}> = (props) => {
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(true);
  const [authId, setAuthId] = useState<any>();
  const [numberOflikes, setNumberOfLikes] = useState<any>();
  const [comment, setComment] = useState({ body: "" })
  const [newComment, setNewComment] = useState<any>();
  // const { auth, setAuth } = useContext(AuthContext);
  //const authId = localStorage.getItem("userId");
  useEffect(() => {
    const id = localStorage.getItem("userId");
    setAuthId(id)
    const likeArr = props.post?.likeArray
    console.log(likeArr.includes(id))
    if (likeArr.includes(id)) {
      setLike(false);
    } else {
      setLike(true);
    }
    setNumberOfLikes(props.post?.likeCount)
  }, []);
  const handleShowComment = () => {
    setShow(!show)
  }
  const handleClickSinglepost = (postId: string) => {
    localStorage.setItem("onClikedSinglePostId", postId);
  }

  const handleClickLike = (postId: string) => {
    console.log("postId", postId)
    console.log("authId", authId)
    console.log("like", like)
    const articleId = postId;
    const userId = authId;
    const boolVal = like;
    ArticleService.likeUnlikeArticle(articleId, userId, boolVal).then((res) => {
      console.log(res)
      if (res.data.success) {
        console.log(res.message)
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
    //console.log("commentData", commentData)
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
  //console.log("sss==>", props.post)
  return (
    <div className=" bg-blue5 font-blue1 pb-3" key={props.index}>
      <div className="dp-card">
        <img className="dp-icon" src={"https://res.cloudinary.com/dhtofzfhq/image/upload/cld-sample.jpg"} alt="Dp" />
        <div className="mt-1">
          <h6 className="font-blue1 font-13">{props.post?.creator?.firstname}{" "}{props.post?.creator?.lastname}</h6>
          <p className="font-blue1  font-11">{props.post?.creator?.email}</p>
          <p className="paddingTop font-9 text-muted">{moment(props.post?.createdAt).fromNow()}</p>
        </div>
      </div>
      <div className="pb-4 pt-2">
        <div className="container">
          <div className="d-flex justify-content-start">
            <div className="">
              <a href={`/single-post`}>
                <h6 onClick={() => handleClickSinglepost(props.post?._id)} className="font-blue1 font-13 pl-4 pr-4">{props.post?.title.length > 89 ? props.post?.title.substring(0, 90).concat('...') : props.post?.title}</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-4 pt-2">
        <div className="container">
          <div className="d-flex justify-content-start">
            <div className="">
              <a href={`/single-post`} >
                <p onClick={() => handleClickSinglepost(props.post?._id)} className="font-blue1 font-13 pl-4 pr-4">{props.post?.description.length > 89 ? props.post?.description.substring(0, 90).concat('...') : props.post?.description} </p>
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
                <h6 className="font-blue1 font-13 pl-4 pr-4">{numberOflikes}{" "}{numberOflikes > 1 ? <>Likes</> : <>Like</>}</h6>
              </div>
              <div className=""></div>
              <div className=" d-flex flex-row-reverse">
                <h6 className="font-blue1 font-13 pl-4 pr-4">10 Comment</h6>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-blue2 border-2 border-top border-primary"></hr>
        <div className="dp-card pl-4 pr-4 ">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="">
                <button className="btn bg-blue2 font-blue5 font-13 " onClick={() => handleClickLike(props.post?._id)}>{like ? <>Like</> : <>Liked</>}</button>
              </div>
              <div className=""></div>
              <div className=" ">
                <button className="btn bg-blue2 font-blue5 font-13 " onClick={() => setShow(!show)}>Comment</button>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-blue2 border-2 border-top border-primary"></hr>

      </div>
      <div className="container mt-1">
        <div className="row  d-flex justify-content-center">
          <div className="">
            <div className=" p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="user d-flex flex-row align-items-center">
                  <img src="https://i.imgur.com/hczKIze.jpg" width="30" className="user-img rounded-circle mr-2" />
                  <span><small className="font-weight-bold text-primary">{props.post?.creator?.firstname}{" "}{props.post?.creator?.lastname}</small></span>
                </div>
                <div>
                  <small className="font-weight-bold font-blue1">
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
                  <button className="btn bg-blue2 font-blue5 ml-2" onClick={() => handleClickAddComment(props.post?._id)}>send</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {
        show ? <CommentList postId={props.post?._id} newComment={newComment} /> : null
      }
      <hr className="bg-blue4 h-4" />
    </div>
  );
};

export default PostCard;
