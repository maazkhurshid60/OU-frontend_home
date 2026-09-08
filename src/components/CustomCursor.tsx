"use client";

import { useCursorAndMagnet } from "@/hooks/useCursorAndMagnet";

const CURSOR_ID = "cursor-dot";

const CustomCursor: React.FC = () => {
  useCursorAndMagnet(CURSOR_ID);

  return (
    <div
      id={CURSOR_ID}
      className="pointer-events-none fixed top-0 left-0 z-[9998] h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-charcoal opacity-0 transition-[opacity,width,height,background] duration-300 ease-[var(--ease)] will-change-transform [@media(hover:none),(pointer:coarse)]:hidden [&.show]:opacity-100 [&.big]:h-16 [&.big]:w-16 [&.big]:bg-purple [&.big]:opacity-[0.14]"
    />
  );
};

export default CustomCursor;
