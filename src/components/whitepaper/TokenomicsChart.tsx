"use client";

import { motion } from "framer-motion";

interface Allocation {
  label: string;
  pct: number;
  ala: number;
}

interface Props {
  allocations: Allocation[];
  totalLabel: string;
  totalValue: string;
  unit: string;
  bottomTotal: string;
  bottomTotalLabel: string;
}

const COLORS = [
  "#E5B958",
  "#38BDF8",
  "#A78BFA",
  "#34D399",
  "#F472B6",
  "#FBBF24",
  "#60A5FA",
  "#C084FC",
];

const RADIUS = 110;
const CIRC = 2 * Math.PI * RADIUS;

export function TokenomicsChart({
  allocations,
  totalLabel,
  totalValue,
  unit,
  bottomTotal,
  bottomTotalLabel,
}: Props) {
  // Pre-compute cumulative offsets (pure, no mutation during render)
  const offsets = allocations.map((_, i) =>
    allocations.slice(0, i).reduce((s, x) => s + x.pct, 0)
  );

  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 280 280" className="w-full max-w-[360px] aspect-square">
          {/* background ring */}
          <circle
            cx="140"
            cy="140"
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="32"
          />
          {allocations.map((d, i) => {
            const dash = (d.pct / 100) * CIRC;
            const offset = -(offsets[i] / 100) * CIRC;
            const color = COLORS[i % COLORS.length];
            return (
              <motion.circle
                key={d.label}
                cx="140"
                cy="140"
                r={RADIUS}
                fill="none"
                stroke={color}
                strokeWidth="32"
                strokeDasharray={`${dash} ${CIRC - dash}`}
                strokeDashoffset={offset}
                transform="rotate(-90 140 140)"
                initial={{ opacity: 0, strokeDasharray: `0 ${CIRC}` }}
                whileInView={{ opacity: 1, strokeDasharray: `${dash} ${CIRC - dash}` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
                style={{ filter: `drop-shadow(0 0 8px ${color}66)` }}
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
            {totalLabel}
          </text>
          <text
            x="140"
            y="158"
            textAnchor="middle"
            className="fill-alarab-gold"
            style={{ fontSize: 26, fontWeight: 700 }}
          >
            {totalValue}
          </text>
          <text
            x="140"
            y="178"
            textAnchor="middle"
            className="fill-alarab-cyan"
            style={{ fontSize: 12, letterSpacing: "0.15em" }}
          >
            {unit}
          </text>
        </svg>
      </div>

      <div className="space-y-2">
        {allocations.map((d, i) => {
          const color = COLORS[i % COLORS.length];
          return (
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
                style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}80` }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-[13px] text-alarab-text truncate">{d.label}</div>
                <div className="text-[10px] text-alarab-muted font-mono">
                  {d.ala.toLocaleString()} {unit}
                </div>
              </div>
              <div className="text-base font-bold" style={{ color }}>
                {d.pct}%
              </div>
            </motion.div>
          );
        })}
        <div className="flex items-center justify-between pt-3 mt-2 border-t border-alarab-gold/20">
          <span className="text-xs uppercase tracking-widest text-alarab-muted">
            {bottomTotalLabel}
          </span>
          <span className="text-lg font-bold text-gradient-gold">{bottomTotal}</span>
        </div>
      </div>
    </div>
  );
}
