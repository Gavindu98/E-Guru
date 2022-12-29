// import React from "react";
import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import SideBar from "../../common/SideBar";
import { LibraryService } from "../../../services/LibraryService"
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Index: React.FC = () => {
  const [shownavBar, setShownavBar] = useState(true);
  const [tab, setTab] = useState(1);
  const [paperTab, setPaperTab] = useState("MODEL");
  const [booList, setBookList] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 1500);
    LibraryService.getAllMyBooks().then((res) => {
      //console.log(res)
      // console.log(res.data)
      if (res.data) {
        //console.log("book List ==>", res.data);
        setBookList(res.data)
      } else {
        console.log("error");
      }
    });
  }, []);
  console.log("booList==>", booList?.resource)
  const HandleClickShowNavbar = () => {
    setShownavBar(true);
  };
  const HandleClickClose = () => {
    setShownavBar(false);
  };
  const handleClickBooks = () => {
    setTab(1);
  };
  const handleClickPapers = () => {
    setTab(2);
  };
  const handleClickModelPapers = () => {
    setTab(2);
    setPaperTab("MODEL");
  };
  const handleClickPastPapers = () => {
    setTab(2);
    setPaperTab("PAST");
  };
  const handleClickQuizes = () => {
    setTab(3);
  };
  const handleClickArticles = () => {
    setTab(4);
  };
  const singleBookHandle = (bookId: any) => {
    localStorage.setItem("clickedBookId", bookId);
    console.log("bookId", bookId)
    navigate('/library/book');
  }
  return (
    <React.Fragment>
      <div
        className="container-lg h-full justify-cotent-center container-Main"
        style={{ minHeight: "500px" }}
      >
        <div className="pt-4">
          <ul className="nav justify-content-center">
            <li className="nav-item pl-2">
              <button className="btn bg-blue2 font-blue5" onClick={handleClickBooks}>
                All Books
              </button>
            </li>
            <li className="nav-item pl-2">
              <button className="btn bg-blue2 font-blue5" onClick={handleClickPapers}>
                Papers
              </button>
            </li>
            <li className="nav-item pl-2">
              <button className="btn bg-blue2 font-blue5" onClick={handleClickQuizes}>
                Quizes
              </button>
            </li>
            <li className="nav-item pl-2">
              <button className="btn bg-blue2 font-blue5" onClick={handleClickArticles}>
                Articles
              </button>
            </li>
          </ul>
        </div>
        {tab === 1 ? (
          <div>
            <table className="table table bg-blue4 font-blue1 table-striped mt-4">
              {/* <caption>List of users</caption> */}
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Description</th>
                  <th scope="col">Published Date</th>
                </tr>
              </thead>
              <tbody className="min-h-full">
                {booList?.resource?.map((book: any, index: number) => {
                  return <>
                    <tr key={index} onClick={() => singleBookHandle(book._id)}>
                      <th scope="row">
                        {book.title > 89 ? book.title.substring(0, 90).concat('...') : book.title}
                      </th>
                      <td>{book.creatorFirstName}{" "}{book.creatorLastName}<br />
                        {book.creatorEmail}
                      </td>
                      <td>
                        {book.descriptione > 89 ? book.description.substring(0, 90).concat('...') : book.description}
                      </td>
                      <td>{moment(book?.createdAt).fromNow()}</td>
                    </tr>
                  </>;

                })}
              </tbody>
            </table>
          </div>
        ) : null}
        {tab === 2 ? (
          <div>
            <ul className="nav justify-content-left mt-2 mb-2">
              <li className="nav-item pl-2">
                <button
                  className="btn bg-blue2 font-blue5"
                  onClick={handleClickPastPapers}
                >
                  Past Papers
                </button>
              </li>
              <li className="nav-item pl-2">
                <button
                  className="btn bg-blue2 font-blue5"
                  onClick={handleClickModelPapers}
                >
                  Model Papers
                </button>
              </li>
            </ul>
            <div>
              {paperTab === "PAST" ? (
                <table className="table table bg-blue4 font-blue1 mt-4 table-striped ">
                  {/* <caption>List of users</caption> */}
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Author</th>
                      <th scope="col">Description</th>
                      <th scope="col">Published Date</th>
                    </tr>
                  </thead>
                  <tbody className="min-h-full">
                    {booList?.resource?.map((book: any, index: number) => {
                      if (book?.bookType == "past paper book") {
                        return <>
                          <tr key={index} onClick={() => singleBookHandle(book._id)}>
                            <th scope="row">
                              {book.title > 89 ? book.title.substring(0, 90).concat('...') : book.title}
                            </th>
                            <td>{book.creatorFirstName}{" "}{book.creatorLastName}<br />
                              {book.creatorEmail}
                            </td>
                            <td>
                              {book.descriptione > 89 ? book.description.substring(0, 90).concat('...') : book.description}
                            </td>
                            <td>{moment(book?.createdAt).fromNow()}</td>
                          </tr>
                        </>;
                      }
                    })}
                  </tbody>
                </table>
              ) : (
                <table className="table table bg-blue4 font-blue1 mt-4 table-striped">
                  {/* <caption>List of users</caption> */}
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Author</th>
                      <th scope="col">Description</th>
                      <th scope="col">Published Date</th>
                    </tr>
                  </thead>
                  <tbody className="min-h-full">
                    {booList?.resource?.map((book: any, index: number) => {
                      if (book?.bookType == "model paper book") {
                        return <>
                          <tr key={index} onClick={() => singleBookHandle(book._id)}>
                            <th scope="row">
                              {book.title > 30 ? book.title.substring(0, 31).concat('...') : book.title}
                            </th>
                            <td>{book.creatorFirstName}{" "}{book.creatorLastName}<br />
                              {book.creatorEmail}
                            </td>
                            <td>
                              {book.descriptione > 40 ? book.description.substring(0, 41).concat('...') : book.description}
                            </td>
                            <td>{moment(book?.createdAt).fromNow()}</td>
                          </tr>
                        </>;
                      }
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        ) : null}
        {tab === 3 ? (
          <div>
            <table className="table table bg-blue4 font-blue1 mt-4 table-striped">
              {/* <caption>List of users</caption> */}
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Description</th>
                  <th scope="col">Published Date</th>
                </tr>
              </thead>
              <tbody className="min-h-full">
                {booList?.resource?.map((book: any, index: number) => {
                  if (book?.bookType == "quizes") {
                    return <>
                      <tr key={index} onClick={() => singleBookHandle(book._id)}>
                        <th scope="row">
                          {book.title > 30 ? book.title.substring(0, 31).concat('...') : book.title}
                        </th>
                        <td>{book.creatorFirstName}{" "}{book.creatorLastName}<br />
                          {book.creatorEmail}
                        </td>
                        <td>
                          {book.descriptione > 40 ? book.description.substring(0, 41).concat('...') : book.description}
                        </td>
                        <td>{moment(book?.createdAt).fromNow()}</td>
                      </tr>
                    </>;
                  }
                })}
              </tbody>
            </table>
          </div>
        ) : null}
        {tab === 4 ? (
          <div>
            <table className="table table bg-blue4 font-blue1 mt-4 table-striped">
              {/* <caption>List of users</caption> */}
              <thead>
                <tr>
                  <th scope="col">Title a</th>
                  <th scope="col">Author</th>
                  <th scope="col">Description</th>
                  <th scope="col">Published Date</th>
                </tr>
              </thead>
              <tbody className="min-h-full">
                {booList?.resource?.map((book: any, index: number) => {
                  if (book?.bookType == "news papers") {
                    return <>
                      <tr key={index} onClick={() => singleBookHandle(book._id)}>
                        <th scope="row">
                          {book.title > 30 ? book.title.substring(0, 31).concat('...') : book.title}
                        </th>
                        <td>{book.creatorFirstName}{" "}{book.creatorLastName}<br />
                          {book.creatorEmail}
                        </td>
                        <td>
                          {book.descriptione > 40 ? book.description.substring(0, 41).concat('...') : book.description}
                        </td>
                        <td>{moment(book?.createdAt).fromNow()}</td>
                      </tr>
                    </>;
                  }

                })}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default Index;
