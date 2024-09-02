import React from "react";
import HomeIcon from "../../../assets/icons/home.png";
import Stats from "../../../assets/icons/stats.png";
import Expertise from "../../../assets/icons/expertise.png";
import Projects from "../../../assets/icons/projects.png";
import Contributions from "../../../assets/icons/contributions.png";
import Contact from "../../../assets/icons/contact.png";

function Navbar() {
  return (
    <div className="text-white">
      <div>
        <h1 className="font-baloo font-bold text-[30px]">Ameen Portfolio</h1>
      </div>
      <div>
        <ul>
          <li>
            <img
              src={HomeIcon}
              alt="homeIcon"
              className="border-x-white w-[32px] h-[32px]"
            />
            <a href="#home">Home</a>
          </li>
          <li>
            <img
              src={Stats}
              alt="homeIcon"
              className="border-x-white w-[32px] h-[32px]"
            />
            <a href="#about">Stats</a>
          </li>
          <li>
            <img
              src={Expertise}
              alt="homeIcon"
              className="border-x-white w-[32px] h-[32px]"
            />
            <a href="#skills">Expertise</a>
          </li>
          <li>
            <img
              src={Projects}
              alt="homeIcon"
              className="border-x-white w-[32px] h-[32px]"
            />
            <a href="#projects">Projects</a>
          </li>
          <li>
            <img
              src={Contributions}
              alt="homeIcon"
              className="border-x-white w-[32px] h-[32px]"
            />
            <a href="#contact">Contributions</a>
          </li>
          <li>
            <img
              src={Contact}
              alt="homeIcon"
              className="border-x-white w-[32px] h-[32px]"
            />
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
