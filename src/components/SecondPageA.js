import React from "react";
import { useState } from "react";
import "./SecondPageA.css";
import { useNavigate } from "react-router-dom";


export default function SecondPageA() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [value, onChange] = useState(null);

  let navigate = useNavigate();
  return (
    <>
      <div className="secondPageStart">
        <h2>Start Date and Time</h2>
        <div className="startdate">
          <label for="starttime"> start date and time : </label>
          <input type="datetime-local" id="starttime" name="starttime" /><br/>

          <label  for="location"> Match Location  : </label>
          <input className="location" type="text" id="location" name="location" placeholder="Match Location" />
        </div>
      </div>

      <div className="secondPageEnd">
        <h2>End Date and Time</h2>
        <div className="enddate">
          <label for="endtime"> End date and time : </label>
          <input type="datetime-local" id="endtime" name="endtime" />
          <br />

          <label for="commen"> Commment : </label>
          <input className="comment" type="text" id="comment" name="comment" />
        </div>
      </div>

      <button type="button" className="btn btn-primary" onClick={() => {
          navigate("/thirdPage");}}>Next</button>
      <button type="button" className="btn btn-danger"  onClick={() => {
          navigate("/");}}>Back</button>    </>
  );
}
