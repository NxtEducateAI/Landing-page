"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface PricingFAQProps {
  onOpenDemo: () => void;
}

export function PricingFAQ({ onOpenDemo }: PricingFAQProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to migrate our existing student data into NxtEducate AI?",
      answer:
        "Typically between 48 to 72 hours. Our automated migration pipeline ingests legacy Excel sheets, CSVs, or legacy ERP databases (including Entab, Fedena, QuickSchools, or custom SQL databases). Our technical onboarding team validates student records, fee dues, and teacher profiles with zero campus downtime.",
    },
    {
      question: "Does NxtEducate comply with CBSE, ICSE, and state education board regulations?",
      answer:
        "Yes, 100%. NxtEducate comes pre-loaded with board-certified templates for CBSE (including CCE & NEP Holistic Progress Cards), ICSE, Cambridge (IGCSE), and State Boards. Automated generation of Transfer Certificates (TC), Bonafide certificates, and OASIS portal upload files is included out of the box.",
    },
    {
      question: "What hardware is required for bus tracking?",
      answer:
        "NxtEducate is hardware-agnostic. For buses, our telemetry engine connects to any standard OBD-II or AIS-140 GPS tracker already installed in vehicles.",
    },
    {
      question: "How is our school's data secured against breaches or unauthorized access?",
      answer:
        "We implement bank-grade security: AES-256 encryption at rest, TLS 1.3 in transit, and strictly isolated multi-tenant schemas ensuring zero cross-school data visibility. Automated snapshots run hourly, and our architecture adheres to ISO 27001, SOC-2 Type II, and Indian DPDP 2023 regulations.",
    },
  ];

  return (
    <div className="bg-slate-50/50 dark:bg-[#070B14] transition-colors">
      {/* FAQ Section */}
      <section className="py-24 md:py-32 relative border-t border-slate-200/80 dark:border-white/5" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Answers & Clarifications
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Everything principals, trustees, and administrative boards ask before transitioning to NxtEducate AI.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 overflow-hidden transition-all duration-200 shadow-sm dark:shadow-none"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                  >
                    <span className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-500 dark:text-brand-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 text-center shadow-sm dark:shadow-none">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Have specific institutional compliance or customized campus requirements?
            </p>
            <button
              type="button"
              onClick={onOpenDemo}
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition"
            >
              Speak directly with an Education Solution Specialist →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
