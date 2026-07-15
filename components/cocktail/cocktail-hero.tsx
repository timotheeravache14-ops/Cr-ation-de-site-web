"use client"

import dynamic from "next/dynamic"

function CocktailFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
      <svg
        viewBox="0 0 120 140"
        className="h-40 w-40 animate-pulse text-terracotta"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 30 L102 30 L60 82 Z" />
        <path d="M60 82 L60 118" />
        <path d="M38 118 L82 118" />
        <path d="M30 30 Q60 54 90 30" opacity="0.5" />
      </svg>
    </div>
  )
}

const CocktailScene = dynamic(() => import("./cocktail-scene"), {
  ssr: false,
  loading: () => <CocktailFallback />,
})

export function CocktailHero({ className }: { className?: string }) {
  return (
    <div className={className}>
      <CocktailScene />
    </div>
  )
}
