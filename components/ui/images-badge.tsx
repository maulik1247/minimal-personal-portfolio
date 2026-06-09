"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";

export type AppIconTile = {
  id: string;
  bg: string;
  src?: string;
  Icon?: IconType;
};

type BadgeImage = string | IconType | AppIconTile;

function isAppIconTile(image: BadgeImage): image is AppIconTile {
  return (
    typeof image === "object" &&
    image !== null &&
    "id" in image &&
    "bg" in image
  );
}

interface ImagesBadgeProps {
  text: string;
  images: BadgeImage[];
  className?: string;
  /** Optional link URL */
  href?: string;
  /** Link target attribute (e.g., "_blank" for new tab) */
  target?: string;
  /** Show the amber folder container. Set false for a stacked-icon layout. */
  showFolder?: boolean;
  /** Render bare icons without card backgrounds or borders. */
  iconOnly?: boolean;
  /** Folder dimensions { width, height } in pixels */
  folderSize?: { width: number; height: number };
  /** Image dimensions when teased (peeking) { width, height } in pixels */
  teaserImageSize?: { width: number; height: number };
  /** Image dimensions when hovered { width, height } in pixels */
  hoverImageSize?: { width: number; height: number };
  /** How far images translate up on hover in pixels */
  hoverTranslateY?: number;
  /** How far images spread horizontally on hover in pixels */
  hoverSpread?: number;
  /** Rotation angle for fanned images on hover in degrees */
  hoverRotation?: number;
}

export function ImagesBadge({
  text,
  images,
  className,
  href,
  target,
  showFolder = true,
  iconOnly = false,
  folderSize = { width: 32, height: 24 },
  teaserImageSize = { width: 20, height: 14 },
  hoverImageSize = { width: 48, height: 32 },
  hoverTranslateY = -35,
  hoverSpread = 20,
  hoverRotation = 15,
}: ImagesBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Limit to max 3 images
  const displayImages = images.slice(0, 3);

  // Calculate folder tab dimensions proportionally
  const tabWidth = folderSize.width * 0.375;
  const tabHeight = folderSize.height * 0.25;

  const Component = href ? "a" : "div";

  return (
    <Component
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex cursor-pointer items-center gap-2 perspective-[1000px] transform-3d",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon / folder container */}
      <motion.div
        className="relative"
        style={{
          width: showFolder ? folderSize.width : hoverImageSize.width + hoverSpread,
          height: showFolder ? folderSize.height : hoverImageSize.height + Math.abs(hoverTranslateY),
          transformStyle: "preserve-3d",
        }}
      >
        {showFolder && (
          <div className="absolute inset-0 rounded-[4px] bg-gradient-to-b from-amber-400 to-amber-500 shadow-sm dark:from-amber-500 dark:to-amber-600">
            <div
              className="absolute left-0.5 rounded-t-[2px] bg-gradient-to-b from-amber-300 to-amber-400 dark:from-amber-400 dark:to-amber-500"
              style={{
                top: -tabHeight * 0.65,
                width: tabWidth,
                height: tabHeight,
              }}
            />
          </div>
        )}

        {/* Images that pop out */}
        {displayImages.map((image, index) => {
          const imageKey = isAppIconTile(image)
            ? image.id
            : typeof image === "string"
              ? image
              : image.name;
          const isAppTile = isAppIconTile(image);
          const totalImages = displayImages.length;

          // Calculate rotation based on index
          const baseRotation =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * hoverRotation
                : (index - 1) * hoverRotation;

          // Hover positions - fan out
          const hoverY = hoverTranslateY - (totalImages - 1 - index) * 3;
          const hoverX =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * hoverSpread
                : (index - 1) * hoverSpread;

          // Teaser positions - peek from folder or stacked overlap
          const teaseY = showFolder
            ? -4 - (totalImages - 1 - index) * 1
            : (totalImages - 1 - index) * 6;
          const teaseX = showFolder
            ? 0
            : totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * 10
                : (index - 1) * 10;
          const teaseRotation =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * (showFolder ? 3 : 6)
                : (index - 1) * (showFolder ? 3 : 6);
          const teaseScale = showFolder ? 1 : 1 - (totalImages - 1 - index) * 0.08;

          return (
            <motion.div
              key={imageKey}
              className={cn(
                "absolute top-1/2 left-1/2 origin-center",
                isAppTile
                  ? "flex items-center justify-center overflow-hidden rounded-[22%] shadow-[0_10px_28px_-8px_rgba(0,0,0,0.22)]"
                  : iconOnly
                    ? "overflow-visible"
                    : "overflow-hidden rounded-xl bg-white shadow-md ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-800 dark:shadow-white/10 dark:ring-white/10",
              )}
              animate={{
                x: `calc(-50% + ${isHovered ? hoverX : teaseX}px)`,
                y: `calc(-50% + ${isHovered ? hoverY : teaseY}px)`,
                rotate: isHovered ? baseRotation : teaseRotation,
                scale: isHovered ? 1 : teaseScale,
                width: isHovered ? hoverImageSize.width : teaserImageSize.width,
                height: isHovered
                  ? hoverImageSize.height
                  : teaserImageSize.height,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: index * 0.03,
              }}
              style={{
                zIndex: 10 + index,
                ...(isAppTile ? { backgroundColor: image.bg } : {}),
              }}
            >
              {isAppTile ? (
                image.Icon ? (
                  React.createElement(image.Icon, {
                    className: "h-[54%] w-[54%] text-white",
                    "aria-hidden": true,
                  })
                ) : (
                  <img
                    src={image.src}
                    alt={image.id}
                    className="h-[54%] w-[54%] object-contain brightness-0 invert"
                  />
                )
              ) : typeof image === "string" ? (
                <img
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className={cn(
                    "h-full w-full",
                    iconOnly ? "object-contain" : "object-cover",
                  )}
                />
              ) : (
                React.createElement(image, {
                  className: "h-full w-full",
                  "aria-hidden": true,
                })
              )}
            </motion.div>
          );
        })}

        {showFolder && (
          <motion.div
            className="absolute inset-x-0 bottom-0 h-[85%] origin-bottom rounded-[4px] bg-gradient-to-b from-amber-300 to-amber-400 shadow-sm dark:from-amber-400 dark:to-amber-500"
            animate={{
              rotateX: isHovered ? -45 : -25,
              scaleY: isHovered ? 0.8 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            style={{
              transformStyle: "preserve-3d",
              zIndex: 20,
            }}
          >
            <div className="absolute top-1 right-1 left-1 h-px bg-amber-200/50 dark:bg-amber-300/50" />
          </motion.div>
        )}
      </motion.div>

      {/* Text */}
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
        {text}
      </span>
    </Component>
  );
}
