import React from "react";
import { ProjectTitleData } from "./hooks/projectsData.js";
export default function ProjectsPage() {
  return (
    <div className="mt-[32px] flex flex-col text-center items-center justify-center">
      <div className=" mb-[44px]">
        <h1 className="mb-[16px] text-upperTitleColor leading-[28px] text-[18px] font-bold font-baloo">
          {ProjectTitleData[0].title}
        </h1>
        <h1 className="text-textColors leading-[48px] text-[30px] font-bold font-baloo">
          {ProjectTitleData[1].title}
        </h1>
      </div>
      <div className="w-[80%] flex flex-row flex-wrap text-center items-center justify-center gap-[24px]">
        <div className="w-[330px] h-[406px] text-textColors flex flex-col text-start items-start justify-start gap-[16px]">
          <img src={""} alt="" />
          <h1 className="text-[18px] leading-[28px] font-bold font-baloo text-textColors">
            aa
          </h1>
          <p className=" leading-[24px] text-[16px] font-bold font-baloo">aa</p>
        </div>
      </div>
    </div>
  );
}
