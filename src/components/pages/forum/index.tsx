// import React from "react";
import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import SideBar from "../../common/SideBar";

const Index: React.FC = () => {
  const [shownavBar, setShownavBar] = useState(true);

  const HandleClickShowNavbar = () => {
    setShownavBar(true);
  };
  const HandleClickClose = () => {
    setShownavBar(false);
  };
  return (
    <React.Fragment><>
    forum
    </></React.Fragment>
    
    
  );
};

export default Index;
