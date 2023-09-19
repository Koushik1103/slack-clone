import React from "react";
import "./Header.css";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        {/* Avatars for logged in user */}
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        {/* Time Icon */}
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/* Search Icon */}
        <SearchIcon />
        <input placeholder="Search Slack Clone"></input>
        {/* Input */}
      </div>
      <div className="header__right">
        {/* Help Icon */}
        <HelpOutlineOutlinedIcon />
      </div>
    </div>
  );
}

export default Header;
