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
  Globe2,
  ChevronDown,
} from "lucide-react";
import { Section } from "../Section";

const PILLARS = [
  { icon: Cpu, name: "Technology", desc: "Blockchain, AI, VR & cloud infrastructure powering a new digital geography." },
  { icon: Sparkles, name: "Entertainment", desc: "Live events, immersive experiences and digital culture for the Arab world." },
  { icon: ShoppingBag, name: "Commerce", desc: "On-chain marketplaces, digital payments and creator-driven trade." },
  { icon: Landmark, name: "Culture", desc: "Heritage, arts and museums reimagined as persistent virtual districts." },
  { icon: Lightbulb, name: "Innovation", desc: "Eight industry verticals converging into one programmable ecosystem." },
  { icon: Users, name: "Community", desc: "A network of creators, builders and citizens shaping the digital future." },
];

/* ============================== 00 — COVER ============================== */
export function CoverSection() {
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
          alt="Futuristic Arabian Gulf megacity at night"
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
            Official Whitepaper · 2026 Edition
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.95]"
        >
          <span className="text-gradient-gold">AL ARAB</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-alarab-text/90 font-light tracking-wide"
        >
          The Digital Future of the Arab World
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-x-3 gap-y-2 text-xs sm:text-sm text-alarab-cyan/80"
        >
          {["Technology", "Culture", "Innovation", "Metaverse", "Digital Economy"].map(
            (tag, i) => (
              <span key={tag} className="flex items-center gap-3">
                {i > 0 && <span className="text-alarab-muted/40">•</span>}
                <span className="tracking-widest uppercase">{tag}</span>
              </span>
            )
          )}
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
            Scroll to begin
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center">
        <div className="text-[10px] text-alarab-muted/60 font-mono tracking-widest">
          whitepaper.alarab-defi.com
        </div>
      </div>
    </section>
  );
}

/* ============================== 01 — CONTENTS ============================== */
const TOC = [
  { n: "01", t: "Executive Summary", id: "executive-summary" },
  { n: "02", t: "Vision & Mission", id: "vision" },
  { n: "03", t: "The AlArab Ecosystem", id: "arab-future" },
  { n: "04", t: "AlArab Metaverse", id: "metaverse" },
  { n: "05", t: "Four Digital Districts", id: "districts" },
  { n: "06", t: "The Persistent Virtual World", id: "persistent-world" },
  { n: "07", t: "Ecosystem Architecture", id: "architecture" },
  { n: "08", t: "Digital Economy", id: "digital-economy" },
  { n: "09", t: "Blockchain & Smart Contracts", id: "blockchain" },
  { n: "10", t: "AI + Blockchain + VR + Cloud", id: "ai-stack" },
  { n: "11", t: "ALA — Digital Asset", id: "ala-intro" },
  { n: "12", t: "Tokenomics", id: "tokenomics" },
  { n: "13", t: "Token Utility", id: "ala-utility" },
  { n: "14", t: "Creator Economy", id: "creator-economy" },
  { n: "15", t: "Digital Assets & NFTs", id: "digital-assets" },
  { n: "16", t: "Eight Industry Verticals", id: "verticals" },
  { n: "17", t: "Roadmap", id: "roadmap" },
  { n: "18", t: "Strategic Partnerships", id: "partnerships" },
  { n: "19", t: "Transparency & Contracts", id: "transparency" },
  { n: "20", t: "Risk & Compliance", id: "risk" },
  { n: "21", t: "Conclusion", id: "conclusion" },
];

