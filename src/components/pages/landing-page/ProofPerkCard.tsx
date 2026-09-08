"use client";

import { useRef } from "react";
import GlyphIcon from "@/components/icons/GlyphIcon";
import { useTilt } from "@/hooks/useTilt";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { mergeRefs } from "@/utils/mergeRefs";
import type { ProofPerk } from "@/constant/proofData";

const ProofPerkCard: React.FC<{ perk: ProofPerk; delayMs?: number }> = ({ perk, delayMs }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const tiltRef = useTilt<HTMLDivElement>();
  const reveal = useScrollReveal(cardRef, delayMs);

  return (
    <div
      ref={mergeRefs(cardRef, tiltRef)}
      style={{ ...reveal.style, transformStyle: "preserve-3d" }}
      className={`${reveal.className} bg-white/[0.02] p-9 py-9 text-left transition-[background] will-change-transform [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/[0.05]`}
    >
      <div className="mb-[18px] flex h-10 w-10 items-center justify-center rounded-[11px] bg-purple-10">
        <GlyphIcon name={perk.icon} className="h-[19px] w-[19px] text-purple" />
      </div>
      <h4 className="mb-2 font-heading text-[length:var(--fs-h3)] font-semibold tracking-[-0.01em] text-white">
        {perk.title}
      </h4>
      <p className="text-sm leading-[1.6] text-g400">{perk.description}</p>
    </div>
  );
};

export default ProofPerkCard;
