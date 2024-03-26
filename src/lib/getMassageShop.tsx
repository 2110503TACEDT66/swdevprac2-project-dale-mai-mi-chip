export default async function getMassageShop(id: string) {
  const response = await fetch(
    `http://backendprojectend-env.eba-yfwfbmux.us-east-1.elasticbeanstalk.com/api/v1/massageshops/${id}`
  );

  if (!response.ok) throw new Error("Failed to fetch Data");

  return await response.json();
}
