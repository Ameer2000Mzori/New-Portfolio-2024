import React from "react";
import {
  expertiseTitleData,
  expertiseExperienceData,
} from "./hooks/expertiseData.js";

export default function ExpertisePage() {
  return (
    <div className="mt-[64px] w-[100dvw] flex flex-col text-center items-center justify-center">
      <div className="mb-[44px]">
        <h1 className="text-upperTitleColor text-[18px] font-bold font-baloo">
          {expertiseTitleData[0].title}
        </h1>
        <h1 className="text-[24px] font-baloo font-bold text-textColors">
          {expertiseTitleData[1].title}
        </h1>
      </div>
      <div className="flex flex-row flex-wrap w-[80%] gap-[24px] text-center items-center justify-center">
        {expertiseExperienceData.map((el, i) => {
          return (
            <div
              key={i}
              className=" mb-[32px] w-[316px] h-[170px] flex flex-col text-center items-center justify-center "
            >
              <div className="w-[40px] h-[40px]">
                <img
                  className="w-[32px] h-[32px] mb-[20px] "
                  src={el.icon}
                  alt=""
                />
              </div>
              <h1 className="mb-[10px] font-bold font-baloo text-[18px] text-textColors">
                {el.title}
              </h1>
              <h1 className=" text-[16px] font-bold font-baloo leading-[24px]  text-textColors">
                {el.describe}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
