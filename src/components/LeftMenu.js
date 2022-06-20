import React from "react";
import "./LeftMenu.css";
import { FaSpotify } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Menu from "./Menu";
import { MenuList } from "./MenuList";
import MenuPlayList from "./MenuPlayList";
import TrackList from "./TrackList";

export default function LeftMenu() {
  return (
    <>
      <div className="leftMenu">
        <div className="logoContainer">
          <i>
            {" "}
            <FaSpotify
              size={"2.5em"}
              style={{
                color: "#49E12E"
              }}
            />
          </i>

          <h1 className="spotify">&nbsp; &nbsp; Spotify</h1>
        </div>
        <div className="searchbox">
          <i div className="searchIcon">
            <FaSearch />
          </i>
          <input type="text" placeholder="Search..." />
        </div>
        <div>
          <Menu title={"Menu"} menuObject={MenuList} />
          <MenuPlayList />

          <TrackList />
        </div>
      </div>
    </>
  );
}
