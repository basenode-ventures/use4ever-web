import { Features } from "@/app/components/landing/Features";
import { Hero } from "@/app/components/landing/Hero";
import { Pricing } from "@/app/components/landing/Pricing";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}
