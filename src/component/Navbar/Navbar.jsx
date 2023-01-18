import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <>This is navbar</>
      <br />
      <Link to="about">About</Link>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Navbar;
