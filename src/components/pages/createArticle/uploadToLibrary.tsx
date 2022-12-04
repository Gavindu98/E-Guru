import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { LibraryService } from "../../../services/LibraryService";

const UploadToLibrary: React.FC = () => {
  const [language, setLanguage] = useState({ languageType: "" })
  const [bookcategory, setBookCategory] = useState({ booktype: "" })
  const [bookData, setBookData] = useState({ title: "", content: "" })
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

    if (bookData && bookcategory && language) {
      const data = {
        language: language.languageType,
        bookType: bookcategory.booktype,
        title: bookData.title,
        description: bookData.content
      }
      console.log("data", data)
      const dataString = JSON.stringify(data);
      const formData = new FormData();
      formData.append("file", fileUpload);
      formData.append("data", dataString);
      // for (const key of formData.entries()) {
      //   console.log(key[0] + ", " + key[1]);
      // }

      //console.log(...formData);
      //console.log(formData);
      if (formData.get("file") && formData.get("data")) {
        LibraryService.addBook(formData).then((res) => {
          console.log("postdata", formData);
          console.log(res)
          if (res.data) {
            console.log(res.data.message)
            Swal.fire({
              title: res.data.message,
              icon: "success",
              confirmButtonColor: "#0E134A",
              iconColor: "#F7931E",
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
              confirmButtonColor: "#0E134A",
              iconColor: "#F7931E",
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
                <label>Book Type</label>
                <select
                  onChange={(e) =>
                    setBookCategory({
                      ...bookcategory,
                      booktype: e.target.value,
                    })
                  }
                  // value={postContentType.contentType}
                  className="w-100 btn-primary h-8 border rounded"
                  defaultValue={"DEFAULT"}
                >
                  <option value="other" className="">
                    Please book type
                  </option>
                  <option value="past paper book" className="">
                    Past Paper Book
                  </option>
                  <option value="model paper book" className="">
                    Model Paper Book
                  </option>
                  <option value="school text book" className="">
                    School Text Book
                  </option>
                  <option value="subject related book" className="">
                    Subject Related Book
                  </option>
                  <option value="quizes" className="">
                    Quizes
                  </option>
                  <option value="news papers" className="">
                    News papers
                  </option>
                  <option value="other" className="">
                    Others
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add Book Title..."
                  onChange={(e) =>
                    setBookData({
                      ...bookData,
                      title: e.target.value,
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
                    setBookData({
                      ...bookData,
                      content: e.target.value,
                    })
                  }
                />
                {/* <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small> */}
              </div>
              <div className="form-group">
                <label>Upload something about your book</label>
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

export default UploadToLibrary;
