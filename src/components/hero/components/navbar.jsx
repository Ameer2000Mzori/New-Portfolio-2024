import React from "react";
import { NavData } from "../hooks/navbarData";

function Navbar() {
  return (
    <div className="text-white px-[40px] py-[48px] flex flex-row  justify-between  bg-gradient-to-b  from-[#000000] to-[#ffffff00]">
      <div className="">
        <h1 className="font-baloo font-bold text-[30px]">Ameen Portfolio</h1>
      </div>

      <ul className="flex flex-row gap-[15px]   text-center  items-center justify-center">
        {NavData.map((el, index) => {
          return (
            <a href={`${el.path}`} key={index}>
              <li
                className={`flex flex-col tex-center items-center px-[15px] ${
                  el.id !== 6 ? "border-r border-textColors" : ""
                }`}
              >
                <img
                  src={el.icon}
                  alt={el.lebal}
                  className="border-x-white w-[32px] h-[32px] "
                />
                <p className="font-baloo font-bold text-[14px]">{el.lebal}</p>
              </li>
            </a>
          );
        })}
      </ul>

      <div className=" ">
        <ul>
          <li>Linkdin</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
