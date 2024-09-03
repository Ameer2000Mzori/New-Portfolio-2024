import React from "react";

export default function FooterPage() {
  return (
    <div className=" p-[40px] bg-footerBgColor flex flex-col lg:flex-row justify-between text-center items-center  ">
      <h1 className="leading-[22px] text-[12px] lg:text-[16px] font-bold text-upperTitleColor">
        © 2023 Mohammed Ameen. All Rights Reserved.
      </h1>
      <ul className="flex flex-row text-center items-center justify-between gap-[15px]">
        <li>
          <a
            className="font-baloo font-bold hover:text-slate-400 text-upperTitleColor leading-[12px] text-[15px]"
            href="#HOME"
          >
            Home
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            className="font-baloo font-bold hover:text-slate-400 text-upperTitleColor leading-[12px] text-[15px]"
            href="https://www.linkedin.com/in/mohammed-ameen-82314425b/"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            className="font-baloo font-bold hover:text-slate-400 text-upperTitleColor leading-[12px] text-[15px]"
            href="https://github.com/Ameer2000Mzori"
          >
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}
