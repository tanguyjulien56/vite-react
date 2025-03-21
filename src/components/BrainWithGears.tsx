import { gears } from "@/data/gear";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import GearIcon from "./ui/icon/GearIcon";

export default function BrainWithGears() {
  
  return (
    <div className="w-[320px] h-[240px] relative">
      <div className="relative w-[200px] h-[200px]">
        {gears.map((gear, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const controls = useAnimation();

          // eslint-disable-next-line react-hooks/rules-of-hooks
          useEffect(() => {
            (async () => {
              // Accélération initiale (rotation rapide)
              await controls.start({
                rotate: [0, gear.rotation === "rotate-self" ? 900 : -900],
                transition: { duration: gear.speed / 1, ease: "easeOut" },
              });

              // Stabilisation à une vitesse normale
              controls.start({
                rotate: [0, gear.rotation === "rotate-self" ? 360 : -360],
                transition: {
                  duration: gear.speed,
                  repeat: Infinity,
                  ease: "linear",
                },
              });
            })();
          }, [controls]);

          return (
            <motion.div
              key={index}
              style={{
                position: "absolute",
                left: `${gear.cx}%`,
                top: `${gear.cy}%`,
                transformOrigin: "center center",
                transform: "translate(-50%, -50%)",
              }}
              animate={controls}
            >
              <GearIcon size={gear.r * 2} className={gear.color} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
