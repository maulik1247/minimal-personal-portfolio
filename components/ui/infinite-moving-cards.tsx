"use client";

import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

type TestimonialItem = {
  quote: string;
  name: string;
  title: string;
  image?: string;
};

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <li className="relative flex h-[248px] w-[340px] max-w-full shrink-0 self-stretch rounded-2xl border border-zinc-200 bg-[#f2f2f2] px-7 py-6 md:h-[248px] md:w-[400px]">
      <blockquote className="flex h-full min-h-0 flex-col">
        <p className="line-clamp-5 flex-1 text-sm leading-[1.65] font-normal text-neutral-800">
          {item.quote}
        </p>
        <div className="mt-5 flex shrink-0 flex-row items-center gap-3">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="h-10 w-10 shrink-0 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-black/5">
              <span className="text-sm font-semibold text-neutral-800">
                {item.name.charAt(0)}
              </span>
            </div>
          )}
          <span className="flex min-w-0 flex-col gap-0.5">
            <span className="truncate text-sm font-semibold leading-snug text-neutral-800">
              {item.name}
            </span>
            <span className="truncate text-sm leading-snug font-normal text-neutral-500">
              {item.title}
            </span>
          </span>
        </div>
      </blockquote>
    </li>
  );
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: TestimonialItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

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
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap items-stretch gap-4 animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <TestimonialCard key={`first-${item.name}-${idx}`} item={item} />
        ))}
        {items.map((item, idx) => (
          <TestimonialCard key={`second-${item.name}-${idx}`} item={item} />
        ))}
      </ul>
    </div>
  );
};
