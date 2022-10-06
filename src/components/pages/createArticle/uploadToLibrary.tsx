import React, { useEffect, useState } from "react";

const UploadToLibrary: React.FC = () => {
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
                />
              </div>
              <div className="form-group">
                <label>Upload media</label>
                <input type="file" className="form-control" />
                {/* <label className="form-check-label">Check me out</label> */}
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 mb-6">
            <div className="me-4 ms-4 d-flex justify-content-center">
                <button className="btn btn-primary mt-4 w-full mb-3">Upload Article</button>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UploadToLibrary;
