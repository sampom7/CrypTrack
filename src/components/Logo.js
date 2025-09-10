import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/Group.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="absolute sm:top-[1.5rem] top-[1rem] sm:left-[1.5rem] left-[1rem] [text-decoration:none]  text-cyan
      flex items-center
      sm:text-lg text-md"
    >
      <img src={logoSvg} alt="CrypTrack" className="w-[10%] h-auto" />
      {/* <span className="text-white text-lg">CrypTrack</span> */}
    </Link>
  );
};

export default Logo;
