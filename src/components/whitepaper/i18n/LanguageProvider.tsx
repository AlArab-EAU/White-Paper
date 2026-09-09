"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import {
  LANG_MAP,
  LANGUAGES,
  DEFAULT_LANG,
  type LangCode,
  type Language,
} from "./languages";
import { DICT } from "./dictionaries";
import type { Dictionary } from "./types";

interface LanguageContextValue {
  lang: LangCode;
  language: Language;
  setLang: (code: LangCode) => void;
  t: Dictionary;
  rtl: boolean;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "alarab-whitepaper-lang";

function detectInitialLang(): LangCode {
  if (typeof window === "undefined") return DEFAULT_LANG;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY) as LangCode | null;
    if (saved && LANG_MAP[saved]) return saved;
  } catch {
    // ignore
  }
  const nav = window.navigator.language?.toLowerCase() ?? "";
  for (const l of LANGUAGES) {
    if (nav.startsWith(l.code)) return l.code;
  }
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Lazy init — runs only once on client, avoids setState-in-effect.
  const [lang, setLangState] = useState<LangCode>(() => {
    if (typeof window === "undefined") return DEFAULT_LANG;
    return detectInitialLang();
  });

  // Side effect: sync <html lang> + <html dir> + localStorage whenever lang changes.
  useEffect(() => {
    const language = LANG_MAP[lang];
    if (typeof document !== "undefined") {
      document.documentElement.lang = language.bcp47;
      document.documentElement.dir = language.rtl ? "rtl" : "ltr";
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      language: LANG_MAP[lang],
      setLang: setLangState,
      t: DICT[lang],
      rtl: LANG_MAP[lang].rtl,
      languages: LANGUAGES,
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
