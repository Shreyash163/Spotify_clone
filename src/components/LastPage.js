import React from "react";
import "./LastPage.css";
import { useSelector } from "react-redux";


export default function LastPage() {

    const user = useSelector((state) => state.user.value);

  return (
    <div className="lastPage">
      <table>
        <tr>
          <td>Team 1</td>
          <td>Team 2</td>
          <td>Match Type</td>
          <td>Tournament Name</td>
          <td>StartDate and Time</td>
          <td>EndDate and Time</td>
          <td> Location</td>
          <td>Comments</td>
        </tr>
          <tr>
            <td>{user.MatchType}</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
          </tr>
        
      </table>
    </div>
  );
}
