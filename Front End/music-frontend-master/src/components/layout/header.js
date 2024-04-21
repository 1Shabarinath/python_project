import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1>007 Club</h1>
      </div>
      <div className="nav-items">
        <p>
          <a href="/">Home</a>
        </p>

        <p>
          <a href="/albums">Albums</a>
        </p>
        <p>
          <a href="/contact">Contact</a>
        </p>
      </div>
    </div>
  );
}
