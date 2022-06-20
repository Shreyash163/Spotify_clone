import React from "react";
import "./MainContainer.css";
import { Banner } from "./Banner";
import { FaUsers } from "react-icons/fa";
import { AudioList } from "./AudioList";

export default function MainContainer() {
  return (
    <>
      <div className="mainContainer">
        <Banner />
        <div className="menuList">
          <ul>
            <li>
              <a href="/">Popular</a>{" "}
            </li>
            <li>
              <a href="/">Albums</a>{" "}
            </li>
            <li>
              <a href="/">Songs</a>{" "}
            </li>
            <li>
              <a href="/">Fans</a>{" "}
            </li>
            <li>
              <a href="/">About</a>{" "}
            </li>
          </ul>
          <p>
            <i>
              <FaUsers />
            </i>
            12.3<span>Followers</span>
          </p>
        </div>
        <AudioList />
      </div>
    </>
  );
}
