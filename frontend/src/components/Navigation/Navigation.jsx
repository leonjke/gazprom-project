import React from "react";
import { NavLink } from "react-router-dom";
import {
  ProfileIcon,
  CupIcon,
  EmailIcon,
  GiftIcon,
  FlipChartIcon,
} from "@holism/icons";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation__item">
        <NavLink to="/idea/profile">
          <ProfileIcon size={50} />
        </NavLink>
      </div>
      <div className="navigation__item">
        <NavLink to="/idea/leaderboard">
          <CupIcon size={50} />
        </NavLink>
      </div>
      <div className="navigation__item">
        <NavLink to="/idea/feedback">
          <EmailIcon size={50} />
        </NavLink>
      </div>
      <div className="navigation__item">
        <NavLink to="/idea/gift">
          <GiftIcon size={50} />
        </NavLink>
      </div>
      <div className="navigation__item">
        <NavLink to="/idea/canban">
          <FlipChartIcon size={50} />
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
