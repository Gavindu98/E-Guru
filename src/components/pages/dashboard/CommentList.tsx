import React, { useEffect, useState } from 'react'
import "../../vendors/styles/components/comment.css"
import { ArticleService } from '../../../services/ArticleService';
import moment from "moment";
import SingleComment from './singlecommentView';
export interface Comment {
  createdAt: any,
  postID: string,
  _id: string,
  firstName: string,
  lastName: string,
  comment: string,
  userId: string
}
const CommentList: React.FC<{
  postId: any;
  index?: any;
  newComment?: any;
}> = (props) => {

  const [comments, setComments] = useState<any>();
  const [commentList, setCommentList] = useState<any[]>([] as any[]);
  useEffect(() => {
    const data = {
      postID: props.postId
    }
    ArticleService.getAllCommentInSinglePost(data).then((res) => {
      console.log("comments", res.data)
      if (res.data) {
        //console.log(res.message)
        //setComments(res.data)

        //const dd = res.data;
        setComments(res.data)

      } else {
        console.log("error")
      }
    });

    // if (comments?.comments) {
    //   createCommentArray()
    // }
  }, [props.newComment]);
  // if (props.newComment) {
  //   console.log("postId", props.newComment)
  //   const newComment = {

  //   }
  //   window.location.reload();
  // }


  //setCommentList(comments?.comments)
  //console.log("commentList", comments?.comments)
  // console.log("creator Details===>", comments?.comments[0]?.creator?.firstName)


  //console.log(commentList)
  return (
    <>
      {
        comments?.commentArray.length > 0 ?
          (
            comments.commentArray?.map((comment: any, index: number) => {
              return (
                <SingleComment comment={comment} index={index} key={index} newComment={props.newComment} />
              );
            })
          )
          : null
      }

    </>
  )
}

export default CommentList