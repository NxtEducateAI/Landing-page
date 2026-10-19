"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Menu, X, ArrowRight, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onOpenDemo: () => void;
}

export function Navbar({ onOpenDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Synchronize initial theme state
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("nxt-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("nxt-theme", "light");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Features", href: "#features" },
    { label: "Dashboard Preview", href: "#dashboard" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 dark:bg-[#070B14]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 py-3 shadow-xl shadow-slate-900/5 dark:shadow-black/30"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1"
            >
              <div className="relative w-9 h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo-icon.png"
                  alt="NxtEducate AI Logo"
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain"
                  priority
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                  NxtEducate<span className="text-brand-500 dark:text-brand-400">.AI</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  AI OS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 bg-white/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-sm dark:shadow-none">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-full"
                >
                  {link.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-gradient-to-r from-brand-500 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              ))}
            </div>

            {/* Desktop Action Buttons + Theme Toggle */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
                title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>

              <button
                type="button"
                onClick={onOpenDemo}
                className="relative group px-4 py-2 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-brand-500 via-indigo-600 to-emerald-500 hover:from-brand-600 hover:to-emerald-600 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition duration-200 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10"
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>
              <button
                type="button"
                onClick={onOpenDemo}
                className="px-3 py-1.5 text-xs font-semibold text-white rounded-lg bg-brand-500 shadow-md shadow-brand-500/20"
              >
                Demo
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white/95 dark:bg-[#070B14]/95 backdrop-blur-xl animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-white/10">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <Image
                src="/logo-icon.png"
                alt="NxtEducate AI"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                NxtEducate.AI
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10"
              >
                {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex-1 px-6 py-8 flex flex-col gap-4 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white py-2 border-b border-slate-100 dark:border-white/5"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-emerald-500 rounded-xl shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
