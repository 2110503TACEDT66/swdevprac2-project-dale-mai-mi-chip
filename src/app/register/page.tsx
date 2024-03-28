"use client";

import backIcon from "public/img/back.png";
import Image from "next/image";
import Link from "next/link";

import userRegister from "@/lib/userRegister";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    const user = await userRegister(name, tel, email, password);
    console.log({ name, tel, email, password });

    if (!user) alert("Please Enter All Field");
    setName("");
    setTel("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-subPageStart to-subPageEnd">
      <div className="flex justify-start items-start mt-20">
        <Image
          src={backIcon}
          alt="Back Icon"
          width={0}
          height={0}
          className="w-8 ml-5"
        />
        <button
          type="submit"
          className="inline-flex px-5 py-1 rounded-full hover:bg-grey text-black font-bold"
        >
          Back
        </button>
      </div>
      <div className="bg-black py-10 px-5 rounded-3xl shadow-md text-left mx-auto w-3/4 md:w-1/2 h-3/4">
        <h1 className="text-white text-5xl font-bold text-center mb-4">
          CREATE AN ACCOUNT
        </h1>
        <form className="mt-10 space-y-4 ml-10" onSubmit={handleSubmit}>
          <div className="flex items-center">
            <label
              className="text-white text-sm mr-5 w-[20%] text-end"
              htmlFor="name"
            >
              name :{" "}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-full border border-white bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-black mr-10"
              required
            />
          </div>
          <div className="flex items-center">
            <label
              className="text-white text-sm mr-5 w-[20%] text-end"
              htmlFor="tel"
            >
              tel :{" "}
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              className="w-full p-2 rounded-full border border-white bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-black mr-10"
              required
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <label
              className="text-white text-sm mr-5 w-[20%] text-end"
              htmlFor="email"
            >
              email :{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 rounded-full border border-white bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-black mr-10"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <label
              className="text-white text-sm mr-5 w-[20%] text-end"
              htmlFor="password"
            >
              password :{" "}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 rounded-full border border-white bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-black mr-10"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="inline-flex px-5 py-1 rounded-full bg-white hover:bg-gray-300 text-black text-center">
                Register
            </button>
          </div>
        </form>
        <br></br>
        <p className="border-b border-white"></p>
        <p className="text-white text-sm text-center mt-4">
          Already have an account?  |  {"  "}
          <Link href={"/api/auth/signin"}>
            <button
              type="submit"
              className="inline-flex px-2 py-1 rounded-full bg-white hover:bg-gray-300 text-black"
            >
              Log-in
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
