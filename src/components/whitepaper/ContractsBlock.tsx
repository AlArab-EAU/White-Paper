"use client";

import { QRCodeSVG } from "qrcode.react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ContractInfo {
  chain: string;
  chainLabel: string;
  address: string;
  explorerUrl: string;
  explorerName: string;
  color: string;
  glyph: string;
  viewOnLabel: string;
  badge: string;
}

interface Props {
  contracts: {
    chain: string;
    chainLabel: string;
    address: string;
  }[];
  viewOnLabel: string;
  badge: string;
}

const CHAIN_META: Record<
  string,
  { explorerUrl: (a: string) => string; explorerName: string; color: string; glyph: string }
> = {
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
        return (
          <motion.div
            key={c.chain}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="alarab-panel rounded-xl p-5 flex flex-col items-center text-center"
          >
            <div className="w-full flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="text-xl leading-none" style={{ color: meta.color }}>
                  {meta.glyph}
                </span>
                <span className="text-sm font-semibold">{c.chainLabel}</span>
              </div>
              <span
                className="text-[9px] uppercase tracking-[0.2em] px-2 py-1 rounded-full"
                style={{
                  color: meta.color,
                  backgroundColor: `${meta.color}1a`,
                  border: `1px solid ${meta.color}33`,
                }}
              >
                {badge}
              </span>
            </div>

            <div
              className="p-3 rounded-lg bg-white mb-4"
              style={{ boxShadow: `0 0 24px ${meta.color}33` }}
            >
              <QRCodeSVG
                value={explorerUrl}
                size={120}
                level="M"
                bgColor="#FFFFFF"
                fgColor="#040917"
              />
            </div>

            <div className="w-full">
              <div className="text-[9px] uppercase tracking-[0.2em] text-alarab-muted mb-1">
                Contract Address
              </div>
              <div className="text-[11px] font-mono text-alarab-text break-all leading-relaxed">
                {c.address}
              </div>
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
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
