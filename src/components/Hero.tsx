"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { Button } from "./ui/button";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import ArrowDown from "./ui/icon/ArrowDown";

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
export default function Hero() {
  return (
    <Section className="flex flex-col gap-5 items-start min-h-screen max-w-5xl">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
        Qui-je suis ?
      </h2>

      <div className="flex max-md:flex-col-reverse gap-5 items-center w-full">
        <div className="flex-[3] flex flex-col gap-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            transition={{ duration: 0.5 }}
          ></motion.div>

          <HeroHighlight>
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
              }}
              className=" flex flex-col md:flex-row gap-5 text-lg px-4 md:text-4xl lg:text-2xl font-bold max-w-4xl leading-relaxed lg:leading-snug text-center  "
            >
              <div className=" m-auto min-w-96 flex justify-center items-center ">
                <img
                  className="rounded-full h-96 w-96 object-cover"
                  src="profile-pic.jpeg"
                  alt="profil"
                />
              </div>
              <div className="text-justify text-xl ">
                <p className="text-4xl py-3">Hello, je suis Aloïs,</p>
                étudiant en 2ᵉ année de <Highlight> 🧑‍🎓 licence STAPS</Highlight>
                , spécialité éducation et motricité. Passionné de{" "}
                <Highlight>🚴‍♂️ cyclisme</Highlight> depuis longtemps, j’ai su
                allier cette passion à mes études.
                <Highlight>🚀 Compétiteur</Highlight> le week-end, je suis aussi
                pratiquant, encadrant et conseiller/vendeur en cycle pendant la
                semaine. Cette expérience me permet d’acquérir de nombreuses
                compétences.
                <Button
                  className="flex justify-end items-end gap-2 mt-4  w-fit "
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
