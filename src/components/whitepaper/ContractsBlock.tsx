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
}

const CONTRACTS: ContractInfo[] = [
  {
    chain: "polygon",
    chainLabel: "Polygon PoS",
    address: "0xf5c068f28ebf91b22e52c2ecd230621879e914b8",
    explorerUrl: "https://polygonscan.com/address/0xf5c068f28ebf91b22e52c2ecd230621879e914b8",
    explorerName: "PolygonScan",
    color: "#A78BFA",
    glyph: "⬣",
  },
  {
    chain: "bsc",
    chainLabel: "BNB Smart Chain",
    address: "0xbab2556a4db42918a2c833eb2b70fedaf7016de4",
    explorerUrl: "https://bscscan.com/address/0xbab2556a4db42918a2c833eb2b70fedaf7016de4",
    explorerName: "BscScan",
    color: "#FBBF24",
    glyph: "◆",
  },
  {
    chain: "ethereum",
    chainLabel: "Ethereum",
    address: "0x93617904A0A15063B54bd14cC595AA10f2A8e358",
    explorerUrl: "https://etherscan.io/address/0x93617904A0A15063B54bd14cC595AA10f2A8e358",
    explorerName: "Etherscan",
    color: "#38BDF8",
    glyph: "◇",
  },
];

export function ContractsBlock() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {CONTRACTS.map((c, i) => {
        const shortAddr = `${c.address.slice(0, 6)}…${c.address.slice(-6)}`;
        return (
          <motion.div
            key={c.chain}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="alarab-panel rounded-xl p-5 flex flex-col items-center text-center"
          >
            <div
              className="w-full flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]"
            >
              <div className="flex items-center gap-2">
                <span
                  className="text-xl leading-none"
                  style={{ color: c.color }}
                >
                  {c.glyph}
                </span>
                <span className="text-sm font-semibold">{c.chainLabel}</span>
              </div>
              <span
                className="text-[9px] uppercase tracking-[0.2em] px-2 py-1 rounded-full"
                style={{
                  color: c.color,
                  backgroundColor: `${c.color}1a`,
                  border: `1px solid ${c.color}33`,
                }}
              >
                Verified
              </span>
            </div>

            <div
              className="p-3 rounded-lg bg-white mb-4"
              style={{ boxShadow: `0 0 24px ${c.color}33` }}
            >
              <QRCodeSVG
                value={c.explorerUrl}
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
                href={c.explorerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-all hover:scale-105"
                style={{
                  color: c.color,
                  backgroundColor: `${c.color}14`,
                  border: `1px solid ${c.color}40`,
                }}
              >
                View on {c.explorerName}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
