"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, FileText, CheckCircle2, AlertCircle, Building2, Scale } from "lucide-react";

export default function TermsOfServicePage() {
  const sections = [
    {
      id: "acceptance",
      title: "1. Institutional Agreement & Scope of License",
      content: (
        <>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between <strong>NxtEducate AI Inc.</strong> (&ldquo;NxtEducate AI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) and the educational institution (&ldquo;School&rdquo;, &ldquo;Trust&rdquo;, &ldquo;Customer&rdquo;, or &ldquo;You&rdquo;) entering into a Master Services Agreement (MSA) or subscribing to the platform.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            By accessing or authorizing staff, teachers, parents, or students to access NxtEducate AI web and mobile applications, the School grants authorized users a non-exclusive, non-transferable, revocable license to use the system solely for administrative, academic, and communication purposes.
          </p>
        </>
      ),
    },
    {
      id: "accounts-rbac",
      title: "2. User Roles, Security & Account Responsibility",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            NxtEducate AI provides role-specific dashboards governed by granular Role-Based Access Control (RBAC). Institutional administrators are responsible for:
          </p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>Assigning appropriate role permissions (Principal, Teacher, Accountant, Transport Manager, Parent, Student).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>Immediately revoking system credentials when staff members or contractors exit the institution.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>Enforcing multi-factor authentication (MFA) and strong password hygiene across administrative accounts.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "acceptable-use",
      title: "3. Acceptable Campus Use Policy",
      content: (
        <div className="space-y-3">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Users shall not, under any circumstances:
          </p>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-700 dark:text-slate-300 space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>Reverse engineer, decompile, or disassemble any part of the NxtEducate AI platform or algorithmic solvers.</span>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>Use the communication hub or WhatsApp API broadcast integration for unsolicited third-party commercial spam.</span>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>Conduct automated penetration testing or vulnerability scraping without prior explicit authorization from our security team.</span>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>Upload malicious code, harmful payloads, or unlawful content to the document management repository.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "data-ownership",
      title: "4. Institutional Data Ownership & Intellectual Property",
      content: (
        <>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            <strong>School Owns All Data:</strong> The School retains 100% intellectual property ownership, title, and interest in all student records, examination scores, fee ledgers, curriculum assets, and institutional files uploaded to the platform.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong>NxtEducate AI Platform IP:</strong> NxtEducate AI retains all right, title, and interest in the software, algorithms (such as the Genetic Timetable Solver and AI Dropout Predictor), UI components, codebases, and platform documentation.
          </p>
        </>
      ),
    },
    {
      id: "uptime-sla",
      title: "5. Service Availability & 99.9% Uptime SLA",
      content: (
        <>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            NxtEducate AI guarantees a <strong>99.9% Monthly Uptime Service Level Agreement (SLA)</strong> for core cloud platform operations (excluding pre-scheduled maintenance).
          </p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
            <li>• <strong>Maintenance Windows:</strong> Routine updates and database optimizations occur outside school hours (typically 01:00 AM – 04:00 AM IST) with 48-hour prior notice.</li>
            <li>• <strong>Emergency Support:</strong> Priority 1 incidents (such as platform outages impacting campus attendance or gate turnstiles) receive a 15-minute response SLA.</li>
          </ul>
        </>
      ),
    },
    {
      id: "billing-termination",
      title: "6. Subscription Fees, Renewals & Termination",
      content: (
        <>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            Subscription fees are billed on an annual or termly basis according to active student headcounts specified in the institutional quotation.
          </p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
            <li>• <strong>Cancellation:</strong> Either party may terminate with 60 days written notice prior to the start of a new academic year.</li>
            <li>• <strong>Data Portability Grace Period:</strong> Following termination, the institution receives 30 days of complimentary read/export access to download full historical data archives in SQL/CSV formats.</li>
          </ul>
        </>
      ),
    },
    {
      id: "governing-law",
      title: "7. Governing Law & Dispute Resolution",
      content: (
        <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-sm space-y-2">
          <p>
            These Terms shall be governed by and construed in accordance with the <strong>laws of the Republic of India</strong>.
          </p>
          <p>
            Any dispute arising out of or in connection with these Terms shall be referred to and finally resolved by arbitration administered in accordance with the Arbitration and Conciliation Act, 1996, in New Delhi / Bengaluru, India.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-[#070B14]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo-icon.png"
              alt="NxtEducate AI"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
            <span className="font-display font-bold text-lg tracking-tight text-slate-900 dark:text-white">
              NxtEducate<span className="text-brand-500 dark:text-brand-400">.AI</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Hero Title */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Scale className="w-3.5 h-3.5" />
            Master Institutional License
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            The legal terms governing institutional subscription, acceptable use, and data stewardship on NxtEducate AI.
          </p>
          <div className="mt-4 text-xs text-slate-500 dark:text-slate-500">
            Last Updated: October 1, 2026 • Version 2.2
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none"
            >
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} NxtEducate AI Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition underline">
              Privacy Policy
            </Link>
            <Link href="/security" className="hover:text-slate-900 dark:hover:text-white transition underline">
              Security Disclosure
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
