export default async function getMassageShop(id: string, token: string) {
  const response = await fetch(
    `http://localhost:5010/api/v1/massageShops/${id}`,
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
