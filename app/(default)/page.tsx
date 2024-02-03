export const metadata = {
  title: "OpsFlow Labs",
  description: "DevOps Consulting Services",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import News from "@/components/blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <News />
    </>
  );
}
