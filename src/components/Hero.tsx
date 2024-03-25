"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
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
    <div ref={sectionRef} id="home">
      <div className=" lg:px-[30vh] flex flex-col justify-center text-white h-screen bg-black">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          style={{ opacity: 0, y: 50 }}
        >
          <div className="text-5xl text-center font-bold">DALE-MAI-MI-CHIP</div>
          <div className="mt-[-4vh]  text-[15vh] text-start font-bold ">
            MASSAGE
          </div>
          <div className="mt-[-8vh] text-[15vh] text-end font-bold">
            RESERVATION
          </div>
        </motion.div>
      </div>
    </div>
  );
}
