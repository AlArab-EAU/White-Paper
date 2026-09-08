"use client";

import { motion } from "framer-motion";
import { Handshake, ShieldCheck, AlertTriangle, FileText, Globe2, Sparkles } from "lucide-react";
import { Section } from "../Section";
import { ContractsBlock } from "../ContractsBlock";

/* ============================== 20 — STRATEGIC PARTNERSHIPS ============================== */
const PARTNERS = [
  { name: "GCRM", type: "Strategic Partner", desc: "Global community and relationship management partner supporting AlArab's regional expansion and institutional outreach." },
  { name: "QFSPay", type: "Payments Partner", desc: "Payment infrastructure partner enabling fiat on-ramps, off-ramps and complementary digital payment rails." },
];

const PARTNER_TYPES = [
  { t: "Strategic Alliances", d: "Long-term ecosystem partners co-building districts, experiences or infrastructure." },
  { t: "Technology Partners", d: "Infrastructure, cloud, security and tooling providers powering the AlArab stack." },
  { t: "Creator Partners", d: "Artists, studios and labels anchoring the Creative District and Culture Plaza." },
  { t: "Regional Partners", d: "Organizations enabling on-the-ground adoption across Arab markets." },
];

export function PartnershipsSection() {
  return (
    <Section
      id="partnerships"
      number="20"
      eyebrow="Network"
      title={
        <>
          Strategic <span className="text-gradient-gold">Partnerships</span>
        </>
      }
      subtitle="AlArab is built with — not instead of — the regional ecosystem. Partnerships are classified by type and clearly distinguished from legally verified relationships."
      variant="none"
    >
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {PARTNERS.map((p, i) => (
          <motion.div
            key={p.name}
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
                <div className="text-lg font-bold text-gradient-gold">{p.name}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-alarab-cyan">
                  {p.type}
                </div>
              </div>
            </div>
            <p className="text-sm text-alarab-muted leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {PARTNER_TYPES.map((pt, i) => (
          <motion.div
            key={pt.t}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05]"
          >
            <div className="text-xs font-semibold text-alarab-text mb-1">{pt.t}</div>
            <div className="text-[11px] text-alarab-muted leading-relaxed">
              {pt.d}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-4 rounded-lg bg-alarab-accent/30 border border-alarab-gold/20 text-xs text-alarab-text/85 leading-relaxed">
        <span className="text-alarab-gold font-semibold">Disclaimer:</span> Partner
        names listed here are presented by the AlArab project as strategic alliances.
        They are distinct from legally verified corporate relationships. All official
        integrations are documented through public announcements and on-chain
        evidence where applicable.
      </div>
    </Section>
  );
}

/* ============================== 21 — TRANSPARENCY & CONTRACTS ============================== */
export function TransparencySection() {
  return (
    <Section
      id="transparency"
      number="21"
      eyebrow="Public · Verifiable · Transparent"
      title={
        <>
          Smart <span className="text-gradient-gold">Contracts</span> &
          Transparency
        </>
      }
      subtitle="Every ALA smart contract is deployed on three public blockchains. Addresses are verifiable through official explorers. Scan the QR codes or open the explorer directly."
      variant="none"
    >
      <ContractsBlock />

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {[
          { icon: ShieldCheck, t: "Public", d: "All contracts deployed on public mainnets — no private chains, no obfuscation." },
          { icon: FileText, t: "Verifiable", d: "Source code published and verified on each blockchain explorer." },
          { icon: Globe2, t: "Transparent", d: "Every transaction, holder and balance is publicly auditable in real time." },
        ].map((c) => (
          <div
            key={c.t}
            className="alarab-panel rounded-xl p-5 text-center"
          >
            <c.icon className="w-7 h-7 text-alarab-gold mx-auto mb-3" />
            <div className="text-sm font-semibold mb-1">{c.t}</div>
            <div className="text-[11px] text-alarab-muted leading-relaxed">
              {c.d}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-alarab-accent/30 border border-alarab-gold/20 text-xs text-alarab-text/85 leading-relaxed">
        <span className="text-alarab-gold font-semibold">Note:</span> &quot;Verified&quot;
        on a blockchain explorer means the deployed bytecode matches the published
        source code. It does not constitute an independent security audit. Users
        should always perform their own due diligence before interacting with any
        smart contract.
      </div>
    </Section>
  );
}

/* ============================== 22 — RISK & COMPLIANCE ============================== */
const RISKS = [
  "Digital assets involve risk — their value can be volatile and may decrease.",
  "No guaranteed return — AlArab does not promise any financial yield or profit.",
  "No guarantee of market value — ALA&apos;s market price, if any, is determined by external markets outside AlArab&apos;s control.",
  "No guarantee of external convertibility — liquidity on any specific exchange is not guaranteed.",
  "Ecosystem features may evolve — roadmaps, utilities and integrations may change over time.",
  "Smart-contract risks — bugs, exploits or vulnerabilities may exist despite verification.",
  "Market and liquidity risks — secondary market activity may be limited or illiquid.",
  "Regulatory risks — digital asset regulation varies by jurisdiction and is evolving.",
  "Technology and cybersecurity risks — platform outages, attacks or data loss may occur.",
];

export function RiskSection() {
  return (
    <Section
      id="risk"
      number="22"
      eyebrow="Disclosure"
      title={
        <>
          Risk, Transparency & <span className="text-gradient-gold">Compliance</span>
        </>
      }
      subtitle="AlArab is presented as a digital ecosystem and conceptual project. This section discloses the material risks associated with digital assets and the ecosystem itself."
      variant="feature"
    >
      <div className="grid md:grid-cols-2 gap-3 mb-6">
        {RISKS.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="flex items-start gap-3 p-3 rounded-lg bg-alarab-bg/40 border border-white/[0.05]"
          >
            <AlertTriangle className="w-4 h-4 text-alarab-gold shrink-0 mt-0.5" />
            <span
              className="text-xs text-alarab-text/85 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: r }}
            />
          </motion.div>
        ))}
      </div>

      <div className="p-6 rounded-xl bg-alarab-bg/60 border border-alarab-gold/30">
        <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-gold mb-3">
          Formal Disclaimer
        </div>
        <p className="text-sm text-alarab-text/90 leading-relaxed">
          AlArab is presented as a digital ecosystem and conceptual project.
          References to digital assets or tokens describe current or developing
          ecosystem functionality and do not constitute a guarantee of financial
          performance, market value or external convertibility. ALA is not a
          government-issued currency, security, or regulated financial instrument in
          any jurisdiction. Participants should perform their own due diligence,
          consult licensed advisors where appropriate, and only interact with
          amounts they can afford to lose. This whitepaper is for informational
          purposes only and does not constitute an offer to sell or a solicitation to
          buy any asset.
        </p>
      </div>
    </Section>
  );
}

/* ============================== 23 — CONCLUSION ============================== */
export function ConclusionSection() {
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
            Conclusion
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          The Digital Future of the <span className="text-gradient-gold">Arab World</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg text-alarab-text/85 leading-relaxed max-w-3xl mx-auto mb-8"
        >
          AlArab is not a single product, a token, or a virtual world. It is a
          unified digital ecosystem — a programmable geography where the Arab
          world&apos;s culture, commerce, creativity and community converge into a
          new digital territory. Built on transparent smart contracts, anchored by a
          fixed-supply utility asset, and structured around six pillars and four
          persistent districts, AlArab offers a native alternative to imported
          digital platforms — one that is verifiable, interoperable and culturally
          rooted.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid sm:grid-cols-3 gap-4 mb-10"
        >
          {[
            { k: "999M", v: "ALA Fixed Supply", c: "#E5B958" },
            { k: "3", v: "Public Blockchains", c: "#38BDF8" },
            { k: "4 + 6", v: "Districts & Pillars", c: "#A78BFA" },
          ].map((s) => (
            <div
              key={s.v}
              className="alarab-panel rounded-xl p-5 text-center"
            >
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: s.c }}
              >
                {s.k}
              </div>
              <div className="text-xs text-alarab-muted">{s.v}</div>
            </div>
          ))}
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
            Back to Top
          </a>
          <a
            href="#transparency"
            className="px-6 py-3 rounded-lg border border-alarab-line-cyan text-alarab-cyan font-semibold text-sm hover:bg-alarab-cyan/10 transition-colors"
          >
            View Smart Contracts
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 pt-8 border-t border-alarab-line"
        >
          <div className="text-2xl font-bold text-gradient-gold mb-2">AL ARAB</div>
          <div className="text-xs text-alarab-muted tracking-widest">
            whitepaper.alarab-defi.com · 2026 Edition
          </div>
          <div className="mt-4 text-[10px] text-alarab-muted/60 max-w-2xl mx-auto leading-relaxed">
            This whitepaper is provided for informational purposes only and does not
            constitute financial, legal or investment advice. All ecosystem features
            are subject to ongoing development. Please refer to the Risk &
            Compliance section for full disclosures.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
