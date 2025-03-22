"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import Code from "./ui/Code";
import { Button } from "./ui/button";
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
    <Section className="flex flex-col gap-5 items-start min-h-screen">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
        Qui-je suis ?
      </h2>

      <div className="flex max-md:flex-col-reverse gap-5 items-center">
        <div className="flex-[3] flex flex-col gap-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <h3 className="text-3xl font-caption pb-6 lg:p-0">
            Hello moi c'est Aloïs
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Je suis étudiant en 2ᵉ année de{" "}
            <Code className="inline-flex items-center gap-1 rounded">
              <span role="img" aria-label="engineering">
                🧑‍🎓
              </span>
              licence STAPS
            </Code>
            , spécialité éducation et motricité. Passionné de{" "}
            <Code className="inline-flex items-center gap-1 rounded">
              <span role="img" aria-label="cycling">
                🚴‍♂️
              </span>
              cyclisme
            </Code>{" "}
            depuis de nombreuses années, j’ai su intégrer cette passion à mon
            parcours.{" "}
            <Code className="inline-flex items-center gap-1 rounded">
              <span role="img" aria-label="full stack">
                🚀
              </span>
              compétiteur
            </Code>{" "}
            le week-end, je suis aussi pratiquant, encadrant et
            conseiller/vendeur en cycle tout au long de la semaine. Cette
            immersion totale dans le cyclisme m’apporte une richesse
            d’expériences, me permettant d’élargir mes connaissances et de
            développer des compétences précieuses.
          </p>
          <Button
            className="flex justify-end items-center gap-2 mt-4  w-fit "
            onClick={() => scrollToSection("section2")}
          >
            Découvrez mon parcours
            <ArrowDown />
          </Button>
        </div>
        <div className="flex-[2] flex justify-center md:justify-end">
          <div className=" m-auto h-auto w-full flex justify-center items-center ">
            <img
              className="rounded-full h-96 w-96 object-cover"
              src="profile-pic.jpeg"
              alt="profil"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
