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
      <h1 className="text-6xl font-bold cursor block">🖥️ {name}</h1>
      <p className="text-2xl">
        I design and code beautifully simple things, and I love what I do.
      </p>
      <img className="h-60 w-60 self-center" src="assets/profile.png" />
    </>
  );
}

export default Title;
