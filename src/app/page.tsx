import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Subscription } from "@/components/Subscription";
import { HowItWorks } from "@/components/HowItWorks";

const HomePageSections = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <About />
      <Subscription />
      <HowItWorks />
    </div>
  );
};

export default function Home() {
  return <HomePageSections />;
}
