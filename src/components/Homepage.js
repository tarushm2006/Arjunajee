import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <ul>
        <li><h2><Link to="/physics">Physics</Link></h2></li>
                </ul>
      </div>
  );
}