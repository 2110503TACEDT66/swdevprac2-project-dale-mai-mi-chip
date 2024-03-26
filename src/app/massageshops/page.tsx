import getMassageShops from "@/lib/getMassageShops";
import { MassageShop } from "../../../interface";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/lib/getUserProfile";

export default async function MassageShop() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const massageShops = await getMassageShops(session.user.token);

  return (
    <div className="h-[100vh] bg-white text-black items-center flex justify-center flex-col bg-gradient-to-b from-customOrangeStart to-customOrangeEnd">
      <div className="text-black font-bold text-7xl text-center p-[15vh]">
        All MassageShop
      </div>
      {massageShops.data.map((massageShop: MassageShop) => (
        <div
          className="flex flex-row gap-10 text-black text-md "
          key={massageShop.name}
        >
          <div>{massageShop.name}</div>
          <div>{massageShop.address}</div>
          <div>{massageShop.opentime}</div>
          <div>{massageShop.closetime}</div>
          <div>{massageShop.tel}</div>
          {/* {role === "admin" && (
            <div>
              Reservations:
              <ul>
                {massageShop.reservations.map((reservation) => (
                  <li>{reservation}</li>
                ))}
              </ul>
            </div>
          )} */}
        </div>
      ))}
    </div>
  );
}
