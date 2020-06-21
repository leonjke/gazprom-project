import React from "react";
import "./Idea.scss";
import { H1Promo } from "@holism/core";
import { Link } from "react-router-dom";
import hammer from "../../assets/images/Idea/hammer.png";
import lamp from "../../assets/images/Idea/lamp.png";

const Idea = () => {
  return (
    <div className="idea container">
      <div className="idea__wrap">
        <Link to="/idea/puzzle" className="idea__left">
          <div className="idea__img">
            <img src={lamp} alt="Идея" />
          </div>
          <div className="idea__name">
            <H1Promo color="#FFFFFF">Идея</H1Promo>
          </div>
        </Link>
        <Link to="/idea/profile" className="idea__right">
          <div className="idea__img">
            <img src={hammer} alt="Воплощение" />
          </div>
          <div className="idea__name">
            <H1Promo color="#FFFFFF">Воплощение</H1Promo>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Idea;
