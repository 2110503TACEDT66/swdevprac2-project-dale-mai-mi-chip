import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/lib/getUserProfile";

export default async function DashBoardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);

  return (
    <main className="flex items-center justify-center  bg-gradient-to-b from-customOrangeStart to-customOrangeEnd h-[100vh]">
      {profile.data.role == "admin" ? (
        <form className="">
          <div className="text-3xl text-black font-bold ">
            Create Massage Shop
          </div>
          <div className="flex-items-center">
            <label className="w-auto block text-grey-700 " htmlFor="name">
              {" "}
              Name{" "}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type the name"
              className="p-2 rounded-2xl w-[50vw]"
            />
          </div>
          <div className="flex-items-center">
            <label className="w-auto block text-grey-700 " htmlFor="name">
              {" "}
              Address{" "}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type the name"
              className="p-2 rounded-2xl w-[50vw]"
            />
          </div>
          <div className="flex-items-center">
            <label className="w-auto block text-grey-700 " htmlFor="name">
              {" "}
              Name{" "}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type the name"
              className="p-2 rounded-2xl w-[50vw]"
            />
          </div>
          <div className="flex-items-center">
            <label className="w-auto block text-grey-700 " htmlFor="name">
              {" "}
              Name{" "}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type the name"
              className="p-2 rounded-2xl w-[50vw]"
            />
          </div>
        </form>
      ) : (
        <div className="text-7xl text-black font-bold text-center">
          No Permission
        </div>
      )}
    </main>
  );
}
