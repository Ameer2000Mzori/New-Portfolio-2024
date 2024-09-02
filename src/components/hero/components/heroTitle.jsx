import React from "react";

function HeroTitle() {
  return (
    <div className="h-[50%] flex flex-col text-center items-center justify-center">
      <h1 className="font-baloo font-bold sm:text-[26px] lg:text-[48px] text-white">
        Hello, I'm Ameen
      </h1>
      <h1 className=" font-baloo font-bold  w-[40%] leading-[60px] mt-[15px] lg:text-[55px] sm:text-[40px] text-white">
        Experienced Web Developer{" "}
        <p className=" text-[#00dc93]">with Diverse Skillset</p>
      </h1>

      <div>
        <ul className=" text-white font-baloo text-[18px] font-bold flex flex-row text-center items-center gap-[15px] w-[100%]">
          {/* <div className="h-[12px] w-[12px] rounded-full bg-[#00dc93]"></div> */}
          <li>
            <h1>Websites</h1>
          </li>
          <div className="h-[6px] w-[6px]  rounded-full bg-[#00dc93]"></div>
          <li>
            <h1>Applications</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeroTitle;
