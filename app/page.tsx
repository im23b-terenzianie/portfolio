import Image from "next/image";
import { BackgroundPaths } from "@/components/ui/background-paths";
import AboutMe from "@/components/aboutme";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
      <BackgroundPaths title="Enzo Terenziani" />
      <AboutMe />
      <Projects />
    </div>
  );
}

