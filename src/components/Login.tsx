import unknown from "public/img/unknown.png";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Login() {
  const session = await getServerSession(authOptions);
  return (
    <div className="">
      {session ? (
        <div className="text-black">Have Session</div>
      ) : (
        <div className="flex flex-row ">
          <Image
            src={unknown}
            alt="Home Icon"
            width={0}
            height={0}
            className="w-8 mr-2 flex"
          />
          <div className="mr-5 text-black flex">username</div>
        </div>
      )}
    </div>
  );
}
