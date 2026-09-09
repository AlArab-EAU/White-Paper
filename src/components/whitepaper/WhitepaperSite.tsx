"use client";

import { SideNav } from "./SideNav";
import {
  CoverSection,
  ContentsSection,
  ExecutiveSummarySection,
  VisionSection,
  ArabFutureSection,
} from "./sections/sections-1";
import {
  MetaverseSection,
  DistrictsSection,
  PersistentWorldSection,
  ArchitectureSection,
  DigitalEconomySection,
  BlockchainSection,
  AIStackSection,
} from "./sections/sections-2";
import {
  AlaIntroSection,
  WhatIsAlaSection,
  AlaUtilitySection,
  TokenomicsSection,
  CreatorEconomySection,
  DigitalAssetsSection,
  VerticalsSection,
  RoadmapSection,
} from "./sections/sections-3";
import {
  PartnershipsSection,
  TransparencySection,
  RiskSection,
  ConclusionSection,
} from "./sections/sections-4";

export function WhitepaperSite() {
  return (
    <main className="relative">
      <SideNav />

      <div className="lg:pl-[260px]">
        <CoverSection />
        <ContentsSection />
        <ExecutiveSummarySection />
        <VisionSection />
        <ArabFutureSection />
        <MetaverseSection />
        <DistrictsSection />
        <PersistentWorldSection />
        <ArchitectureSection />
        <DigitalEconomySection />
        <BlockchainSection />
        <AIStackSection />
        <AlaIntroSection />
        <WhatIsAlaSection />
        <AlaUtilitySection />
        <TokenomicsSection />
        <CreatorEconomySection />
        <DigitalAssetsSection />
        <VerticalsSection />
        <RoadmapSection />
        <PartnershipsSection />
        <TransparencySection />
        <RiskSection />
        <ConclusionSection />
      </div>
    </main>
  );
}
