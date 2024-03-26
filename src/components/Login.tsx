import unknown from "public/img/unknown.png";
import profile from "public/img/profile.jpg";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export default async function Login() {
  const session = await getServerSession(authOptions);
  return (
    <div className="fixed right-5">
      {session ? (
        <Link href={"/api/auth/signout"}>
          <div className="flex flex-row ">
            <Image
              src={profile}
              alt="Home Icon"
              width={0}
              height={0}
              className="w-8 mr-2 flex"
            />
            <div className="mr-5 text-black flex mt-1">
              {session.user?.name}
            </div>
          </div>
        </Link>
      ) : (
        <div className="flex flex-row ">
          <Image
            src={unknown}
            alt="Home Icon"
            width={0}
            height={0}
            className="w-8 mr-2 flex"
          />
          <div className="mr-5 text-black flex mt-1">username</div>
        </div>
      )}
    </div>
  );
}
