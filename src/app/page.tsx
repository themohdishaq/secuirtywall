import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Subscription from "@/components/Subscription";

import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection />
    <Subscription/>
    <Services />
    </>
  );
}
