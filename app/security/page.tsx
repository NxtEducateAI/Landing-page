"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Server,
  AlertTriangle,
  CheckCircle2,
  Mail,
  KeyRound,
  FileCheck2,
} from "lucide-react";

export default function SecurityDisclosurePage() {
  const sections = [
    {
      id: "architecture",
      title: "1. Security Architecture & Zero-Trust Principles",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            NxtEducate AI employs a defense-in-depth, zero-trust architecture built to safeguard mission-critical institutional operations and children&apos;s educational records:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mb-1">
                <Lock className="w-4 h-4 text-brand-500" />
                Cryptographic Isolation
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                AES-256 block encryption for databases, backups, and file assets. TLS 1.3 cryptographic cipher suites enforced for all web, mobile, and API transport.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mb-1">
                <Server className="w-4 h-4 text-emerald-500" />
                Multi-Tenant Logical Partition
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Strict row-level security (RLS) and tenant-bound database connections ensure cross-institution data leakage is structurally impossible.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mb-1">
                <KeyRound className="w-4 h-4 text-indigo-500" />
                Role-Based Access Control (RBAC)
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Least-privilege authorization with signed JSON Web Tokens (JWT). Dual-approval workflows for sensitive actions like fee concessions and report card publishing.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mb-1">
                <FileCheck2 className="w-4 h-4 text-amber-500" />
                Immutable Audit Logging
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Tamper-evident logs record every login, IP address, permission alteration, and data export. Logs are archived to WORM (Write Once, Read Many) cloud storage.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "compliance",
      title: "2. Regulatory Compliance & Standards",
      content: (
        <div className="space-y-3">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Our cloud infrastructure and operational policies align with global and regional cybersecurity standards:
          </p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span><strong>ISO/IEC 27001:2022:</strong> Certified Information Security Management System (ISMS).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span><strong>SOC 2 Type II:</strong> Annual independent audit covering Security, Confidentiality, and Availability trust principles.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span><strong>India DPDP Act 2023 & CERT-In:</strong> Stringent compliance with national cybersecurity reporting guidelines and personal data protection.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span><strong>FERPA & COPPA Aligned:</strong> Full technological controls prohibiting unauthorized exposure or monetization of minor student records.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "vdp-policy",
      title: "3. Vulnerability Disclosure Policy & Safe Harbor",
      content: (
        <>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            NxtEducate AI recognizes the invaluable role ethical security researchers and academic institutions play in keeping our software resilient. We commit to the following <strong>Safe Harbor</strong> principles:
          </p>
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">
            If you conduct vulnerability research in good faith, in adherence with this policy, and without compromising the confidentiality or availability of real student/school data, we consider your research authorized and will not initiate or pursue legal action against you.
          </div>
        </>
      ),
    },
    {
      id: "how-to-report",
      title: "4. How to Submit a Vulnerability Report",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Please report suspected security vulnerabilities directly to our dedicated security engineering team:
          </p>
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-2 text-xs sm:text-sm">
            <div>
              <strong>Primary Security Inbox:</strong>{" "}
              <a href="mailto:security@nxteducate.ai" className="text-brand-500 font-mono font-medium underline">
                security@nxteducate.ai
              </a>
            </div>
            <div>
              <strong>PGP Encryption:</strong> For sensitive reports containing functional exploits or credentials, please encrypt using our security team&apos;s PGP Public Key (Fingerprint: <code className="font-mono text-[11px] text-brand-600 dark:text-brand-400">9D4F 8A21 C762 E091 441B 3320 A1E5 89B2</code>).
            </div>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Please include in your report:</p>
          <ul className="list-disc pl-5 text-xs text-slate-600 dark:text-slate-400 space-y-1">
            <li>Summary and potential severity / impact of the vulnerability.</li>
            <li>Step-by-step reproduction instructions or a benign proof-of-concept (PoC).</li>
            <li>Affected endpoints, parameters, or mobile app version.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "sla-timeline",
      title: "5. Triage & Remediation Timelines",
      content: (
        <div className="divide-y divide-slate-200 dark:divide-white/10 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden text-xs sm:text-sm">
          <div className="p-3.5 bg-slate-100 dark:bg-white/[0.02] flex justify-between items-center font-semibold text-slate-900 dark:text-white">
            <span>Milestone</span>
            <span>Target Response Time</span>
          </div>
          <div className="p-3.5 flex justify-between items-center text-slate-600 dark:text-slate-300">
            <span>Initial Automated Acknowledgement</span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400">&lt; 12 Hours</span>
          </div>
          <div className="p-3.5 flex justify-between items-center text-slate-600 dark:text-slate-300">
            <span>Security Engineering Assessment & Triage</span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400">&lt; 48 Hours</span>
          </div>
          <div className="p-3.5 flex justify-between items-center text-slate-600 dark:text-slate-300">
            <span>Critical Severity Vulnerability Fix & Patch</span>
            <span className="font-mono text-brand-600 dark:text-brand-400">&lt; 7 Business Days</span>
          </div>
          <div className="p-3.5 flex justify-between items-center text-slate-600 dark:text-slate-300">
            <span>Coordinated Public Disclosure / Hall of Fame</span>
            <span className="font-mono text-slate-500">Upon complete patch deployment</span>
          </div>
        </div>
      ),
    },
    {
      id: "prohibited",
      title: "6. Prohibited Testing Activities",
      content: (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-slate-700 dark:text-slate-300 space-y-2 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-semibold text-rose-600 dark:text-rose-400">
            <AlertTriangle className="w-4 h-4" />
            Strictly Prohibited & Disqualifying Actions:
          </div>
          <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
            <li>Denial of Service (DoS / DDoS) attacks or stress testing that degrades platform uptime.</li>
            <li>Social engineering, phishing, or vishing targeting teachers, students, parents, or school administrators.</li>
            <li>Exfiltrating, downloading, or modifying actual student academic records or parent contact data.</li>
            <li>Physical attacks on school premises, campus biometric devices, or transport GPS hardware.</li>
          </ul>
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
            <ShieldCheck className="w-3.5 h-3.5" />
            ISO 27001 & SOC-2 Compliant Security
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Security Disclosure & Trust
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our architectural defenses, compliance certifications, and coordinated vulnerability disclosure program.
          </p>
          <div className="mt-4 text-xs text-slate-500 dark:text-slate-500">
            Security Team SLA: 24h Triage • Direct Contact: security@nxteducate.ai
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
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
