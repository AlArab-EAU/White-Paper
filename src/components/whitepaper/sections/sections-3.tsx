"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Coins,
  Layers,
  Gamepad2,
  Ticket,
  Crown,
  ShoppingBag,
  Palette,
  Music,
  Film,
  Gamepad,
  UtensilsCrossed,
  Cpu,
  Building2,
  Rocket,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Section } from "../Section";
import { TokenomicsChart } from "../TokenomicsChart";
import { useLanguage } from "../i18n/LanguageProvider";

const UTIL_ICONS = [Layers, ShoppingBag, Crown, Gamepad2, Coins, Ticket, Crown, Rocket];
const CREATOR_ICONS = [Palette, Music, Film, Gamepad, Layers, Crown];
const ASSET_ICONS = [Layers, Crown, Layers, Ticket, Palette, Crown];
const VERTICAL_ICONS = [Palette, Music, Film, UtensilsCrossed, Gamepad, Cpu, Building2, Rocket];
const VERTICAL_COLORS = ["#F472B6", "#A78BFA", "#38BDF8", "#FBBF24", "#34D399", "#60A5FA", "#E5B958", "#FB7185"];
const PHASE_ICONS = [CheckCircle2, Clock, ArrowRight, ArrowRight, ArrowRight];
const PHASE_COLORS = ["#34D399", "#E5B958", "#38BDF8", "#A78BFA", "#F472B6"];

