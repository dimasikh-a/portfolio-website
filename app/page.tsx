import Navbar from "@/components/layout/navbar";
import About from "@/components/sections/AboutSections";
import AboutMe from "@/components/sections/AboutMe";
import ProjectSection from "@/components/sections/ProjectSections";
import ExperienceSection from "@/components/sections/ExperienceSections";
import StackSection from "@/components/sections/StackSection";
import TechincalSection from "@/components/sections/TechnicalSection";
import Footer from "@/components/layout/footer";
import ScrollTop from "@/components/ScrollTop";


export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <About></About>
      <AboutMe></AboutMe>
      <ProjectSection></ProjectSection>
      <ExperienceSection></ExperienceSection>
      <StackSection></StackSection>
      <TechincalSection></TechincalSection>
      <Footer></Footer>
      <ScrollTop />
    </div>
  );
}
