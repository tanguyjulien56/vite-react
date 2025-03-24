"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card } from "./ui/card";
import { Highlight } from "./ui/hero-highlight";

interface Competency {
  name: string;
  rating: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const skills: Competency[] = [
  { name: "Gestion d’une offre commerciale", rating: 3 },
  { name: "Gestion réseaux sociaux", rating: 4 },
  { name: "Conseil client", rating: 3 },
  { name: "Préparation d’un vélo", rating: 4 },
];

export default function Skills() {
  return (
    <div className="flex flex-col gap-5 items-start p-4">
      <h2 className="text-3xl font-semibold tracking-tight text-primary">
        Jetez un oeil à mes skills !
      </h2>
      <motion.div
        className="grid md:grid-cols-2 gap-5 h-max-96"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-4 hover:shadow-lg border-1px hover:shadow-red-500/10">
          <h3 className="text-lg font-semibold tracking-tight mb-4">
            Mon auto-évaluation
          </h3>
          {skills.map((comp, i) => (
            <div key={i} className="flex justify-between items-center mb-2">
              <span>{comp.name}</span>
              <div className="flex">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className={
                      j < comp.rating ? "text-currentColor" : "text-gray-300"
                    }
                    fill={j < comp.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
          ))}
        </Card>{" "}
        <Card className="p-4 hover:shadow-lg border-1px hover:shadow-red-500/10">
          <h3 className="text-lg font-semibold tracking-tight mb-4">
            Compétences qu'il me reste à acquérir
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Highlight>Connaissance des produits</Highlight> Maîtriser les
              gammes proposées pour mieux orienter et rassurer le client sur le
              choix du vélo ou produit idéal.
            </li>
            <li>
              <Highlight>Maîtrise des logiciels</Highlight> Améliorer mon
              efficacité en utilisant les logiciels de l'entreprise pour offrir
              un service plus rapide.
            </li>
            <li>
              <Highlight>Études posturales</Highlight> Développer mes
              compétences pour ajuster la posture des clients et optimiser leur
              performance (secondaire).
            </li>
          </ul>
        </Card>
      </motion.div>
    </div>
  );
}
