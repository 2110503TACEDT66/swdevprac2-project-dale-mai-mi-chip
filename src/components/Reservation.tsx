"use client";

export default function Reservation() {
  return (
    <div
      className="h-[100vh] flex p-10 grid grid-cols-2 my-20 items-center justify-center w-[100%]"
      id="myreservation"
    >
      <div className=" font-extrabold text-black px-[5vw] py-[20vh] text-start flex flex-col w-[80vw] text-[18vh] ">
        <div className="">WANNA</div>
        <div className="mt-[-5vh]">FEEL</div>
        <div className="mt-[-5vh]">RELAXED ?</div>
      </div>
      <button className="flex text-black font-bold text-3xl p-2 bg-white h-[10vh] text-center ml-[15vw] shadow-xl rounded-[5vh]  w-[40%] items-center justify-center">
        BOOK NOW!
      </button>
    </div>
  );
}
