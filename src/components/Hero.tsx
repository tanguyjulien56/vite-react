"use client";
import { motion } from "framer-motion";
import Section from "./Section";

import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import ArrowDown from "./ui/icon/ArrowDown";
import { Button } from "./ui/moving-border";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};
const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
const words = [
  {
    text: "Hello,",
  },
  {
    text: "moi",
  },
  {
    text: "c'est",
  },

  {
    text: "Aloïs",
    className: "text-red-500 dark:text-red-500",
  },
];
export default function Hero() {
  return (
    <Section className="flex flex-col  items-start min-h-screen max-w-5xl">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
        Qui-je suis ?
      </h2>

      <div className="flex max-md:flex-col-reverse  items-center w-full">
        <div className="flex-[3] flex flex-col gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            transition={{ duration: 0.5 }}
          ></motion.div>

          <HeroHighlight className="text-4xl font-bold">
            <TypewriterEffectSmooth words={words} />
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
                delay: 1,
              }}
              className="flex flex-col md:flex-row-reverse gap-5 font-bold max-w-4xl leading-relaxed lg:leading-snug text-center  "
            >
              <div className=" m-auto min-w-72 flex justify-center items-center ">
                <img
                  className="rounded-full h-72 w-72 object-cover"
                  src="profile-pic.jpeg"
                  alt="profil"
                />
              </div>
              <div className="text-justify text-xl gap-5">
                <p className="py-3">
                  étudiant en 2ᵉ année de{" "}
                  <Highlight> 🧑‍🎓 licence STAPS</Highlight>, spécialité éducation
                  et motricité. Passionné de <Highlight>🚴‍♂️ cyclisme</Highlight>{" "}
                  depuis longtemps, j’ai su allier cette passion à mes études.
                </p>
                <p className="py-3">
                  <Highlight>🚀 Compétiteur</Highlight> le week-end, je suis
                  aussi pratiquant, encadrant et conseiller/vendeur en cycle
                  pendant la semaine. Cette expérience me permet d’acquérir de
                  nombreuses compétences.
                </p>

                <Button
                  borderRadius="1.75rem"
                  className="flex gap-2 text-black bg-red-900 hover:bg-red-800 dark:text-white border-neutral-200 dark:border-slate-800"
                  onClick={() => scrollToSection("section2")}
                >
                  Découvrez mon parcours
                  <ArrowDown />
                </Button>
              </div>
            </motion.h1>
          </HeroHighlight>
        </div>
      </div>
    </Section>
  );
}
