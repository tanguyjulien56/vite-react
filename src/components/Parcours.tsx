"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";
import Section from "./Section";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => (
  <span
    className={cn(
      "bg-accent/30 font-mono border border-accent p-1 m-1 rounded-sm hover:bg-accent/50 transition-colors",
      className
    )}
    {...props}
  />
);

const titleVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Parcours = () => {
  return (
    <Section className="flex flex-col gap-5 items-start">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
          Découvrez mon parcours...
        </h2>
      </motion.div>
      <Section className="grid md:grid-cols-2 gap-5 h-max-96">
        <CardContainer className=" inter-var h-full ">
          <CardBody className="group/card h-full shadow-md hover:shadow-lg hover:shadow-red-500/10 rounded-xl p-4 border flex flex-col  items-center gap-4">
            <CardItem translateZ="50" className="text-xl font-bold">
              Choix d'orientation
            </CardItem>

            <CardItem translateZ="100 " className="h-28">
              <img src="logo-uco-bretagne-sud.png" alt="uco" />
            </CardItem>

            <CardItem translateZ={20}>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
                Étudier à l’UCO-BS d’Arradon a été une étape logique dans mon
                projet professionnel. Passionné de sport et animé par la
                transmission du savoir, j’ai choisi cette formation pour
                construire mon avenir dans ce domaine. Grâce à un enseignement
                en présentiel et de nombreux stages en milieu professionnel,
                j’ai pu enrichir mon expérience et affiner mes compétences.
                Parmi ces expériences, mon stage chez Cycles Chedaleux à
                Saint-Avé a été particulièrement marquant. Il m’a permis
                d’intégrer l’entreprise, rendant ainsi ma formation
                bi-qualifiante et renforçant mon expertise.
              </p>
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var h-full ">
          <CardBody className="  group/card h-full shadow-md hover:shadow-lg hover:shadow-red-500/10 rounded-xl p-4 border flex flex-col  items-center gap-4 ">
            <CardItem translateZ="50" className="text-xl font-bold">
              Ma vision du métier
            </CardItem>

            <CardItem translateZ="100" className="h-28">
              <img src="cycles-chedaleux-logo.jpg" alt="logo-chedaleux" />
            </CardItem>

            <CardItem translateZ={20}>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
                Être vendeur de cycles, c’est avant tout accompagner le client
                et lui offrir une expérience sur-mesure. Il ne s’agit pas
                simplement de vendre, mais de comprendre ses besoins, de le
                conseiller et de l’aider à choisir l’équipement idéal. Ce métier
                est aussi une opportunité de partager sa passion. Une bonne
                connaissance technique et une expérience terrain sont
                essentielles pour proposer les meilleures solutions. Plus qu’un
                vendeur, un conseiller spécialisé qui guide chaque client vers
                le bon choix.
              </p>
            </CardItem>
          </CardBody>
        </CardContainer>
      </Section>
    </Section>
  );
};

export default Parcours;
