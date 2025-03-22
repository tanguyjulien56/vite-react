"use client"; // Indiquer que c'est un composant côté client

import { useEffect, useState } from "react";

const MouseEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true); // Marquer que la souris bouge
      clearTimeout(timer); // Réinitialiser le timeout
      timer = setTimeout(() => setIsMoving(false), 100); // Après 100ms d'inactivité, enlever l'effet
    };

    let timer: NodeJS.Timeout;

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer); // Nettoyer le timeout lors de la destruction du composant
    };
  }, []);

  return (
    <div
      className="mouse-effect"
      style={{
        position: "relative",
        top: `${mousePosition.y - 500}px`,
        left: `${mousePosition.x - 500}px`,
        width: "1000px",
        height: "1000px",
        background: isMoving
          ? "radial-gradient(circle, rgba(255, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0) 60%)"
          : "radial-gradient(circle, rgba(255, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0) 60%)", // Halo rouge progressif
        borderRadius: "50%",
        pointerEvents: "none",
        transition: "all 0.4s ease-out", // Transition pour l'effet progressif
        zIndex: "-9999",
      }}
    />
  );
};

export default MouseEffect;
