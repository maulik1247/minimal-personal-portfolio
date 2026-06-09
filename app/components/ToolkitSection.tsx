'use client'

import React from 'react'
import { ImagesBadge } from '@/components/ui/images-badge'
import { toolkitCategories, type ToolkitCategory } from '@/lib/toolkitData'

function ToolkitCard({ title, images }: ToolkitCategory) {
  return (
    <div className="flex min-h-[150px] flex-col justify-between rounded-2xl border border-gray-200 bg-[#f7f7f7] p-3">
      <div className="flex flex-1 items-center justify-center">
        <ImagesBadge
          text={title}
          images={images}
          showFolder={false}
          iconOnly
          className="flex-col gap-4 [&>span]:sr-only"
          teaserImageSize={{ width: 44, height: 44 }}
          hoverImageSize={{ width: 52, height: 52 }}
          hoverTranslateY={-36}
          hoverSpread={28}
          hoverRotation={12}
        />
      </div>
      <p className="section-eyebrow">{title}</p>
    </div>
  )
}

export default function ToolkitSection() {
  return (
    <section className="bg-white">
      <div className="section-shell-last">
        <h2 className="section-title">My Toolkit</h2>

        <div className="grid w-full max-w-3xl grid-cols-3 gap-3">
          {toolkitCategories.map((category) => (
            <ToolkitCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}
