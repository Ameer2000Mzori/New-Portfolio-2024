import React from "react";
import Navbar from "./components/navbar";
import HeroBgImg from "../../assets/images/herobgimg.png";
import HeroTitle from "./components/heroTitle";
import ArrowDown from "./components/arrowDown";

function HeroPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroBgImg})`,
        backgroundPosition: `center`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `cover`,
      }}
      className="bg-black h-[100dvh]"
    >
      <Navbar />
      <HeroTitle />
      <ArrowDown />
    </div>
  );
}

export default HeroPage;
