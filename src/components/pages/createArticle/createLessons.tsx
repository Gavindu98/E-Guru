import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { LibraryService } from "../../../services/LibraryService";

const CreateLessons: React.FC = () => {
  const [language, setLanguage] = useState({ languageType: "" })
  const [grade, setGrade] = useState({ grade: "" })
  const [subject, setSubject] = useState({ subject: "" })
  const [lessonData, setLessonData] = useState({ chapter: "", heading: "", content: "" })
  const [fileUpload, setFileUpload] = useState<any>();
  const navigate = useNavigate();

  const handleClickfile = (e: any) => {
    const file = e.target.files[0]
    //console.log(file)
    setFileUpload(file)
    // setPostImage({
    //   preview: file.createObjectURL(file),
    //   raw: file,
    // });
  }

  const handleClickCreateBook = () => {
    // console.log("bookData", bookData)
    // console.log("bookcategory", bookcategory)
    // console.log("language", language)

    if (lessonData && grade && language && subject) {
      const description = {
        language: language.languageType,
        grade: grade.grade,
        subject: subject.subject,
        chapter: lessonData.chapter,
        heading: lessonData.heading,
        content: lessonData.content,
      }
      console.log("description", description)
      const dataString = JSON.stringify(description);
      const formData = new FormData();
      formData.append("lessonbanner", fileUpload);
      formData.append("description", dataString);
      // for (const key of formData.entries()) {
      //   console.log(key[0] + ", " + key[1]);
      // }

      //console.log(...formData);
      //console.log(formData);
      if (formData.get("lessonbanner") && formData.get("description")) {
        LibraryService.addlesson(formData).then((res) => {
          console.log("postdata", formData);
          console.log(res)
          if (res.data) {
            console.log(res.data.message)
            Swal.fire({
              title: res.data.message,
              icon: "success",
              confirmButtonColor: "#181641",
              iconColor: "#f8f9fe",
              showDenyButton: false,
              showCancelButton: false,
              confirmButtonText: "Ok",
            })
            navigate('/dashboard');
          } else {
            console.log("error")
            Swal.fire({
              title: "Something went wrong please try again",
              icon: "error",
              confirmButtonColor: "#181641",
              iconColor: "#f8f9fe",
              showDenyButton: false,
              showCancelButton: false,
              confirmButtonText: "Ok",
            })
          }
        });
      }
    }
  }
  return (
    <React.Fragment>
      <div className="container-lg h-full">
        <div className="row">
          <div className="col-12 ">
            <div className="mt-4 mb-4">
              <div className="form-group">
                <label>Language</label><br></br>
                <select
                  onChange={(e) =>
                    setLanguage({
                      ...language,
                      languageType: e.target.value,
                    })
                  }
                  // value={postContentType.contentType}
                  className="w-100 btn-primary h-8 border rounded"
                  defaultValue={"DEFAULT"}
                >
                  <option value="English" className="">
                    Please select language
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

                {/* <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small> */}
              </div>
              <div className="form-group">
                <label>Grade</label>
                <select
                  onChange={(e) =>
                    setGrade({
                      ...grade,
                      grade: e.target.value,
                    })
                  }
                  // value={postContentType.contentType}
                  className="w-100 btn-primary h-8 border rounded"
                  defaultValue={"DEFAULT"}
                >
                  <option value="other" className="">
                    Please select grade
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
              </div>
              <div className="form-group">
                <label>Subject</label>
                <select
                  onChange={(e) =>
                    setSubject({
                      ...subject,
                      subject: e.target.value,
                    })
                  }
                  // value={postContentType.contentType}
                  className="w-100 btn-primary h-8 border rounded"
                  defaultValue={"DEFAULT"}
                >
                  <option value="other" className="">
                    Please select subject
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
              </div>
              <div className="form-group">
                <label>Chapter</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Chapter name..."
                  onChange={(e) =>
                    setLessonData({
                      ...lessonData,
                      chapter: e.target.value,
                    })
                  }
                />
                {/* <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small> */}
              </div>
              <div className="form-group">
                <label>Heading</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add Book Title..."
                  onChange={(e) =>
                    setLessonData({
                      ...lessonData,
                      heading: e.target.value,
                    })
                  }
                />
                {/* <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small> */}
              </div>
              <div className="form-group">
                <label>Content</label>
                <textarea
                  className="form-control"
                  placeholder="Content"
                  rows={4}
                  onChange={(e) =>
                    setLessonData({
                      ...lessonData,
                      content: e.target.value,
                    })
                  }
                />
                {/* <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small> */}
              </div>
              <div className="form-group">
                <label>Upload something about your lesson</label>
                <input type="file" className="form-control"
                  onChange={(e) => handleClickfile(e)}
                />
                {/* <label className="form-check-label">Check me out</label> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mb-6">
          <div className="me-4 ms-4 d-flex justify-content-center">
            <button className="btn btn-primary mt-4 w-full mb-3" onClick={() => handleClickCreateBook()}>
              Add book to Library
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateLessons;
