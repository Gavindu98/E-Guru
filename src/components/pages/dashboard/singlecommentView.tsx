import React, { useEffect, useState } from 'react'
import "../../vendors/styles/components/comment.css"
import { ArticleService } from '../../../services/ArticleService';
import moment from "moment";
import defaultDp from "../../vendors/images/user.png";
export interface Comment {
    createdAt: any,
    postID: string,
    _id: string,
    firstName: string,
    lastName: string,
    comment: string,
    userId: string,

}
const SingleComment: React.FC<{
    comment: any;
    index: number;
    newComment: any
}> = (props) => {

    return (

        <div className="card p-3 mt-2 bg-blue4" key={props.index}>
            <div className="dp-card">
                <img className="dp-icon" src={"https://i.imgur.com/hczKIze.jpg"} alt="Dp" />
                <div className="mt-1 d-flex justify-content-between col-11">
                    <h6 className="font-blue1 font-15 mt-3">{props.comment.firstName}{" "}{props.comment.lastName}</h6>
                    {/* <p className="text-info  font-11">{props.post?.creator?.email}</p> */}
                    <p className="paddingTop font-13 font-blue5">{moment(props.comment.createdAt).fromNow()}</p>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <p className='font-blue1 font-14'>{props.comment.comment}</p>
            </div>



        </div>

    )
}

export default SingleComment