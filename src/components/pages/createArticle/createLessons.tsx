import React, { useEffect, useState } from "react";

const CreateLessons: React.FC = () => {
  return (
    <React.Fragment>
      <div className="container-lg h-full">
        <div className="row">
          <div className="col-12 ">
            <form className="mt-4 mb-4">
              <div className="form-group">
                <label>Language</label>
                <select className="form-control form-control-sm">
                  <option>Sinhala</option>
                  <option>Language</option>
                  <option>Tamil</option>
                </select>
                {/* <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small> */}
              </div>
              <div className="form-group">
                <label>Grade</label>
                <select className="form-control form-control-sm">
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div className="form-group">
                <label>Lesson Number</label>
                <select className="form-control form-control-sm">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                </select>
                {/* <label className="form-check-label">Check me out</label> */}
              </div>
              <div className="form-group">
                <label>Heading</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Heading"
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
                {/* <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small> */}
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
            <button className="btn btn-primary mt-4 w-full mb-3">
              Create Lesson
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateLessons;
