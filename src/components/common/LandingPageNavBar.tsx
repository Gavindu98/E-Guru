import React from "react";
const LandingPageNavBar: React.FC = () => {
  return (
    <div className="sub_page">
      <div className="top_container ">
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="/home">
                <span>E-Guru</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <a className="nav-link" href="/home">
                        {" "}
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="/about">
                        {" "}
                        About{" "}
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/why">
                        {" "}
                        Why Us{" "}
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/contact">
                        Contact Us
                      </a>
                    </li>

                    <li className="nav-item ">
                      <a
                        className=" call_to-btn btn_white-border"
                        href="/login"
                      >
                        {" "}
                        Sign In{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default LandingPageNavBar;
