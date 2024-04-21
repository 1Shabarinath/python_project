import React from "react";
import Header from "./header";

import "./Layout.css";
export default function Layout({ children }) {
  return (
    <div className="main">
      <header>
        <Header />
      </header>
      {children}
    </div>
  );
}
