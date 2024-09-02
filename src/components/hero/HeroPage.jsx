import React from "react";
import Navbar from "./components/navbar";
import HeroBgImg from "../../assets/images/herobgimg.png";

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
    </div>
  );
}

export default HeroPage;