export function ContentsSection() {
  return (
    <Section
      id="contents"
      number="01"
      eyebrow="Index"
      title={<span className="text-gradient-duo">Contents</span>}
      subtitle="A 21-chapter journey through the AlArab ecosystem — from vision and metaverse districts to ALA tokenomics, creator economy and transparent smart contracts."
    >
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1">
        {TOC.map((item, i) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className="group flex items-baseline gap-4 py-2.5 border-b border-white/[0.04] hover:border-alarab-gold/30 transition-colors"
          >
            <span className="font-mono text-[11px] text-alarab-gold/70 w-8 shrink-0">
              {item.n}
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
  return (
    <Section
      id="executive-summary"
      number="02"
      eyebrow="Overview"
      title={
        <>
          A unified <span className="text-gradient-gold">digital ecosystem</span>, not
          just a platform
        </>
      }
    >
      <div className="space-y-6 text-base sm:text-lg leading-relaxed text-alarab-text/85">
        <p>
          AlArab is a unified digital ecosystem where technology, culture, commerce,
          entertainment and innovation converge into a new digital geography for the
          Arab world. It is built as a programmable layer that connects avatars,
          digital assets, virtual districts, on-chain payments and creator-driven
          economies under a single, transparent identity.
        </p>
        <p>
          At its core, AlArab is structured around six strategic pillars —
          Technology, Entertainment, Commerce, Culture, Innovation and Community — and
          materialized through four persistent virtual districts: the Golden City,
          Culture Plaza, Digital Souk and Creative District. Together they form a
          continuous, multi-platform world accessible across Web, Mobile, VR and AR.
        </p>
        <p>
          The ecosystem is powered by the ALA digital asset, with a fixed total
          supply of 999,000,000 units. ALA functions as a utility token for digital
          experiences, marketplace activity, the creator economy, metaverse access,
          digital assets, events and premium services. Its distribution is fully
          transparent and verifiable across three public blockchains: Polygon, BNB
          Smart Chain and Ethereum.
        </p>
        <p>
          This whitepaper presents the architecture, economy, technology stack,
          roadmap and risk framework of AlArab. It is intended as an institutional
          reference for partners, developers, creators and community members
          evaluating the project&apos;s scope and direction.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-3 gap-4">
        {[
          { k: "Total Supply", v: "999,000,000", u: "ALA" },
          { k: "Blockchains", v: "3", u: "Polygon · BSC · ETH" },
          { k: "Virtual Districts", v: "4", u: "Persistent 3D" },
        ].map((s) => (
          <div
            key={s.k}
            className="alarab-panel-cyan rounded-xl p-4 text-center"
          >
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
  return (
    <Section
      id="vision"
      number="03"
      eyebrow="Vision & Mission"
      title={
        <>
          A digital <span className="text-gradient-gold">ecosystem</span>, not just a
          platform
        </>
      }
      subtitle="AlArab is built on six strategic pillars that together form the operating system of a new digital geography for the Arab world."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PILLARS.map((p, i) => (
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
                <p.icon className="w-5 h-5 text-alarab-gold" />
              </div>
              <h3 className="text-lg font-semibold text-alarab-text">{p.name}</h3>
            </div>
            <p className="text-sm text-alarab-muted leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="alarab-panel-cyan rounded-xl p-5">
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-cyan mb-2">
            Vision
          </div>
          <p className="text-sm text-alarab-text/85 leading-relaxed">
            To become the reference digital ecosystem for the Arab world — a
            programmable geography where citizens, creators and enterprises converge
            into a persistent, transparent and culturally rooted virtual economy.
          </p>
        </div>
        <div className="alarab-panel rounded-xl p-5">
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-gold mb-2">
            Mission
          </div>
          <p className="text-sm text-alarab-text/85 leading-relaxed">
            To deliver a unified stack — Web, Mobile, VR and AR — that lets any
            creator or business in the region launch digital experiences, assets and
            services on-chain, with verifiable transparency and without surrendering
            cultural identity.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ============================== 04 — THE ARAB DIGITAL FUTURE ============================== */
export function ArabFutureSection() {
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
              The Ecosystem
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            The Arab <span className="text-gradient-gold">Digital Future</span>
          </h2>
          <div className="space-y-5 text-base text-alarab-text/85 leading-relaxed">
            <p>
              The Arab world has historically been a crossroads of trade, science and
              culture. AlArab extends that tradition into the digital era by building
              a shared, programmable geography where the region&apos;s identity is not
              erased by global platforms but encoded into the infrastructure itself.
            </p>
            <p>
              Instead of importing a foreign metaverse, AlArab proposes a native
              digital territory — anchored in Arabic language, heritage and aesthetic
              — and engineered with the same technologies used by leading global
              ecosystems: blockchain, AI, real-time 3D and cloud-native
              infrastructure.
            </p>
            <p>
              The result is a digital future in which citizens, creators and
              enterprises can build, trade and gather across Web, Mobile, VR and AR,
              using a transparent on-chain economy and a verifiable digital identity
              that travels with them across every district.
            </p>
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
            alt="Futuristic Arabian Gulf megacity"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-alarab-bg via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-alarab-cyan mb-1">
              Concept Visual
            </div>
            <div className="text-sm text-alarab-text/90">
              A native digital territory for the Arab world
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
