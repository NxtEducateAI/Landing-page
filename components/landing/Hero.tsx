"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle2,
  Users,
  ShieldCheck,
  TrendingUp,
  BrainCircuit,
  Bus,
  CreditCard,
  Flame,
} from "lucide-react";

interface HeroProps {
  onOpenDemo: () => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  const [activeMetricTab, setActiveMetricTab] = useState<"overview" | "ai" | "telemetry">("overview");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden transition-colors" id="hero">
      {/* Background Ambience */}
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="noise" />

      {/* Radiant Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/10 dark:bg-brand-500/15 blur-[120px] rounded-full pointer-events-none pulse-slow" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 backdrop-blur-md mb-8 hover:border-brand-500/40 transition group shadow-sm dark:shadow-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
              Introducing <span className="text-slate-900 dark:text-white font-semibold">NxtEducate OS v3.2</span>
            </span>
            <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Autonomous School AI
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-0.5 transition" />
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-6">
            The Future of{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Intelligent</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 240 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8.5C50 2.5 150 2.5 237 9"
                  stroke="url(#underline-gradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#5B4CF0" />
                    <stop offset="0.5" stopColor="#7C3AED" />
                    <stop offset="1" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br className="hidden sm:inline" /> School Management
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            One unified, AI-powered ecosystem connecting{" "}
            <span className="text-slate-900 dark:text-white font-medium">Schools</span>,{" "}
            <span className="text-slate-900 dark:text-white font-medium">Administrators</span>,{" "}
            <span className="text-slate-900 dark:text-white font-medium">Teachers</span>,{" "}
            <span className="text-slate-900 dark:text-white font-medium">Parents</span>, and{" "}
            <span className="text-slate-900 dark:text-white font-medium">Students</span> in real-time.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              type="button"
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white rounded-2xl bg-gradient-to-r from-brand-500 via-indigo-600 to-emerald-500 hover:from-brand-600 hover:to-emerald-600 shadow-xl shadow-brand-500/25 hover:shadow-2xl hover:shadow-brand-500/40 transition-all duration-300 flex items-center justify-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Sparkles className="w-5 h-5 text-emerald-200 group-hover:rotate-12 transition-transform" />
              <span>Schedule Live School Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#dashboard"
              className="w-full sm:w-auto px-7 py-4 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white rounded-2xl glass hover:bg-slate-100 dark:hover:bg-white/[0.08] transition duration-200 flex items-center justify-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              <div className="w-6 h-6 rounded-full bg-brand-500/10 dark:bg-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Explore Interactive Tour</span>
            </a>
          </div>
        </div>

        {/* Hero Interactive Window Preview */}
        <div className="mt-14 max-w-5xl mx-auto relative group">
          {/* Ambient Rim Glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-500 via-purple-600 to-emerald-500 rounded-3xl blur-xl opacity-20 dark:opacity-35 group-hover:opacity-40 dark:group-hover:opacity-55 transition duration-700 pointer-events-none" />

          {/* Window Shell */}
          <div className="relative rounded-2xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl shadow-indigo-900/10 dark:shadow-black/80 transition-colors">
            {/* Window Titlebar */}
            <div className="bg-slate-100/90 dark:bg-[#090D18] px-4 py-3 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                <span className="ml-3 text-xs font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
                  https://app.nxteducate.ai/central-hub
                </span>
              </div>

              {/* Live Status indicator */}
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
                  All 7 Modules Active
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono hidden md:block">
                  Latency: 18ms
                </div>
              </div>
            </div>

