
import { useState, useContext, useEffect } from "react";
import './navbar.css'
import ProfileMenu from '../common/ProfileMenu'
import ProfileMenu1 from '../common/ProfileMenu1'
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap"
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function NavLink({ to, children }: { to: any; children: any }) {
  const { auth, setAuth } = useContext(AuthContext);
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}
function MobileNav({ open, setOpen }: { open: any; setOpen: any }) {
  const { auth, setAuth } = useContext(AuthContext);
  return (
    <div
      className={` opacity-90 absolute top-0 left-0 h-screen w-screen bg-yellow transform ${open ? "-translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out filter drop-shadow-md mobileContainer`}

    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-yellow h-20">
        {" "}
        {/*logo container*/}
        <a className="text-xl font-white font-semibold" href="/dashboard">
          e-Guru
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-white font-medium my-4 z-50"
          href="/dashboard"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Dashboard
        </a>
        <a
          className="text-xl font-white font-normal my-4 z-50"
          href="/forum"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Share Problems
        </a>
        <a
          className="text-xl font-white font-medium my-4 z-50"
          href="/lessons"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Lessons
        </a>
        <a
          className="text-xl text-light font-normal my-4 z-50"
          href="/library"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Library
        </a>
        {/* <a
          className="text-xl text-light font-normal my-4 z-50"
          href="/my-section"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          My Profile
        </a>
        <a
          className="text-xl text-light font-normal my-4 z-50"
          href="/bookmark"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Bookmark
        </a>
        <a
          className="text-xl text-light font-normal my-4 z-50"
          href="/settings"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Settings
        </a> */}

      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const splittedURL = window.location.pathname;
  const splittedURL2 = window.location.pathname.split("/");
  const end_url = splittedURL2[splittedURL2.length - 1];
  console.log("end_url==>", end_url)
  console.log("splittedURL==>", splittedURL)

  useEffect(() => {


  }, [splittedURL, splittedURL2]);

  const handleClickLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
    localStorage.removeItem("userId");

    navigate('/');
  }

  return (
    <nav className="flex filter drop-shadow-md bg-yellow px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <a className="text-2xl text-light font-semibold" href="/">
          e-Guru
        </a>
      </div>
      <div className=" flex justify-end items-center">
        {/* <UncontrolledDropdown
          className="ms-2"
        >
          <DropdownToggle
            className="btn btn-light btn-sm"
            color="#eff2f7"
            type="button"
          >
            <i className="bx bxs-cog align-middle me-1"></i> {auth?.firstname}
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <Link className="dropdown-item" to="#">
              Log out
            </Link>

          </DropdownMenu>
        </UncontrolledDropdown> */}
        {
          ((splittedURL != "/")) ?
            <div className="dropdown-item" onClick={() => handleClickLogout()}>
              <a href="">
                Log out
              </a>
            </div>
            : null
        }
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""
              }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"
              }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
          />
        </div>
        {
          (splittedURL != "/") ?
            <div className="hidden md:flex text-light">
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/forum">Share Problems</NavLink>
              <NavLink to="/lessons">Lessons</NavLink>
              <NavLink to="/library">Library</NavLink>
            </div>
            : null
        }



        {/* <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            User name
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
          </div>
        </div> */}
        {/* <ProfileMenu/> */}
      </div>
    </nav>
  );
}
