// import React from "react"
import React, { useEffect, useState } from "react";
import InputAnswer from "./InputAnswerComponent";

const QuectionCard: React.FC<{
    quection: any;
    index: any;
}> = (props) => {
    const [showReply, setShowReply] = useState(false);

    const handleClickShowReply = () => {
        setShowReply(!showReply);
    };
    //console.log("quectiondata===>", props.quection)
    return (
        <React.Fragment>
            <div className="card p-3 mt-2" >
                <div className="d-flex justify-content-between align-items-center">
                    <div className="user d-flex flex-row align-items-center">
                        <img src="https://i.imgur.com/C4egmYM.jpg" width="30" className="user-img rounded-circle mr-2" />
                        <span><small className="font-weight-bold text-primary">{props.quection?.creator.firstname}{" "}{props.quection?.creator.lastname}</small> <small className="font-weight-bold"></small></span>
                    </div>
                    <small>3 days ago</small>
                </div>
                <div className="action d-flex justify-content-between mt-2 align-items-center">
                    <div className="reply px-4">
                        <small>{props.quection?.quection}</small>
                    </div>
                    <div className="icons align-items-center">
                        <i className="fa fa-check-circle-o check-icon text-primary"></i>
                    </div>
                    <div className="reply px-4">
                        <small onClick={() => handleClickShowReply()}>View Answers</small>
                    </div>
                </div>
                {
                    showReply ?
                        <>
                            <InputAnswer />
                        </> : null
                }
            </div>
        </React.Fragment>
    );
};

export default QuectionCard;
