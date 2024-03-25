"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { covers } from "@/constant/covers.constant";

export default function Hero() {
  const SECOND = 1000;
  const AUTO_DELAY = SECOND * 5;
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [imgIndex, setImgIndex] = useState<number>(0);

  useEffect(() => {
    // set a timer
    const timer = setTimeout(() => {
      setImgIndex((imgIndex + 1) % covers.length);
      console.log(imgIndex);
    }, AUTO_DELAY);

    // don't forget to clear in cleanup
    return () => {
      clearTimeout(timer);
    };
  });

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
    <div ref={sectionRef} id="home">
      <motion.div
        className=" lg:px-[30vh] flex flex-col justify-center text-white h-[100vh]"
        style={{
          backgroundImage: `url(${covers[imgIndex]})`, // Use 'url()' to specify the background image
          backgroundSize: "cover", // Optional: Adjust background size as needed
          backgroundPosition: "center", // Optional: Adjust background position as needed
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          style={{ opacity: 0, y: 50 }}
          className="z-50"
        >
          <div className="text-5xl text-center font-bold z-50">
            DALE-MAI-MI-CHIP
          </div>
          <div className="mt-[-4vh]  text-[15vh] text-start font-bold z-50">
            MASSAGE
          </div>
          <div className="mt-[-8vh] text-[15vh] text-end font-bold z-50">
            RESERVATION
          </div>
        </motion.div>
        <div className="z-0 absolute top-0 left-0 w-full h-[105vh] bg-black bg-opacity-50" />
      </motion.div>
    </div>
  );
}
