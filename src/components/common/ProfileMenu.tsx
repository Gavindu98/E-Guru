// import React from "react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";

const ProfileMenu: React.FC = () => {
  const [singlebtn1, setSinglebtn1] = useState(false);
  return (
    <React.Fragment>
      <Dropdown
        isOpen={singlebtn1}
        toggle={() => setSinglebtn1(!singlebtn1)}
        className="mt-4 mt-sm-0"
      >
        <DropdownToggle className="btn btn-secondary" caret>
          Gavindu Ushan <i className="mdi mdi-chevron-down" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <button><Link to="/my-section">My Profile</Link></button>
            <button><Link to="/bookmark">Bookmark</Link></button>
            <button><Link to="/setting">Settings</Link></button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default ProfileMenu;