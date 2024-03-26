import backIcon from "public/img/back.png";
import Image from "next/image";

export default function SignOut() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-subPageStart to-subPageEnd">
      <div className="flex justify-start items-start">
        <Image
          src={backIcon}
          alt="Back Icon"
          width={0}
          height={0}
          className="w-8 ml-5"
        />
        <button type="submit" className="inline-flex px-5 py-1 rounded-full hover:bg-grey text-black font-bold">Back</button>
      </div>
      <div className="bg-black px-8 py-6 rounded-3xl shadow-md text-left mx-auto w-3/4 md:w-1/2 h-3/4">
        <h1 className="text-white text-3xl font-bold text-center mb-4">LOG - OUT</h1>
          <div className="text-white flex items-center justify-center">Are you sure you want to log-out from this account?</div>
          <br></br>
          <div className="flex items-center justify-center gap-5">
            <button type="submit" className="inline-flex px-5 py-1 rounded-full bg-white hover:bg-grey text-black">Yes</button>
            <button type="submit" className="inline-flex px-5 py-1 rounded-full bg-white hover:bg-grey text-black">Cancle</button>
          </div>
      </div>
    </div>
  );
}
