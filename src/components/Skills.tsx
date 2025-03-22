"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { Card } from "./ui/card";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function Entreprise() {
  return (
    <Section className="flex flex-col gap-5 items-start">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
        Mes skills !
      </h2>
      <div className="grid md:grid-cols-2 gap-5 h-max-96">
        <motion.div
          className="flex-[1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-4 hover:shadow-lg border-1px hover:shadow-red-500/10">
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Mon auto evaluation
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              blalbalblalblalblabla
            </p>
          </Card>
        </motion.div>

        <motion.div
          className="flex-[1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
        >
          <Card className=" p-4 hover:shadow-lg h-full items-start justify-start border-1px hover:shadow-red-500/10">
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Les compétences restantes à aquerir{" "}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              blalbalblalblalblabla
            </p>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
