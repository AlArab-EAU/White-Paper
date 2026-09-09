"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useLanguage } from "./i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavItem {
  id: string;
  num: string;
  labelKey: keyof ReturnType<typeof useLanguage>["t"]["nav"];
  group: keyof ReturnType<typeof useLanguage>["t"]["navGroups"];
}

const NAV: NavItem[] = [
  { id: "cover", num: "00", labelKey: "cover", group: "front" },
  { id: "contents", num: "01", labelKey: "contents", group: "front" },
  { id: "executive-summary", num: "02", labelKey: "executiveSummary", group: "front" },
  { id: "vision", num: "03", labelKey: "vision", group: "ecosystem" },
  { id: "arab-future", num: "04", labelKey: "arabFuture", group: "ecosystem" },
  { id: "metaverse", num: "05", labelKey: "metaverse", group: "ecosystem" },
  { id: "districts", num: "06", labelKey: "districts", group: "ecosystem" },
  { id: "persistent-world", num: "07", labelKey: "persistentWorld", group: "ecosystem" },
  { id: "architecture", num: "08", labelKey: "architecture", group: "technology" },
  { id: "digital-economy", num: "09", labelKey: "digitalEconomy", group: "technology" },
  { id: "blockchain", num: "10", labelKey: "blockchain", group: "technology" },
  { id: "ai-stack", num: "11", labelKey: "aiStack", group: "technology" },
  { id: "ala-intro", num: "12", labelKey: "alaIntro", group: "token" },
  { id: "what-is-ala", num: "13", labelKey: "whatIsAla", group: "token" },
  { id: "ala-utility", num: "14", labelKey: "alaUtility", group: "token" },
  { id: "tokenomics", num: "15", labelKey: "tokenomics", group: "token" },
  { id: "creator-economy", num: "16", labelKey: "creatorEconomy", group: "assets" },
  { id: "digital-assets", num: "17", labelKey: "digitalAssets", group: "assets" },
  { id: "verticals", num: "18", labelKey: "verticals", group: "assets" },
  { id: "roadmap", num: "19", labelKey: "roadmap", group: "project" },
  { id: "partnerships", num: "20", labelKey: "partnerships", group: "project" },
  { id: "transparency", num: "21", labelKey: "transparency", group: "project" },
  { id: "risk", num: "22", labelKey: "risk", group: "project" },
  { id: "conclusion", num: "23", labelKey: "conclusion", group: "project" },
];

const GROUPS: NavItem["group"][] = [
  "front",
  "ecosystem",
  "technology",
  "token",
  "assets",
  "project",
];

export function SideNav() {
  const { t } = useLanguage();
  const [active, setActive] = useState<string>("cover");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

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
            {t.meta.edition} · 2026
          </div>
          <div className="text-xl font-bold text-gradient-gold leading-tight">
            {t.meta.siteName}
          </div>
          <div className="text-[11px] text-alarab-cyan/80 mt-1 tracking-wide">
            {t.meta.tagline}
          </div>
        </button>

        <nav className="flex-1 overflow-y-auto py-4 px-3 max-h-[calc(100vh-260px)]">
          {GROUPS.map((group) => {
            const items = NAV.filter((n) => n.group === group);
            if (!items.length) return null;
            return (
              <div key={group} className="mb-4">
                <div className="px-3 mb-1 text-[9px] uppercase tracking-[0.3em] text-alarab-muted/70">
                  {t.navGroups[group]}
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
                      <span className="text-[12px] leading-tight">
                        {t.nav[item.labelKey]}
                      </span>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </nav>

        <div className="border-t border-alarab-line p-3 space-y-2">
          <LanguageSwitcher variant="sidebar" />
          <a
            href="#cover"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("cover");
            }}
            className="flex items-center justify-center gap-2 text-[11px] text-alarab-muted hover:text-alarab-gold transition-colors py-1"
          >
            <Download className="w-3 h-3" />
            {t.meta.backToTop}
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
            <span className="text-sm font-bold text-gradient-gold">
              {t.meta.siteName}
            </span>
            <span className="text-[10px] text-alarab-muted">{t.meta.edition}</span>
          </button>
          <div className="flex items-center gap-2">
            <LanguageSwitcher variant="topbar" />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-alarab-gold"
              aria-label={t.meta.toggleNav}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
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
                      {t.navGroups[group]}
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
                          <span className="text-sm">{t.nav[item.labelKey]}</span>
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
