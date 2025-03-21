"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";
import Section from "./Section";
import DockerIcon from "./ui/icon/DockerIcon";
import NIcon from "./ui/icon/NIcon";
import ReactIcon from "./ui/icon/ReactIcon";

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

const Skills = () => {
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
          J'aime travailler sur...
        </h2>
      </motion.div>
      <Section className="grid md:grid-cols-3 gap-5 h-max-96">
        <CardContainer className=" inter-var h-full ">
          <CardBody className="group/card h-full shadow-md hover:shadow-lg hover:shadow-purple-500/10 rounded-xl p-4 border flex flex-col justify-start items-center gap-4">
            <CardItem translateZ="50" className="text-xl font-bold">
              React
            </CardItem>

            <CardItem translateZ="100">
              <ReactIcon
                size={64}
                className="rotate-self"
                style={{
                  animationDuration: "infinite",
                }}
              />
            </CardItem>

            <CardItem translateZ={20}>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                J'utilise principalement la librairie <Code>React</Code>.
                J'utilise également le framework <Code>Next.js</Code>
              </p>
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var h-full ">
          <CardBody className="  group/card shadow-md hover:shadow-lg hover:shadow-purple-500/10 rounded-xl p-4 border flex flex-col justify-center items-center gap-4 ">
            <CardItem translateZ="50" className="text-xl font-bold">
              Nest.js
            </CardItem>

            <CardItem translateZ="100">
              <NIcon size={64} />
            </CardItem>

            <CardItem translateZ={20}>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Pour le back-end, j'utilise <Code>Nest.js</Code> pour mes
                projets en raison de son architecture robuste et évolutive.
              </p>
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var h-full">
          <CardBody className="  group/card shadow-md hover:shadow-lg hover:shadow-purple-500/10 rounded-xl p-4 border flex flex-col justify-center items-center gap-4 ">
            <CardItem translateZ="50" className="text-xl font-bold">
              Docker
            </CardItem>

            <CardItem translateZ="100">
              <DockerIcon size={64} />
            </CardItem>

            <CardItem translateZ={20}>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                J'utilise <Code>Docker</Code> pour containeriser mes apps et
                garantir la cohérence entre les différents environnements.
              </p>
            </CardItem>
          </CardBody>
        </CardContainer>
      </Section>
    </Section>
  );
};

export default Skills;
