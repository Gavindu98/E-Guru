// import React from "react"
import React, { useEffect, useState } from "react";
import InputAnswer from "./InputAnswerComponent";
import moment from "moment";

const QuectionCard: React.FC<{
    quection: any;
    index: any;
    setAddNew: boolean;
}> = (props) => {
    const [showReply, setShowReply] = useState(false);

    const handleClickShowReply = () => {
        setShowReply(!showReply);
    };
    // console.log("quectiondata===>", props.quection)
    return (
        <React.Fragment>
            <div className="card p-3 mt-2 bg-blue4 " key={props.index}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="user d-flex flex-row align-items-center">
                        {
                            props.quection?.creator?.creatorImgUrl ?
                                <img className="dp-icon" src={props.quection?.creator?.creatorImgUrl} alt="Dp" />
                                :
                                <img className="dp-icon" src={"https://res.cloudinary.com/dhtofzfhq/image/upload/cld-sample.jpg"} alt="Dp" />
                        }
                        <span><small className="font-weight-bold font-blue1">{props.quection?.creator.firstname}{" "}{props.quection?.creator.lastname}</small> <small className="font-weight-bold"></small></span>
                    </div>
                    <small className="font-blue5">{moment(props.quection?.createdAt).fromNow()}</small>
                </div>
                <div className="action d-flex justify-content-between mt-2 align-items-center">
                    <div className="reply px-4 font-blue1">
                        <small className="">{props.quection?.quection}</small>
                    </div>
                    <div className="icons align-items-center">
                        <i className="fa fa-check-circle-o check-icon text-primary"></i>
                    </div>
                    <div className="reply px-4 bg-blue2 font-white border rounded">
                        <small onClick={() => handleClickShowReply()} className="p-2">View Answers</small>
                    </div>
                </div>
                {
                    showReply ?
                        <>
                            <InputAnswer QuectionId={props.quection._id} setAddNew={props.setAddNew} />
                        </> : null
                }
            </div>
        </React.Fragment>
    );
};

export default QuectionCard;
