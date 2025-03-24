"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";
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
        Parlons de mon expérience chez Chedaleux !
      </h2>
      <Badge className="my-4 text-md rounded-full">L'entreprise</Badge>
      <div className="grid md:grid-cols-3 gap-5">
        <img
          src="/chedaleux.jpg"
          className=" col-span-2 w-full h-full object-cover rounded-lg"
        ></img>
        <div className=" col-span-1">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            transition={{ duration: 0.5 }}
          ></motion.div>

          <p className="  leading-7 [&:not(:first-child)]:mt-6 rounded-lg p-4 text-justify">
            Les Cycles Chedaleux est une entreprise familiale fondée en 2006 sur
            la commune de Saint-Avé. Depuis sa création, l'entreprise connaît
            une extension de son activité avec l'ouverture d'un second magasin à
            Caudan. Depuis 2014, elle collabore avec le groupe Veloland, ce
            partenariat lui permettant de bénéficier d'un réseau national de
            magasins spécialisés et d'une large gamme de produits. Grâce à ce
            soutien, Cycles Chedaleux a pu diversifier son offre, renforcer sa
            position sur le marché du cycle et tirer parti de l'expertise et des
            ressources de Veloland.
          </p>
        </div>
      </div>
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
              Spécialiste du vélo sous toutes ses formes
            </h3>
            <img
              src="/velo.jpeg"
              alt=""
              className="rounded-lg w-full h-56 object-cover my-3"
            />
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
              l'entreprise propose aussi bien des vélos de route, des VTT, que
              des vélos à assistance électrique (VAE). Cycles Chedaleux regroupe
              une vaste sélection de marques de qualité pour satisfaire au mieux
              les besoins de ses clients. En plus de la vente de vélos,
              l'enseigne dispose d'un atelier spécialisé, organisé autour de
              mécaniciens experts, et s'engage activement à la promotion du
              cyclisme.
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
              Un conseil personnalisé et un suivi optimal
            </h3>
            <img
              src="cadeaux.jpeg"
              alt=""
              className="rounded-lg w-full h-56 object-cover my-3"
            />
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
              un service qui lui vaut une solide réputation. Aujourd'hui, Cycles
              Chedaleux est bien implantée dans le secteur, notamment grâce à la
              fidélité de ses clients et à son expertise reconnue dans le
              domaine du cyclisme.
            </p>
          </Card>
        </motion.div>
      </div>
      <Badge className="my-4 text-md rounded-full">Expériences</Badge>
      <div className="w-full">
        <motion.div
          className="flex-[1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
        >
          <Card className="flex w-full  hover:shadow-lg hover:shadow-red-500/10 ">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <section className="flex gap-3 items-center">
                    <div className="flex bg-white h-32 w-32 items-center rounded object-cover">
                      <img
                        src="gp5000.jpeg"
                        className="rounded h-32 w-32 object-cover"
                        alt="gp5000"
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                      <h3 className=" text-lg font-semibold text-left tracking-tighter">
                        Expérience en gestion commerciale
                      </h3>
                      <p className="text-md text-muted-foreground text-left">
                        Partenariat club
                      </p>
                    </div>
                  </section>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-7 [&:not(:first-child)]:mt-6 col-span-2 text-justify px-4">
                    Lors de mon stage, j’ai géré une offre commerciale en
                    partenariat avec le Cyclo Club de Malestroit et la Société
                    Cycliste de Malestroit, clubs sponsorisés par le magasin.
                    L’offre proposait des pneumatiques GP 5000 à tarifs
                    préférentiels pour leurs adhérents. Ma mission consistait à
                    récupérer les commandes, préparer les produits, bons de
                    commande et factures, puis organiser leur retrait en
                    magasin. J’ai également assuré la communication de
                    l’opération sur les réseaux sociaux du magasin et de la
                    Société Cycliste de Malestroit, que je gère depuis plusieurs
                    années. Cette expérience m’a permis de renforcer mes
                    compétences en logistique, gestion de commandes et
                    communication digitale, tout en consolidant le lien entre le
                    magasin et ses partenaires associatifs.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <section className="flex gap-3 items-center">
                    <div className="flex bg-white h-32 w-32 items-center rounded">
                      <img
                        src="velo_electrique.webp"
                        className="h-32 w-32 object-cover rounded"
                        alt="veloelectrique"
                      />
                    </div>

                    <div className="flex flex-col gap-2 items-start">
                      <h3 className="font-semibold  text-left tracking-tighter text-lg">
                        Expérience en vente
                      </h3>
                      <p className="text-md text-muted-foreground text-left">
                        Essai d’un vélo électrique
                      </p>
                    </div>
                  </section>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-7 [&:not(:first-child)]:mt-6 col-span-2 text-md text-justify px-4">
                    Lors de la deuxième semaine de mon stage, j’ai organisé
                    l’essai d’un vélo à assistance électrique pour un client.
                    J’ai préparé le vélo en vérifiant les serrages, la pression
                    des pneus et le réglage de la selle, puis j’ai présenté ses
                    fonctionnalités et son utilisation. Après ajustements, le
                    client a pu tester le vélo dans des conditions optimales.
                    Cette mission m’a permis d’approfondir ma connaissance des
                    produits et d’affiner mon relationnel client, en répondant
                    précisément aux attentes pour offrir une expérience d’achat
                    personnalisée et de qualité.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <section className="flex gap-3 items-center">
                    <div className="flex bg-white h-32 w-32 items-center rounded object-cover">
                      <img
                        src="rex.jpg"
                        className="rounded h-32 w-32 object-cover"
                        alt="rex"
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                      <h3 className=" text-lg font-semibold text-left tracking-tighter">
                        Mon retour d'expérience
                      </h3>
                      <p className="text-md text-muted-foreground text-left">
                        Les compétences que nécessite ce métier
                      </p>
                    </div>
                  </section>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-7 [&:not(:first-child)]:mt-6 col-span-2 text-justify px-4">
                    Le métier de vendeur de cycles nécessite des compétences
                    techniques, commerciales et relationnelles. D'un point de
                    vue technique, il est essentiel d'avoir une bonne
                    connaissance des différents types de vélos, de leurs
                    composants et de l'entretien de base. Le vendeur doit
                    également être capable de donner des conseils personnalisés
                    en fonction des besoins spécifiques du client. Sur le plan
                    relationnel, il doit faire preuve d'un excellent sens du
                    service client, être à l'écoute, et savoir instaurer une
                    relation de confiance. Les compétences commerciales incluent
                    la capacité à vendre et négocier, à promouvoir des produits
                    et à gérer des offres commerciales. Une bonne organisation
                    est également nécessaire pour gérer les stocks, préparer les
                    commandes et assurer une gestion efficace des transactions
                    financières. Enfin, le vendeur doit être capable de gérer
                    les aspects logistiques et administratifs liés à la vente
                    des produits.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
          {/* <Card className="p-4 hover:shadow-lg border-1px hover:shadow-purple-500/10">
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Expérience en gestion commerciale - Partenariat Club
            </h3>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-5 py-3">
              <img
                src="gp5000.jpeg"
                alt=""
                className="w-full h-full col-span-1 object-cover rounded-lg"
              />
              <p className="leading-7 [&:not(:first-child)]:mt-6 col-span-2 text-justify">
                Lors de mon stage, j’ai géré une offre commerciale en
                partenariat avec le Cyclo Club de Malestroit et la Société
                Cycliste de Malestroit, clubs sponsorisés par le magasin.
                L’offre proposait des pneumatiques GP 5000 à tarifs
                préférentiels pour leurs adhérents. Ma mission consistait à
                récupérer les commandes, préparer les produits, bons de commande
                et factures, puis organiser leur retrait en magasin. J’ai
                également assuré la communication de l’opération sur les réseaux
                sociaux du magasin et de la Société Cycliste de Malestroit, que
                je gère depuis plusieurs années. Cette expérience m’a permis de
                renforcer mes compétences en logistique, gestion de commandes et
                communication digitale, tout en consolidant le lien entre le
                magasin et ses partenaires associatifs.
              </p>
            </div>
          </Card> */}
        </motion.div>

        {/* <motion.div
          className="flex-[1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
        >
          <Card className=" p-4 hover:shadow-lg h-full items-start justify-start border-1px hover:shadow-red-500/10">
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Expérience en vente – Essai d’un vélo électrique
            </h3>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-5 py-3">
              <img
                src="velo_electrique.webp"
                alt=""
                className="w-full h-full col-span-1 object-cover rounded-lg"
              />
              <p className="leading-7 [&:not(:first-child)]:mt-6 col-span-2 text-justify">
                Lors de la deuxième semaine de mon stage, j’ai organisé l’essai
                d’un vélo à assistance électrique pour un client. J’ai préparé
                le vélo en vérifiant les serrages, la pression des pneus et le
                réglage de la selle, puis j’ai présenté ses fonctionnalités et
                son utilisation. Après ajustements, le client a pu tester le
                vélo dans des conditions optimales. Cette mission m’a permis
                d’approfondir ma connaissance des produits et d’affiner mon
                relationnel client, en répondant précisément aux attentes pour
                offrir une expérience d’achat personnalisée et de qualité.
              </p>
            </div>
          </Card>
        </motion.div> */}
      </div>
      {/* <h3 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 ">
        Les compétences que nécessite ce métier
      </h3>

      <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
        Le métier de vendeur de cycles nécessite des compétences techniques,
        commerciales et relationnelles. D'un point de vue technique, il est
        essentiel d'avoir une bonne connaissance des différents types de vélos,
        de leurs composants et de l'entretien de base. Le vendeur doit également
        être capable de donner des conseils personnalisés en fonction des
        besoins spécifiques du client. Sur le plan relationnel, il doit faire
        preuve d'un excellent sens du service client, être à l'écoute, et savoir
        instaurer une relation de confiance. Les compétences commerciales
        incluent la capacité à vendre et négocier, à promouvoir des produits et
        à gérer des offres commerciales. Une bonne organisation est également
        nécessaire pour gérer les stocks, préparer les commandes et assurer une
        gestion efficace des transactions financières. Enfin, le vendeur doit
        être capable de gérer les aspects logistiques et administratifs liés à
        la vente des produits.
      </p> */}
    </Section>
  );
}
