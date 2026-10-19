"use client";

import React from "react";
import {
  CalendarCheck,
  FileText,
  Bus,
  MessageSquare,
  TrendingUp,
  Zap,
  ArrowRight,
} from "lucide-react";

export function FeatureMatrix() {
  const bentoFeatures = [
    {
      title: "Dynamic Timetable Generator",
      category: "Algorithmic Solver",
      badge: "Zero Conflict",
      description:
        "Genetic algorithms solve millions of scheduling constraints: teacher availability, lab capacities, substitution alerts, and sports periods in 45 seconds.",
      icon: CalendarCheck,
      gradient: "from-purple-500/10 via-violet-500/5 to-transparent dark:from-purple-500/20 dark:via-violet-500/10 dark:to-transparent",
      colSpan: "lg:col-span-7",
      metric: "0 Overlaps",
      metricDetail: "Automated substitution coverage",
      preview: (
        <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5">
          <div className="flex items-center justify-between text-xs text-slate-700 dark:text-slate-300 mb-2">
            <span>Teacher Sick Leave: Ms. Preeti</span>
            <span className="text-brand-600 dark:text-brand-300 font-semibold">Auto-Reassigned</span>
          </div>
          <div className="text-[11px] p-2 rounded bg-brand-500/10 border border-brand-500/20 text-slate-800 dark:text-slate-200">
            Period 4 (Chemistry) assigned to Mr. V. Rao (Free Period confirmed).
          </div>
        </div>
      ),
    },
    {
      title: "Automated Report Card Generator",
      category: "Academic Compliance",
      badge: "CBSE / ICSE / IB",
      description:
        "Generate 2,000+ compliant report cards in seconds. Pre-loaded with CBSE 9-point grading scale, ICSE formats, NEP holistic progress cards, and teacher remarks.",
      icon: FileText,
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent dark:from-emerald-500/20 dark:via-teal-500/10 dark:to-transparent",
      colSpan: "lg:col-span-5",
      metric: "100% Compliant",
      metricDetail: "Digital signature & QR verify",
      preview: (
        <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900 dark:text-white">Term 1 Holistic Card</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">CBSE 2026 Template #04</div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
            QR VERIFIED
          </span>
        </div>
      ),
    },
    {
      title: "GPS Bus Fleet Live Telemetry",
      category: "Student Safety",
      badge: "Real-Time Telematics",
      description:
        "Sub-meter GPS vehicle positioning with over-speed alarms, ignition detection, proximity push notifications to parents, and automated route optimization.",
      icon: Bus,
      gradient: "from-blue-500/10 via-indigo-500/5 to-transparent dark:from-blue-500/20 dark:via-indigo-500/10 dark:to-transparent",
      colSpan: "lg:col-span-4",
      metric: "< 2s Telemetry Lag",
      metricDetail: "Hardware agnostic GPS / OBD",
      preview: (
        <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Bus 18: Approaching Green Valley Stop</span>
          </div>
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            Parent Push Sent (ETA 3 Min)
          </span>
        </div>
      ),
    },
    {
      title: "Smart Fee Collection & Instant WhatsApp Invoicing",
      category: "Fintech & Treasury",
      badge: "Zero Defaulters",
      description:
        "Automated WhatsApp fee alerts with embedded 1-click UPI links. Instant PDF receipts, payment installments, concession workflows, and TallyPrime ledger export.",
      icon: MessageSquare,
      gradient: "from-emerald-500/10 via-green-500/5 to-transparent dark:from-emerald-500/20 dark:via-green-500/10 dark:to-transparent",
      colSpan: "lg:col-span-4",
      metric: "3x Faster Collections",
      metricDetail: "98% WhatsApp open rates",
      preview: (
        <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-700 dark:text-slate-300">
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">WhatsApp Business API</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">Delivered</span>
          </div>
          <p className="text-xs text-slate-800 dark:text-slate-200">
            &ldquo;Dear Parent, Term 2 fee of ₹34,500 is due. Tap here to pay via UPI with 0 convenience fee.&rdquo;
          </p>
        </div>
      ),
    },
    {
      title: "AI Student Performance & Early Dropout Predictor",
      category: "Predictive Analytics",
      badge: "NEP Remedial AI",
      description:
        "Continuous machine learning tracks student test trajectories, attendance anomalies, and homework submissions to spot at-risk students 6 weeks before exams.",
      icon: TrendingUp,
      gradient: "from-amber-500/10 via-brand-500/5 to-transparent dark:from-amber-500/20 dark:via-brand-500/10 dark:to-transparent",
      colSpan: "lg:col-span-4",
      metric: "94% Early Detection",
      metricDetail: "Personalized remedial modules",
      preview: (
        <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-900 dark:text-white">Remedial Focus Identified</div>
            <div className="text-[10px] text-amber-600 dark:text-amber-300">Grade 9 Trigonometry Basics</div>
          </div>
          <span className="text-xs font-semibold text-brand-600 dark:text-brand-300 bg-brand-500/10 dark:bg-brand-500/20 px-2 py-1 rounded">
            Auto-assigned 3 Quizzes
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-slate-50/50 dark:bg-[#070B14] border-t border-slate-200/80 dark:border-white/5 transition-colors" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
            Cutting-Edge SaaS Architecture
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Engineered to Replace 12 Disconnected School Tools
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A battle-tested feature matrix providing autonomous school automation, airtight regulatory compliance, and delightful parent interactions.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {bentoFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className={`${feat.colSpan} relative rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 p-6 sm:p-8 hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-black/50`}
              >
                {/* Background Ambient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                      {feat.category}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {feat.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition">
                      {feat.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {feat.description}
                  </p>

                  {/* Interactive Micro-Preview */}
                  {feat.preview}
                </div>

                {/* Footer Metric */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-stat">
                      {feat.metric}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">{feat.metricDetail}</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-white group-hover:bg-brand-500 transition">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
