import Contact from "@/components/Contact";
import Entreprise from "@/components/Entreprise";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Parcours from "@/components/Parcours";
import Skills from "@/components/Skills";
import { Spacing } from "@/components/Spacing";
import { Badge } from "@/components/ui/badge";
import MouseEffect from "@/components/ui/mousemove";

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <MouseEffect />
      </div>
      <main className="m-auto max-w-5xl ">
        <Header />
        <Spacing size="lg" />
        <div id="section1" className="offset-anchor"></div>
        <Badge variant="outline" className="m-4">
          Présentation
        </Badge>
        <Hero />
        <Spacing size="md" />
        <div id="section2" className="offset-anchor"></div>
        <Badge variant="outline" className="m-4">
          Parcours
        </Badge>
        <Parcours />
        <Spacing size="md" />
        <div id="section3" className="offset-anchor"></div>
        <Badge variant="outline" className="m-4">
          Stage
        </Badge>
        <Entreprise />
        <Spacing size="md" />

        <div id="section4" className="offset-anchor"></div>
        <Badge variant="outline" className="m-4">
          Skills
        </Badge>
        <Skills />

        <Spacing size="md" />
        <Contact />

        <Footer />
      </main>
    </div>
  );
}
