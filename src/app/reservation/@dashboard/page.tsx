import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/lib/getUserProfile";

export default async function DashBoardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);

  return (
    <main>
      {profile.data.role == "admin" ? (
        <form>
          <div className=""></div>
        </form>
      ) : null}
    </main>
  );
}
