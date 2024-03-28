import { MassageShop, MassageShopResponse } from "../../interface";

export default async function getMassageShops(
  token: string
): Promise<MassageShopResponse> {
  const response = await fetch(
    "https://presentation-day-1-dale-mai-mi-chip.vercel.app/api/v1/massageShops?limit=10",
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
      next: { tags: ["massageshops"] },
    }
  );

  if (!response.ok) {
    throw new Error("Cannot get user profile");
  }
  return await response.json();
}
