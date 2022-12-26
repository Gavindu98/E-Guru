// import React from "react";
import React, { useEffect, useState } from "react";
import { LibraryService } from "../../../services/LibraryService";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Index: React.FC = () => {
  const [language, setLanguage] = useState({ languageType: "" })
  const [grade, setGrade] = useState({ grade: "" })
  const [subject, setSubject] = useState({ subject: "" })
  const [lessonList, setLessonList] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 1500);
    const data = {
      subject: "",
      language: "",
      grade: ""
    }
    LibraryService.getAllLessons(data).then((res) => {
      //console.log(res)
      // console.log(res.data)
      if (res.data) {
        //console.log("book List ==>", res.data);
        setLessonList(res.data)
      } else {
        console.log("error");
      }
    });
  }, []);

  const handleClickFilter = () => {
    const data = {
      subject: subject.subject,
      language: language.languageType,
      grade: grade.grade
    }
    console.log("data ==> ", data)
    LibraryService.getAllLessons(data).then((res) => {
      //console.log(res)
      // console.log(res.data)
      if (res.data) {
        //console.log("book List ==>", res.data);
        setLessonList(res.data)
      } else {
        console.log("error");
      }
    });
  }
  const singleLessonHandle = (lessonID: any) => {
    localStorage.setItem("clickedLessonId", lessonID);
    console.log("lessonID", lessonID)
    navigate('/lessons/single-view');
  }
  console.log("lessonList", lessonList)
  return (
    <React.Fragment>
      <div
        className="container-lg h-full justify-cotent-center "
        style={{ minHeight: "500px" }}
      >
        <div className="pt-4">
          <ul className="nav justify-content-center">
            <li className="nav-item pl-2">
              <select
                onChange={(e) =>
                  setLanguage({
                    ...language,
                    languageType: e.target.value,
                  })
                }
                // value={postContentType.contentType}
                className="form-select form-select-sm btn btn-primary"
                aria-label=".form-select-sm example"
                defaultValue={""}
              >
                <option value="" className="">
                  Language
                </option>
                <option value="English" className="">
                  English
                </option>
                <option value="Sinhala" className="">
                  Sinhala
                </option>
                <option value="Tamil" className="">
                  Tamil
                </option>
              </select>
            </li>
            <li className="nav-item pl-2">
              <select
                onChange={(e) =>
                  setGrade({
                    ...grade,
                    grade: e.target.value,
                  })
                }
                // value={postContentType.contentType}
                className="form-select form-select-sm btn btn-primary"
                aria-label=".form-select-sm example"
                defaultValue={""}
              >
                <option value="" className="">
                  Grade
                </option>
                <option value="10" className="">
                  10
                </option>
                <option value="11" className="">
                  11
                </option>
                <option value="12" className="">
                  12
                </option>
                <option value="13" className="">
                  13
                </option>
              </select>
            </li>
            <li className="nav-item pl-2">
              <select
                onChange={(e) =>
                  setSubject({
                    ...subject,
                    subject: e.target.value,
                  })
                }
                // value={postContentType.contentType}
                className="form-select form-select-sm btn btn-primary"
                aria-label=".form-select-sm example"
                defaultValue={""}
              >
                <option value="" className="">
                  Subject
                </option>
                <option value="Maths" className="">
                  Maths
                </option>
                <option value="Science" className="">
                  Science
                </option>
                <option value="English" className="">
                  English
                </option>
                <option value="Sinhala" className="">
                  Sinhala
                </option>
                <option value="Chemistry" className="">
                  Chemistry
                </option>
                <option value="Physics" className="">
                  Physics
                </option>
                <option value="ICT" className="">
                  ICT
                </option>
                <option value="Other" className="">
                  Other
                </option>
              </select>
            </li>
            <li className="nav-item pl-2">
              <button className="btn btn-warning" onClick={handleClickFilter}>Filter</button>
            </li>
          </ul>
        </div>
        <div className="pt-4">
          <table className="table table table-light table-striped">
            {/* <caption>List of users</caption> */}
            <thead>
              <tr>
                <th scope="col">Creator</th>
                <th scope="col">Grade</th>
                <th scope="col">Language</th>
                <th scope="col">Title</th>
                <th scope="col">Chapter</th>
                <th scope="col">Published</th>
              </tr>
            </thead>
            <tbody>
              {lessonList?.lessonArray?.map((lesson: any, index: number) => {
                return <>
                  <tr key={index} onClick={() => singleLessonHandle(lesson._id)}>
                    <th scope="row">
                      {lesson.creatorFirstName}{" "}{lesson.creatorLastName}<br />
                      {lesson.creatorEmail}
                    </th>
                    <td>
                      {lesson.grade}
                    </td>
                    <td>
                      {lesson.language}
                    </td>
                    <td>
                      {lesson.heading > 89 ? lesson.heading.substring(0, 90).concat('...') : lesson.heading}
                    </td>
                    <td>
                      {lesson.Chapter > 89 ? lesson.Chapter.substring(0, 90).concat('...') : lesson.Chapter}
                    </td>
                    <td>{moment(lesson.createdAt).fromNow()}</td>
                  </tr>
                </>;

              })}
            </tbody>
          </table>
          {
            lessonList?.lessonArray.length > 0 ? null :
              <div className="d-flex justify-cotent-center"><p>No Lessons </p></div>
          }
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
