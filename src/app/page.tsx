import { ProfessionalIntro } from "@/components/Intro";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import {Skills ,Footer} from "@/components/Skills";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
    <Navbar />
   <ProfessionalIntro />
   <Experience />
   <Projects  />
   <Skills />
   <Footer />
    </>
  );
}
