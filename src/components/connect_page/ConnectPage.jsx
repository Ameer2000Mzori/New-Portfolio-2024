import React from "react";
import { connectData } from "./hooks/connectData.js";

function ConnectPage() {
  return (
    <div className="p-[64px]  w-[100%] flex gap-[15px]  flex-col lg:flex-row flex-wrap text-center items-center justify-center">
      <div className=" lg:w-[30%] w-[70%] h-[80%]">
        <img src={connectData.img} alt="" />
      </div>
      <div className=" lg:w-[30%] w-[70%] h-[80%]">
        <h1 className=" lg:text-[28px] text-[18px] font-baloo leading-[48px] font-bold text-upperTitleColor">
          {connectData.title}
        </h1>
        <h1 className="lg:text-[16px] text-[13px] font-baloo leading-[27px] font-bold text-textColors">
          {connectData.describe}
        </h1>
        <p className="lg:text-[18px] text-[14px] font-baloo leading-[27px] font-bold text-textColors">
          {connectData.letsConnectText}
        </p>
        <a
          href="https://www.linkedin.com/in/mohammed-ameen-82314425b/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-[#FF1D48] py-[12px] px-[16px] text-white font-baloo font-bold rounded-[15px] hover:text-red-300 hover:bg-red-900">
            Linkedin
          </button>
        </a>
      </div>
    </div>
  );
}

export default ConnectPage;
