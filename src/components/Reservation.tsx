"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reservation() {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);
  return (
    <div ref={sectionRef} id="myreservation">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        style={{ opacity: 0, y: 50 }}
      >
        <div className="h-[100vh] flex p-10 grid grid-cols-2 my-20 items-center justify-center w-[100%]">
          <div className=" font-extrabold text-black px-[5vw] py-[20vh] text-start flex flex-col w-[80vw] text-[18vh] ">
            <div className="">WANNA</div>
            <div className="mt-[-5vh]">FEEL</div>
            <div className="mt-[-5vh]">RELAXED ?</div>
          </div>
          <button className="flex text-black font-bold text-3xl p-2 bg-white h-[10vh] text-center ml-[15vw] shadow-xl rounded-[5vh]  w-[40%] items-center justify-center">
            BOOK NOW!
          </button>
        </div>
      </motion.div>
    </div>
  );
}
