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
  const isLongTitle = item.title.length > 16;

  return (
    <li
      className="group w-[180px] shrink-0 perspective-[1000px]"
      aria-label={item.title}
    >
      <div className="relative aspect-[2/3] w-full rounded-2xl border border-gray-200 bg-neutral-200 ring-1 ring-black/10 transition-transform duration-500 ease-out transform-3d group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]">
          <Image
            src={item.cover}
            alt=""
            fill
            sizes="180px"
            priority={priority}
            className="object-cover object-center"
          />

          <div
            className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-black/25"
            aria-hidden
          />

          <span className="absolute top-2 right-2 z-10 inline-flex rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-medium tracking-[0.1em] text-white uppercase backdrop-blur-sm">
            {item.hoursPlayed}h played
          </span>
        </div>

        <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image
            src={item.cover}
            alt=""
            fill
            sizes="180px"
            className="object-cover object-center scale-110 blur-2xl opacity-60"
            aria-hidden
          />

          <div className="absolute inset-0 bg-black/55" aria-hidden />

          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2 px-4 text-center text-white">
            <h3
              className={cn(
                "max-w-[150px] text-balance font-bold leading-tight tracking-tight",
                isLongTitle ? "text-base" : "text-lg",
              )}
            >
              {item.title}
            </h3>
            <p className="text-[9px] font-medium tracking-[0.22em] text-white/75 uppercase">
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
        className="flex w-max min-w-full shrink-0 flex-nowrap items-stretch gap-6 animate-scroll"
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
