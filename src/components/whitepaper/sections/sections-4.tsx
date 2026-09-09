"use client";

import { motion } from "framer-motion";
import {
  Handshake,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Globe2,
  Sparkles,
} from "lucide-react";
import { Section } from "../Section";
import { ContractsBlock } from "../ContractsBlock";
import { useLanguage } from "../i18n/LanguageProvider";

/* ============================== 20 — STRATEGIC PARTNERSHIPS ============================== */
export function PartnershipsSection() {
  const { t } = useLanguage();
  const p = t.partnerships;
  return (
    <Section
      id="partnerships"
      number="20"
      eyebrow={p.eyebrow}
      title={
        <>
          {p.title.pre} <span className="text-gradient-gold">{p.title.highlight}</span>
        </>
      }
      subtitle={p.subtitle}
      variant="none"
    >
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {p.partners.map((partner, i) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="alarab-panel rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-lg bg-alarab-accent flex items-center justify-center">
                <Handshake className="w-6 h-6 text-alarab-gold" />
              </div>
              <div>
                <div className="text-lg font-bold text-gradient-gold">
                  {partner.name}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-alarab-cyan">
                  {partner.type}
                </div>
              </div>
            </div>
            <p className="text-sm text-alarab-muted leading-relaxed">{partner.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {p.types.map((pt, i) => (
          <motion.div
            key={pt.t}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05]"
          >
            <div className="text-xs font-semibold text-alarab-text mb-1">{pt.t}</div>
            <div className="text-[11px] text-alarab-muted leading-relaxed">{pt.d}</div>
          </motion.div>
        ))}
      </div>

      <div className="p-4 rounded-lg bg-alarab-accent/30 border border-alarab-gold/20 text-xs text-alarab-text/85 leading-relaxed">
        <span className="text-alarab-gold font-semibold">{p.disclaimerLabel}:</span>{" "}
        {p.disclaimer}
      </div>
    </Section>
  );
}

/* ============================== 21 — TRANSPARENCY & CONTRACTS ============================== */
const TRANSPARENCY_ICONS = [ShieldCheck, FileText, Globe2];

export function TransparencySection() {
  const { t } = useLanguage();
  const tr = t.transparency;
  return (
    <Section
      id="transparency"
      number="21"
      eyebrow={tr.eyebrow}
      title={
        <>
          {tr.title.pre} <span className="text-gradient-gold">{tr.title.highlight}</span>
          {tr.title.post}
        </>
      }
      subtitle={tr.subtitle}
      variant="none"
    >
      <ContractsBlock
        contracts={tr.contracts}
        viewOnLabel={tr.viewOn}
        badge={tr.badge}
      />

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {tr.values.map((v, i) => {
          const Icon = TRANSPARENCY_ICONS[i] ?? ShieldCheck;
          return (
            <div key={v.t} className="alarab-panel rounded-xl p-5 text-center">
              <Icon className="w-7 h-7 text-alarab-gold mx-auto mb-3" />
              <div className="text-sm font-semibold mb-1">{v.t}</div>
              <div className="text-[11px] text-alarab-muted leading-relaxed">{v.d}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-alarab-accent/30 border border-alarab-gold/20 text-xs text-alarab-text/85 leading-relaxed">
        <span className="text-alarab-gold font-semibold">{tr.noteLabel}:</span> {tr.note}
      </div>
    </Section>
  );
}

/* ============================== 22 — RISK & COMPLIANCE ============================== */
export function RiskSection() {
  const { t } = useLanguage();
  const r = t.risk;
  return (
    <Section
      id="risk"
      number="22"
      eyebrow={r.eyebrow}
      title={
        <>
          {r.title.pre} <span className="text-gradient-gold">{r.title.highlight}</span>
        </>
      }
      subtitle={r.subtitle}
      variant="feature"
    >
      <div className="grid md:grid-cols-2 gap-3 mb-6">
        {r.risks.map((risk, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="flex items-start gap-3 p-3 rounded-lg bg-alarab-bg/40 border border-white/[0.05]"
          >
            <AlertTriangle className="w-4 h-4 text-alarab-gold shrink-0 mt-0.5" />
            <span className="text-xs text-alarab-text/85 leading-relaxed">{risk}</span>
          </motion.div>
        ))}
      </div>

      <div className="p-6 rounded-xl bg-alarab-bg/60 border border-alarab-gold/30">
        <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-gold mb-3">
          {r.disclaimerLabel}
        </div>
        <p className="text-sm text-alarab-text/90 leading-relaxed">{r.disclaimer}</p>
      </div>
    </Section>
  );
}

/* ============================== 23 — CONCLUSION ============================== */
export function ConclusionSection() {
  const { t } = useLanguage();
  const c = t.conclusion;
  return (
    <section
      id="conclusion"
      className="relative min-h-screen w-full flex items-center justify-center px-5 sm:px-8 md:px-12 lg:px-20 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 alarab-bg" />
      <div className="absolute inset-0 alarab-arabesque opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-alarab-line bg-alarab-bg/40 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-3 h-3 text-alarab-gold" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-alarab-muted">
            {c.eyebrow}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          {c.title.pre}{" "}
          <span className="text-gradient-gold">{c.title.highlight}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg text-alarab-text/85 leading-relaxed max-w-3xl mx-auto mb-8"
        >
          {c.p1}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid sm:grid-cols-3 gap-4 mb-10"
        >
          {c.stats.map((s, i) => {
            const colors = ["#E5B958", "#38BDF8", "#A78BFA"];
            return (
              <div key={s.v} className="alarab-panel rounded-xl p-5 text-center">
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: colors[i] }}
                >
                  {s.k}
                </div>
                <div className="text-xs text-alarab-muted">{s.v}</div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href="#cover"
            className="px-6 py-3 rounded-lg bg-alarab-gold text-alarab-bg font-semibold text-sm hover:bg-alarab-gold-soft transition-colors"
          >
            {c.backToTop}
          </a>
          <a
            href="#transparency"
            className="px-6 py-3 rounded-lg border border-alarab-line-cyan text-alarab-cyan font-semibold text-sm hover:bg-alarab-cyan/10 transition-colors"
          >
            {c.viewContracts}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 pt-8 border-t border-alarab-line"
        >
          <div className="text-2xl font-bold text-gradient-gold mb-2">
            {t.meta.siteName}
          </div>
          <div className="text-xs text-alarab-muted tracking-widest">{c.edition}</div>
          <div className="mt-4 text-[10px] text-alarab-muted/60 max-w-2xl mx-auto leading-relaxed">
            {c.disclaimer}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
