// import React from "react";
import React, { useEffect, useState } from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 All rights reserved 
        <a className="text-dark" href="">
           : e-Guru
        </a>
      </div>
    </footer>
  );
};

export default Footer;
