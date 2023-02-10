import React, { useEffect, useState } from "react";
import { ArticleService } from "../../../services/ArticleService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const CreateArticle: React.FC = () => {
  const initialState = {
    title: "",
    content: "",
  };
  const [postData, setPostData] = useState<any>(initialState);
  const [postImage, setPostImage] = useState({ preview: "", raw: "" });
  const [newFileUrl, setNewFileUrl] = useState<any>();
  const [fileUpload, setFileUpload] = useState<any>();
  const navigate = useNavigate();

  const setUploadImage = (file: any) => {
    setNewFileUrl(URL.createObjectURL(file));
    // setPostImage({
    //   preview: URL.createObjectURL(file),
    //   raw: file,
    // });
  };
  const handleClickfile = (e: any) => {
    const file = e.target.files[0]
    console.log(file)
    setFileUpload(file)
    // setPostImage({
    //   preview: file.createObjectURL(file),
    //   raw: file,
    // });
  }

  const createPost = (): void => {

    console.log("postData==>", postData)
    if (postData && postImage) {
      const data = {
        title: postData.title,
        content: postData.content
      };
      const dataString = JSON.stringify(data);
      const formData = new FormData();
      formData.append("file", fileUpload);
      formData.append("title", data.title);
      formData.append("description", data.content);
      // for (const key of formData.entries()) {
      //   console.log(key[0] + ", " + key[1]);
      // }

      //console.log(...formData);
      //console.log(formData);
      if (formData.get("file") && formData.get("title") && formData.get("description")) {
        console.log("formData",formData)
        ArticleService.createArticle(formData).then((res) => {
          // console.log("postdata", formData);
          // console.log(res)
          if (res.data) {
            // console.log(res.data.message)
            Swal.fire({
              title: "Success!",
              icon: "success",
              confirmButtonColor: "#181641",
              iconColor: "#f8f9fe",
              showDenyButton: false,
              showCancelButton: false,
              confirmButtonText: "Ok",
            })
            navigate('/dashboard');
          } else {
            // console.log("error")
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
  };
  return (
    <React.Fragment>
      <div className="container-lg h-full">
        <div className="row">
          <div className="col-12 ">
            <form className="mt-4 mb-4">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  onChange={(e) =>
                    setPostData({
                      ...postData,
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
                    setPostData({
                      ...postData,
                      content: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label>Upload media</label>
                <input type="file" className="form-control"
                  onChange={(e) => handleClickfile(e)}
                />
                {/* <label className="form-check-label">Check me out</label> */}
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 mb-6">
          <div className="me-4 ms-4 d-flex justify-content-center">
            <button className="btn btn-primary mt-4 w-full mb-3" onClick={() => createPost()}>Upload Article</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateArticle;