            {/* Dashboard Content Mock */}
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              {/* Header inside mock */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/5">
                <div>
                  <div className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BrainCircuit className="w-3.5 h-3.5" />
                    AI Copilot for K-12 Institutions
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                    Delhi Public Academy — Central Campus (Multi-Branch)
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveMetricTab("overview")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                      activeMetricTab === "overview"
                        ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                        : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Executive Overview
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveMetricTab("ai")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                      activeMetricTab === "ai"
                        ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                        : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    AI Diagnostics
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveMetricTab("telemetry")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                      activeMetricTab === "telemetry"
                        ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                        : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Live Fleet
                  </button>
                </div>
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-brand-500/30 transition">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-1">
                    <span className="text-xs font-medium">Daily Attendance</span>
                    <Users className="w-4 h-4 text-brand-500 dark:text-brand-400" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white font-stat">96.4%</div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1 font-medium">
                    <TrendingUp className="w-3 h-3" />
                    +1.8% vs last week · AI Verified
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-emerald-500/30 transition">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-1">
                    <span className="text-xs font-medium">Term 2 Fee Realization</span>
                    <CreditCard className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white font-stat">₹2.84 Cr</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">92.6% Collected</span> via WhatsApp
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-purple-500/30 transition">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-1">
                    <span className="text-xs font-medium">Bus Fleet Telemetry</span>
                    <Bus className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white font-stat">38 / 38</div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-medium">
                    100% on schedule · 0 SOS alerts
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-amber-500/30 transition">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-1">
                    <span className="text-xs font-medium">Academic Early Risk</span>
                    <Flame className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 font-stat">12 Flagged</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                    Remedial lessons generated
                  </div>
                </div>
              </div>

              {/* Visual Graphic Representation */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Real-time Attendance & Class Distribution */}
                <div className="lg:col-span-2 p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                        Live Class Attendance Stream & Face Recognition Feed
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Class 1A through 12D · 2,420 students synchronized
                      </p>
                    </div>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      LIVE SYNC
                    </span>
                  </div>

                  {/* Visual Bar Graph */}
                  <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 items-end h-32 pt-2">
                    {[
                      { grade: "G1", val: 98 },
                      { grade: "G2", val: 94 },
                      { grade: "G3", val: 96 },
                      { grade: "G4", val: 92 },
                      { grade: "G5", val: 95 },
                      { grade: "G6", val: 97 },
                      { grade: "G7", val: 93 },
                      { grade: "G8", val: 98 },
                      { grade: "G9", val: 91 },
                      { grade: "G10", val: 99 },
                      { grade: "G11", val: 94 },
                      { grade: "G12", val: 97 },
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-1.5 h-full justify-end group/bar">
                        <div className="w-full bg-slate-200 dark:bg-slate-800/80 rounded-t-md h-full flex flex-col justify-end p-0.5 overflow-hidden">
                          <div
                            className="w-full bg-gradient-to-t from-brand-600 to-emerald-400 rounded-t-sm transition-all duration-500 group-hover/bar:brightness-110"
                            style={{ height: `${item.val}%` }}
                          />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">{item.grade}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded bg-emerald-500 inline-block" />
                        AI Verified Present
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded bg-brand-500 inline-block" />
                        Biometric Card Scanned
                      </span>
                    </div>
                    <span className="text-brand-600 dark:text-brand-300 font-medium">
                      Zero Manual Register Work
                    </span>
                  </div>
                </div>

                {/* AI Assistant Live Stream */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <BrainCircuit className="w-4 h-4 text-brand-500 dark:text-brand-400" />
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">NxtAgent Intelligence</h4>
                    </div>
                    <span className="text-[10px] text-brand-600 dark:text-brand-400 font-mono">Autonomous</span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="p-2.5 rounded-lg bg-brand-500/5 dark:bg-brand-500/10 border border-brand-500/20 text-slate-700 dark:text-slate-200">
                      <div className="font-semibold text-brand-600 dark:text-brand-300 flex items-center justify-between">
                        <span>Timetable Conflict Solved</span>
                        <span className="text-[10px] text-slate-400">2m ago</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        Swapped Physics lab for Grade 11-A with zero teacher collisions.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 text-slate-700 dark:text-slate-200">
                      <div className="font-semibold text-emerald-600 dark:text-emerald-300 flex items-center justify-between">
                        <span>WhatsApp Fee Receipts</span>
                        <span className="text-[10px] text-slate-400">7m ago</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        Dispatched 142 payment confirmations with 1-click UPI links.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-200">
                      <div className="font-semibold text-slate-800 dark:text-slate-300 flex items-center justify-between">
                        <span>Bus Route 14 Optimized</span>
                        <span className="text-[10px] text-slate-400">14m ago</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        Avoided ring road congestion; ETA normalized to 07:45 AM.
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-200 dark:border-white/5">
                    <button
                      type="button"
                      onClick={onOpenDemo}
                      className="w-full py-2 text-center text-xs font-semibold text-brand-600 dark:text-white bg-brand-500/10 hover:bg-brand-500/20 dark:bg-brand-500/20 dark:hover:bg-brand-500/30 border border-brand-500/30 dark:border-brand-500/40 rounded-lg transition"
                    >
                      Trigger AI Diagnostic Live →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
