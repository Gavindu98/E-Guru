// import React from "react";
import React, { useEffect, useState } from "react";
import { ForumService } from "../../../services/ForumService";
import Swal from "sweetalert2";
import moment from "moment";

const InputAnswer: React.FC<{
    QuectionId: string;
    setAddNew: boolean
}> = (props) => {
    const initialState = {
        answer: ""
    };
    const [answerData, setAnswerData] = useState<any>(initialState);
    const [authId, setAuthId] = useState<any>();
    const [auth, setAuth] = useState<any>();
    const [answers, setAnswewrs] = useState<any>();
    const [addnew, setAddNew] = useState<boolean>(false);

    useEffect(() => {
        const id = localStorage.getItem("userId");
        setAuthId(id)
        const auth = localStorage.getItem("auth");
        setAuth(auth)
        if (id && props.QuectionId) {
            const data = {
                userId: id,
                quectionId: props.QuectionId
            };
            ForumService.getAllAnswersForSelectedQuection(data).then((res) => {
                console.log("answers==>", res.data)
                if (res.data) {
                    console.log(res.data)
                    setAnswewrs(res.data)
                } else {
                    console.log("error")
                }
            });
        }

    }, [addnew]);
    //console.log("QuectionId==>", props.QuectionId)

    const addAnswerForQuction = (quectionId: string): void => {
        setAddNew(false)
        const data = {
            userId: authId,
            quectionId: quectionId,
            answer: answerData.answer
        };
        ForumService.createAnswerForQuection(data).then((res) => {
            console.log("data", data);
            console.log(res)

            if (res.data) {
                console.log(res.data.message)

                Swal.fire({
                    title: "Success!",
                    icon: "success",
                    confirmButtonColor: "#012677",
                    iconColor: "#00b4fc",
                    showDenyButton: false,
                    showCancelButton: false,
                    confirmButtonText: "Ok",
                })
                setAddNew(true)
                // setQuectionData("")
            } else {
                console.log("error")
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


    };
    //console.log("answers?.AnswerArray==>", answers?.AnswerArray)
    return (
        <React.Fragment>
            <div className="mt-2">
                <div className=" d-flex justify-content-center border border-rounded">
                    <div className="reply px-4 mt-2 mb-2">
                        <input
                            type="text"
                            placeholder="Type here"
                            className="h-8 border rounded font-blue1 bg-blue5"
                            onChange={(e) =>
                                setAnswerData({
                                    ...answerData,
                                    answer: e.target.value,
                                })
                            }
                        />

                    </div>

                    <div className="icons align-items-center">
                        <i className="fa fa-check-circle-o check-icon text-primary"></i>

                    </div>
                    <div className="reply px-4 h-8 border rounded font-blue1 mt-2 mb-2 bg-blue2 font-blue5">
                        <small><button onClick={() => addAnswerForQuction(props.QuectionId)}>Add Answer</button></small>

                    </div>
                </div>
                <div>
                    {answers?.AnswerArray?.map((answer: any, index: number) => {
                        return <div className="card p-3 mt-2 bg-blue5" key={index}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="user d-flex flex-row align-items-center">
                                    {
                                        answer?.creatorImgUrl ?
                                            <img className="dp-icon" src={answer?.creatorImgUrl} alt="Dp" />
                                            :
                                            <img className="dp-icon" src={"https://res.cloudinary.com/dhtofzfhq/image/upload/cld-sample.jpg"} alt="Dp" />
                                    }
                                    <span><small className="font-weight-bold text-primary font-blue1">{answer?.firstName}{" "}{answer?.lastName}</small> <small className="font-weight-bold text-primary">{" "}</small> <small className="font-weight-bold text-secondary"></small> </span>
                                </div>
                                <small className="font-blue1">{moment(answer?.createdAt).fromNow()}</small>
                            </div>
                            <div className="action d-flex justify-content-between mt-2 align-items-center">
                                <div className="reply px-4 font-blue1">
                                    <small>{answer?.answer}</small>
                                </div>
                                <div className="icons align-items-center">
                                    <i className="fa fa-check-circle-o check-icon text-primary"></i>
                                </div>
                            </div>
                        </div>;
                    })}
                </div>
            </div>





        </React.Fragment>


    );
};

export default InputAnswer;
