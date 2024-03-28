export default async function updateMassageShop(
  id: string,
  name: string,
  token: string
) {
  const response = await fetch(
    `https://presentation-day-1-dale-mai-mi-chip.vercel.app/api/v1/massageShops/${id}`,
    {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
      }),
    }
  );

  if (!response.ok) throw new Error("Failed to fetch Data");

  return await response.json();
}
