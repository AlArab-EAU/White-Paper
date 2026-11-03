import type { LangCode } from "./languages";

/**
 * Dictionary shape — all translatable strings used across the whitepaper.
 * Each top-level key maps a section/area to its strings.
 */
export interface Dictionary {
  meta: {
    siteName: string;
    tagline: string;
    whitepaperBadge: string;
    scrollBegin: string;
    domain: string;
    backToTop: string;
    nav: string;
    close: string;
    toggleLang: string;
    toggleNav: string;
    edition: string;
  };

  nav: {
    cover: string;
    contents: string;
    executiveSummary: string;
    vision: string;
    arabFuture: string;
    metaverse: string;
    districts: string;
    persistentWorld: string;
    architecture: string;
    digitalEconomy: string;
    blockchain: string;
    aiStack: string;
    alaIntro: string;
    whatIsAla: string;
    alaUtility: string;
    tokenomics: string;
    creatorEconomy: string;
    digitalAssets: string;
    verticals: string;
    roadmap: string;
    partnerships: string;
    transparency: string;
    risk: string;
    conclusion: string;
  };

  navGroups: {
    front: string;
    ecosystem: string;
    technology: string;
    token: string;
    assets: string;
    project: string;
  };

  cover: {
    title: string;
    subtitle: string;
    tags: string[];
  };

  contents: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { num: string; t: string }[];
  };

  executive: {
    eyebrow: string;
    title: { pre: string; highlight: string; post: string };
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    stats: { k: string; v: string; u: string }[];
  };

  vision: {
    eyebrow: string;
    title: { pre: string; highlight: string; post: string };
    subtitle: string;
    pillars: { name: string; desc: string }[];
    visionLabel: string;
    visionText: string;
    missionLabel: string;
    missionText: string;
  };

  arabFuture: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    p1: string;
    p2: string;
    p3: string;
    visualLabel: string;
    visualCaption: string;
  };

  metaverse: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    p1: string;
    p2: string;
    p3: string;
  };

  districts: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    subtitle: string;
    items: {
      n: string;
      name: string;
      tag: string;
      desc: string;
    }[];
  };

  persistentWorld: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    subtitle: string;
    platforms: { name: string; desc: string }[];
    features: { name: string; desc: string }[];
  };

  architecture: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    subtitle: string;
    layers: { layer: string; name: string; items: string[]; desc: string }[];
  };

  digitalEconomy: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    subtitle: string;
    cards: { t: string; d: string }[];
    flowLabel: string;
    flow: string;
  };

  blockchain: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    p1: string;
    p2: string;
    p3: string;
    chains: { name: string; status: string }[];
  };

  aiStack: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    subtitle: string;
    stack: { name: string; desc: string }[];
  };

  alaIntro: {
    badge: string;
    name: string;
    role: string;
    totalLabel: string;
    total: string;
    unit: string;
    note: string;
    notGov: string;
    noteEnd: string;
  };

  whatIsAla: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    subtitle: string;
    supplyLabel: string;
    supply: string;
    supplySub: string;
    rows: { k: string; v: string }[];
    chainsLabel: string;
    chainRows: { c: string; a: string }[];
    notePrefix: string;
    noteLink: string;
    noteSuffix: string;
    important: string;
    importantText: string;
  };

  alaUtility: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    subtitle: string;
    utilities: { t: string; d: string }[];
  };

  tokenomics: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    subtitle: string;
    chartTotalLabel: string;
    chartTotal: string;
    chartUnit: string;
    allocations: { label: string; pct: number; ala: number }[];
    totalLabel: string;
    total: string;
    designTitle: string;
    designPrinciples: string[];
    scheduleTitle: string;
    schedule: { l: string; v: string; w: string }[];
  };

  creatorEconomy: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    subtitle: string;
    creators: { t: string; d: string }[];
    cultureLabel: string;
    cultureText: string;
    creativeLabel: string;
    creativeText: string;
  };

  digitalAssets: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    p1: string;
    assets: { t: string; d: string }[];
  };

  verticals: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    subtitle: string;
    items: { name: string }[];
    convergenceLabel: string;
    convergence: string;
  };

  roadmap: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    subtitle: string;
    phases: {
      n: string;
      t: string;
      s: string;
      items: string[];
    }[];
  };

  partnerships: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    subtitle: string;
    partners: { name: string; type: string; desc: string }[];
    types: { t: string; d: string }[];
    disclaimerLabel: string;
    disclaimer: string;
  };

  transparency: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    subtitle: string;
    contracts: {
      chain: string;
      chainLabel: string;
      address: string;
      badge: string;
      badgeType: "verified" | "restructuring";
    }[];
    badge: string;
    values: { t: string; d: string }[];
    noteLabel: string;
    note: string;
    viewOn: string;
  };

  risk: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    subtitle: string;
    risks: string[];
    disclaimerLabel: string;
    disclaimer: string;
  };

  conclusion: {
    eyebrow: string;
    title: { pre: string; highlight: string };
    p1: string;
    stats: { k: string; v: string }[];
    backToTop: string;
    viewContracts: string;
    edition: string;
    disclaimer: string;
  };
}

export type Dict = Record<LangCode, Dictionary>;
