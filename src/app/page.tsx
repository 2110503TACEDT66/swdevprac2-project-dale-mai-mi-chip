import Hero from "@/components/Hero";
import Reservation from "@/components/Reservation";
import Service from "@/components/Service";
import FeedBacks from "@/components/Feedbacks";
import FunFacts from "@/components/FunFacts";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Hero />
      <Reservation />
      <Service />
      <FeedBacks />
      <FunFacts />
      <About />
    </main>
  );
}
