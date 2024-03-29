import { AddReservationResponseOne } from "../../interface";

export default async function addReservationBackend(
  token: string,
  hospitalId: string,
  userId: string,
  day: string
): Promise<AddReservationResponseOne> {
  const response = await fetch(
    `https://presentation-day-1-dale-mai-mi-chip.vercel.app/api/v1/massageshops/${hospitalId}/reservations`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        resDate: day,
        user: userId,
      }),
    }
  );

  if (!response.ok) {
    alert("Too many reservations!!");
  }

  return await response.json();
}
