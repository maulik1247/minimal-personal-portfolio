"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

type GameItem = {
  id: string;
  title: string;
  hoursPlayed: number;
  cover: string;
};

function GameCard({
  item,
  priority = false,
}: {
  item: GameItem;
  priority?: boolean;
}) {
  const isLongTitle = item.title.length > 18;

  return (
    <li
      className="group h-[380px] w-[272px] max-w-full shrink-0 perspective-[1000px] sm:w-[288px] md:h-[400px] md:w-[304px]"
      aria-label={item.title}
    >
      <div className="relative h-full w-full rounded-[28px] border border-zinc-200 bg-black shadow-sm transition-transform duration-500 ease-out transform-3d group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 overflow-hidden rounded-[28px] [backface-visibility:hidden]">
          <Image
            src={item.cover}
            alt=""
            fill
            sizes="(max-width: 640px) 272px, 304px"
            priority={priority}
            className="object-cover object-center"
          />

          <div
            className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-black/25"
            aria-hidden
          />

          <span className="absolute top-4 right-4 z-10 inline-flex rounded-full border border-white/10 bg-black/70 px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-white uppercase backdrop-blur-sm sm:text-[11px]">
            {item.hoursPlayed}h played
          </span>
        </div>

        <div className="absolute inset-0 overflow-hidden rounded-[28px] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image
            src={item.cover}
            alt=""
            fill
            sizes="(max-width: 640px) 272px, 304px"
            className="object-cover object-center scale-110 blur-2xl opacity-60"
            aria-hidden
          />

          <div className="absolute inset-0 bg-black/55" aria-hidden />

          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 px-6 text-center text-white">
            <h3
              className={cn(
                "max-w-[220px] text-balance font-bold leading-[1.05] tracking-tight",
                isLongTitle
                  ? "text-[1.65rem] sm:text-[1.75rem]"
                  : "text-[2rem] sm:text-[2.25rem]",
              )}
            >
              {item.title}
            </h3>
            <p className="text-[10px] font-medium tracking-[0.28em] text-white/75 uppercase sm:text-[11px]">
              {item.hoursPlayed} hours played
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export const InfiniteMovingGameCards = ({
  items,
  direction = "left",
  speed = "slow",
  className,
}: {
  items: GameItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = React.useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );

    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current.style.setProperty("--animation-duration", duration);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-visible",
        className,
      )}
    >
      <ul
        className="flex w-max min-w-full shrink-0 flex-nowrap items-stretch gap-5 animate-scroll sm:gap-6"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {items.map((item, index) => (
          <GameCard
            key={`first-${item.id}`}
            item={item}
            priority={index < 4}
          />
        ))}
        {items.map((item) => (
          <GameCard key={`second-${item.id}`} item={item} />
        ))}
      </ul>
    </div>
  );
};
