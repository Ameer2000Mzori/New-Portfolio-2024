import React from "react";

export default function FormPage() {
  return (
    <div
      id="CONTACT"
      className="mt-[64px] flex flex-col text-center items-center justify-center pb-[64px]"
    >
      <div>
        <h1 className="text-[30px] leading-[42px] font-baloo text-textColors font-bold ">
          Contact me
        </h1>
        <h1 className=" leading-[28px] text-[18px] text-textColors  font-baloo">
          get in touch with me using the form below.
        </h1>
      </div>

      <div className="w-[80%] h-[1px] bg-borderBetweenColors mt-[15px] mb-[15px]"></div>
      <form
        className="flex flex-col text-center items-center justify-start gap-[32px]"
        action="https://formspree.io/f/manwkqke"
        method="POST"
      >
        <div className=" flex flex-col lg:flex-row w-[100%] justify-center items-center  gap-[32px]">
          <div className="flex flex-col text-start justify-start items-start">
            <label
              htmlFor="name"
              className=" font-baloo text-[18px] text-upperTitleColor font-bold"
            >
              Name
            </label>
            <input
              className=" font-baloo text-[18px] bg-transparent border-2 px-[20px] h-[52px] w-[324px] lg:w-[424px] rounded-[15px] outline-none border-bordersColors text-upperTitleColor font-bold"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col text-start justify-start items-start">
            <label
              htmlFor="surname"
              className=" font-baloo text-[18px] text-upperTitleColor font-bold"
            >
              surname
            </label>
            <input
              className=" font-baloo text-[18px] bg-transparent border-2 px-[20px] h-[52px] w-[324px] lg:w-[424px] rounded-[15px] outline-none border-bordersColors text-upperTitleColor font-bold"
              type="text"
              name="surname"
              id="surname"
              placeholder="Enter your surname"
              required
            />
          </div>
        </div>
        <div className="flex flex-col text-start justify-start w-[100%] items-start">
          <label
            htmlFor="email"
            className=" font-baloo text-[18px] text-upperTitleColor font-bold"
          >
            email
          </label>
          <input
            required
            className=" font-baloo text-[18px] bg-transparent border-2 px-[20px] h-[52px]  w-[100%] rounded-[15px] outline-none border-bordersColors text-upperTitleColor font-bold"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className=" flex flex-col text-start justify-start w-[100%] items-start">
          <label
            htmlFor="text"
            className=" font-baloo text-[18px] text-upperTitleColor font-bold"
          >
            text
          </label>
          <textarea
            className=" resize-none font-baloo text-[18px] bg-transparent border-2 px-[20px] pt-[15px] h-[202px]  w-[100%] rounded-[15px] outline-none border-bordersColors text-upperTitleColor font-bold"
            type="text"
            name="text"
            id="text"
            placeholder="Enter your text"
            required
          />
        </div>
        <p className=" leading-[28px] text-[18px] font-baloo font-bold text-upperTitleColor text-start">
          We respect your privacy and data.
        </p>
        <button className="w-[100%] h-[58px] bg-buttonsBgColor text-white font-baloo font-bold leading-[32px]  rounded-[12px] hover:bg-red-600">
          Send Message
        </button>
      </form>
    </div>
  );
}
