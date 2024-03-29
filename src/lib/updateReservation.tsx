export default async function updateReservation(
  id: string,
  resDate: string, // Change the type to string
  token: string
) {
  console.log("!!!!!!!!!!!!!!!!!!!!!");
  console.log(resDate);
  console.log("!!!!!!!!!!!!!!!!!!!!!");

  const response = await fetch(
    `https://presentation-day-1-dale-mai-mi-chip.vercel.app/api/v1/reservations/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // Add Content-Type header
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        resDate: resDate, // Convert resDate to Date object
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update reservation");
  }

  console.log("******************");
  console.log(JSON.stringify(response));
  console.log("******************");

  return await response.json();
}
