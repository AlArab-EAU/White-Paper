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

/* ============================== 05 — ALARAB METAVERSE ============================== */
export function MetaverseSection() {
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
              The Persistent World
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            AlArab <span className="text-gradient-cyan">Metaverse</span>
          </h2>
          <div className="space-y-5 text-base text-alarab-text/85 leading-relaxed">
            <p>
              The AlArab Metaverse is a persistent, real-time 3D world that runs
              continuously across devices. It is not a single application but a
              network of interoperable virtual districts, each with its own
              architectural identity, economic logic and community.
            </p>
            <p>
              Citizens of the metaverse own a portable digital identity — an avatar,
              a wallet and a profile — that travels with them across districts,
              devices and experiences. Land, assets and interactions are recorded
              on-chain, ensuring transparency and verifiable ownership.
            </p>
            <p>
              The metaverse is designed to host live events, commerce, education,
              cultural exhibitions and creator-built experiences, all governed by a
              unified economic layer anchored in the ALA digital asset.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================== 06 — FOUR DIGITAL DISTRICTS ============================== */
const DISTRICTS = [
  {
    n: "01",
    name: "Golden City",
    tag: "Financial & Corporate District",
    img: "/images/district-golden.png",
    color: "#E5B958",
    desc: "A vertical skyline of glass and gold housing financial institutions, corporate headquarters and on-chain treasury operations. Smart-contract governance, regulated tokenization and institutional DeFi converge in a single, persistent district.",
  },
  {
    n: "02",
    name: "Culture Plaza",
    tag: "Arts, Heritage & Museums",
    img: "/images/district-culture.png",
    color: "#A78BFA",
    desc: "A curatorial district dedicated to Arab heritage, contemporary art and digital museums. Permanent and rotating exhibitions, NFT-native collections and live cultural events connect regional creators with global audiences.",
  },
  {
    n: "03",
    name: "Digital Souk",
    tag: "Marketplace & Commerce",
    img: "/images/district-souk.png",
    color: "#FBBF24",
    desc: "A modern reinterpretation of the traditional Arabian bazaar. Stalls, shops and branded pavilions sell physical and digital goods, with on-chain payments, escrow, identity-verified sellers and creator royalties built into every transaction.",
  },
  {
    n: "04",
    name: "Creative District",
    tag: "Film, Music, Gaming & Digital Art",
    img: "/images/district-creative.png",
    color: "#F472B6",
    desc: "A production and entertainment hub hosting virtual film studios, music venues, gaming arenas and digital art galleries. The Creative District is the engine of AlArab's creator economy and the primary destination for live performances.",
  },
];

export function DistrictsSection() {
  return (
    <Section
      id="districts"
      number="06"
      eyebrow="Virtual Geography"
      title={
        <>
          Four <span className="text-gradient-gold">Digital Districts</span>
        </>
      }
      subtitle="The AlArab Metaverse is structured around four persistent districts, each with a distinct economic logic, cultural identity and community."
      variant="none"
    >
      <div className="grid md:grid-cols-2 gap-5">
        {DISTRICTS.map((d, i) => (
          <motion.div
            key={d.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative rounded-2xl overflow-hidden group"
            style={{
              boxShadow: `0 0 0 1px ${d.color}33, 0 20px 60px -20px ${d.color}40`,
            }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={d.img}
                alt={d.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alarab-bg via-alarab-bg/40 to-transparent" />
              <div
                className="absolute top-4 left-4 text-3xl font-bold font-mono"
                style={{ color: d.color }}
              >
                {d.n}
              </div>
              <div className="absolute bottom-4 left-5 right-5">
                <h3 className="text-2xl font-bold text-white">{d.name}</h3>
                <p
                  className="text-[11px] uppercase tracking-[0.25em] mt-1"
                  style={{ color: d.color }}
                >
                  {d.tag}
                </p>
              </div>
            </div>
            <div className="p-5 bg-alarab-bg/60 backdrop-blur-md">
              <p className="text-sm text-alarab-muted leading-relaxed">{d.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ============================== 07 — PERSISTENT VIRTUAL WORLD ============================== */
const PLATFORMS = [
  { icon: Globe2, name: "Web", desc: "Browser-based access to districts, marketplace, wallet and creator tools." },
  { icon: Smartphone, name: "Mobile", desc: "Native iOS and Android apps with full identity and asset portability." },
  { icon: Headset, name: "VR", desc: "Immersive entry to the metaverse with spatial voice and live events." },
  { icon: Glasses, name: "AR", desc: "Layered reality experiences bridging physical and digital districts." },
];

const FEATURES = [
  { name: "Avatars", desc: "Portable, customizable digital identity" },
  { name: "Spatial Voice", desc: "Real-time positional audio conversations" },
  { name: "Live Events", desc: "Concerts, exhibitions, conferences and AMAs" },
  { name: "Digital Land", desc: "Ownable, buildable parcels in every district" },
  { name: "Creator Spaces", desc: "Sandboxed environments for builders" },
  { name: "Social Experiences", desc: "Communities, guilds and curated gatherings" },
];

export function PersistentWorldSection() {
  return (
    <Section
      id="persistent-world"
      number="07"
      eyebrow="Cross-Platform"
      title={
        <>
          The persistent <span className="text-gradient-cyan">virtual world</span>
        </>
      }
      subtitle="A single continuous world accessible across Web, Mobile, VR and AR — with a portable identity that follows the citizen everywhere."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {PLATFORMS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="alarab-panel-cyan rounded-xl p-5 text-center group"
          >
            <div className="w-12 h-12 mx-auto rounded-lg bg-alarab-cyan/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <p.icon className="w-6 h-6 text-alarab-cyan" />
            </div>
            <div className="text-base font-semibold text-alarab-text mb-1">
              {p.name}
            </div>
            <div className="text-[11px] text-alarab-muted leading-relaxed">
              {p.desc}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {FEATURES.map((f, i) => (
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
const LAYERS = [
  {
    n: "L5",
    name: "Experience",
    color: "#38BDF8",
    items: ["Web", "Mobile", "VR", "AR"],
    desc: "Multi-platform access layer — every citizen enters the ecosystem through their preferred device.",
  },
  {
    n: "L4",
    name: "Application",
    color: "#A78BFA",
    items: ["Marketplace", "Social", "Events"],
    desc: "User-facing services: digital marketplace, social graph and live event infrastructure.",
  },
  {
    n: "L3",
    name: "Data",
    color: "#F472B6",
    items: ["Identity", "Assets", "Profiles"],
    desc: "Portable, self-sovereign data layer — avatars, wallets, asset ownership and reputation.",
  },
  {
    n: "L2",
    name: "Consensus",
    color: "#E5B958",
    items: ["Blockchain", "Smart Contracts"],
    desc: "On-chain settlement and programmable logic — transparent, auditable, multi-chain.",
  },
  {
    n: "L1",
    name: "Infrastructure",
    color: "#34D399",
    items: ["Cloud", "Edge", "GPU"],
    desc: "Cloud, edge compute and GPU clusters powering real-time 3D and AI workloads.",
  },
];

export function ArchitectureSection() {
  return (
    <Section
      id="architecture"
      number="08"
      eyebrow="Five-Layer Stack"
      title={
        <>
          Ecosystem <span className="text-gradient-gold">Architecture</span>
        </>
      }
      subtitle="A five-layer stack that cleanly separates experience, application, data, consensus and infrastructure — enabling every layer to evolve independently."
      variant="none"
    >
      <div className="space-y-2">
        {LAYERS.map((l, i) => (
          <motion.div
            key={l.n}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative grid grid-cols-[auto_1fr_auto] items-center gap-4 p-5 rounded-xl border bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            style={{ borderColor: `${l.color}33` }}
          >
            <div
              className="w-14 h-14 rounded-lg flex flex-col items-center justify-center font-mono"
              style={{
                backgroundColor: `${l.color}14`,
                border: `1px solid ${l.color}40`,
                color: l.color,
              }}
            >
              <span className="text-[9px] uppercase tracking-wider opacity-70">
                Layer
              </span>
              <span className="text-base font-bold">{l.n}</span>
            </div>

            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="text-lg font-semibold text-alarab-text">{l.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {l.items.map((it) => (
                    <span
                      key={it}
                      className="text-[10px] px-2 py-0.5 rounded-full font-mono"
                      style={{
                        color: l.color,
                        backgroundColor: `${l.color}14`,
                        border: `1px solid ${l.color}33`,
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
              style={{ color: l.color, opacity: 0.4 }}
            >
              ↓
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ============================== 09 — DIGITAL ECONOMY ============================== */
export function DigitalEconomySection() {
  return (
    <Section
      id="digital-economy"
      number="09"
      eyebrow="Internal Economy"
      title={
        <>
          The <span className="text-gradient-gold">Digital Economy</span> of AlArab
        </>
      }
      subtitle="A closed-loop economy where value circulates through marketplace activity, wallets, digital assets and internal payments — all anchored in ALA."
      variant="feature"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: ShoppingBag,
            t: "Marketplace",
            d: "Open marketplace for digital assets, experiences, services and creator-built products, with on-chain royalty splits.",
          },
          {
            icon: Wallet,
            t: "Wallet",
            d: "Self-custodial wallet integrated with every district — stores ALA, digital assets and verified identity.",
          },
          {
            icon: Layers,
            t: "Digital Assets",
            d: "Skins, accessories, landplots, experiences, art and collectibles — tokenized and portable across districts.",
          },
          {
            icon: Coins,
            t: "Internal Payments",
            d: "Frictionless, low-cost on-chain payments for goods, services, events and creator tips across the ecosystem.",
          },
        ].map((c, i) => (
          <motion.div
            key={c.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-alarab-bg/40 rounded-xl p-5 border border-alarab-line-cyan"
          >
            <c.icon className="w-7 h-7 text-alarab-cyan mb-3" />
            <h3 className="text-base font-semibold mb-2">{c.t}</h3>
            <p className="text-xs text-alarab-muted leading-relaxed">{c.d}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-alarab-bg/40 border border-white/[0.05]">
        <p className="text-sm text-alarab-text/80 leading-relaxed">
          <span className="text-alarab-gold font-semibold">Flow:</span> Users earn
          ALA by creating, performing, providing services or selling assets → spend
          ALA on experiences, marketplace goods, premium services and digital land →
          creators and infrastructure providers earn back → value recirculates inside
          the ecosystem with full on-chain transparency.
        </p>
      </div>
    </Section>
  );
}

/* ============================== 10 — BLOCKCHAIN & SMART CONTRACTS ============================== */
export function BlockchainSection() {
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
              Trust Layer
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            Blockchain & <span className="text-gradient-gold">Smart Contracts</span>
          </h2>
          <div className="space-y-5 text-base text-alarab-text/85 leading-relaxed">
            <p>
              AlArab uses smart contracts as the trust layer for every economic
              interaction — ownership transfers, marketplace trades, creator
              royalties, event access, governance and identity claims. All contracts
              are deployed on public, auditable blockchains.
            </p>
            <p>
              The ecosystem is multi-chain by design. ALA contracts are deployed and
              verified on Polygon, BNB Smart Chain and Ethereum, giving users the
              flexibility to interact through their preferred network while keeping
              the asset&apos;s identity consistent across chains.
            </p>
            <p>
              Smart contracts govern digital asset minting, marketplace escrow,
              royalty distribution, event ticketing and access control. Every
              transaction is publicly verifiable through the corresponding blockchain
              explorer.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {["Polygon", "BSC", "Ethereum"].map((c) => (
              <div
                key={c}
                className="text-center py-2 px-3 rounded-lg bg-alarab-accent border border-alarab-line"
              >
                <div className="text-xs font-semibold text-alarab-gold">{c}</div>
                <div className="text-[9px] text-alarab-muted mt-0.5">Verified</div>
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
            alt="Blockchain and smart contracts visualization"
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
const TECH_STACK = [
  { icon: Brain, name: "Artificial Intelligence", color: "#A78BFA", desc: "AI-driven NPCs, content moderation, recommendation, translation and creator tooling across the metaverse." },
  { icon: Network, name: "Blockchain", color: "#E5B958", desc: "Multi-chain settlement, smart contracts, verifiable ownership and transparent tokenomics." },
  { icon: Headset, name: "Virtual Reality", color: "#38BDF8", desc: "Immersive 3D districts, spatial voice, live events and avatar-driven social experiences." },
  { icon: Cloud, name: "Cloud Infrastructure", color: "#34D399", desc: "Elastic compute, storage and CDN for real-time multiplayer and asset streaming." },
  { icon: ShieldCheck, name: "Security", color: "#F472B6", desc: "Identity verification, anti-fraud, key management and contract-level access control." },
  { icon: Server, name: "Advanced Computing", color: "#FBBF24", desc: "GPU clusters for rendering, AI inference and physics simulation across districts." },
];

export function AIStackSection() {
  return (
    <Section
      id="ai-stack"
      number="11"
      eyebrow="Technology Stack"
      title={
        <>
          AI + Blockchain + VR + <span className="text-gradient-cyan">Cloud</span>
        </>
      }
      subtitle="Six technology pillars converging into a single programmable ecosystem. Each is independently mature; together they form the operating system of AlArab."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TECH_STACK.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="alarab-panel rounded-xl p-5 hover:bg-white/[0.05] transition-colors group"
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
              style={{
                backgroundColor: `${t.color}14`,
                border: `1px solid ${t.color}33`,
              }}
            >
              <t.icon className="w-6 h-6" style={{ color: t.color }} />
            </div>
            <h3 className="text-base font-semibold mb-2">{t.name}</h3>
            <p className="text-xs text-alarab-muted leading-relaxed">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
