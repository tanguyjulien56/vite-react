import Contact from "@/components/Contact";
import Entreprise from "@/components/Entreprise";
import Footer from "@/components/Footer";
import { FormationAccordion } from "@/components/FormationAccordion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Parcours from "@/components/Parcours";
import Skills from "@/components/Skills";
import { Spacing } from "@/components/Spacing";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
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
      {/* <Status /> */}
      <Spacing size="md" />
      <div id="section4" className="offset-anchor"></div>
      <Badge variant="outline" className="m-4">
        Skills
      </Badge>
      <Skills />
      <Spacing size="md" />
      <div id="section5" className="offset-anchor"></div>
      <Badge variant="outline" className="m-4">
        Formation
      </Badge>
      <FormationAccordion />
      <Contact />
      <Spacing size="md" />
      <Footer />
    </main>
  );
}
