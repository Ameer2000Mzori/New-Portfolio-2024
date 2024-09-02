import React from "react";
import { ProjectTitleData } from "./hooks/projectsData.js";
export default function ProjectsPage() {
  return (
    <div className="mt-[32px]">
      <div className=" mb-[44px]">
        <h1 className="mb-[16px] text-textColors">
          {ProjectTitleData[0].title}
        </h1>
        <h1 className="text-textColors">{ProjectTitleData[1].title}</h1>
      </div>
    </div>
  );
}
