// import React from "react";
import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import SideBar from "../../common/SideBar";
import InputAnswer from "./InputAnswerComponent";
import { ForumService } from "../../../services/ForumService";
import Swal from "sweetalert2";
import QuectionCard from "./quectionCard";

const Index: React.FC = () => {

  const [showReply, setShowReply] = useState(false);
  const initialState = {
    question: ""
  };
  const [quectionData, setQuectionData] = useState<any>(initialState);
  const [authId, setAuthId] = useState<any>();
  const [auth, setAuth] = useState<any>();
  const [question, setQuestion] = useState<any>();
  const [addnew, setAddNew] = useState<boolean>(false);

  const handleClickShowReply = () => {
    setShowReply(!showReply);
  };
  useEffect(() => {
    const id = localStorage.getItem("userId");
    setAuthId(id)
    const auth = localStorage.getItem("auth");
    setAuth(auth)
    ForumService.getAllQuectionst().then((res) => {
      //console.log("question==>", res.data)
      if (res.data) {
        console.log(res.data)
        setQuestion(res.data)
      } else {
        console.log("error")
      }
    });

  }, [addnew]);
  // console.log("auth", auth)
  const createQuection = (): void => {
    setAddNew(false)
    const data = {
      userId: authId,
      quection: quectionData.question
    };
    ForumService.createQuection(data).then((res) => {
      console.log("data", data);
      console.log(res)

      if (res.data) {
        console.log(res.data.message)

        Swal.fire({
          title: "Success!",
          icon: "success",
          confirmButtonColor: "#0E134A",
          iconColor: "#F7931E",
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
          confirmButtonColor: "#0E134A",
          iconColor: "#F7931E",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "Ok",
        })
      }
    });


  };
  //console.log("forums==>", question?.forums)
  return (
    <React.Fragment>
      <div className="container mt-1">

        <div className="row  d-flex justify-content-center">

          <div className="">
            <div className="card p-3 mt-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="user d-flex flex-row align-items-center">
                  <img src="https://i.imgur.com/C4egmYM.jpg" width="30" className="user-img rounded-circle mr-2" />
                  <span><small className="font-weight-bold text-primary">olan_sams</small> <small className="font-weight-bold"></small></span>
                </div>
                {/* <small>3 days ago</small> */}
              </div>
              <div className="action d-flex justify-content-between mt-2 align-items-center">
                <div className="reply px-4">
                  <textarea
                    rows={4}
                    placeholder="Add your quection"
                    onChange={(e) =>
                      setQuectionData({
                        ...quectionData,
                        question: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="icons align-items-center">
                  <i className="fa fa-check-circle-o check-icon text-primary"></i>
                </div>
                <div className="reply px-4">
                  <small><button className="btn btn-primary" onClick={() => createQuection()}>Add Quection</button></small>
                </div>
              </div>
            </div>

            {question?.forums?.map((question: any, index: number) => {
              return <QuectionCard quection={question} index={index} key={index} setAddNew={addnew} />;

            })}


          </div>

        </div>

      </div>
    </React.Fragment>


  );
};

export default Index;
