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

/* ============================== 12 — ALA INTRO ============================== */
export function AlaIntroSection() {
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
            AlArab Digital Ecosystem Asset
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter mb-2"
        >
          <span className="text-gradient-gold">ALA</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-base sm:text-lg text-alarab-cyan/80 tracking-[0.2em] uppercase mb-10"
        >
          AlArab Digital Ecosystem Asset
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="alarab-panel rounded-2xl p-8 md:p-12"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-muted mb-3">
            Total Supply
          </div>
          <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-gradient-gold mb-2">
            999,000,000
          </div>
          <div className="text-base text-alarab-cyan tracking-widest">ALA</div>

          <div className="mt-8 pt-6 border-t border-white/[0.06] text-sm text-alarab-muted leading-relaxed max-w-2xl mx-auto">
            ALA is the digital asset of the AlArab ecosystem. It functions as a
            utility token for accessing digital experiences, marketplace activity,
            creator tools, metaverse interactions and premium services. ALA is{" "}
            <span className="text-alarab-text">not a government-issued currency</span>{" "}
            and does not represent a guarantee of financial return, market value or
            external convertibility.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================== 13 — WHAT IS ALA ============================== */
export function WhatIsAlaSection() {
  return (
    <Section
      id="what-is-ala"
      number="13"
      eyebrow="Asset Specification"
      title={
        <>
          What is <span className="text-gradient-gold">ALA?</span>
        </>
      }
      subtitle="A complete specification of the AlArab digital ecosystem asset — supply, contract, chains and verifiable transparency."
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div className="alarab-panel rounded-xl p-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-muted mb-3">
            Supply
          </div>
          <div className="text-3xl font-bold text-gradient-gold mb-1">
            999,000,000 ALA
          </div>
          <div className="text-xs text-alarab-muted">Fixed · Non-inflatable</div>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between border-b border-white/[0.04] pb-2">
              <span className="text-alarab-muted">Standard</span>
              <span className="font-mono text-alarab-text">ERC-20</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.04] pb-2">
              <span className="text-alarab-muted">Decimals</span>
              <span className="font-mono text-alarab-text">18</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.04] pb-2">
              <span className="text-alarab-muted">Networks</span>
              <span className="font-mono text-alarab-text">3 chains</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.04] pb-2">
              <span className="text-alarab-muted">Status</span>
              <span className="text-alarab-cyan">Verified · Public</span>
            </div>
          </div>
        </div>

        <div className="alarab-panel-cyan rounded-xl p-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-muted mb-3">
            Multi-Chain Deployment
          </div>
          <div className="space-y-3">
            {[
              { c: "Polygon", a: "0xf5c068…914b8", color: "#A78BFA" },
              { c: "BSC", a: "0xbab255…16de4", color: "#FBBF24" },
              { c: "Ethereum", a: "0x936179…8e358", color: "#38BDF8" },
            ].map((row) => (
              <div
                key={row.c}
                className="flex items-center justify-between p-3 rounded-lg bg-alarab-bg/40 border border-white/[0.04]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: row.color }}
                  />
                  <span className="text-sm font-medium">{row.c}</span>
                </div>
                <span className="font-mono text-[11px] text-alarab-muted">
                  {row.a}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-[11px] text-alarab-muted leading-relaxed">
            Full addresses and QR codes are listed in the{" "}
            <a
              href="#transparency"
              className="text-alarab-cyan underline underline-offset-2 hover:text-alarab-cyan-soft"
            >
              Transparency
            </a>{" "}
            section.
          </div>
        </div>
      </div>

      <div className="mt-5 p-4 rounded-lg bg-alarab-accent/30 border border-alarab-gold/20 text-sm text-alarab-text/85 leading-relaxed">
        <span className="text-alarab-gold font-semibold">Important:</span> ALA is
        presented as a digital ecosystem utility asset. References to its
        functionality describe current or developing ecosystem features and do not
        constitute a guarantee of financial performance, market value, or external
        convertibility.
      </div>
    </Section>
  );
}

/* ============================== 14 — ALA UTILITY ============================== */
const UTILITIES = [
  { icon: Layers, t: "Digital Experiences", d: "Access premium experiences, gated districts and exclusive events across the metaverse." },
  { icon: ShoppingBag, t: "Marketplace", d: "Pay for digital assets, services and creator-built products in the Digital Souk." },
  { icon: Crown, t: "Creator Economy", d: "Tip creators, fund projects and split royalties through smart-contract escrow." },
  { icon: Gamepad2, t: "Metaverse Access", d: "Unlock landplots, premium avatars, skins and exclusive district features." },
  { icon: Coins, t: "Digital Assets", d: "Mint, trade and collateralize skins, accessories, art and collectibles." },
  { icon: Ticket, t: "Events", d: "Purchase tickets for live concerts, exhibitions, conferences and AMAs." },
  { icon: Crown, t: "Premium Services", d: "Subscribe to enhanced storage, identity verification and creator tooling." },
  { icon: Rocket, t: "Governance", d: "Participate in ecosystem proposals, district votes and creator treasury decisions." },
];

export function AlaUtilitySection() {
  return (
    <Section
      id="ala-utility"
      number="14"
      eyebrow="Token Utility"
      title={
        <>
          ALA <span className="text-gradient-gold">Utility</span> & Ecosystem Use
        </>
      }
      subtitle="ALA is the connective tissue of the ecosystem. It is used to access, pay, reward and govern across every district and service."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {UTILITIES.map((u, i) => (
          <motion.div
            key={u.t}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="alarab-panel rounded-xl p-4 hover:bg-white/[0.05] transition-colors"
          >
            <u.icon className="w-5 h-5 text-alarab-gold mb-2" />
            <div className="text-sm font-semibold mb-1">{u.t}</div>
            <div className="text-[11px] text-alarab-muted leading-relaxed">
              {u.d}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ============================== 15 — TOKENOMICS ============================== */
export function TokenomicsSection() {
  return (
    <Section
      id="tokenomics"
      number="15"
      eyebrow="Distribution"
      title={
        <>
          <span className="text-gradient-gold">Tokenomics</span> — 999,000,000 ALA
        </>
      }
      subtitle="Transparent, fixed allocation designed to balance ecosystem growth, liquidity, community, technology and long-term sustainability."
      variant="none"
    >
      <TokenomicsChart />

      <div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
        <div className="alarab-panel rounded-xl p-5">
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-muted mb-2">
            Design Principles
          </div>
          <ul className="space-y-2 text-alarab-text/85">
            <li className="flex gap-2">
              <span className="text-alarab-gold">→</span>
              <span>Fixed supply — no inflation mechanism</span>
            </li>
            <li className="flex gap-2">
              <span className="text-alarab-gold">→</span>
              <span>Majority (65%) allocated to community, ecosystem and liquidity</span>
            </li>
            <li className="flex gap-2">
              <span className="text-alarab-gold">→</span>
              <span>Team and advisors locked with multi-year vesting</span>
            </li>
            <li className="flex gap-2">
              <span className="text-alarab-gold">→</span>
              <span>Treasury reserve for ecosystem stability</span>
            </li>
          </ul>
        </div>
        <div className="alarab-panel-cyan rounded-xl p-5">
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-muted mb-2">
            Lock-up Schedule (illustrative)
          </div>
          <div className="space-y-3">
            {[
              { l: "Public Sale", v: "TGE + 0", w: "10%" },
              { l: "Ecosystem & Community", v: "12 mo vesting", w: "30%" },
              { l: "Team & Advisors", v: "12 mo cliff · 36 mo vest", w: "5%" },
              { l: "Treasury", v: "Time-locked", w: "5%" },
            ].map((r) => (
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
const CREATORS = [
  { icon: Palette, t: "Artists", d: "Visual artists minting and selling digital art across districts." },
  { icon: Music, t: "Musicians", d: "Performing live concerts and releasing music as digital assets." },
  { icon: Film, t: "Filmmakers", d: "Producing virtual film premieres and immersive cinema experiences." },
  { icon: Gamepad, t: "Game Developers", d: "Building mini-games and interactive experiences inside districts." },
  { icon: Layers, t: "Designers", d: "Designing avatars, skins, accessories and district architecture." },
  { icon: Crown, t: "Digital Collectors", d: "Curating, trading and exhibiting rare digital collections." },
];

export function CreatorEconomySection() {
  return (
    <Section
      id="creator-economy"
      number="16"
      eyebrow="Creative Engine"
      title={
        <>
          Creators build the <span className="text-gradient-gold">digital world</span>
        </>
      }
      subtitle="The creator economy is the engine of AlArab. Artists, musicians, filmmakers, game developers and designers co-create the world citizens inhabit."
      variant="feature"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CREATORS.map((c, i) => (
          <motion.div
            key={c.t}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="bg-alarab-bg/40 rounded-xl p-5 border border-alarab-line-cyan"
          >
            <c.icon className="w-6 h-6 text-alarab-cyan mb-3" />
            <h3 className="text-base font-semibold mb-1">{c.t}</h3>
            <p className="text-xs text-alarab-muted leading-relaxed">{c.d}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-alarab-bg/40 border border-white/[0.05]">
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-gold mb-2">
            Culture Plaza
          </div>
          <p className="text-sm text-alarab-text/85 leading-relaxed">
            Permanent and rotating exhibitions where artists and museums publish
            NFT-native collections, host vernissages and connect with global
            collectors.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-alarab-bg/40 border border-white/[0.05]">
          <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-cyan mb-2">
            Creative District
          </div>
          <p className="text-sm text-alarab-text/85 leading-relaxed">
            Production hub for film, music, gaming and digital art. Live
            performances, virtual studios and creator-led events with on-chain
            royalty splits.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ============================== 17 — DIGITAL ASSETS ============================== */
const ASSET_TYPES = [
  { t: "Skins", d: "Cosmetic avatar customizations — outfits, animations and effects." },
  { t: "Accessories", d: "Wearable items, gestures, emotes and identity badges." },
  { t: "Landplots", d: "Ownable parcels inside each district — buildable and monetizable." },
  { t: "Experiences", d: "Ticketed events, immersive worlds and limited-access content." },
  { t: "Digital Art", d: "NFT-native artworks displayed in galleries and private collections." },
  { t: "Collectibles", d: "Limited-edition items with verifiable provenance and rarity." },
];

export function DigitalAssetsSection() {
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
            alt="Digital assets in AlArab"
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
              Asset Universe
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            Digital <span className="text-gradient-gold">Assets</span> & NFTs
          </h2>
          <p className="text-base text-alarab-text/85 leading-relaxed mb-6">
            Digital assets in AlArab are not just collectibles — they are functional
            objects that exist inside the metaverse. Every asset is tokenized,
            portable across districts and tradeable on the open marketplace.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {ASSET_TYPES.map((a, i) => (
              <motion.div
                key={a.t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-3 rounded-lg bg-alarab-panel border border-white/[0.06]"
              >
                <div className="text-sm font-semibold text-alarab-gold mb-0.5">
                  {a.t}
                </div>
                <div className="text-[11px] text-alarab-muted leading-relaxed">
                  {a.d}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================== 18 — EIGHT VERTICALS ============================== */
const VERTICALS = [
  { icon: Palette, name: "Fashion", color: "#F472B6" },
  { icon: Music, name: "Music", color: "#A78BFA" },
  { icon: Film, name: "Cinema", color: "#38BDF8" },
  { icon: UtensilsCrossed, name: "Gastronomy", color: "#FBBF24" },
  { icon: Gamepad, name: "Gaming", color: "#34D399" },
  { icon: Cpu, name: "Technology", color: "#60A5FA" },
  { icon: Building2, name: "Companies", color: "#E5B958" },
  { icon: Rocket, name: "Entrepreneurs", color: "#FB7185" },
];

export function VerticalsSection() {
  return (
    <Section
      id="verticals"
      number="18"
      eyebrow="Industry Coverage"
      title={
        <>
          Eight industry <span className="text-gradient-gold">verticals</span>
        </>
      }
      subtitle="AlArab is not a single vertical — it is a programmable substrate for eight converging industries, each with its own district, creators and economic logic."
      variant="none"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {VERTICALS.map((v, i) => (
          <motion.div
            key={v.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="aspect-square rounded-xl p-5 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform"
            style={{
              backgroundColor: `${v.color}0d`,
              border: `1px solid ${v.color}33`,
            }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
              style={{
                backgroundColor: `${v.color}1a`,
              }}
            >
              <v.icon className="w-6 h-6" style={{ color: v.color }} />
            </div>
            <div className="text-sm font-semibold text-alarab-text">{v.name}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-5 rounded-xl bg-alarab-panel border border-alarab-line">
        <p className="text-sm text-alarab-text/85 leading-relaxed">
          <span className="text-alarab-gold font-semibold">Convergence:</span>{" "}
          Verticals are not isolated silos. A musician can release an album in the
          Creative District, collaborate with a fashion house to design virtual
          merchandise, sell it in the Digital Souk and settle payments through ALA —
          all in one persistent, on-chain economy.
        </p>
      </div>
    </Section>
  );
}

/* ============================== 19 — ROADMAP ============================== */
const PHASES = [
  {
    n: "01",
    t: "Foundation",
    s: "Completed",
    color: "#34D399",
    icon: CheckCircle2,
    items: [
      "Brand identity & vision definition",
      "Whitepaper v1 publication",
      "Smart-contract deployment (3 chains)",
      "Core team assembly",
    ],
  },
  {
    n: "02",
    t: "Launch",
    s: "In Progress",
    color: "#E5B958",
    icon: Clock,
    items: [
      "Marketplace beta release",
      "Wallet integration",
      "First creator onboarding wave",
      "Web platform GA",
    ],
  },
  {
    n: "03",
    t: "Expansion",
    s: "Next",
    color: "#38BDF8",
    icon: ArrowRight,
    items: [
      "Mobile apps (iOS / Android)",
      "Four districts open to public",
      "Creator tooling SDK",
      "Strategic partnerships activation",
    ],
  },
  {
    n: "04",
    t: "Full Metaverse",
    s: "Planned",
    color: "#A78BFA",
    icon: ArrowRight,
    items: [
      "VR/AR immersive access",
      "Cross-district live events",
      "Spatial voice & avatars",
      "Landplot economy activation",
    ],
  },
  {
    n: "05",
    t: "Global Ecosystem",
    s: "Planned",
    color: "#F472B6",
    icon: ArrowRight,
    items: [
      "Open developer platform",
      "Governance v2 (on-chain)",
      "Multi-region infrastructure",
      "Cross-chain interoperability",
    ],
  },
];

export function RoadmapSection() {
  return (
    <Section
      id="roadmap"
      number="19"
      eyebrow="Five Phases"
      title={
        <>
          The AlArab <span className="text-gradient-gold">Roadmap</span>
        </>
      }
      subtitle="A five-phase journey from foundation to a fully open global ecosystem. Each phase builds on the previous one and is fully transparent to the community."
      variant="none"
    >
      <div className="space-y-3">
        {PHASES.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative grid grid-cols-[auto_1fr] sm:grid-cols-[auto_auto_1fr] items-start gap-4 p-5 rounded-xl border bg-white/[0.02]"
            style={{ borderColor: `${p.color}33` }}
          >
            <div
              className="w-14 h-14 rounded-lg flex flex-col items-center justify-center font-mono shrink-0"
              style={{
                backgroundColor: `${p.color}14`,
                border: `1px solid ${p.color}40`,
                color: p.color,
              }}
            >
              <span className="text-base font-bold">{p.n}</span>
            </div>

            <div className="hidden sm:block min-w-[140px]">
              <p.icon className="w-5 h-5 mb-1" style={{ color: p.color }} />
              <div
                className="text-[10px] uppercase tracking-[0.25em] font-semibold"
                style={{ color: p.color }}
              >
                {p.s}
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="text-lg font-semibold">{p.t}</h3>
                <span
                  className="sm:hidden text-[10px] uppercase tracking-[0.25em] font-semibold"
                  style={{ color: p.color }}
                >
                  {p.s}
                </span>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-alarab-muted">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span
                      className="mt-1 w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: p.color }}
                    />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
