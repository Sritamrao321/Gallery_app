import React from "react";
import { NavLink } from "react-router-dom";
import { Header } from "antd/es/layout/layout";
const UserMenu = () => {
  return (
    <>
    <Header/>
    <div>
      <div className="text-center dashboard-menu">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
         
        </div>
      </div>
    </div>
    </>
  );
};

export default UserMenu;
