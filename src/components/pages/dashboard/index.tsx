import React, { useEffect, useState } from "react";
import PostCard from "./postCard";
const Index: React.FC = () => {
  
  return (
    <React.Fragment>
      <div className="row d-flex flex-row-center">
        <div className="col-sm-2 col-md-2 col-lg-2 col-0"></div>
        <div className=" col-sm-8 col-md-8 col-lg-8 col-12  mt-2 mb-2">
            <div className="p-2">
              <PostCard />
            </div>
        </div>
        <div className="col-sm-2 col-md-2 col-lg-2 col-0"></div>
      </div>

      <div className="row d-flex flex-row-center">
        <div className="col-sm-2 col-md-2 col-lg-2 col-0"></div>
        <div className=" col-sm-8 col-md-8 col-lg-8 col-12  mt-2 mb-2">
            <div className="p-2">
              <PostCard />
            </div>
        </div>
        <div className="col-sm-2 col-md-2 col-lg-2 col-0"></div>
      </div>
      <div className="row d-flex flex-row-center">
        <div className="col-sm-2 col-md-2 col-lg-2 col-0"></div>
        <div className=" col-sm-8 col-md-8 col-lg-8 col-12  mt-2 mb-2">
            <div className="p-2">
              <PostCard />
            </div>
        </div>
        <div className="col-sm-2 col-md-2 col-lg-2 col-0"></div>
      </div>

      <div className="row d-flex flex-row-center">
        <div className="col-sm-2 col-md-2 col-lg-2 col-0"></div>
        <div className=" col-sm-8 col-md-8 col-lg-8 col-12  mt-2 mb-2">
            <div className="p-2">
              <PostCard />
            </div>
        </div>
        <div className="col-sm-2 col-md-2 col-lg-2 col-0"></div>
      </div>

      <div className="row d-flex flex-row-center">
        <div className="col-sm-2 col-md-2 col-lg-2 col-0"></div>
        <div className=" col-sm-8 col-md-8 col-lg-8 col-12  mt-2 mb-2">
            <div className="p-2">
              <PostCard />
            </div>
        </div>
        <div className="col-sm-2 col-md-2 col-lg-2 col-0"></div>
      </div>
    </React.Fragment>
  );
};

export default Index;
