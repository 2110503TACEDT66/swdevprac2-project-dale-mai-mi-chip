"use client";
import { SwipeCarousel } from "./ui/SwipeCarousel";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Service() {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              x: 0,
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
    <div ref={sectionRef} className=" px-10 h-[200vh]">
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={controls}
        style={{ opacity: 0, x: 25 }}
      >
        <div
          className="text-8xl font-bold  5xl text-black  py-[20vh] text-end flex flex-col"
          id="ourservices"
        >
          <div className="">WELCOME,</div>
          <div className="mt-5">USER</div>
          <div className="mt-5">TO OUR SERVICES</div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={controls}
        style={{ opacity: 0, x: -25 }}
      >
        <div className="">
          <div className="text-5xl font-extrabold text-black">OUR SERVICES</div>
          <div className="mt-10 flex justify-center items-center">
            {" "}
            <SwipeCarousel />{" "}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
