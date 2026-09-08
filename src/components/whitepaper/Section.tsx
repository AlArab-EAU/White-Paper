"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  number: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
  variant?: "default" | "feature" | "dark" | "none";
}

export function Section({
  id,
  number,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  variant = "default",
}: SectionProps) {
  const bg =
    variant === "feature"
      ? "alarab-panel-cyan"
      : variant === "default"
      ? "alarab-panel"
      : "";

  return (
    <section
      id={id}
      className={`relative min-h-screen w-full px-5 sm:px-8 md:px-12 lg:px-20 py-20 md:py-28 flex flex-col justify-center ${className}`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="section-num text-xs sm:text-sm text-alarab-gold/80 tracking-widest">
            {number}
          </span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-alarab-gold/60 to-transparent" />
          {eyebrow && (
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-alarab-muted">
              {eyebrow}
            </span>
          )}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-4"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="text-base sm:text-lg text-alarab-muted max-w-3xl mb-10 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className={bg ? `${bg} rounded-2xl p-6 md:p-10` : ""}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
