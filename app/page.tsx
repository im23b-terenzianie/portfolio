import Image from "next/image";
import { BackgroundPaths } from "@/components/ui/background-paths";
import AboutMe from "@/components/aboutme";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BackgroundPaths title="Enzo Terenziani" />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

