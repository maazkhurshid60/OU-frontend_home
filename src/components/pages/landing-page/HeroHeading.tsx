import clsx from "clsx";
import { HERO_TITLE_BASE_DELAY, HERO_TITLE_WORD_STEP, HERO_TITLE_WORDS } from "@/constant/heroData";

const HeroHeading: React.FC = () => (
  <h1 className="mb-6 sm:mb-10 lg:mb-12 max-w-[1100px] font-heading text-[38px] leading-[1.08] font-normal tracking-[-0.025em] text-charcoal sm:text-[64px] lg:text-[88px]">
    {HERO_TITLE_WORDS.map((word, i) => (
      <span key={word.text}>
        <span
          className={clsx(
            "inline-block translate-y-9 opacity-0",
            word.highlight ? "hero-word-hl relative" : "hero-word"
          )}
          style={{ "--word-delay": `${HERO_TITLE_BASE_DELAY + i * HERO_TITLE_WORD_STEP}s` } as React.CSSProperties}
        >
          {word.text}
        </span>
        {i < HERO_TITLE_WORDS.length - 1 && " "}
      </span>
    ))}
  </h1>
);

export default HeroHeading;
