export default async function getMassageShop(id: string, token: string) {
  const response = await fetch(
    `https://presentation-day-1-dale-mai-mi-chip.vercel.app/api/v1/massageShops/${id}`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) throw new Error("Failed to fetch Data");

  return await response.json();
}
