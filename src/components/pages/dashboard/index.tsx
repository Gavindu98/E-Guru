import React, { useEffect, useState } from "react";
import PostCard from "./postCard";
const Index: React.FC = () => {
  return (
    <React.Fragment>
      <div className="container-lg h-full">
        <div className="d-flex justify-content-center">
          <div className="mt-2 mb-4">
            <div className="p-2 mb-4">
              <PostCard />
            </div>
            <div className="p-2 mb-4">
              <PostCard />
            </div>
            <div className="p-2 mb-4">
              <PostCard />
            </div>
            <div className="p-2 mb-4">
              <PostCard />
            </div>
            <div className="p-2 mb-4">
              <PostCard />
            </div>
            <div className="p-2 mb-4">
              <PostCard />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
