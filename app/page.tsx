import Hero from "@/components/hero/Hero";
import Briefs from "@/components/home/Briefs";
import ClosingCta from "@/components/home/ClosingCta";
import Credentials from "@/components/home/Credentials";
import Disciplines from "@/components/home/Disciplines";
import Partners from "@/components/home/Partners";
import Seats from "@/components/home/Seats";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Disciplines />
      <Credentials />
      <Partners />
      <Briefs />
      <Seats />
      <ClosingCta />
    </div>
  );
}
