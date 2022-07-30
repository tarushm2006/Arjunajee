import React from "react";
import {Link } from "react-router-dom";

export default function InterLs1(){
  return (
    <div className="interls1">
      <ul>
        <li><Link to="/physics/ls1/lectures">Lectures</Link></li><br />
        <li><Link to="/physics/ls1/notes">Lecture Notes</Link></li><br />
        <li><Link to="/physics/ls1/backlog">Backlog Express</Link></li><br />
      </ul>
    </div>
  )
}