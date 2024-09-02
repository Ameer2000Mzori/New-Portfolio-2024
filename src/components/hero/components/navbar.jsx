import React from "react";

function Navbar() {
  return (
    <div>
      <div>
        <h1>Ameen Portfolio</h1>
      </div>
      <div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Linkdin</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
