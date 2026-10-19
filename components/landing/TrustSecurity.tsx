"use client";

import React from "react";
import {
  ShieldCheck,
  KeyRound,
  FileCheck2,
  RefreshCcw,
  Database,
  CheckCircle2,
} from "lucide-react";

export function TrustSecurity() {
  const securityPillars = [
    {
      icon: Database,
      title: "Multi-Tenant Data Isolation",
      detail:
        "Every school's student, academic, and financial records reside in physically segregated or schema-isolated databases with cryptographic boundary guards.",
    },
    {
      icon: KeyRound,
      title: "Granular Role-Based Access (RBAC)",
      detail:
        "Field-level permissions. Teachers see marks, accountants see fees, drivers see routes, and parents see only their child. Zero unauthorized data visibility.",
    },
    {
      icon: FileCheck2,
      title: "ISO 27001 & FERPA Certified",
      detail:
        "Independently audited against international student privacy frameworks, Indian DPDP Act 2023, and global FERPA education confidentiality standards.",
    },
    {
      icon: RefreshCcw,
      title: "Automated Encrypted Snapshots",
      detail:
        "Hourly immutable point-in-time backups across dual geographic regions. 15-minute Recovery Time Objective (RTO) with zero data loss guarantee.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-slate-100/50 dark:bg-[#090D18] border-t border-slate-200/80 dark:border-white/5 transition-colors" id="security">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Pill */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            Bank-Grade Student Data Protection
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Security & Enterprise Trust by Design
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Schools safeguard the most sensitive data in society. NxtEducate is architected from the ground up with military-grade encryption and verifiable compliance.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 transition flex flex-col justify-between shadow-sm dark:shadow-none"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Enterprise SLA Covered</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Badges Trust Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-around gap-6 text-center shadow-sm dark:shadow-none">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-stat">AES-256</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">End-to-End Encryption</div>
          </div>
          <div className="hidden sm:block h-8 w-px bg-slate-200 dark:bg-white/10" />
          <div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-stat">SOC-2 Type II</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Security Audit Certified</div>
          </div>
          <div className="hidden sm:block h-8 w-px bg-slate-200 dark:bg-white/10" />
          <div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-stat">99.99%</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">High-Availability Uptime</div>
          </div>
          <div className="hidden sm:block h-8 w-px bg-slate-200 dark:bg-white/10" />
          <div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-stat">DPDP 2023</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Indian Data Privacy Compliant</div>
          </div>
        </div>
      </div>
    </section>
  );
}
