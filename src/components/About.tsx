export default function About() {
  return (
    <div className=" py-10  px-[20vh]">
      <div className="flex flex-col gap-5 text-center pt-[15vh] z-50">
        <div className="bg-black w-[40%] h-[20vh] absolute rounded-[5vh] z-0 right-[20vh] top-[687vh] text-center text-white flex flex-col pt-6">
          <div className="text-6xl font-extrabold mt-5 ">About US</div>
        </div>
        <div className="px-[15vh] bg-black  flex flex-col h-[20vh] bg-black text-white rounded-[6vh] items-start justify-center ">
          <div className="absolute text-4xl p-3 text-white bg-white w-[20vh] h-[20vh] left-[5vw] rounded-full" />
          <div className="text-3xl p-3 text-white z-50">
            Varinthorn Chatburapachai ( Anda )
          </div>
          <div className="text-xl text-white font-extralight p-3">
            id : 6633221621
          </div>
        </div>
        <div className="px-[15vh] items-start justify-center bg-black  flex flex-col h-[20vh] bg-black text-white rounded-[6vh]">
          <div className="absolute text-4xl p-3 text-white bg-white w-[20vh] h-[20vh] left-[5vw] rounded-full" />
          <div className="text-3xl p-3 text-white">
            Panisara kanjanachotkamol ( Model )
          </div>
          <div className="text-xl text-white font-extralight p-3">
            id : 6633150721
          </div>
        </div>
        <div className="px-[15vh] items-start justify-center bg-black  flex flex-col h-[20vh] bg-black text-white rounded-[6vh] ">
          <div className="absolute text-4xl p-3 text-white bg-white w-[20vh] h-[20vh] left-[5vw] rounded-full" />
          <div className="text-3xl p-3 text-white">
            Thawaree Khanjai ( Kaning )
          </div>
          <div className="text-xl text-white font-extralight p-3">
            id : 6633084021
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-black text-2xl font-bold text-5xl py-20 ">
        GitHub :{" "}
        <a
          href="https://github.com/2110503TACEDT66/swdevprac2-project-dale-mai-mi-chip"
          className="font-light text-xl underline"
        >
          https://github.com/2110503TACEDT66/swdevprac2-project-dale-mai-mi-chip
        </a>
      </div>
    </div>
  );
}
