import dynamic from "next/dynamic";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import Resume from "@/components/Resume";


// Dynamically import Hero and disable SSR
const Hero = dynamic(
  () => import("@/components/Hero").then((mod) => mod.Hero),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main>
        <Hero/>
        <Projects />
        <Experience />
        <Resume />
      </main>
    </div>
  );
}