import React from "react";
import { statsData } from "./hooks/statsData";
export default function StatsPage() {
  return (
    <div className="lg:h-[40dvh] h-auto p-[64px] w-[100dvw] px-[10%] flex flex-col lg:flex-row text-center items-center justify-center gap-[24px]">
      {statsData.map((el, index) => {
        return (
          <div className=" bg-transparent w-[100%] lg:w-[33.33%] border-[#191919]  border-2 p-[24px] rounded-[12px] ">
            <h1 className=" font-baloo font-bold text-[#B3B3B3] text-[16px]">
              {el.title}
            </h1>
            <h1 className="text-[36px] text-white font-baloo font-bold">
              {el.describe}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
