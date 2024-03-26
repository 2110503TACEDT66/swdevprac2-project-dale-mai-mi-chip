export default async function getMassageShops() {
  const response = await fetch(
    "http://backendprojectend-env.eba-yfwfbmux.us-east-1.elasticbeanstalk.com/api/v1/massageshops"
  );

  if (!response.ok) console.log("Failed to fetch Data");

  return await response.json();
}
