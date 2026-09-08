"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cpu,
  Sparkles,
  ShoppingBag,
  Landmark,
  Lightbulb,
  Users,
  ChevronDown,
} from "lucide-react";
import { Section } from "../Section";
import { useLanguage } from "../i18n/LanguageProvider";

const PILLAR_ICONS = [Cpu, Sparkles, ShoppingBag, Landmark, Lightbulb, Users];

/* ============================== 00 — COVER ============================== */
export function CoverSection() {
  const { t } = useLanguage();
  return (
    <section
      id="cover"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 alarab-bg" />
      <div className="absolute inset-0 alarab-grid opacity-40" />
      <div className="absolute inset-0 alarab-arabesque opacity-60" />

      {/* Hero image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-city.png"
          alt="AlArab — futuristic Arabian Gulf megacity at night"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-alarab-bg/60 via-alarab-bg/40 to-alarab-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-alarab-bg via-transparent to-alarab-bg" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-alarab-line bg-alarab-bg/40 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-alarab-gold alarab-pulse" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-alarab-muted">
            {t.meta.whitepaperBadge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.95]"
        >
          <span className="text-gradient-gold">{t.cover.title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-alarab-text/90 font-light tracking-wide"
        >
          {t.cover.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-x-3 gap-y-2 text-xs sm:text-sm text-alarab-cyan/80"
        >
          {t.cover.tags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-3">
              {i > 0 && <span className="text-alarab-muted/40">•</span>}
              <span className="tracking-widest uppercase">{tag}</span>
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-col items-center"
        >
          <a
            href="#contents"
            className="text-alarab-muted hover:text-alarab-gold transition-colors flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]"
          >
            {t.meta.scrollBegin}
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center">
        <div className="text-[10px] text-alarab-muted/60 font-mono tracking-widest">
          {t.meta.domain}
        </div>
      </div>
    </section>
  );
}

/* ============================== 01 — CONTENTS ============================== */
export function ContentsSection() {
  const { t } = useLanguage();
  return (
    <Section
      id="contents"
      number="01"
      eyebrow={t.contents.eyebrow}
      title={<span className="text-gradient-duo">{t.contents.title}</span>}
      subtitle={t.contents.subtitle}
    >
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1">
        {t.contents.items.map((item, i) => (
          <motion.a
            key={item.num}
            href={`#executive-summary`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className="group flex items-baseline gap-4 py-2.5 border-b border-white/[0.04] hover:border-alarab-gold/30 transition-colors"
          >
            <span className="font-mono text-[11px] text-alarab-gold/70 w-8 shrink-0">
              {item.num}
            </span>
            <span className="text-sm text-alarab-text/90 group-hover:text-alarab-gold transition-colors flex-1">
              {item.t}
            </span>
            <span className="text-alarab-muted/40 group-hover:text-alarab-gold transition-colors text-xs">
              →
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

/* ============================== 02 — EXECUTIVE SUMMARY ============================== */
export function ExecutiveSummarySection() {
  const { t } = useLanguage();
  const e = t.executive;
  return (
    <Section
      id="executive-summary"
      number="02"
      eyebrow={e.eyebrow}
      title={
        <>
          {e.title.pre}{" "}
          <span className="text-gradient-gold">{e.title.highlight}</span>
          {e.title.post}
        </>
      }
    >
      <div className="space-y-6 text-base sm:text-lg leading-relaxed text-alarab-text/85">
        <p>{e.p1}</p>
        <p>{e.p2}</p>
        <p>{e.p3}</p>
        <p>{e.p4}</p>
      </div>

      <div className="mt-10 grid sm:grid-cols-3 gap-4">
        {e.stats.map((s) => (
          <div key={s.k} className="alarab-panel-cyan rounded-xl p-4 text-center">
            <div className="text-[10px] uppercase tracking-widest text-alarab-muted mb-1">
              {s.k}
            </div>
            <div className="text-2xl font-bold text-gradient-cyan">{s.v}</div>
            <div className="text-[10px] text-alarab-muted mt-1">{s.u}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ============================== 03 — VISION & MISSION ============================== */
export function VisionSection() {
  const { t } = useLanguage();
  const v = t.vision;
  return (
    <Section
      id="vision"
      number="03"
      eyebrow={v.eyebrow}
      title={
        <>
          {v.title.pre} <span className="text-gradient-gold">{v.title.highlight}</span>
          {v.title.post}
        </>
      }
      subtitle={v.subtitle}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {v.pillars.map((p, i) => {
          const Icon = PILLAR_ICONS[i] ?? Cpu;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="alarab-panel rounded-xl p-5 hover:alarab-glow-gold transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-alarab-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-alarab-gold" />
                </div>
                <h3 className="text-lg font-semibold text-alarab-text">{p.name}</h3>
              </div>
              <p className="text-sm text-alarab-muted leading-relaxed">{p.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="alarab-panel-cyan rounded-xl p-5">
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-cyan mb-2">
            {v.visionLabel}
          </div>
          <p className="text-sm text-alarab-text/85 leading-relaxed">{v.visionText}</p>
        </div>
        <div className="alarab-panel rounded-xl p-5">
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-gold mb-2">
            {v.missionLabel}
          </div>
          <p className="text-sm text-alarab-text/85 leading-relaxed">{v.missionText}</p>
        </div>
      </div>
    </Section>
  );
}

/* ============================== 04 — THE ARAB DIGITAL FUTURE ============================== */
export function ArabFutureSection() {
  const { t } = useLanguage();
  const a = t.arabFuture;
  return (
    <section
      id="arab-future"
      className="relative min-h-screen w-full flex items-center px-5 sm:px-8 md:px-12 lg:px-20 py-20"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="section-num text-xs text-alarab-gold/80 tracking-widest">
              04
            </span>
            <div className="h-px w-20 bg-gradient-to-r from-alarab-gold/60 to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-alarab-muted">
              {a.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            {a.title.pre}{" "}
            <span className="text-gradient-gold">{a.title.highlight}</span>
          </h2>
          <div className="space-y-5 text-base text-alarab-text/85 leading-relaxed">
            <p>{a.p1}</p>
            <p>{a.p2}</p>
            <p>{a.p3}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] sm:aspect-square rounded-2xl overflow-hidden alarab-glow-gold"
        >
          <Image
            src="/images/hero-city.png"
            alt="AlArab — futuristic Arabian Gulf megacity"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-alarab-bg via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-alarab-cyan mb-1">
              {a.visualLabel}
            </div>
            <div className="text-sm text-alarab-text/90">{a.visualCaption}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
