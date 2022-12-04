import { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";
const MagicOcean = [
  "Web Developer",
  "HackerRank Certified Dev",
  "Udemy Certified Dev"
]
function Title() {
  const [magicName, setMagicName] = useState("");
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  const [index, setIndex] = useState(0);
  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        setMagicName(MagicOcean[index]);
        if(index===3)
          setIndex(0);
        else setIndex(index++);
      }, 2000);
      return function clear() {
        clearInterval(intervalRef.current);
      };
    },
    [index]
  );
  return (
    <>
      <h1 className="lg:text-6xl sm:text-4xl font-bold cursor block">🖥️ {name}</h1>
      <p className="lg:text-2xl sm:text-1xl justify-self-auto ml-1 mr-1">
        I design and code beautifully simple things, and I love what I do.
      </p>
      <img className="h-60 w-60 mb-6 transform transition duration-500 hover:scale-105" src="assets/profile.png" alt="Profile Pic"/>
    </>
  );
}

export default Title;
