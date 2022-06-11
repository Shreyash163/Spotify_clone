import React from 'react'
import './FirstPage.css'
import { useNavigate, useParams , useLocation, Link} from "react-router-dom";
import { friendly } from "../features/User";
import { useDispatch } from 'react-redux';

export default function FirstPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div className="firstPage">
      <h2 >First Page</h2>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Match type
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li >
            <Link to="/secondPageA">
            <a className="dropdown-item" href="/secondPageA"  onClick={() => {
          dispatch(friendly({ MatchType: "Friendly" }));
        }}> 
              Friendly
            </a>
            </Link>
          </li>
          <li>
          <Link to="/secondPageB">
            <a className="dropdown-item" href="/secondPageB"  onClick={() => {
          dispatch(friendly({ MatchType: "Tournament" }));}}>
              tournament
            </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
