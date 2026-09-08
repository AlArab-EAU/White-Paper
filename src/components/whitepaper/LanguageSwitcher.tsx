"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "./i18n/LanguageProvider";
import type { LangCode } from "./i18n/languages";

interface Props {
  /** "sidebar" = compacto para el sidebar | "topbar" = compacto para el topbar móvil */
  variant?: "sidebar" | "topbar";
}

export function LanguageSwitcher({ variant = "sidebar" }: Props) {
  const { lang, setLang, languages, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const current = languages.find((l) => l.code === lang) ?? languages[0];

  const triggerClass =
    variant === "topbar"
      ? "flex items-center gap-1.5 px-2 py-1.5 rounded-md text-alarab-muted hover:text-alarab-gold hover:bg-white/[0.04] transition-colors text-xs"
      : "w-full flex items-center justify-between gap-2 px-3 py-2 rounded-md text-alarab-muted hover:text-alarab-gold hover:bg-white/[0.04] transition-colors text-xs";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={triggerClass}
        aria-label={t.meta.toggleLang}
        aria-expanded={open}
      >
        <span className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5" />
          <span className="font-medium">{current.native}</span>
        </span>
        <ChevronDown
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className={`absolute z-50 ${
              variant === "topbar"
                ? "right-0 top-full mt-1"
                : "left-full top-0 ml-2"
            } w-44 bg-alarab-bg/95 backdrop-blur-xl border border-alarab-line rounded-lg shadow-2xl overflow-hidden`}
          >
            <div className="px-3 py-2 text-[9px] uppercase tracking-[0.3em] text-alarab-muted/70 border-b border-white/[0.04]">
              Language · اللغة · 语言
            </div>
            <ul className="max-h-[300px] overflow-y-auto py-1">
              {languages.map((l) => {
                const active = l.code === lang;
                return (
                  <li key={l.code}>
                    <button
                      onClick={() => {
                        setLang(l.code as LangCode);
                        setOpen(false);
                      }}
                      className={`w-full flex items-center justify-between gap-2 px-3 py-2 text-left transition-colors ${
                        active
                          ? "bg-alarab-accent text-alarab-text"
                          : "text-alarab-muted hover:text-alarab-text hover:bg-white/[0.03]"
                      }`}
                    >
                      <span className="flex items-center gap-2 min-w-0">
                        <span className="text-[9px] font-mono text-alarab-gold/70 w-6 shrink-0">
                          {l.flag}
                        </span>
                        <span className="text-xs truncate">{l.native}</span>
                      </span>
                      {active && <Check className="w-3.5 h-3.5 text-alarab-gold shrink-0" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
