import React from "react";
import ArrowDownIcon from "../../../assets/icons/arrow_down.png";
function ArrowDown() {
  return (
    <div className="w-[100dvw] flex flex-col text-center items-center justify-center">
      <div className="   cursor-pointer w-[40px] h-[40px] bg-transparent border-white border-[4px] ">
        <img
          src={ArrowDownIcon}
          alt="arrow down"
          className="w-[32px] h-[32px] "
        />
      </div>
      <div className=" mt-[40px] absolute bottom-[15px] w-[100%] gap-[15px] p-[12px] flex flex-row text-center items-center justify-center ">
        <div className="h-[12px] w-[12px] bg-white rounded-full"></div>
        <div className="h-[12px] w-[12px] bg-white rounded-full"></div>
        <div className="h-[12px] w-[12px] bg-white rounded-full"></div>
      </div>
    </div>
  );
}

export default ArrowDown;
