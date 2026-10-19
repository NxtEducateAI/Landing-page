"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { EcosystemTabs } from "@/components/landing/EcosystemTabs";
import { DashboardVisualizer } from "@/components/landing/DashboardVisualizer";
import { FeatureMatrix } from "@/components/landing/FeatureMatrix";
import { TrustSecurity } from "@/components/landing/TrustSecurity";
import { PricingFAQ } from "@/components/landing/PricingFAQ";
import { Footer } from "@/components/landing/Footer";
import { DemoModal } from "@/components/landing/DemoModal";

export default function LandingPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleCloseDemo = () => setIsDemoModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-slate-100 flex flex-col relative selection:bg-brand-500/30 selection:text-white transition-colors duration-200">
      {/* Sticky Header / Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section (High Impact) */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* 2. Ecosystem Role Selector (Interactive Tabs) */}
        <EcosystemTabs />

        {/* 3. 'Every Metric, One Dashboard' (Product Visualizer) */}
        <DashboardVisualizer />

        {/* 4. Feature Matrix (Bento Grid Layout) */}
        <FeatureMatrix />

        {/* 5. Security & Enterprise Trust Bar */}
        <TrustSecurity />

        {/* 6. Pricing & FAQ Section */}
        <PricingFAQ onOpenDemo={handleOpenDemo} />
      </main>

      {/* 7. Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* 8. Interactive 'Book a Demo' Modal / Drawer */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
