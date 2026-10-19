"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";

interface FooterProps {
  onOpenDemo: () => void;
}

export function Footer({ onOpenDemo }: FooterProps) {
  return (
    <footer className="bg-slate-100 dark:bg-[#050810] border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 relative overflow-hidden transition-colors" id="contact">
      {/* Pre-Footer High-Conversion CTA Banner */}
      <div className="relative py-16 sm:py-20 border-b border-slate-200 dark:border-white/10 bg-gradient-to-b from-slate-200/40 to-slate-100 dark:from-[#090D18] dark:to-[#050810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Fast 72-Hour Campus Implementation
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to Transform Your School into an Intelligent Campus?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Join 500+ forward-thinking schools that have unified attendance, fees, exams, and parent trust on NxtEducate AI.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white rounded-2xl bg-gradient-to-r from-brand-500 via-indigo-600 to-emerald-500 hover:from-brand-600 hover:to-emerald-600 shadow-xl shadow-brand-500/25 transition flex items-center justify-center gap-2 group"
            >
              <span>Schedule Live School Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+918000456789"
              className="w-full sm:w-auto px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-2xl glass flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-brand-500 dark:text-brand-400" />
              <span>Talk to Admissions Expert</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo-icon.png"
                alt="NxtEducate AI"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="font-display font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                NxtEducate<span className="text-brand-500 dark:text-brand-400">.AI</span>
              </span>
            </Link>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              The autonomous operating system for modern schools and educational trusts. Empowering leadership with predictive analytics, effortless compliance, and delighted parents.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-brand-500/20 transition shadow-sm dark:shadow-none"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/nxteducate_ai/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-brand-500/20 transition shadow-sm dark:shadow-none"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Col */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#ecosystem" className="hover:text-slate-900 dark:hover:text-white transition">
                  Ecosystem Overview
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition">
                  Genetic Timetable Engine
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition">
                  Live Bus Telemetry & GPS
                </a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-slate-900 dark:hover:text-white transition">
                  Principal Executive Cockpit
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-900 dark:hover:text-white transition">
                  FAQ & Clarifications
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Col */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#ecosystem" className="hover:text-slate-900 dark:hover:text-white transition">
                  CBSE / ICSE Schools
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-slate-900 dark:hover:text-white transition">
                  International & IB Campuses
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-slate-900 dark:hover:text-white transition">
                  Multi-Branch Trusts & Groups
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-slate-900 dark:hover:text-white transition">
                  K-12 Preschool Chains
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-slate-900 dark:hover:text-white transition">
                  State Education Boards
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Security */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Compliance
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#security" className="hover:text-slate-900 dark:hover:text-white transition">
                  ISO 27001 Certified
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-slate-900 dark:hover:text-white transition">
                  FERPA Compliance
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-slate-900 dark:hover:text-white transition">
                  DPDP Act 2023 Shield
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-slate-900 dark:hover:text-white transition">
                  Multi-Tenant Isolation
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-slate-900 dark:hover:text-white transition">
                  System Status: 99.99%
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-500 dark:text-brand-400 flex-shrink-0" />
                <span>info.nxteducateai@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} NxtEducate AI Inc. All rights reserved. Built for progressive K-12 institutions.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-700 dark:hover:text-slate-300 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-700 dark:hover:text-slate-300 transition">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-slate-700 dark:hover:text-slate-300 transition">
              Security Disclosure
            </Link>
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
