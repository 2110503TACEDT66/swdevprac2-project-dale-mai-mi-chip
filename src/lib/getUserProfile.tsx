import { UserProfileResponse } from "../../interface";

export default async function getUserProfile(
  token: string
): Promise<UserProfileResponse> {
  const response = await fetch(
    "https://presentation-day-1-dale-mai-mi-chip.vercel.app/api/v1/auth/me",
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