/* ============================== 12 — ALA INTRO ============================== */
export function AlaIntroSection() {
  const { t } = useLanguage();
  const a = t.alaIntro;
  return (
    <section
      id="ala-intro"
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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-alarab-line bg-alarab-bg/40 backdrop-blur-md mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-alarab-gold alarab-pulse" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-alarab-muted">
            {a.badge}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter mb-2"
        >
          <span className="text-gradient-gold">{a.name}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-base sm:text-lg text-alarab-cyan/80 tracking-[0.2em] uppercase mb-10"
        >
          {a.role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="alarab-panel rounded-2xl p-8 md:p-12"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-muted mb-3">
            {a.totalLabel}
          </div>
          <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-gradient-gold mb-2">
            {a.total}
          </div>
          <div className="text-base text-alarab-cyan tracking-widest">{a.unit}</div>

          <div className="mt-8 pt-6 border-t border-white/[0.06] text-sm text-alarab-muted leading-relaxed max-w-2xl mx-auto">
            {a.note} <span className="text-alarab-text">{a.notGov}</span> {a.noteEnd}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================== 13 — WHAT IS ALA ============================== */
export function WhatIsAlaSection() {
  const { t } = useLanguage();
  const w = t.whatIsAla;
  return (
    <Section
      id="what-is-ala"
      number="13"
      eyebrow={w.eyebrow}
      title={
        <>
          {w.title.pre} <span className="text-gradient-gold">{w.title.highlight}</span>
        </>
      }
      subtitle={w.subtitle}
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div className="alarab-panel rounded-xl p-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-muted mb-3">
            {w.supplyLabel}
          </div>
          <div className="text-3xl font-bold text-gradient-gold mb-1">{w.supply}</div>
          <div className="text-xs text-alarab-muted">{w.supplySub}</div>

          <div className="mt-6 space-y-3 text-sm">
            {w.rows.map((r) => (
              <div
                key={r.k}
                className="flex justify-between border-b border-white/[0.04] pb-2"
              >
                <span className="text-alarab-muted">{r.k}</span>
                <span className="font-mono text-alarab-text">{r.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="alarab-panel-cyan rounded-xl p-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-muted mb-3">
            {w.chainsLabel}
          </div>
          <div className="space-y-3">
            {w.chainRows.map((row, i) => {
              const colors = ["#A78BFA", "#FBBF24", "#38BDF8"];
              const color = colors[i] ?? "#E5B958";
              return (
                <div
                  key={row.c}
                  className="flex items-center justify-between p-3 rounded-lg bg-alarab-bg/40 border border-white/[0.04]"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-sm font-medium">{row.c}</span>
                  </div>
                  <span className="font-mono text-[11px] text-alarab-muted">{row.a}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 text-[11px] text-alarab-muted leading-relaxed">
            {w.notePrefix}{" "}
            <a
              href="#transparency"
              className="text-alarab-cyan underline underline-offset-2 hover:text-alarab-cyan-soft"
            >
              {w.noteLink}
            </a>{" "}
            {w.noteSuffix}
          </div>
        </div>
      </div>

      <div className="mt-5 p-4 rounded-lg bg-alarab-accent/30 border border-alarab-gold/20 text-sm text-alarab-text/85 leading-relaxed">
        <span className="text-alarab-gold font-semibold">{w.important}</span>{" "}
        {w.importantText}
      </div>
    </Section>
  );
}

/* ============================== 14 — ALA UTILITY ============================== */
export function AlaUtilitySection() {
  const { t } = useLanguage();
  const u = t.alaUtility;
  return (
    <Section
      id="ala-utility"
      number="14"
      eyebrow={u.eyebrow}
      title={
        <>
          {u.title.pre} <span className="text-gradient-gold">{u.title.highlight}</span>
          {u.title.post}
        </>
      }
      subtitle={u.subtitle}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {u.utilities.map((util, i) => {
          const Icon = UTIL_ICONS[i] ?? Coins;
          return (
            <motion.div
              key={util.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="alarab-panel rounded-xl p-4 hover:bg-white/[0.05] transition-colors"
            >
              <Icon className="w-5 h-5 text-alarab-gold mb-2" />
              <div className="text-sm font-semibold mb-1">{util.t}</div>
              <div className="text-[11px] text-alarab-muted leading-relaxed">{util.d}</div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ============================== 15 — TOKENOMICS ============================== */
export function TokenomicsSection() {
  const { t } = useLanguage();
  const tk = t.tokenomics;
  return (
    <Section
      id="tokenomics"
      number="15"
      eyebrow={tk.eyebrow}
      title={
        <>
          {tk.title.pre}
          <span className="text-gradient-gold">{tk.title.highlight}</span>
          {tk.title.post}
        </>
      }
      subtitle={tk.subtitle}
      variant="none"
    >
      <TokenomicsChart
        allocations={tk.allocations}
        totalLabel={tk.chartTotalLabel}
        totalValue={tk.chartTotal}
        unit={tk.chartUnit}
        bottomTotal={tk.total}
        bottomTotalLabel={tk.totalLabel}
      />

      <div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
        <div className="alarab-panel rounded-xl p-5">
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-muted mb-2">
            {tk.designTitle}
          </div>
          <ul className="space-y-2 text-alarab-text/85">
            {tk.designPrinciples.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-alarab-gold">→</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="alarab-panel-cyan rounded-xl p-5">
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-muted mb-2">
            {tk.scheduleTitle}
          </div>
          <div className="space-y-3">
            {tk.schedule.map((r) => (
              <div key={r.l}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-alarab-text/85">{r.l}</span>
                  <span className="text-alarab-muted font-mono">{r.v}</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-alarab-gold to-alarab-cyan"
                    style={{ width: r.w }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ============================== 16 — CREATOR ECONOMY ============================== */
export function CreatorEconomySection() {
  const { t } = useLanguage();
  const c = t.creatorEconomy;
  return (
    <Section
      id="creator-economy"
      number="16"
      eyebrow={c.eyebrow}
      title={
        <>
          {c.title.pre} <span className="text-gradient-gold">{c.title.highlight}</span>
        </>
      }
      subtitle={c.subtitle}
      variant="feature"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {c.creators.map((cr, i) => {
          const Icon = CREATOR_ICONS[i] ?? Palette;
          return (
            <motion.div
              key={cr.t}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-alarab-bg/40 rounded-xl p-5 border border-alarab-line-cyan"
            >
              <Icon className="w-6 h-6 text-alarab-cyan mb-3" />
              <h3 className="text-base font-semibold mb-1">{cr.t}</h3>
              <p className="text-xs text-alarab-muted leading-relaxed">{cr.d}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-alarab-bg/40 border border-white/[0.05]">
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-gold mb-2">
            {c.cultureLabel}
          </div>
          <p className="text-sm text-alarab-text/85 leading-relaxed">{c.cultureText}</p>
        </div>
        <div className="p-5 rounded-xl bg-alarab-bg/40 border border-white/[0.05]">
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-cyan mb-2">
            {c.creativeLabel}
          </div>
          <p className="text-sm text-alarab-text/85 leading-relaxed">{c.creativeText}</p>
        </div>
      </div>
    </Section>
  );
}

/* ============================== 17 — DIGITAL ASSETS ============================== */
export function DigitalAssetsSection() {
  const { t } = useLanguage();
  const d = t.digitalAssets;
  return (
    <section
      id="digital-assets"
      className="relative min-h-screen w-full flex items-center px-5 sm:px-8 md:px-12 lg:px-20 py-20"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square rounded-2xl overflow-hidden alarab-glow-gold order-2 lg:order-1"
        >
          <Image
            src="/images/nft-assets.png"
            alt="AlArab — digital assets"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-alarab-bg via-alarab-bg/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="section-num text-xs text-alarab-gold/80 tracking-widest">
              17
            </span>
            <div className="h-px w-20 bg-gradient-to-r from-alarab-gold/60 to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-alarab-muted">
              {d.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            {d.title.pre}{" "}
            <span className="text-gradient-gold">{d.title.highlight}</span>
            {d.title.post}
          </h2>
          <p className="text-base text-alarab-text/85 leading-relaxed mb-6">{d.p1}</p>

          <div className="grid sm:grid-cols-2 gap-3">
            {d.assets.map((a, i) => {
              const Icon = ASSET_ICONS[i] ?? Layers;
              return (
                <motion.div
                  key={a.t}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="p-3 rounded-lg bg-alarab-panel border border-white/[0.06]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-alarab-gold" />
                    <div className="text-sm font-semibold text-alarab-gold">{a.t}</div>
                  </div>
                  <div className="text-[11px] text-alarab-muted leading-relaxed">
                    {a.d}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================== 18 — EIGHT VERTICALS ============================== */
export function VerticalsSection() {
  const { t } = useLanguage();
  const v = t.verticals;
  return (
    <Section
      id="verticals"
      number="18"
      eyebrow={v.eyebrow}
      title={
        <>
          {v.title.pre} <span className="text-gradient-gold">{v.title.highlight}</span>
        </>
      }
      subtitle={v.subtitle}
      variant="none"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {v.items.map((it, i) => {
          const Icon = VERTICAL_ICONS[i] ?? Cpu;
          const color = VERTICAL_COLORS[i] ?? "#E5B958";
          return (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="aspect-square rounded-xl p-5 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform"
              style={{
                backgroundColor: `${color}0d`,
                border: `1px solid ${color}33`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${color}1a` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <div className="text-sm font-semibold text-alarab-text">{it.name}</div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 p-5 rounded-xl bg-alarab-panel border border-alarab-line">
        <p className="text-sm text-alarab-text/85 leading-relaxed">
          <span className="text-alarab-gold font-semibold">{v.convergenceLabel}:</span>{" "}
          {v.convergence}
        </p>
      </div>
    </Section>
  );
}

/* ============================== 19 — ROADMAP ============================== */
export function RoadmapSection() {
  const { t } = useLanguage();
  const r = t.roadmap;
  return (
    <Section
      id="roadmap"
      number="19"
      eyebrow={r.eyebrow}
      title={
        <>
          {r.title.pre} <span className="text-gradient-gold">{r.title.highlight}</span>
        </>
      }
      subtitle={r.subtitle}
      variant="none"
    >
      <div className="space-y-3">
        {r.phases.map((p, i) => {
          const Icon = PHASE_ICONS[i] ?? Clock;
          const color = PHASE_COLORS[i] ?? "#E5B958";
          return (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative grid grid-cols-[auto_1fr] sm:grid-cols-[auto_auto_1fr] items-start gap-4 p-5 rounded-xl border bg-white/[0.02]"
              style={{ borderColor: `${color}33` }}
            >
              <div
                className="w-14 h-14 rounded-lg flex flex-col items-center justify-center font-mono shrink-0"
                style={{
                  backgroundColor: `${color}14`,
                  border: `1px solid ${color}40`,
                  color,
                }}
              >
                <span className="text-base font-bold">{p.n}</span>
              </div>

              <div className="hidden sm:block min-w-[140px]">
                <Icon className="w-5 h-5 mb-1" style={{ color }} />
                <div
                  className="text-[10px] uppercase tracking-[0.25em] font-semibold"
                  style={{ color }}
                >
                  {p.s}
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-lg font-semibold">{p.t}</h3>
                  <span
                    className="sm:hidden text-[10px] uppercase tracking-[0.25em] font-semibold"
                    style={{ color }}
                  >
                    {p.s}
                  </span>
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-alarab-muted">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span
                        className="mt-1 w-1 h-1 rounded-full shrink-0"
                        style={{ backgroundColor: color }}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
