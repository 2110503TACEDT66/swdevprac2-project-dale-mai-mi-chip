"use client";
import { useState, useEffect } from "react";
import { Select, MenuItem } from "@mui/material";
import { useSession } from "next-auth/react";
import getMassageShops from "@/lib/getMassageShops";
import { MassageShop, UserProfile } from "../../interface";
import getUserProfile from "@/lib/getUserProfile";

export default function LocationReserve({
  onLocationChange,
}: {
  onLocationChange: Function;
}) {
  const [location, setLocation] = useState<string>("");
  const [userProfile, setUserProfile] = useState<null | UserProfile>(null);
  const [massageShops, setMassageShops] = useState<MassageShop[]>([]);
  const session = useSession();

  useEffect(() => {
    if (!session || !session.data) return;

    const fetchMassageShops = async () => {
      try {
        const shops = await getMassageShops(session.data.user.token);
        const profile = await getUserProfile(session.data.user.token);

        setUserProfile(profile.data);
        setMassageShops(shops.data);

        console.log(massageShops);
      } catch (error) {
        console.error("Error fetching massage shops:", error);
      }
    };

    fetchMassageShops();
  }, [session]);

  return (
    <div
      className="bg-slate-100 rounded-lg space-x-5 
      w-[100%] px-10 py-5 flex flex-row justify-center mt-2"
    >
      <Select
        variant="standard"
        name="location"
        id="location"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
          onLocationChange(e.target.value);
        }}
        className="h-[2em] w-[200px]"
      >
        {massageShops.map((shop: MassageShop) => (
          <MenuItem key={shop.name} value={shop.name}>
            {shop.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
