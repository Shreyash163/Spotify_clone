import React from "react";
import nature from "../images/nature.jpg";
import check from "../images/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";

function Banner() {
  return (
    <div className="banner">
      <img src={nature} alt="" className="bannerImg" />
      <div className="content">
        <div className="breadCrumps">
          <p>
            Home <span> /Popular Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2> Billie Elish </h2>
              <img src={check} alt="" />
            </div>

            <p>
              <i>
                <FaHeadphones />
              </i>
              21,232 <span>Monthly Listeners</span>
            </p>
          </div>

          <div className="right">
            <a href="/"> Play </a>
            <a href="/">
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>

      <div className="bottomLayer"></div>
    </div>
  );
}
export { Banner };
