import Hero from "@/components/Hero";
import Reservation from "@/components/Reservation";
import Service from "@/components/Service";
import FeedBacks from "@/components/Feedbacks";
import FunFacts from "@/components/FunFacts";
import About from "@/components/About";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-customOrangeStart to-customOrangeEnd">
      <Hero />
      <Service />
      <FunFacts />
      <FeedBacks />
      <Reservation />
      <About />
    </main>
  );
}
