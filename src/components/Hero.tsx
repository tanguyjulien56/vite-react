"use client";
import { motion } from "framer-motion";
import BrainWithGears from "./BrainWithGears";
import Section from "./Section";
import Code from "./ui/Code";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <Section className="flex flex-col gap-5 items-start">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
        Qui-je suis ?
      </h2>
      <h3 className="text-3xl font-caption pb-6 lg:p-0">
        Développeur Full Stack React, Node.js
      </h3>
      <div className="flex max-md:flex-col-reverse gap-5 items-center">
        <div className="flex-[3] flex flex-col gap-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            transition={{ duration: 0.5 }}
          ></motion.div>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Développeur web certifié et passionné, je mets à profit plus de 15
            ans d'expérience en
            <Code className="inline-flex items-center gap-1 rounded">
              <span role="img" aria-label="engineering">
                🧑‍🎓
              </span>
              ingénierie
            </Code>
            de production, gestion de projet et amélioration continue. Expert en
            développement
            <Code className="inline-flex items-center rounded">
              <span role="img" aria-label="full stack">
                🚀
              </span>
              full stack
            </Code>
            et contributeur à des projets open-source, je combine mes
            compétences techniques avec une solide expertise en gestion de
            projet. En dehors du travail, je suis un passionné de sport et je
            m'implique activement dans ma communauté en gérant la communication
            et le site web de mon club de
            <Code className="inline-flex items-center gap-1 rounded">
              <span role="img" aria-label="cycling">
                🚴‍♂️
              </span>
              cyclisme
            </Code>
          </p>
        </div>
        <div className="flex-[2] flex justify-center md:justify-end">
          <div className=" m-auto h-auto w-full flex justify-center items-center">
            <BrainWithGears />
          </div>
        </div>
      </div>
    </Section>
  );
}
