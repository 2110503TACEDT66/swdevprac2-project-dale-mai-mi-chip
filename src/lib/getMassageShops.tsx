import { resolve } from "path";

export default async function getHospitals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    "http://backendprojectend-env.eba-yfwfbmux.us-east-1.elasticbeanstalk.com/api/v1/massageshops"
  );

  if (!response.ok) throw new Error("Failed to fetch Data");

  return await response.json();
}
