import { ScrollProps } from "../../interface";

export default function Hero() {
  return (
    <div
      className=" lg:px-[30vh] flex flex-col justify-center text-white h-screen bg-black"
      id="home"
    >
      <div className=""></div>
      <div className="text-5xl text-center font-bold">DALE-MAI-MI-CHIP</div>
      <div className="mt-[-4vh]  text-[15vh] text-start font-bold ">
        MASSAGE
      </div>
      <div className="mt-[-8vh] text-[15vh] text-end font-bold">
        RESERVATION
      </div>
    </div>
  );
}
