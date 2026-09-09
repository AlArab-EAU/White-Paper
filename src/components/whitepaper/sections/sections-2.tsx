"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe2,
  Smartphone,
  Headset,
  Glasses,
  Layers,
  Network,
  Wallet,
  ShoppingBag,
  Coins,
  Cpu,
  Brain,
  Cloud,
  ShieldCheck,
  Server,
} from "lucide-react";
import { Section } from "../Section";
import { useLanguage } from "../i18n/LanguageProvider";

const PLATFORM_ICONS = [Globe2, Smartphone, Headset, Glasses];
const TECH_ICONS = [Brain, Network, Headset, Cloud, ShieldCheck, Server];

/* ============================== 05 — ALARAB METAVERSE ============================== */
export function MetaverseSection() {
  const { t } = useLanguage();
  const m = t.metaverse;
  return (
    <section
      id="metaverse"
      className="relative min-h-screen w-full flex items-center px-5 sm:px-8 md:px-12 lg:px-20 py-20"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] sm:aspect-square rounded-2xl overflow-hidden alarab-glow-cyan order-2 lg:order-1"
        >
          <Image
            src="/images/metaverse-vr.png"
            alt="AlArab Metaverse — VR experience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-alarab-bg via-alarab-bg/30 to-transparent" />
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
              05
            </span>
            <div className="h-px w-20 bg-gradient-to-r from-alarab-gold/60 to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-alarab-muted">
              {m.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            {m.title.pre} <span className="text-gradient-cyan">{m.title.highlight}</span>
          </h2>
          <div className="space-y-5 text-base text-alarab-text/85 leading-relaxed">
            <p>{m.p1}</p>
            <p>{m.p2}</p>
            <p>{m.p3}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================== 06 — FOUR DIGITAL DISTRICTS ============================== */
const DISTRICT_IMAGES = [
  "/images/district-golden.png",
  "/images/district-culture.png",
  "/images/district-souk.png",
  "/images/district-creative.png",
];
const DISTRICT_COLORS = ["#E5B958", "#A78BFA", "#FBBF24", "#F472B6"];

export function DistrictsSection() {
  const { t } = useLanguage();
  const d = t.districts;
  return (
    <Section
      id="districts"
      number="06"
      eyebrow={d.eyebrow}
      title={
        <>
          {d.title.pre} <span className="text-gradient-gold">{d.title.highlight}</span>
        </>
      }
      subtitle={d.subtitle}
      variant="none"
    >
      <div className="grid md:grid-cols-2 gap-5">
        {d.items.map((item, i) => {
          const color = DISTRICT_COLORS[i];
          return (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden group"
              style={{
                boxShadow: `0 0 0 1px ${color}33, 0 20px 60px -20px ${color}40`,
              }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={DISTRICT_IMAGES[i]}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-alarab-bg via-alarab-bg/40 to-transparent" />
                <div
                  className="absolute top-4 left-4 text-3xl font-bold font-mono"
                  style={{ color }}
                >
                  {item.n}
                </div>
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                  <p
                    className="text-[11px] uppercase tracking-[0.25em] mt-1"
                    style={{ color }}
                  >
                    {item.tag}
                  </p>
                </div>
              </div>
              <div className="p-5 bg-alarab-bg/60 backdrop-blur-md">
                <p className="text-sm text-alarab-muted leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ============================== 07 — PERSISTENT VIRTUAL WORLD ============================== */
export function PersistentWorldSection() {
  const { t } = useLanguage();
  const p = t.persistentWorld;
  return (
    <Section
      id="persistent-world"
      number="07"
      eyebrow={p.eyebrow}
      title={
        <>
          {p.title.pre} <span className="text-gradient-cyan">{p.title.highlight}</span>
        </>
      }
      subtitle={p.subtitle}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {p.platforms.map((pl, i) => {
          const Icon = PLATFORM_ICONS[i] ?? Globe2;
          return (
            <motion.div
              key={pl.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="alarab-panel-cyan rounded-xl p-5 text-center group"
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-alarab-cyan/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-alarab-cyan" />
              </div>
              <div className="text-base font-semibold text-alarab-text mb-1">
                {pl.name}
              </div>
              <div className="text-[11px] text-alarab-muted leading-relaxed">
                {pl.desc}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {p.features.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-center gap-3 p-3 rounded-lg border border-white/[0.06] bg-white/[0.02]"
          >
            <div className="w-2 h-2 rounded-full bg-alarab-gold alarab-pulse shrink-0" />
            <div>
              <div className="text-sm font-medium text-alarab-text">{f.name}</div>
              <div className="text-[11px] text-alarab-muted">{f.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ============================== 08 — ECOSYSTEM ARCHITECTURE ============================== */
const LAYER_COLORS = ["#38BDF8", "#A78BFA", "#F472B6", "#E5B958", "#34D399"];

export function ArchitectureSection() {
  const { t } = useLanguage();
  const a = t.architecture;
  return (
    <Section
      id="architecture"
      number="08"
      eyebrow={a.eyebrow}
      title={
        <>
          {a.title.pre} <span className="text-gradient-gold">{a.title.highlight}</span>
        </>
      }
      subtitle={a.subtitle}
      variant="none"
    >
      <div className="space-y-2">
        {a.layers.map((l, i) => {
          const color = LAYER_COLORS[i];
          return (
            <motion.div
              key={l.layer}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative grid grid-cols-[auto_1fr_auto] items-center gap-4 p-5 rounded-xl border bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              style={{ borderColor: `${color}33` }}
            >
              <div
                className="w-14 h-14 rounded-lg flex flex-col items-center justify-center font-mono"
                style={{
                  backgroundColor: `${color}14`,
                  border: `1px solid ${color}40`,
                  color,
                }}
              >
                <span className="text-[9px] uppercase tracking-wider opacity-70">
                  Layer
                </span>
                <span className="text-base font-bold">{l.layer}</span>
              </div>

              <div>
                <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                  <h3 className="text-lg font-semibold text-alarab-text">{l.name}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {l.items.map((it) => (
                      <span
                        key={it}
                        className="text-[10px] px-2 py-0.5 rounded-full font-mono"
                        style={{
                          color,
                          backgroundColor: `${color}14`,
                          border: `1px solid ${color}33`,
                        }}
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-alarab-muted leading-relaxed">{l.desc}</p>
              </div>

              <div
                className="hidden sm:block text-2xl"
                style={{ color, opacity: 0.4 }}
              >
                ↓
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ============================== 09 — DIGITAL ECONOMY ============================== */
const ECON_ICONS = [ShoppingBag, Wallet, Layers, Coins];

export function DigitalEconomySection() {
  const { t } = useLanguage();
  const e = t.digitalEconomy;
  return (
    <Section
      id="digital-economy"
      number="09"
      eyebrow={e.eyebrow}
      title={
        <>
          {e.title.pre}{" "}
          <span className="text-gradient-gold">{e.title.highlight}</span>
          {e.title.post}
        </>
      }
      subtitle={e.subtitle}
      variant="feature"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {e.cards.map((c, i) => {
          const Icon = ECON_ICONS[i] ?? ShoppingBag;
          return (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-alarab-bg/40 rounded-xl p-5 border border-alarab-line-cyan"
            >
              <Icon className="w-7 h-7 text-alarab-cyan mb-3" />
              <h3 className="text-base font-semibold mb-2">{c.t}</h3>
              <p className="text-xs text-alarab-muted leading-relaxed">{c.d}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-alarab-bg/40 border border-white/[0.05]">
        <p className="text-sm text-alarab-text/80 leading-relaxed">
          <span className="text-alarab-gold font-semibold">{e.flowLabel}:</span>{" "}
          {e.flow}
        </p>
      </div>
    </Section>
  );
}

/* ============================== 10 — BLOCKCHAIN & SMART CONTRACTS ============================== */
export function BlockchainSection() {
  const { t } = useLanguage();
  const b = t.blockchain;
  return (
    <section
      id="blockchain"
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
              10
            </span>
            <div className="h-px w-20 bg-gradient-to-r from-alarab-gold/60 to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-alarab-muted">
              {b.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            {b.title.pre}{" "}
            <span className="text-gradient-gold">{b.title.highlight}</span>
          </h2>
          <div className="space-y-5 text-base text-alarab-text/85 leading-relaxed">
            <p>{b.p1}</p>
            <p>{b.p2}</p>
            <p>{b.p3}</p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {b.chains.map((c) => (
              <div
                key={c.name}
                className="text-center py-2 px-3 rounded-lg bg-alarab-accent border border-alarab-line"
              >
                <div className="text-xs font-semibold text-alarab-gold">{c.name}</div>
                <div className="text-[9px] text-alarab-muted mt-0.5">{c.status}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square rounded-2xl overflow-hidden alarab-glow-gold"
        >
          <Image
            src="/images/defi-network.png"
            alt="AlArab Blockchain and smart contracts visualization"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-alarab-bg via-alarab-bg/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

/* ============================== 11 — AI + BLOCKCHAIN + VR + CLOUD ============================== */
const TECH_COLORS = ["#A78BFA", "#E5B958", "#38BDF8", "#34D399", "#F472B6", "#FBBF24"];

export function AIStackSection() {
  const { t } = useLanguage();
  const a = t.aiStack;
  return (
    <Section
      id="ai-stack"
      number="11"
      eyebrow={a.eyebrow}
      title={
        <>
          {a.title.pre} <span className="text-gradient-cyan">{a.title.highlight}</span>
        </>
      }
      subtitle={a.subtitle}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {a.stack.map((tech, i) => {
          const Icon = TECH_ICONS[i] ?? Cpu;
          const color = TECH_COLORS[i] ?? "#E5B958";
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="alarab-panel rounded-xl p-5 hover:bg-white/[0.05] transition-colors group"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                style={{
                  backgroundColor: `${color}14`,
                  border: `1px solid ${color}33`,
                }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <h3 className="text-base font-semibold mb-2">{tech.name}</h3>
              <p className="text-xs text-alarab-muted leading-relaxed">{tech.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
