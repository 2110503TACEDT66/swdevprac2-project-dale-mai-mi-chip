export default async function getMassageShops(token: string) {
  const response = await fetch(
    "https://presentation-day-1-dale-mai-mi-chip.vercel.app/api/v1/massageShops",
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Cannot get user profile");
  }
  return await response.json();
}
