"use client";

import { useRef } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import ButtonOutlineDark from "@/components/button/ButtonOutlineDark";
import ProofPerkCard from "./ProofPerkCard";
import { useAmbientParallax } from "@/hooks/useAmbientParallax";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { LOGIN_URL } from "@/constant/navigationData";
import { PROOF_HEADING, PROOF_PARAGRAPH, PROOF_PERKS } from "@/constant/proofData";
import logoMark from "../../../../public/assets/logo-mark.webp";

const Proof: React.FC = () => {
  const blob1 = useAmbientParallax<HTMLDivElement>(0.4);
  const blob2 = useAmbientParallax<HTMLDivElement>(-0.3);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRowRef = useRef<HTMLDivElement>(null);
  const heading = useScrollReveal(headingRef, 60);
  const paragraph = useScrollReveal(paragraphRef, 120);
  const ctaRow = useScrollReveal(ctaRowRef, 180);

  return (
    <section id="about" className="relative overflow-hidden bg-charcoal py-[clamp(100px,10vw,180px)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          ref={blob1}
          className="absolute top-[-15%] left-[-8%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(121,92,245,.14),transparent_70%)] blur-[60px]"
        />
        <div
          ref={blob2}
          className="absolute right-[-4%] bottom-[-10%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(249,92,91,.1),transparent_70%)] blur-[60px]"
        />
      </div>

      <Image
        src={logoMark}
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-[58%] right-[8%] z-[1] w-[clamp(360px,38vw,560px)] -translate-y-1/2 animate-[proofSpin_30s_linear_infinite] opacity-10 max-[900px]:right-[-10%] max-[900px]:w-[280px] max-[900px]:opacity-[0.04]"
      />

      <Container className="relative z-[2]">
        <h2
          ref={headingRef}
          className={`${heading.className} mb-6 max-w-[14ch] font-heading text-[length:var(--fs-display)] leading-[0.98] font-medium tracking-[-0.035em] text-white`}
        >
          {PROOF_HEADING}
        </h2>
        <p
          ref={paragraphRef}
          style={paragraph.style}
          className={`${paragraph.className} mb-16 max-w-[540px] text-[length:var(--fs-lead)] leading-[1.6] text-g400`}
        >
          {PROOF_PARAGRAPH}
        </p>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[20px] bg-white/[0.06] md:grid-cols-3">
          {PROOF_PERKS.map((perk, i) => (
            <ProofPerkCard key={perk.title} perk={perk} delayMs={i * 60} />
          ))}
        </div>

        <div
          ref={ctaRowRef}
          style={ctaRow.style}
          className={`${ctaRow.className} mt-14 flex flex-wrap items-center gap-[18px]`}
        >
          <ButtonPrimary text="View Products" href="#products" magnetic />
          <ButtonOutlineDark text="Login to Dashboard" href={LOGIN_URL} target="_blank" />
        </div>
      </Container>
    </section>
  );
};

export default Proof;
