// import React from "react";
import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import SideBar from "../../common/SideBar";

const Index: React.FC = () => {
  const [shownavBar, setShownavBar] = useState(true)

  const HandleClickShowNavbar = () => {
    setShownavBar(true)
  }
  const HandleClickClose = () => {
    setShownavBar(false)
  }
  return (
    <div>
    {/* <div className="row w-101">
      <Header HandleClickShowNavbar={HandleClickShowNavbar}/>
    </div> */}
    <div className="row">
      <div className="col-2">
        {shownavBar? <SideBar  HandleClickClose={HandleClickClose}/> : null}
      </div>
      <div className="col-8">
        <div className="card">
          <div className="card-body">
            setting
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  </div>
  );
};

export default Index;
