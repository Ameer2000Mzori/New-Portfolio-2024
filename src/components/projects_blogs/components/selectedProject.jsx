import React from "react";

export default function SelectedProject({ projectData, setIsSelectedProject }) {
  console.log("here", projectData);
  return (
    <div className=" fixed bg-[#00000062] h-[100%] flex flex-col  text-start items-center justify-center  top-[0%] left-[0%] w-[100%]">
      <div className="bg-darkBgColor relative  pb-[15px] lg:h-[90%] h-[95%]  lg:w-[75%] w-[90%]">
        <button
          onClick={() => setIsSelectedProject(false)}
          className=" bg-darkBgColor py-[12px] px-[15px] hover:bg-slate-900 absolute top-[15px] right-[15px] text-textColors"
        >
          close
        </button>
        <img
          src={projectData.img}
          alt={`${projectData.title}`}
          className="h-[40%] lg:h-[80%] w-full object-cover"
        />
        <div className="pl-[16px]">
          <h1 className="text-[18px] pl-[15px] leading-[28px] font-bold font-baloo text-textColors">
            {projectData.title}
          </h1>
          <p className="flex flex-row gap-[5px] text-textColors w-[90%] flex-wrap pl-[15px] mb-[15px]">
            {projectData.description}
          </p>

          <div className="flex text-textColors flex-row gap-[5px] w-[90%] flex-wrap pl-[15px] mb-[15px]">
            {projectData.technologies.map((el, i) => {
              return (
                <p
                  key={i}
                  className="  leading-[24px] text-[12px] font-bold font-baloo"
                >
                  {el},
                </p>
              );
            })}
          </div>
        </div>

        <div className=" gap-[15px] flex flex-row text-center items-center justify-between pr-[15px] pl-[40px] w-[100%] h-[40px]">
          <a href={projectData.url} target="_blank" rel="noreferrer">
            <div className=" hover:bg-red-950 bg-buttonsBgColor font-baloo font-bold text-textColors px-[15px] py-[3px] rounded-[5px]">
              Project
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
