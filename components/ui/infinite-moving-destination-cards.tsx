"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

type DestinationItem = {
  id: string;
  name: string;
  visited: string;
  cover: string;
};

function DestinationCard({
  item,
  priority = false,
}: {
  item: DestinationItem;
  priority?: boolean;
}) {
  const isLongName = item.name.length > 12;

  return (
    <li className="w-[180px] shrink-0" aria-label={`${item.name}, ${item.visited}`}>
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-neutral-200 ring-1 ring-black/10">
        <Image
          src={item.cover}
          alt={item.name}
          fill
          sizes="180px"
          priority={priority}
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45" aria-hidden />

        <div className="absolute inset-x-0 top-8 z-10 px-3 text-center text-white">
          <h3
            className={cn(
              "text-balance font-bold leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]",
              isLongName ? "text-lg" : "text-xl",
            )}
          >
            {item.name}
          </h3>
          <p className="mt-2 text-[9px] font-medium tracking-[0.28em] text-white/90 uppercase sm:text-[10px]">
            {item.visited}
          </p>
        </div>
      </div>
    </li>
  );
}

export const InfiniteMovingDestinationCards = ({
  items,
  direction = "left",
  speed = "slow",
  className,
}: {
  items: DestinationItem[];
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
          <DestinationCard
            key={`first-${item.id}`}
            item={item}
            priority={index < 4}
          />
        ))}
        {items.map((item) => (
          <DestinationCard key={`second-${item.id}`} item={item} />
        ))}
      </ul>
    </div>
  );
};
