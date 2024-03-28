import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/lib/getUserProfile";
import { revalidateTag } from "next/cache";
import dbConnect from "@/db/dbConnect";
import { redirect } from "next/navigation";
import MassageShopSchemaOut from "@/db/models/MassageShop";

export default async function DashBoardPage() {
  const addMassageShop = async (addMassageShopForm: FormData) => {
    "use server";
    const name = addMassageShopForm.get("name");
    const address = addMassageShopForm.get("address");
    const tel = addMassageShopForm.get("tel");
    const opentime = addMassageShopForm.get("opentime");
    const closetime = addMassageShopForm.get("closetime");
    try {
      await dbConnect();

      const massageShop = MassageShopSchemaOut.create({
        name: name,
        address: address,
        tel: tel,
        opentime: opentime,
        closetime: closetime,
      });
      console.log(massageShop);
    } catch (error) {
      console.log(error);
    }

    revalidateTag("massageshops");
    redirect("/massageshops");
  };
  const session = await getServerSession(authOptions);

  if (!session || !session.user.token) return null;

  const role = session.user.role;

  return (
    <main className="p-10 items-center justify-center bg-gradient-to-b from-customOrangeStart to-customOrangeEnd h-[100vh]">
      <div className="text-7xl font-bold mr-20 p-5 text-black text-end">
        Add MassgeShop
      </div>
      {role === "admin" ? (
        <div className="flex flex-row items-center justify-center bg-black rounded-[10vh] mx-[20vw] gap-[2vw] mt-5 py-20">
          <form action={addMassageShop} className="flex flex-col">
            <div className="">
              <div className="flex items-center gap-10">
                <label
                  className="w-[10vw] block text-grey-700 text-end"
                  htmlFor="name"
                >
                  name :
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="p-2 rounded-full flex-grow bg-transparent border border-white text-white"
                />
              </div>
              <div className="flex items-center gap-10 mt-5">
                <label
                  className="w-[10vw] block text-grey-700 text-end"
                  htmlFor="address"
                >
                  address :
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="p-2 rounded-full flex-grow bg-transparent border border-white text-white"
                />
              </div>
              <div className="flex items-center gap-10 mt-5">
                <label
                  className="w-[10vw] block text-grey-700 text-end"
                  htmlFor="tel"
                >
                  tel :
                </label>
                <input
                  type="text"
                  id="tel"
                  name="tel"
                  className="p-2 rounded-full flex-grow bg-transparent border border-white text-white"
                />
              </div>
              <div className="flex items-center gap-10 mt-5">
                <label
                  className="w-[10vw] block text-grey-700 text-end"
                  htmlFor="opentime"
                >
                  open time :
                </label>
                <input
                  type="text"
                  id="opentime"
                  name="opentime"
                  className="p-2 rounded-full flex-grow bg-transparent border border-white text-white"
                />
              </div>
              <div className="flex items-center gap-10 mt-5">
                <label
                  className="w-[10vw] block text-grey-700 text-end"
                  htmlFor="closetime"
                >
                  close time :
                </label>
                <input
                  type="text"
                  id="closetime"
                  name="closetime"
                  className="p-2 rounded-full flex-grow bg-transparent border border-white text-white"
                />
              </div>
            </div>
            <button
              className="bg-green-500 p-5 w-[10vw] flex justify-center items-center ml-20 mt-10"
              type="submit"
            >
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
      ) : null}
    </main>
  );
}
