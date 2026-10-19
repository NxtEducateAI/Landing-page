"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { demoFormSchema, type DemoFormData } from "@/lib/validations";
import {
  X,
  Sparkles,
  CheckCircle2,
  Loader2,
  Building,
  Mail,
  User,
  Phone,
  MapPin,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [confirmationData, setConfirmationData] = useState<{
    confirmationId: string;
    message: string;
    schoolName: string;
    fullName: string;
  } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      schoolName: "",
      city: "",
      studentCount: "500-2000",
      role: "Principal",
    },
  });

  // Handle ESC key and focus management
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle form submit to /api/demo-request
  const onSubmit = async (data: DemoFormData) => {
    setServerError(null);
    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setConfirmationData({
          confirmationId: result.confirmationId,
          message: result.message,
          schoolName: data.schoolName,
          fullName: data.fullName,
        });
        setSubmissionSuccess(true);
        reset();
      } else {
        setServerError(
          result.message || "Failed to submit demo request. Please check form fields."
        );
      }
    } catch (err) {
      setServerError("Network error occurred. Please try again.");
    }
  };

  const handleModalClose = () => {
    setSubmissionSuccess(false);
    setConfirmationData(null);
    setServerError(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md transition-opacity"
        onClick={handleModalClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={modalRef}
        className="relative w-full max-w-xl rounded-3xl bg-white dark:bg-[#0D1322] border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-2xl shadow-slate-900/20 dark:shadow-black/90 z-10 overflow-hidden my-8 transition-colors"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-72 h-32 bg-brand-500/10 dark:bg-brand-500/20 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleModalClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        >
          <X className="w-5 h-5" />
        </button>

        {!submissionSuccess ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Live 1-on-1 Walkthrough
              </div>
              <h2
                id="modal-title"
                className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight"
              >
                Schedule an Executive School Demo
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1">
                See how NxtEducate AI automates attendance, fees, exams, and CBSE/ICSE compliance for your campus.
              </p>
            </div>

            {serverError && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-300 text-xs">
                {serverError}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Full Name & Official Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
                    Full Name *
                  </label>
                  <input
                    {...register("fullName")}
                    ref={(e) => {
                      register("fullName").ref(e);
                      // @ts-ignore
                      firstInputRef.current = e;
                    }}
                    type="text"
                    placeholder="e.g. Dr. Rajesh Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-500 dark:text-red-400 mt-1 block">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
                    Official Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="principal@dpsdelhi.edu.in"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 dark:text-red-400 mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Phone & School Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
                    Phone / WhatsApp *
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-500 dark:text-red-400 mt-1 block">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
                    School / Institution *
                  </label>
                  <input
                    {...register("schoolName")}
                    type="text"
                    placeholder="e.g. Greenwood International"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                  />
                  {errors.schoolName && (
                    <span className="text-[11px] text-red-500 dark:text-red-400 mt-1 block">
                      {errors.schoolName.message}
                    </span>
                  )}
                </div>
              </div>

              {/* City & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
                    City *
                  </label>
                  <input
                    {...register("city")}
                    type="text"
                    placeholder="e.g. New Delhi / Bengaluru"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                  />
                  {errors.city && (
                    <span className="text-[11px] text-red-500 dark:text-red-400 mt-1 block">
                      {errors.city.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
                    Your Role *
                  </label>
                  <select
                    {...register("role")}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                  >
                    <option value="Principal">Principal / Head of School</option>
                    <option value="Trustee">Trustee / Director / Board Member</option>
                    <option value="IT Head">IT Head / Technology Lead</option>
                    <option value="Admin">School Administrator / Bursar</option>
                  </select>
                  {errors.role && (
                    <span className="text-[11px] text-red-500 dark:text-red-400 mt-1 block">
                      {errors.role.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Student Population Size */}
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
                  Total Enrolled Students *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "< 500 Students", val: "<500" },
                    { label: "500 – 2,000", val: "500-2000" },
                    { label: "2,000+ Students", val: "2000+" },
                  ].map((tier) => (
                    <label
                      key={tier.val}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 cursor-pointer hover:border-brand-500/40 text-xs text-slate-800 dark:text-slate-200 font-medium shadow-sm dark:shadow-none"
                    >
                      <input
                        type="radio"
                        value={tier.val}
                        {...register("studentCount")}
                        className="text-brand-500 focus:ring-brand-500"
                      />
                      <span>{tier.label}</span>
                    </label>
                  ))}
                </div>
                {errors.studentCount && (
                  <span className="text-[11px] text-red-500 dark:text-red-400 mt-1 block">
                    {errors.studentCount.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-500 via-indigo-600 to-emerald-500 hover:from-brand-600 hover:to-emerald-600 shadow-xl shadow-brand-500/25 transition disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Reserving Demo Slot...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm Demo Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center">
                🔒 Protected by 256-bit encryption. Zero spam. We honor strict NDAs for school data.
              </p>
            </form>
          </div>
        ) : (
          /* Instant Success State */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-300 border border-brand-500/30">
                Confirmation ID: {confirmationData?.confirmationId}
              </span>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mt-3">
                Demo Session Requested!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-slate-900 dark:text-white">{confirmationData?.fullName}</strong>. A Senior Solution Architect specializing in K-12 management for{" "}
                <strong className="text-emerald-600 dark:text-emerald-400">{confirmationData?.schoolName}</strong> will call your institution within 24 hours to coordinate your live sandbox demo.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-left text-xs text-slate-700 dark:text-slate-300 space-y-2">
              <div className="font-semibold text-slate-900 dark:text-white">What happens next:</div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Custom demo instance prepared with your school’s student size</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>CBSE / ICSE compliance checklist walkthrough</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Executive Q&A for Trustees & Principals</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleModalClose}
              className="w-full py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-transparent transition"
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
