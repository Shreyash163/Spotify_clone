import React from "react";
import { FaPlus } from "react-icons/fa";
import { BsTrashFill, BsMusicNoteList } from "react-icons/bs";
import PlayList from "./PlayList";

export default function MenuPlayList() {
  return (
    <>
      <div className="playListContainer">
        <div className="nameContainer">
          <p>PlayList</p>
          <i>
            <FaPlus />
          </i>
        </div>

        <div className="playListScroll">
          {PlayList &&
            PlayList.map((list) => (
              <div key={list.id} className="playList">
                <i className="list">
                  <BsMusicNoteList />
                </i>
                <p>{list.name}</p>
                <i className="trash">
                  <BsTrashFill />
                </i>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
