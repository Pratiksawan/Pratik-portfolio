"use client";

import { useCallback, useEffect, useState } from "react";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import Header from "@/components/Header";
import HeroSpecimen from "@/components/HeroSpecimen";
import MotoDockSimulator from "@/components/MotoDockSimulator";
import ProductionLedger from "@/components/ProductionLedger";
import CompetencyTaxonomy from "@/components/CompetencyTaxonomy";
import Footer from "@/components/Footer";
import InspectionDossier from "@/components/InspectionDossier";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const closeResume = useCallback(() => setIsResumeOpen(false), []);
  const openResume = useCallback(() => setIsResumeOpen(true), []);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsResumeOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <motion.div
        className="reading-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <Header onOpenDossier={openResume} />
      <main id="main">
        <HeroSpecimen onOpenDossier={openResume} />
        <MotoDockSimulator />
        <ProductionLedger />
        <CompetencyTaxonomy />
      </main>
      <Footer onOpenDossier={openResume} />
      <InspectionDossier isOpen={isResumeOpen} onClose={closeResume} />
    </MotionConfig>
  );
}
