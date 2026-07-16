"use client"

import dynamic from "next/dynamic"

function BobunFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
      <svg viewBox="0 0 120 90" className="h-40 w-40 animate-pulse text-jade" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 40 h90 a45 30 0 0 1 -90 0 z" />
        <path d="M30 40 q30 -14 60 0" opacity="0.5" />
        <path d="M52 22 l16 -8" />
      </svg>
    </div>
  )
}

const BobunScene = dynamic(() => import("./bobun-scene"), {
  ssr: false,
  loading: () => <BobunFallback />,
})

export function BobunHero({ className }: { className?: string }) {
  return (
    <div className={className}>
      <BobunScene />
    </div>
  )
}
