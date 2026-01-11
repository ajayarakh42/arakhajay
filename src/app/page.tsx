import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark text-white selection:bg-primary/30">
      <Navbar />
      {/* Hero Section */}
      <ScrollyCanvas />

      <About />
      <Services />
      <Experience />
      <Projects />
      <TechStack />
      <ContactFooter />
    </main>
  );
}
