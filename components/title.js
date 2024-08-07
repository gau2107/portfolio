import { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";
const MagicOcean = [
  "Web Developer",
  "HackerRank Certified Dev",
  "Udemy Certified Dev",
];
function Title() {
  const [magicName, setMagicName] = useState("");

  return (
    <>
      <h1 className="lg:text-6xl sm:text-4xl font-bold block">
        Gaurav Solanki - Frontend Web Developer
      </h1>
      <p className="lg:text-2xl sm:text-1xl justify-self-auto ml-1 mr-1">
        Transforming Your Web Vision into Reality with Expert Frontend
        Development
      </p>
      <img
        className="h-60 w-60 mb-6 transform transition duration-500 hover:scale-105"
        src="assets/profile.png"
        alt="Profile Pic"
      />
    </>
  );
}

export default Title;
