export type LangCode = "en" | "ar" | "es" | "fr" | "zh" | "ru" | "de" | "pt";

export interface Language {
  code: LangCode;
  /** English label */
  label: string;
  /** Native label (self-name) */
  native: string;
  /** BCP-47 tag for html lang */
  bcp47: string;
  /** Right-to-left? */
  rtl: boolean;
  /** Flag-like emoji (decorative) */
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: "en", label: "English", native: "English", bcp47: "en", rtl: false, flag: "EN" },
  { code: "ar", label: "Arabic", native: "العربية", bcp47: "ar", rtl: true, flag: "AR" },
  { code: "es", label: "Spanish", native: "Español", bcp47: "es", rtl: false, flag: "ES" },
  { code: "fr", label: "French", native: "Français", bcp47: "fr", rtl: false, flag: "FR" },
  { code: "zh", label: "Chinese", native: "中文", bcp47: "zh-CN", rtl: false, flag: "ZH" },
  { code: "ru", label: "Russian", native: "Русский", bcp47: "ru", rtl: false, flag: "RU" },
  { code: "de", label: "German", native: "Deutsch", bcp47: "de", rtl: false, flag: "DE" },
  { code: "pt", label: "Portuguese", native: "Português", bcp47: "pt-BR", rtl: false, flag: "PT" },
];

export const LANG_MAP: Record<LangCode, Language> = LANGUAGES.reduce(
  (acc, l) => ({ ...acc, [l.code]: l }),
  {} as Record<LangCode, Language>
);

export const DEFAULT_LANG: LangCode = "en";
