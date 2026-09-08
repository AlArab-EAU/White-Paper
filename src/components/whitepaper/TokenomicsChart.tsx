"use client";

import { motion } from "framer-motion";

interface Allocation {
  label: string;
  pct: number;
  ala: number;
  color: string;
}

const DATA: Allocation[] = [
  { label: "Ecosystem & Community", pct: 30, ala: 299_700_000, color: "#E5B958" },
  { label: "Liquidity & Market Infrastructure", pct: 20, ala: 199_800_000, color: "#38BDF8" },
  { label: "Public / Community Sale", pct: 15, ala: 149_850_000, color: "#A78BFA" },
  { label: "Technology & Metaverse", pct: 10, ala: 99_900_000, color: "#34D399" },
  { label: "Strategic Partnerships", pct: 8, ala: 79_920_000, color: "#F472B6" },
  { label: "Marketing & Expansion", pct: 7, ala: 69_930_000, color: "#FBBF24" },
  { label: "Treasury / Reserve", pct: 5, ala: 49_950_000, color: "#60A5FA" },
  { label: "Team & Advisors", pct: 5, ala: 49_950_000, color: "#C084FC" },
];

const RADIUS = 110;
const CIRC = 2 * Math.PI * RADIUS;

export function TokenomicsChart() {
  // Pre-compute cumulative offsets (pure, no mutation during render)
  const offsets = DATA.reduce<number[]>((list, d) => {
    const prev = list.length ? list[list.length - 1] : 0;
    list.push(prev + d.pct);
    return list;
  }, []).map((v, i) => (i === 0 ? 0 : DATA.slice(0, i).reduce((s, x) => s + x.pct, 0)));

  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 280 280"
          className="w-full max-w-[360px] aspect-square"
        >
          {/* background ring */}
          <circle
            cx="140"
            cy="140"
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="32"
          />
          {DATA.map((d, i) => {
            const dash = (d.pct / 100) * CIRC;
            const offset = -(offsets[i] / 100) * CIRC;
            return (
              <motion.circle
                key={d.label}
                cx="140"
                cy="140"
                r={RADIUS}
                fill="none"
                stroke={d.color}
                strokeWidth="32"
                strokeDasharray={`${dash} ${CIRC - dash}`}
                strokeDashoffset={offset}
                transform="rotate(-90 140 140)"
                initial={{ opacity: 0, strokeDasharray: `0 ${CIRC}` }}
                whileInView={{ opacity: 1, strokeDasharray: `${dash} ${CIRC - dash}` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
                style={{ filter: `drop-shadow(0 0 8px ${d.color}66)` }}
              />
            );
          })}
          {/* center text */}
          <text
            x="140"
            y="130"
            textAnchor="middle"
            className="fill-alarab-muted"
            style={{ fontSize: 11, letterSpacing: "0.2em" }}
          >
            TOTAL SUPPLY
          </text>
          <text
            x="140"
            y="158"
            textAnchor="middle"
            className="fill-alarab-gold"
            style={{ fontSize: 26, fontWeight: 700 }}
          >
            999M
          </text>
          <text
            x="140"
            y="178"
            textAnchor="middle"
            className="fill-alarab-cyan"
            style={{ fontSize: 12, letterSpacing: "0.15em" }}
          >
            ALA
          </text>
        </svg>
      </div>

      <div className="space-y-2">
        {DATA.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex items-center gap-3 py-2 border-b border-white/[0.04] last:border-0"
          >
            <span
              className="w-3 h-3 rounded-sm shrink-0"
              style={{ backgroundColor: d.color, boxShadow: `0 0 8px ${d.color}80` }}
            />
            <div className="flex-1 min-w-0">
              <div className="text-[13px] text-alarab-text truncate">{d.label}</div>
              <div className="text-[10px] text-alarab-muted font-mono">
                {d.ala.toLocaleString()} ALA
              </div>
            </div>
            <div
              className="text-base font-bold"
              style={{ color: d.color }}
            >
              {d.pct}%
            </div>
          </motion.div>
        ))}
        <div className="flex items-center justify-between pt-3 mt-2 border-t border-alarab-gold/20">
          <span className="text-xs uppercase tracking-widest text-alarab-muted">
            Total
          </span>
          <span className="text-lg font-bold text-gradient-gold">
            999,000,000 ALA
          </span>
        </div>
      </div>
    </div>
  );
}
