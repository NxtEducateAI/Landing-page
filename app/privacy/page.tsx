"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, Lock, FileCheck, Mail, Building, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "controller-processor",
      title: "1. Data Controller vs. Data Processor",
      content: (
        <>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            Under India&apos;s <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>, <strong>FERPA</strong> (Family Educational Rights and Privacy Act), and applicable global privacy regulations, the educational institution (School, Trust, or College Board) serves as the <strong>Data Fiduciary / Data Controller</strong>.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong>NxtEducate AI Inc.</strong> acts strictly as the <strong>Data Processor</strong>. We process student, parent, and employee data solely on behalf of and according to explicit written instructions from the partnering institution. NxtEducate AI does not own, sell, license, or monetize institutional student records.
          </p>
        </>
      ),
    },
    {
      id: "data-collected",
      title: "2. Categories of Information Collected",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            We collect and process the following categories of data as configured by your school administration:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                label: "Student Academic Records",
                desc: "Admission ID, grades, report cards, class attendance, homework, and teacher remarks.",
              },
              {
                label: "Parent / Guardian Contact",
                desc: "Name, phone number for WhatsApp fee alerts, email address, and home address.",
              },
              {
                label: "Biometric & Attendance Data",
                desc: "Facial vector embeddings for touchless turnstile/classroom attendance (raw facial photos are hashed and encrypted; raw biometric images are never shared).",
              },
              {
                label: "Fleet & Safety Telematics",
                desc: "GPS coordinates, bus route tracking, boarding/deboarding timestamps for student transit.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10"
              >
                <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "minor-consent",
      title: "3. Protection of Minor Data & Parental Consent",
      content: (
        <>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            Because our platform processes data relating to children under the age of 18, we enforce strict compliance with Section 9 of the DPDP Act 2023 and global COPPA guidelines.
          </p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>Verifiable parental consent is obtained through institutional school admission and onboarding workflows.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>We never conduct targeted behavioral advertising, psychometric profiling, or commercial tracking of student users.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>AI analytics models operate within isolated institutional boundaries strictly for academic remediation and dropout prevention.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "storage-encryption",
      title: "4. Data Storage, Residency & Encryption",
      content: (
        <>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            All institutional databases are hosted on enterprise cloud infrastructure located in <strong>MeitY-empanelled data centers in India</strong> (AWS Mumbai / Azure Central India).
          </p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <Lock className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
              <span><strong>Encryption in Transit:</strong> TLS 1.3 cryptographic protocols with HSTS enabled for all API and web traffic.</span>
            </li>
            <li className="flex items-start gap-2">
              <Lock className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
              <span><strong>Encryption at Rest:</strong> AES-256 disk encryption with rotating hardware security module (HSM) keys.</span>
            </li>
            <li className="flex items-start gap-2">
              <Lock className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
              <span><strong>Multi-Tenant Isolation:</strong> Logical schema partition ensuring that School A can never read or query School B&apos;s database records under any condition.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "third-parties",
      title: "5. Sub-Processors & Third-Party Integrations",
      content: (
        <>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            We partner exclusively with verified enterprise sub-processors required to deliver critical campus operations:
          </p>
          <div className="divide-y divide-slate-200 dark:divide-white/10 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden text-xs sm:text-sm">
            <div className="p-3.5 bg-slate-100 dark:bg-white/[0.02] flex justify-between items-center font-semibold text-slate-900 dark:text-white">
              <span>Sub-Processor</span>
              <span>Operational Purpose</span>
              <span>Data Transferred</span>
            </div>
            <div className="p-3.5 flex justify-between items-center text-slate-600 dark:text-slate-300">
              <span className="font-medium text-slate-900 dark:text-white">Meta WhatsApp Business API</span>
              <span>Automated fee alerts & notices</span>
              <span>Phone number, fee amount</span>
            </div>
            <div className="p-3.5 flex justify-between items-center text-slate-600 dark:text-slate-300">
              <span className="font-medium text-slate-900 dark:text-white">Razorpay / Stripe</span>
              <span>Encrypted UPI/card fee payments</span>
              <span>Transaction token (no card storage)</span>
            </div>
            <div className="p-3.5 flex justify-between items-center text-slate-600 dark:text-slate-300">
              <span className="font-medium text-slate-900 dark:text-white">Amazon Web Services (AWS India)</span>
              <span>Cloud hosting & disaster recovery</span>
              <span>Encrypted tenant database</span>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "retention-deletion",
      title: "6. Data Retention, Portability & Deletion",
      content: (
        <>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            Schools maintain full ownership of their data. In the event of contract completion or termination:
          </p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
            <li>• <strong>Data Export:</strong> Schools can export complete student databases, fee ledgers, and attendance archives in standard formats (SQL, CSV, Excel) within 30 days.</li>
            <li>• <strong>Certified Erasure:</strong> Upon written request, all active and backup copies of tenant databases are cryptographically purged within 60 days in accordance with DoD 5220.22-M sanitation standards.</li>
          </ul>
        </>
      ),
    },
    {
      id: "dpo-contact",
      title: "7. Data Protection Officer (DPO) & Grievance Redressal",
      content: (
        <div className="p-5 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-slate-700 dark:text-slate-300">
          <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
            Grievance Officer & Data Protection Lead
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
            In compliance with Rule 3(2) of the Information Technology Rules, 2021, and DPDP Act 2023, you may contact our Grievance Officer:
          </p>
          <div className="text-xs space-y-1">
            <div><strong>Email:</strong> <a href="mailto:info.nxteducateai@gmail.com" className="text-brand-500 underline">info.nxteducateai@gmail.com</a></div>
            <div><strong>Response SLA:</strong> Inquiries acknowledged within 24 hours; grievances resolved within 15 business days.</div>
          </div>
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
            <Shield className="w-3.5 h-3.5" />
            DPDP Act 2023 & FERPA Aligned
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Institutional Privacy Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            How NxtEducate AI protects school records, student identity, and parental data across all digital campus touchpoints.
          </p>
          <div className="mt-4 text-xs text-slate-500 dark:text-slate-500">
            Effective Date: October 1, 2026 • Version 2.4
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

        {/* Bottom Navigation between legal pages */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} NxtEducate AI Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition underline">
              Terms of Service
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
