import React from "react";
import './ThirdPage.css';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function ThirdPage() {

  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  return (
    <div className="thirdpage">

      <div className="team1">
        <input
          className="Team 1 Name"
          type="text"
          id="Team 1 Name"
          name="Team 1 Name"
          placeholder="Team 1 Name"
        />
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Home/Away
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Away
              </a>
            </li>
           
          </ul>
        </div>
      </div>
         <hr class="hr-text" data-content="Vs"/> 

      <div className="team2">
        <input
          className="Team 2 Name"
          type="text"
          id="Team 2 Name"
          name="Team 2 Name"
          placeholder="Team 2 Name"
        />
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Home/Away
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Away
              </a>
            </li>
           
          </ul>
        </div>
      </div>  
      <h3>Vs</h3>   
      <button type="submit" className="btn btn-primary" onClick={() => {
          navigate("/lastpage");}}>Submit</button>
      <button type="button" className="btn btn-danger" onClick={() => {
          navigate("/");}}>Back</button>
      <p>MatchType : {user.MatchType}</p>
    </div>
  );
}
