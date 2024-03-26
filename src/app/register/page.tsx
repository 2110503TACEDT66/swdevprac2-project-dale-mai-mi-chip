import backIcon from "public/img/back.png";
import Image from "next/image";

export default function SignIn() {
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
        <h1 className="text-white text-3xl font-bold text-center mb-4">CREATE AN ACCOUNT</h1>
        <form className="space-y-4">
          <div className="flex items-center">
            <label className="text-white text-sm mr-2">name :  </label>
            <input
              type="name"
              id="name"
              name="name"
              className="w-full px-3 py-2 rounded-full border border-white bg-black focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center">
            <label className="text-white text-sm mr-2">tel :  </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              className="w-full px-3 py-2 rounded-full border border-white bg-black focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center">
            <label className="text-white text-sm mr-2">email :  </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 rounded-full border border-white bg-black focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center">
            <label className="text-white text-sm mr-2">password :  </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 rounded-full border border-white bg-black focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="inline-flex px-5 py-1 rounded-full bg-white hover:bg-grey text-black">Register</button>
          </div>
        </form>
        <br></br>
        <p className="border-b border-white"></p>
        <p className="text-white text-xs text-center mt-4">Already have an account? | <button type="submit" className="inline-flex px-2 py-1 rounded-full bg-white hover:bg-grey text-black">Log-in</button></p>
      </div>
    </div>
  );
}
