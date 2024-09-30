import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

export default function Home({ children } : { children: React.ReactNode }) {
  return (
    <main>
          <Hero />
          <Features />
          <Testimonials />
          {children}
        </main>
  );
}
