"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import MetaBanner from "@/components/MetaBanner";
import HeroSpecimen from "@/components/HeroSpecimen";
import MotoDockSimulator from "@/components/MotoDockSimulator";
import ProductionLedger from "@/components/ProductionLedger";
import IsolationPipeline from "@/components/IsolationPipeline";
import SqlExhibit from "@/components/SqlExhibit";
import CompetencyTaxonomy from "@/components/CompetencyTaxonomy";
import Footer from "@/components/Footer";
import InspectionDossier from "@/components/InspectionDossier";

export default function Home() {
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Trigger Toast function
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsDossierOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Header onOpenDossier={() => setIsDossierOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <MetaBanner />
        <HeroSpecimen onOpenDossier={() => setIsDossierOpen(true)} />
        <MotoDockSimulator onTriggerToast={triggerToast} />
        <ProductionLedger />
        <IsolationPipeline />
        <SqlExhibit onTriggerToast={triggerToast} />
        <CompetencyTaxonomy />
      </main>

      <Footer onOpenDossier={() => setIsDossierOpen(true)} />

      {/* Tactile Inspection Dossier Modal */}
      <InspectionDossier isOpen={isDossierOpen} onClose={() => setIsDossierOpen(false)} />

      {/* Minimalist Toast Notification */}
      <div
        id="specimenToast"
        className={`fixed bottom-6 right-6 z-50 bg-blueprint-ink text-white font-mono-spec text-xs px-4 py-3 border-2 border-blueprint-azure shadow-[4px_4px_0px_#0038e0] transition-opacity duration-200 ${
          toastMessage ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span>{toastMessage || "COPIED TO SYSTEM CLIPBOARD"}</span>
      </div>
    </>
  );
}
