"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

interface NavItem {
  id: string;
  num: string;
  label: string;
  group?: string;
}

const NAV: NavItem[] = [
  { id: "cover", num: "00", label: "Cover", group: "Front" },
  { id: "contents", num: "01", label: "Contents", group: "Front" },
  { id: "executive-summary", num: "02", label: "Executive Summary", group: "Front" },
  { id: "vision", num: "03", label: "Vision & Mission", group: "Ecosystem" },
  { id: "arab-future", num: "04", label: "Arab Digital Future", group: "Ecosystem" },
  { id: "metaverse", num: "05", label: "AlArab Metaverse", group: "Ecosystem" },
  { id: "districts", num: "06", label: "Four Digital Districts", group: "Ecosystem" },
  { id: "persistent-world", num: "07", label: "Persistent Virtual World", group: "Ecosystem" },
  { id: "architecture", num: "08", label: "Ecosystem Architecture", group: "Technology" },
  { id: "digital-economy", num: "09", label: "Digital Economy", group: "Technology" },
  { id: "blockchain", num: "10", label: "Blockchain & Smart Contracts", group: "Technology" },
  { id: "ai-stack", num: "11", label: "AI + Blockchain + VR + Cloud", group: "Technology" },
  { id: "ala-intro", num: "12", label: "ALA — Digital Asset", group: "Token" },
  { id: "what-is-ala", num: "13", label: "What is ALA?", group: "Token" },
  { id: "ala-utility", num: "14", label: "ALA Utility", group: "Token" },
  { id: "tokenomics", num: "15", label: "Tokenomics", group: "Token" },
  { id: "creator-economy", num: "16", label: "Creator Economy", group: "Assets" },
  { id: "digital-assets", num: "17", label: "Digital Assets & NFTs", group: "Assets" },
  { id: "verticals", num: "18", label: "Eight Industry Verticals", group: "Assets" },
  { id: "roadmap", num: "19", label: "Roadmap", group: "Project" },
  { id: "partnerships", num: "20", label: "Strategic Partnerships", group: "Project" },
  { id: "transparency", num: "21", label: "Transparency & Contracts", group: "Project" },
  { id: "risk", num: "22", label: "Risk & Compliance", group: "Project" },
  { id: "conclusion", num: "23", label: "Conclusion", group: "Project" },
];

const GROUPS = ["Front", "Ecosystem", "Technology", "Token", "Assets", "Project"];

export function SideNav() {
  const [active, setActive] = useState<string>("cover");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // Find active section
      const offset = window.innerHeight * 0.35;
      let current = "cover";
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= offset) current = item.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <>
      {/* Progress bar (top) */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-alarab-gold via-alarab-gold-soft to-alarab-cyan transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Desktop vertical nav */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[260px] z-40 flex-col bg-alarab-bg/80 backdrop-blur-xl border-r border-alarab-line">
        <button
          onClick={() => scrollTo("cover")}
          className="px-6 py-7 border-b border-alarab-line text-left group"
        >
          <div className="text-[10px] tracking-[0.3em] text-alarab-muted uppercase mb-1">
            Whitepaper · 2026
          </div>
          <div className="text-xl font-bold text-gradient-gold leading-tight">
            AL ARAB
          </div>
          <div className="text-[11px] text-alarab-cyan/80 mt-1 tracking-wide">
            The Digital Future of the Arab World
          </div>
        </button>

        <nav className="flex-1 overflow-y-auto py-4 px-3 max-h-[calc(100vh-220px)]">
          {GROUPS.map((group) => {
            const items = NAV.filter((n) => n.group === group);
            if (!items.length) return null;
            return (
              <div key={group} className="mb-4">
                <div className="px-3 mb-1 text-[9px] uppercase tracking-[0.3em] text-alarab-muted/70">
                  {group}
                </div>
                {items.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`w-full text-left px-3 py-1.5 rounded-md flex items-center gap-3 transition-all ${
                        isActive
                          ? "bg-alarab-accent text-alarab-text"
                          : "text-alarab-muted hover:text-alarab-text hover:bg-white/[0.03]"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono ${
                          isActive ? "text-alarab-gold" : "text-alarab-muted/60"
                        }`}
                      >
                        {item.num}
                      </span>
                      <span className="text-[12px] leading-tight">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </nav>

        <div className="border-t border-alarab-line p-4">
          <a
            href="#cover"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("cover");
            }}
            className="flex items-center justify-center gap-2 text-[11px] text-alarab-muted hover:text-alarab-gold transition-colors"
          >
            <Download className="w-3 h-3" />
            Back to top
          </a>
        </div>
      </aside>

      {/* Mobile top bar + drawer */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-alarab-bg/90 backdrop-blur-xl border-b border-alarab-line">
        <div className="flex items-center justify-between px-4 h-14">
          <button
            onClick={() => scrollTo("cover")}
            className="flex items-center gap-2"
          >
            <span className="text-sm font-bold text-gradient-gold">AL ARAB</span>
            <span className="text-[10px] text-alarab-muted">Whitepaper</span>
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-alarab-gold"
            aria-label="Toggle navigation"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 top-14 z-40 bg-alarab-bg/95 backdrop-blur-xl overflow-y-auto"
          >
            <nav className="px-4 py-6 pb-24">
              {GROUPS.map((group) => {
                const items = NAV.filter((n) => n.group === group);
                if (!items.length) return null;
                return (
                  <div key={group} className="mb-6">
                    <div className="px-3 mb-2 text-[10px] uppercase tracking-[0.3em] text-alarab-muted/70">
                      {group}
                    </div>
                    {items.map((item) => {
                      const isActive = active === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollTo(item.id)}
                          className={`w-full text-left px-3 py-2.5 rounded-md flex items-center gap-3 ${
                            isActive
                              ? "bg-alarab-accent text-alarab-text"
                              : "text-alarab-muted"
                          }`}
                        >
                          <span className="text-[10px] font-mono text-alarab-gold/70">
                            {item.num}
                          </span>
                          <span className="text-sm">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
