"use client";

import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  AlertOctagon,
  Bus,
  CreditCard,
  Users,
  CheckCircle,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export function DashboardVisualizer() {
  const [timeframe, setTimeframe] = useState<"today" | "term" | "year">("today");

  return (
    <section className="py-24 md:py-32 relative bg-slate-100/50 dark:bg-[#090D18] border-t border-slate-200/80 dark:border-white/5 transition-colors" id="dashboard">
      <div className="absolute inset-0 mesh-bg opacity-30 pointer-events-none" />
      <div className="noise" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <BarChart3 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
            Executive Principal Cockpit
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Every Metric, One Dashboard
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Eliminate guesswork. Instant executive transparency across student attendance, cash flow realization, bus fleet telematics, and AI academic risk signals.
          </p>
        </div>

        {/* Dashboard Shell */}
        <div className="rounded-3xl bg-white dark:bg-[#0C1222] border border-slate-200 dark:border-white/10 p-4 sm:p-6 lg:p-8 shadow-2xl shadow-indigo-900/10 dark:shadow-black/90 transition-colors">
          {/* Top Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">The Principal’s Intelligence Suite</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                    LIVE FEED
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Global Campus View · 3,420 Active Enrolled Students · Session 2026-2027
                </p>
              </div>
            </div>

            {/* Timeframe Selector */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <div className="p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setTimeframe("today")}
                  className={`px-3 py-1.5 rounded-lg transition ${
                    timeframe === "today"
                      ? "bg-brand-500 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Live Today
                </button>
                <button
                  type="button"
                  onClick={() => setTimeframe("term")}
                  className={`px-3 py-1.5 rounded-lg transition ${
                    timeframe === "term"
                      ? "bg-brand-500 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Term 2
                </button>
                <button
                  type="button"
                  onClick={() => setTimeframe("year")}
                  className={`px-3 py-1.5 rounded-lg transition ${
                    timeframe === "year"
                      ? "bg-brand-500 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Academic Year
                </button>
              </div>
            </div>
          </div>

          {/* 4 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {/* Pillar 1: Attendance */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-brand-500/30 transition">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-brand-500 dark:text-brand-400" />
                  Real-time Attendance
                </span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  96.4%
                </span>
              </div>

              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-stat">96.4%</span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-0.5">
                    <TrendingUp className="w-3.5 h-3.5" /> +1.4%
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  3,297 Present · 123 Absent with verified leave
                </p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 mt-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-brand-500 to-emerald-400 h-2 rounded-full"
                  style={{ width: "96.4%" }}
                />
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Facial Scan: 99.1%</span>
                <span>RFID Gate: 100%</span>
              </div>
            </div>

            {/* Pillar 2: Fee Collection */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-emerald-500/30 transition">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  Fee Realization
                </span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  91.2% Target
                </span>
              </div>

              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-stat">₹2.48 Cr</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">/ ₹2.72 Cr</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  ₹24 Lakh remaining across 84 parents
                </p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 mt-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full"
                  style={{ width: "91.2%" }}
                />
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>WhatsApp UPI: 68%</span>
                <span>NetBanking: 32%</span>
              </div>
            </div>

            {/* Pillar 3: Fleet Status */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-purple-500/30 transition">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Bus className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                  Active Transport Fleet
                </span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  42 / 42 ONLINE
                </span>
              </div>

              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-stat">100%</span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Safe Transit</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  1,890 students aboard · Zero delay incidents
                </p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 mt-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 to-indigo-400 h-2 rounded-full"
                  style={{ width: "100%" }}
                />
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Avg Speed: 32 km/h</span>
                <span>Max ETA: 12 mins</span>
              </div>
            </div>

            {/* Pillar 4: AI Academic Risk */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-amber-500/30 transition">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <AlertOctagon className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  AI Academic Risk
                </span>
                <span className="text-[10px] font-mono text-amber-600 dark:text-amber-300 bg-amber-500/15 px-1.5 py-0.5 rounded">
                  14 STUDENTS
                </span>
              </div>

              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-amber-600 dark:text-amber-400 font-stat">14 Flagged</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Early Stage</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Grade 10 & 11 Math / Chemistry remedial needed
                </p>
              </div>

              {/* Status Indicator */}
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 mt-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-500 to-rose-400 h-2 rounded-full"
                  style={{ width: "24%" }}
                />
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Interventions: 14 Active</span>
                <span className="text-amber-600 dark:text-amber-400 font-medium">Auto-notified</span>
              </div>
            </div>
          </div>

          {/* Deep-Dive Grid: Live Map Telemetry & AI Alerts Stream */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            {/* Left: GPS Fleet Live Visualizer */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/5">
                  <div className="flex items-center gap-2">
                    <Bus className="w-4 h-4 text-brand-500 dark:text-brand-400" />
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Live Fleet Telemetry & Geofence</h4>
                  </div>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">38 Routes Active</span>
                </div>

                {/* Simulated Visual Route Telemetry */}
                <div className="mt-4 space-y-3">
                  {[
                    { route: "Route 01 — Vasant Kunj", driver: "Mohan Singh", bus: "DL-01-AB-1092", status: "On Time", eta: "07:42 AM", students: "42/42", speed: "34 km/h" },
                    { route: "Route 08 — Dwarka Sector 12", driver: "Satish Pal", bus: "DL-01-BC-2451", status: "On Time", eta: "07:45 AM", students: "38/38", speed: "29 km/h" },
                    { route: "Route 14 — Noida Expressway", driver: "Praveen K", bus: "UP-16-CD-9902", status: "Bypassing Jam", eta: "07:50 AM", students: "45/45", speed: "41 km/h" },
                  ].map((bus, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm dark:shadow-none"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-slate-900 dark:text-white">{bus.route}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300">
                            {bus.bus}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-3">
                          <span>Driver: {bus.driver}</span>
                          <span>Speed: {bus.speed}</span>
                          <span>Students: {bus.students}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto">
                        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                          {bus.status} · ETA {bus.eta}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  All 42 panic buttons and CCTV cloud cameras verified online
                </span>
                <span className="font-mono text-slate-400 dark:text-slate-500">Refreshed: Just now</span>
              </div>
            </div>

            {/* Right: AI-Generated Academic Risk & Intervention Feed */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-500 dark:text-brand-400" />
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">AI Academic Risk Interventions</h4>
                  </div>
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400">NEP 2020 Aligned</span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <div className="flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-300">
                      <span>Grade 10-C Mathematics Alert</span>
                      <span className="text-[10px] text-amber-600 dark:text-amber-400/80">High Priority</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                      6 students scored below 45% in Quadratic Equations. AI generated tailored 15-minute remedial worksheets for parents.
                    </p>
                    <div className="mt-2.5 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 dark:text-slate-400">Remedial Class: Mon 3:30 PM</span>
                      <span className="text-amber-600 dark:text-amber-300 font-medium cursor-pointer hover:underline">
                        Review Plan →
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20">
                    <div className="flex items-center justify-between text-xs font-semibold text-brand-700 dark:text-brand-300">
                      <span>Attendance Anomaly Detected</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">Medium</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                      4 consecutive Friday absences identified for student roll #1102. Automated wellness check dispatched to guardian.
                    </p>
                    <div className="mt-2.5 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 dark:text-slate-400">Guardian Contacted via WhatsApp</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">Acknowledged</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5">
                <a
                  href="#contact"
                  className="w-full py-2.5 text-center text-xs font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-xl transition flex items-center justify-center gap-1.5 shadow-md shadow-brand-500/20"
                >
                  Request Full Institutional Audit
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
