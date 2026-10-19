"use client";

import React, { useState } from "react";
import {
  Building2,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  BookOpen,
  Bus,
  Coins,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

interface PersonaConfig {
  id: string;
  label: string;
  shortTag: string;
  icon: React.ElementType;
  badge: string;
  headline: string;
  subheadline: string;
  keyBenefits: string[];
  kpiStats: { label: string; value: string; detail: string }[];
  visualMock: {
    title: string;
    sub: string;
    elements: { name: string; status: string; detail: string; tag: string }[];
  };
}

const PERSONAS: PersonaConfig[] = [
  {
    id: "schools",
    label: "Schools & Boards",
    shortTag: "Governing Bodies",
    icon: Building2,
    badge: "Enterprise Multi-Branch",
    headline: "Multi-Branch Visibility & Automated Compliance",
    subheadline:
      "Govern 5 or 50 campuses from a unified command center. Monitor CBSE/ICSE regulatory submissions, board performance analytics, and campus-wide P&L in real-time.",
    keyBenefits: [
      "Consolidated Multi-Campus Executive Dashboard with 1-click drill down",
      "CBSE, ICSE, Cambridge & State Board statutory report auto-generation",
      "Centralized curriculum pacing and inter-school academic benchmarking",
      "Group-level financial auditing, fee realization, and procurement controls",
    ],
    kpiStats: [
      { label: "Campuses Synced", value: "100%", detail: "Zero data silos" },
      { label: "Board Audit Prep", value: "3 mins", detail: "Down from 4 weeks" },
      { label: "Compliance Risk", value: "0%", detail: "Automated checklist alerts" },
    ],
    visualMock: {
      title: "Board of Trustees — Group Executive Portal",
      sub: "Aggregated performance across 8 metropolitan branches",
      elements: [
        { name: "North Campus (CBSE)", status: "Optimal", detail: "97.2% Attendance · ₹1.4Cr Fees Cleared", tag: "Grade A+" },
        { name: "South Campus (ICSE)", status: "Optimal", detail: "96.5% Attendance · Timetable Synced", tag: "Grade A+" },
        { name: "West Campus (IB/IGCSE)", status: "Compliance Review", detail: "Affiliation dossier generated", tag: "Review Ready" },
      ],
    },
  },
  {
    id: "admins",
    label: "Administrators",
    shortTag: "School Operations",
    icon: Briefcase,
    badge: "Operations CRM",
    headline: "Admissions CRM, Smart Reconciliation & Staff HR",
    subheadline:
      "Turn fragmented paper trails into frictionless digital pipelines. Automate enrollment queues, student onboarding, staff attendance, and payroll slips.",
    keyBenefits: [
      "End-to-end inquiry-to-admission pipeline with WhatsApp automated lead nurture",
      "RFID student / staff entry logs with instant SMS triggers",
      "Single-click staff payroll calculation with EPF/ESI compliance",
      "Central inventory, library books cataloging, and digital document locker",
    ],
    kpiStats: [
      { label: "Lead Conversion", value: "+38%", detail: "Automated WhatsApp followups" },
      { label: "Admin Workload", value: "-65%", detail: "Zero paper admission forms" },
      { label: "Document Verification", value: "Instant", detail: "DigiLocker integration" },
    ],
    visualMock: {
      title: "Central Administrative Console",
      sub: "Session 2026-27 Enrollment & Staff Operations",
      elements: [
        { name: "New Admissions Queue", status: "Active", detail: "348 Applications · 92 Verified Today", tag: "High Demand" },
        { name: "Staff Check-in", status: "Complete", detail: "142/145 Teachers Checked In by 08:15", tag: "On Time" },
        { name: "CBSE OASIS Data Sync", status: "Synchronized", detail: "Direct portal API connection active", tag: "Live" },
      ],
    },
  },
  {
    id: "teachers",
    label: "Teachers",
    shortTag: "Academic Staff",
    icon: GraduationCap,
    badge: "1-Click AI Classroom",
    headline: "1-Click AI Attendance, Timetables & Smart Marks Entry",
    subheadline:
      "Eliminate repetitive clerical work so educators focus on student mentorship. AI question bank generation, and instant grading.",
    keyBenefits: [
      "AI Lesson Planner aligned to NEP 2020 & state curricular competencies",
      "Voice & optical marks entry with auto-grade calculation and CGPA mapping",
      "Instant customized parent feedback reports generated with AI assistance",
    ],
    kpiStats: [
      { label: "Class Time Saved", value: "22 mins", detail: "Per teacher per day" },
      { label: "Report Card Gen", value: "1-Click", detail: "Auto marks-to-rubric mapping" },
      { label: "Lesson Prep Speed", value: "4x Faster", detail: "Built-in K-12 AI repository" },
    ],
    visualMock: {
      title: "Teacher Copilot — Class 10th-B (Mathematics)",
      sub: "Period 3 · Polynomials & Quadratic Equations",
      elements: [
        { name: "Attendance Register", status: "Verified", detail: "38/40 Students marked present in 4.2s", tag: "AI Verified" },
        { name: "Unit Test 2 Rubrics", status: "Graded", detail: "Mean score: 84.6% · Weak topics identified", tag: "Analyzed" },
        { name: "Homework Dispatched", status: "Delivered", detail: "Sent to 40 parent apps via WhatsApp/App", tag: "100% Sent" },
      ],
    },
  },
  {
    id: "parents",
    label: "Parents",
    shortTag: "Parent Portal",
    icon: HeartHandshake,
    badge: "Transparency & Care",
    headline: "1-Click Fees, Live Bus Telemetry & Real-Time Report Cards",
    subheadline:
      "Give parents unwavering peace of mind. Instant school bus GPS tracking with geofenced arrival alerts, transparent fee payments with zero convenience charges, and continuous progress updates.",
    keyBenefits: [
      "Live school bus GPS tracking with real-time ETA and geofenced pickup notifications",
      "Instant digital fee payment via UPI, Debit Card, NetBanking, and EMI plans",
      "Daily digital dairy: homework assignments, teacher notes, and exam schedules",
      "Real-time attendance push alerts the moment the child enters or exits the school gate",
    ],
    kpiStats: [
      { label: "Parent Satisfaction", value: "98.4%", detail: "Based on 80,000+ app reviews" },
      { label: "Bus Arrival Anxiety", value: "Zero", detail: "2-min proximity push alerts" },
      { label: "Fee Receipt", value: "Instant", detail: "WhatsApp PDF invoice" },
    ],
    visualMock: {
      title: "NxtEducate Parent Mobile Companion",
      sub: "Student: Aarav Sharma · Grade 8th-A",
      elements: [
        { name: "School Bus #14 Live GPS", status: "En Route", detail: "Approaching Stop: Palm Meadows (ETA 4 min)", tag: "Live Telemetry" },
        { name: "Quarter 3 Tuition Fee", status: "Paid", detail: "₹34,500 cleared via UPI · PDF Downloaded", tag: "Receipt #8821" },
        { name: "Science Homework Submission", status: "Completed", detail: "Teacher Remark: 'Excellent hypothesis design'", tag: "Grade A" },
      ],
    },
  },
  {
    id: "students",
    label: "Students",
    shortTag: "Learner Hub",
    icon: BookOpen,
    badge: "Personalized LMS",
    headline: "Homework Submission, Adaptive LMS & Exam Schedules",
    subheadline:
      "A joyful, interactive learning portal that helps students excel. Submit digital assignments, access recorded video lessons, practice mock tests, and view gamified achievement badges.",
    keyBenefits: [
      "Mobile-friendly homework submission with image OCR upload and status tracking",
      "AI-driven concept doubt solver available 24/7 with step-by-step explanations",
      "Dynamic exam countdown calendar with chapter revision checklists",
      "Gamified reading goals, quiz leaderboards, and co-curricular portfolios",
    ],
    kpiStats: [
      { label: "Active Student Daily Use", value: "88%", detail: "Higher homework completion" },
      { label: "Doubt Resolution", value: "< 30 sec", detail: "AI step-by-step guidance" },
      { label: "Assignment Turn-in", value: "+45%", detail: "Zero misplaced worksheets" },
    ],
    visualMock: {
      title: "Student Growth & Practice Portal",
      sub: "Daily Schedule · Study Modules · Exam Prep",
      elements: [
        { name: "Physics Assignment #4", status: "Submitted", detail: "Laws of Motion · Evaluated by Mr. Raman", tag: "Score 19/20" },
        { name: "Mid-Term Examination", status: "Upcoming", detail: "Starts in 6 days · Revision notes downloaded", tag: "Timetable Active" },
        { name: "AI Practice Quiz: Chemistry", status: "Unlocked", detail: "15 practice questions ready for review", tag: "Level 4" },
      ],
    },
  },
  {
    id: "transport",
    label: "Transport & Safety",
    shortTag: "Fleet Operations",
    icon: Bus,
    badge: "GPS & Telematics",
    headline: "GPS Fleet Tracking, Speed Governance & Dynamic Routing",
    subheadline:
      "Total student transit security. Live vehicle telemetry, driver speed alerts, automated route re-routing to bypass traffic jams, and RFID gate passenger counts.",
    keyBenefits: [
      "Hardware-agnostic GPS & OBD-II telemetry integrated directly into school maps",
      "Real-time overspeeding, harsh braking, and route deviation warning triggers",
      "Dynamic morning/evening route optimization saving up to 25% on institutional fuel",
      "Emergency SOS button linked directly to school security desk and local police dispatch",
    ],
    kpiStats: [
      { label: "Transit Accidents", value: "0", detail: "Active speed governance" },
      { label: "Fuel Cost Savings", value: "22%", detail: "Optimized route sequences" },
      { label: "Parent Calls Reduced", value: "94%", detail: "Self-serve live GPS map" },
    ],
    visualMock: {
      title: "Fleet Telematics & Route Command Center",
      sub: "Active Fleet: 38 School Buses · 1,840 Students in Transit",
      elements: [
        { name: "Route 04 — North Ring", status: "Safe & On Time", detail: "Driver: R. Kumar · Speed: 38 km/h · 44/44 Boarded", tag: "All Safe" },
        { name: "Route 11 — Expressway", status: "Detour Applied", detail: "Bypassing highway bottleneck · Delay 0 min", tag: "Optimized" },
        { name: "Vehicle Maintenance Health", status: "Certified", detail: "All 38 buses passed PUC & brake checks", tag: "Compliant" },
      ],
    },
  },
  {
    id: "accounts",
    label: "Accounts & Finance",
    shortTag: "Bursar & Treasury",
    icon: Coins,
    badge: "Auto Reconciliation",
    headline: "Automated Invoicing, Tally ERP Sync & Defaulter Tracking",
    subheadline:
      "Say goodbye to manual bank statement matching. Automatic fee reconciliation, recurring fee installments, custom scholarship fee concessions, and GST-compliant invoicing.",
    keyBenefits: [
      "Instant two-way sync with TallyPrime, Zoho Books, and SAP Business One",
      "Automated WhatsApp fee reminders with embedded direct payment gateways",
      "Real-time fee defaulter aging brackets with configurable penalty waivers",
      "Cashless canteen, uniform store, and transport collection ledger integration",
    ],
    kpiStats: [
      { label: "Fee Realization Speed", value: "3x Faster", detail: "Automated WhatsApp links" },
      { label: "Reconciliation Time", value: "0 hrs", detail: "Automated bank statement match" },
      { label: "Bad Debt / Defaults", value: "< 0.8%", detail: "Predictive early recovery" },
    ],
    visualMock: {
      title: "Finance & Accounts Command Console",
      sub: "Fiscal Year 2026-27 · Real-Time General Ledger",
      elements: [
        { name: "Daily Bank Reconciliation", status: "Reconciled", detail: "418 Transactions · ₹42.8 Lakh matched with HDFC/SBI", tag: "100% Balanced" },
        { name: "TallyPrime XML Sync", status: "Synchronized", detail: "All voucher postings exported automatically", tag: "Synced" },
        { name: "Overdue Fee Interventions", status: "Automated", detail: "Sent 28 courteous reminders with customized installment links", tag: "Active" },
      ],
    },
  },
];

export function EcosystemTabs() {
  const [activePersona, setActivePersona] = useState<PersonaConfig>(PERSONAS[0]);

  return (
    <section className="py-24 md:py-32 relative bg-slate-50/50 dark:bg-[#070B14] border-t border-slate-200/80 dark:border-white/5 transition-colors" id="ecosystem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
            Unified 360° Educational Ecosystem
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Designed for Every Stakeholder in Your Institution
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            One intelligent core, customized interfaces for all 7 key roles. Explore how NxtEducate transforms daily workflows across your campus.
          </p>
        </div>

        {/* Tab Switcher / Segmented Control */}
        <div
          role="tablist"
          aria-label="Ecosystem Personas"
          className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 px-1 scrollbar-none justify-start lg:justify-center border-b border-slate-200 dark:border-white/10"
        >
          {PERSONAS.map((persona) => {
            const Icon = persona.icon;
            const isSelected = activePersona.id === persona.id;
            return (
              <button
                key={persona.id}
                role="tab"
                id={`tab-${persona.id}`}
                aria-selected={isSelected}
                aria-controls={`tabpanel-${persona.id}`}
                onClick={() => setActivePersona(persona)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${isSelected
                  ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25 scale-[1.02]"
                  : "bg-white dark:bg-white/[0.03] text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none"
                  }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-brand-500 dark:text-brand-400"}`} />
                <span>{persona.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <div
          id={`tabpanel-${activePersona.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activePersona.id}`}
          className="mt-12 transition-all duration-300"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Benefits & Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {activePersona.badge}
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                {activePersona.headline}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {activePersona.subheadline}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3.5 pt-2">
                {activePersona.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-500/10 dark:bg-brand-500/20 border border-brand-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-200 leading-normal">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Persona KPI highlights */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                {activePersona.kpiStats.map((kpi, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none">
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-stat">
                      {kpi.value}
                    </div>
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-0.5">{kpi.label}</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5">{kpi.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Mockup */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl bg-white dark:bg-[#0E1424] border border-slate-200 dark:border-white/10 p-5 sm:p-7 shadow-2xl shadow-indigo-900/10 dark:shadow-black/80 overflow-hidden transition-colors">
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Mock Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <activePersona.icon className="w-4 h-4 text-brand-500 dark:text-brand-400" />
                      {activePersona.visualMock.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {activePersona.visualMock.sub}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">
                    STATUS: REAL-TIME
                  </span>
                </div>

                {/* Mock Elements */}
                <div className="mt-5 space-y-3.5">
                  {activePersona.visualMock.elements.map((elem, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-brand-500/30 transition flex items-center justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">{elem.name}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-300 border border-brand-500/30">
                            {elem.tag}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{elem.detail}</p>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        {elem.status}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mock Action Bar */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
                    <span>Auto-synced with NxtEducate Master Database</span>
                  </div>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">99.99% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
