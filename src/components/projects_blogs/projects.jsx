import React from "react";
import { ProjectTitleData, projectsData } from "./hooks/projectsData.js";
export default function ProjectsPage() {
  return (
    <div className="mt-[32px]  mb-[64px] flex flex-col text-center items-center justify-center">
      <div className=" mb-[44px]">
        <h1 className="mb-[16px] text-upperTitleColor leading-[28px] text-[18px] font-bold font-baloo">
          {ProjectTitleData[0].title}
        </h1>
        <h1 className="text-textColors leading-[48px] text-[30px] font-bold font-baloo">
          {ProjectTitleData[1].title}
        </h1>
      </div>
      <div className="lg:w-[60%] w-[80%] flex flex-row flex-wrap text-center items-center justify-center gap-[24px] ">
        {projectsData.map((el, i) => {
          return (
            <div className="w-[330px] hover:drop-shadow-xl cursor-pointer  rounded-[4px] bg-cardsBgColors h-auto pb-[15px] h-min-[550px] text-textColors flex flex-col text-start items-start justify-start gap-[16px]">
              <img
                src={el.img}
                alt={`${el.title}`}
                className="h-[400px] w-full object-cover"
              />
              <h1 className="text-[18px] pl-[15px] leading-[28px] font-bold font-baloo text-textColors">
                {el.title}
              </h1>
              <div className="flex flex-row gap-[5px] w-[90%] flex-wrap pl-[15px] mb-[15px]">
                {el.technologies.map((el, i) => {
                  return (
                    <p
                      key={i}
                      className="  leading-[24px] text-[16px] font-bold font-baloo"
                    >
                      {el},
                    </p>
                  );
                })}
              </div>
              <div className=" gap-[15px] flex flex-row text-center items-center justify-between pr-[15px] pl-[15px] w-[100%] h-[40px]">
                <a key={i} href={el.url} target="_blank" rel="noreferrer">
                  <div className=" hover:bg-red-950 bg-buttonsBgColor font-baloo font-bold text-textColors px-[15px] py-[3px] rounded-[5px]">
                    Project
                  </div>
                </a>
                <div className="  hover:bg-green-900  bg-[#00dc93] font-baloo font-bold  px-[15px] py-[3px] rounded-[5px]">
                  details
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
