import React from "react";
import { NavData } from "../hooks/navbarData";
import MenuOpen from "../../../assets/icons/menuOpen.png";
import MenuClose from "../../../assets/icons/menuClose.png";

function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="text-white px-[40px] py-[48px] flex flex-row  justify-between  bg-gradient-to-b  from-[#000000] to-[#ffffff00]">
      <div className="">
        <h1 className="font-baloo font-bold lg:text-[30px] sm:text-[28px] sx:text-[22px] ">
          Ameen Portfolio
        </h1>
      </div>

      <ul className="lg:flex hidden flex-row gap-[15px]   text-center  items-center justify-center">
        {NavData.map((el, index) => {
          return (
            <a
              className="active:text-slate-300"
              href={`${el.path}`}
              key={index}
            >
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

      {/* on small devices this will show */}
      <div className=" lg:hidden flex cursor-pointer">
        <div>
          {showMenu ? (
            <p
              onClick={() => setShowMenu(false)}
              className=" bg-upperTitleColor  h-[24px] z-[15] absolute w-[24px] active:bg-slate-300 right-[40px]  top-[48px]  rounded-[2px]"
            >
              <img src={MenuClose} alt="" />
            </p>
          ) : (
            <p
              onClick={() => setShowMenu(true)}
              className=" bg-upperTitleColor  h-[24px] z-[15] absolute w-[24px] active:bg-slate-300 right-[40px]  top-[48px]  rounded-[2px]"
            >
              <img src={MenuOpen} alt="" />
            </p>
          )}
        </div>
      </div>

      {/* on small devices this will show */}

      <div
        className={`h-[100dvh] w-[100dvw] lg:hidden pt-[38px] bg-gradient-to-b  text-black px-[40px] from-[#f5f5f5] to-[#0000007c] top-0 left-0 z-10 flex flex-col absolute ${
          showMenu ? "flex" : "hidden"
        }`}
      >
        <div className="">
          <h1 className="font-baloo font-bold text-[30px] ">Ameen Portfolio</h1>
        </div>
        {NavData.map((el, index) => {
          return (
            <a
              href={`${el.path}`}
              key={index}
              className=" mt-[15px] border-b border-black pb-[5px] "
            >
              <li
                className={`flex flex-row  tex-start w-[100%] items-center justify-start  gap-[15px] `}
              >
                <img
                  src={el.icon}
                  alt={el.lebal}
                  className="border-x-white  w-[32px] h-[32px] "
                />
                <p className="font-baloo font-bold text-[18px]">{el.lebal}</p>
              </li>
            </a>
          );
        })}

        <ul className="flex flex-row text-center items-center justify-center mt-[15px] gap-[15px]">
          <a
            href="https://www.linkedin.com/in/mohammed-ameen-82314425b/"
            target="_blank"
            rel="noreferrer"
            className=" active:bg-blue-300  px-[32px] py-[16px] bg-blue-600 text-white font-bold font-baloo text-[16px]"
          >
            Linkdin
          </a>
          <a
            href="https://github.com/Ameer2000Mzori"
            target="_blank"
            rel="noreferrer"
            className=" active:bg-blue-300 px-[32px] py-[16px] bg-blue-600 text-white font-bold font-baloo text-[16px]"
          >
            Github
          </a>
        </ul>
      </div>

      <ul className="lg:flex hidden tex-center items-center justify-center ">
        <a
          href="https://www.linkedin.com/in/mohammed-ameen-82314425b/"
          target="_blank"
          rel="noreferrer"
          className=" active:text-blue-300 px-[6px] py-[6px]  text-white border-r-2 border-white font-bold font-baloo text-[14px]"
        >
          Linkdin
        </a>
        <a
          href="https://github.com/Ameer2000Mzori"
          target="_blank"
          rel="noreferrer"
          className=" active:text-blue-300 px-[6px] py-[6px]  text-white font-bold font-baloo text-[14px]"
        >
          Github
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
