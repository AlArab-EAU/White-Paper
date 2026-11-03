"use client";

import { QRCodeSVG } from "qrcode.react";
import { motion } from "framer-motion";
import { ExternalLink, AlertTriangle, ShieldCheck, Rocket } from "lucide-react";
import Image from "next/image";

interface ChainMeta {
  explorerUrl: (a: string) => string;
  explorerName: string;
  color: string;
  glyph: string;
}

interface ContractEntry {
  chain: string;
  chainLabel: string;
  address: string;
  badge: string;
  badgeType: "verified" | "restructuring" | "pre-launch";
}

interface Props {
  contracts: ContractEntry[];
  viewOnLabel: string;
  badge: string;
}

const CHAIN_META: Record<string, ChainMeta> = {
  polygon: {
    explorerUrl: (a) => `https://polygonscan.com/address/${a}`,
    explorerName: "PolygonScan",
    color: "#A78BFA",
    glyph: "⬣",
  },
  bsc: {
    explorerUrl: (a) => `https://bscscan.com/address/${a}`,
    explorerName: "BscScan",
    color: "#FBBF24",
    glyph: "◆",
  },
  ethereum: {
    explorerUrl: (a) => `https://etherscan.io/address/${a}`,
    explorerName: "Etherscan",
    color: "#38BDF8",
    glyph: "◇",
  },
};

export function ContractsBlock({ contracts, viewOnLabel, badge }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {contracts.map((c, i) => {
        const meta = CHAIN_META[c.chain] ?? CHAIN_META.ethereum;
        const explorerUrl = meta.explorerUrl(c.address);
        const isRestructuring = c.badgeType === "restructuring";
        const isPreLaunch = c.badgeType === "pre-launch";

        // Color logic by badgeType
        const badgeColor = isRestructuring
          ? "#F97316" // orange
          : isPreLaunch
          ? "#FBBF24" // gold/amber (Lbank brand)
          : meta.color;

        const BadgeIcon = isRestructuring
          ? AlertTriangle
          : isPreLaunch
          ? Rocket
          : ShieldCheck;

        // For pre-launch (Lbank) cards, hide the BNB/BscScan reference
        const showExplorerName = !isPreLaunch;

        return (
          <motion.div
            key={c.chain}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="alarab-panel rounded-xl p-5 flex flex-col items-center text-center"
            style={{
              borderColor: isRestructuring
                ? `${badgeColor}40`
                : isPreLaunch
                ? `${badgeColor}55`
                : `${meta.color}33`,
              boxShadow: isPreLaunch
                ? `0 0 0 1px ${badgeColor}40, 0 18px 60px -20px ${badgeColor}55`
                : undefined,
            }}
          >
            <div className="w-full flex flex-col gap-3 mb-4 pb-3 border-b border-white/[0.06]">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2 min-w-0 flex-1">
                  <span
                    className="text-xl leading-none shrink-0 mt-0.5"
                    style={{ color: meta.color }}
                  >
                    {meta.glyph}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold leading-tight">
                      {c.chainLabel}
                    </div>
                    {showExplorerName && (
                      <div className="text-[10px] text-alarab-muted mt-0.5 font-mono">
                        {meta.explorerName}
                      </div>
                    )}
                    {isPreLaunch && (
                      <div className="text-[10px] text-alarab-gold/80 mt-0.5 font-mono tracking-widest uppercase">
                        Exchange Listing
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <span
                className="self-start inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.15em] px-2 py-1 rounded-full leading-tight"
                style={{
                  color: badgeColor,
                  backgroundColor: `${badgeColor}1a`,
                  border: `1px solid ${badgeColor}40`,
                }}
              >
                <BadgeIcon className="w-2.5 h-2.5" />
                {c.badge}
              </span>
            </div>

            {/* Body: QR / Warning / Lbank logo */}
            {isRestructuring ? (
              <div
                className="p-3 rounded-lg mb-4 bg-white/[0.04]"
                style={{
                  boxShadow: `0 0 24px ${badgeColor}22`,
                }}
              >
                <div className="w-[120px] h-[120px] flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <AlertTriangle
                      className="w-10 h-10"
                      style={{ color: badgeColor }}
                    />
                    <span
                      className="text-[9px] uppercase tracking-[0.25em]"
                      style={{ color: badgeColor }}
                    >
                      {c.badge}
                    </span>
                  </div>
                </div>
              </div>
            ) : isPreLaunch ? (
              <div
                className="rounded-xl mb-5 flex flex-col items-center justify-center py-8 px-6"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(251,191,36,0.10) 0%, rgba(0,0,0,0) 70%)",
                  border: `1px solid ${badgeColor}33`,
                }}
              >
                {/* Glow halo behind the logo */}
                <div
                  className="absolute inset-x-8 top-8 bottom-8 rounded-full blur-3xl opacity-40 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${badgeColor}55 0%, transparent 70%)`,
                  }}
                />
                {/* Lbank logo — clean, generous horizontal padding */}
                <div className="relative w-[200px] h-[48px] mb-4 z-10">
                  <Image
                    src="/images/lbank-logo-card.png"
                    alt="Lbank Exchange Logo"
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-alarab-gold/90 z-10">
                  Coming Soon
                </div>
              </div>
            ) : (
              <div
                className="p-3 rounded-lg mb-4 bg-white"
                style={{
                  boxShadow: `0 0 24px ${meta.color}33`,
                }}
              >
                <QRCodeSVG
                  value={explorerUrl}
                  size={120}
                  level="M"
                  bgColor="#FFFFFF"
                  fgColor="#040917"
                />
              </div>
            )}

            <div className="w-full">
              {isPreLaunch ? (
                <>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-alarab-gold/80 mb-2">
                    {c.badge}
                  </div>
                  <div className="text-xs text-alarab-muted leading-relaxed">
                    Contract address will be published
                    <br />
                    at the official Lbank listing.
                  </div>
                </>
              ) : (
                <>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-alarab-muted mb-1">
                    Contract Address
                  </div>
                  <div className="text-[11px] font-mono text-alarab-text break-all leading-relaxed">
                    {c.address}
                  </div>
                </>
              )}

              {isRestructuring ? (
                <div
                  className="mt-4 inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md"
                  style={{
                    color: badgeColor,
                    backgroundColor: `${badgeColor}10`,
                    border: `1px solid ${badgeColor}33`,
                  }}
                >
                  <AlertTriangle className="w-3 h-3" />
                  Address frozen during restructuring
                </div>
              ) : isPreLaunch ? (
                <a
                  href="https://www.lbank.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-all hover:scale-105"
                  style={{
                    color: badgeColor,
                    backgroundColor: `${badgeColor}14`,
                    border: `1px solid ${badgeColor}40`,
                  }}
                >
                  <Rocket className="w-3 h-3" />
                  Listing on Lbank
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <a
                  href={explorerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-all hover:scale-105"
                  style={{
                    color: meta.color,
                    backgroundColor: `${meta.color}14`,
                    border: `1px solid ${meta.color}40`,
                  }}
                >
                  {viewOnLabel} {meta.explorerName}
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
