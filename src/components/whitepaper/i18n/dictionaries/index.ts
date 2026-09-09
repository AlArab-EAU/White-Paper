import type { Dict } from "../types";
import type { LangCode } from "../languages";
import { en } from "./en";
import { ar } from "./ar";
import { es } from "./es";
import { fr } from "./fr";
import { zh } from "./zh";
import { ru } from "./ru";
import { de } from "./de";
import { pt } from "./pt";

export const DICT: Dict = { en, ar, es, fr, zh, ru, de, pt };

export function getDictionary(code: LangCode) {
  return DICT[code] ?? DICT.en;
}
