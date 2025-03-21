"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Section from "./Section";
import { Card } from "./ui/card";

export function FormationAccordion() {
  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Section className="flex flex-col gap-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
          Je suis fier de mon parcours !
        </h2>
      </motion.div>
      <Card className="flex flex-col w-full gap-2 px-2 hover:shadow-lg hover:shadow-purple-500/10">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <section className="flex gap-3 items-center">
                <div className="flex bg-white h-16 w-16 items-center rounded">
                  <img
                    src="/logo-alt.jpeg"
                    className="p-1 rounded"
                    alt="Logo alternatif"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <h3 className="font-semibold text-left tracking-tighter text-lg">
                    Concepteur développeur d’application
                  </h3>
                  <p className="text-xs text-muted-foreground text-left">
                    2024 - Titre RNCP de Niveau 6 (Bac+4)
                  </p>
                </div>
              </section>
            </AccordionTrigger>
            <AccordionContent>
              <h4 className="font-semibold tracking-tight mt-4">
                Pourquoi cette formation?
              </h4>
              <div className="leading-7 text-md mt-6">
                J'ai choisi de me lancer dans le développement full stack car je
                suis profondément curieux, toujours avide de comprendre et
                d'apprendre de nouvelles choses. Mon esprit créatif cherche
                constamment des défis, et j'ai une nature pugnace qui trouve une
                satisfaction personnelle dans la résolution de problèmes
                complexes.
              </div>
              <h4 className="font-semibold tracking-tight mt-4">
                Ce que j’ai appris
              </h4>
              <ul className="mt-4 list-disc leading-7 ml-6">
                <li>Développer en Javascript, HTML et CSS</li>
                <li>
                  Etablir les cas d’utilisations d’une application et maquetter
                  ses interfaces
                </li>
                <li>
                  Développer la partie front avec react en responsive d’une
                  application
                </li>
                <li>Développer la partie back avec NestJS</li>
                <li>Communiquer avec la bdd en sql et en nosql avec mongodb</li>
                <li>Pratiquer des plans de test</li>
                <li>
                  automatiser le déploiement del'application sur Docker avec
                  Gitlab
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <section className="flex gap-3 items-center">
                <div className="flex bg-white h-16 w-16 items-center rounded">
                  <img
                    src="/logo-ensibs.png"
                    className="p-2"
                    alt="Logo ENSIBS"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <h3 className=" text-lg font-semibold text-left tracking-tighter">
                    Master Ingénierie de la Production
                  </h3>
                  <p className="text-xs text-muted-foreground text-left">
                    2005 - 2008 Ingénieur Bac+5 - Mention assez-bien
                  </p>
                </div>
              </section>
            </AccordionTrigger>
            <AccordionContent>
              <h4 className="font-semibold tracking-tight">
                Pourquoi cette formation?
              </h4>
              <p className="mt-4 leading-7">
                Cette formation était idéale pour compléter mon parcours assez
                technique. la finalité était d'être prêt à prendre des
                responsabilité managériales qui incombe au métier d'ingénieur de
                production.
              </p>
              <h4 className="font-semibold tracking-tight mt-4">
                Ce que j’ai appris
              </h4>
              <ul className="mt-4 list-disc leading-7 ml-6">
                <li>
                  Concevoir et gérer des processus et des systèmes qui
                  améliorent la qualité et la productivité de la chaîne de
                  valeur des entreprises. Faire mieux en réduisant les risques
                  pour l’homme et l’environnement.
                </li>
                <li>
                  Maitriser la gestion des flux et des processus, les outils de
                  l’usine numérique. Innover, modéliser, conduire des projets,
                  manager en équipe, conduire le changement et mesurer et
                  prévenir les risques.
                </li>
                <li>
                  S'incrire dans une démarche d’amélioration continue en
                  intégrant les multiples enjeux économiques, sociaux,
                  réglementaires et environnementaux.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <section className="flex gap-3 items-center">
                <div className="flex bg-white h-16 w-16 items-center rounded">
                  <img
                    src="/logo-iut.png"
                    className="p-2 rounded"
                    alt="Logo IUT"
                  />
                </div>

                <div className="flex flex-col gap-2 items-start">
                  <h3 className="font-semibold text-left tracking-tighter text-lg">
                    DUT Génie Industriel et Maintenance
                  </h3>
                  <p className="text-xs text-muted-foreground text-left">
                    2003 - 2005 Technicien Bac+2
                  </p>
                </div>
              </section>
            </AccordionTrigger>
            <AccordionContent>
              <h4 className="font-semibold tracking-tight">
                Pourquoi cette formation?
              </h4>
              <p className="mt-4 leading-7">
                j'aime bien comprendre les choses. savoir comment ca marche et à
                quoi ca sert. j'étais très intéressé par le monde industriel et
                les nouvelles technologies.
              </p>
              <h4 className="font-semibold tracking-tight mt-4">
                Ce que j’ai appris
              </h4>
              <ul className="mt-4 list-disc leading-7 ml-6">
                <li>
                  Assurer l'installation et la réparation d'équipements
                  pluritechniques
                </li>
                <li>
                  Analyser, contrôler et améliorer le fonctionnement des
                  systèmes
                </li>
                <li>Maintenir en état de marche des équipements</li>
                <li>
                  Participer à la conception et à la rénovation des outils de
                  production
                </li>
                <li>Gérer des équipes de maintenance</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <section className="flex gap-3 items-center">
                <div className="flex bg-white h-16 w-16 items-center rounded">
                  <img
                    src="/logo-lesage.png"
                    className="p-2 rounded"
                    alt="Logo Lesage"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <h3 className="font-semibold text-left tracking-tighter text-lg">
                    BAC STI Productique
                  </h3>
                  <p className="text-xs text-muted-foreground text-left">
                    2003 - 2005 - Mention Bien
                  </p>
                </div>
              </section>
            </AccordionTrigger>
            <AccordionContent>
              <h4 className="font-semibold tracking-tight">
                Pourquoi cette formation?
              </h4>
              <p className="mt-4 leading-7">
                j'aime bien comprendre les choses. savoir comment ca marche et à
                quoi ca sert. j'étais très intéressé par le monde industriel et
                les nouvelles technologies.
              </p>
              <h4 className="font-semibold tracking-tight mt-4">
                Ce que j’ai appris
              </h4>
              <ul className="mt-4 list-disc leading-7 ml-6">
                <li>
                  Assurer l'installation et la réparation d'équipements
                  pluritechniques
                </li>
                <li>
                  Analyser, contrôler et améliorer le fonctionnement des
                  systèmes
                </li>
                <li>Maintenir en état de marche des équipements</li>
                <li>
                  Participer à la conception et à la rénovation des outils de
                  production
                </li>
                <li>Gérer des équipes de maintenance</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </Section>
  );
}
