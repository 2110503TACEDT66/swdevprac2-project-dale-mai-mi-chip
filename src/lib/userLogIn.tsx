export default async function userLogIn(
  userEmail: string,
  userPassword: string
) {
  const response = await fetch(
    "http://backendprojectend-env.eba-yfwfbmux.us-east-1.elasticbeanstalk.com/api/v1/auth/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to log-in");
  }

  return await response.json();
}