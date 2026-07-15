"use client"

import { useSyncExternalStore } from "react"
import { openingHours } from "@/lib/menu"

// Read the current weekday on the client only (null during SSR) so we can
// highlight today's row without risking a hydration mismatch.
const subscribe = () => () => {}
const getClientToday = () => (new Date().getDay() + 6) % 7
const getServerToday = (): number | null => null

export function OpeningHours() {
  const todayIdx = useSyncExternalStore(
    subscribe,
    getClientToday,
    getServerToday,
  )

  return (
    <ul className="divide-y divide-line">
      {openingHours.map((row, i) => {
        const isToday = i === todayIdx
        return (
          <li
            key={row.day}
            className={`flex items-center justify-between gap-4 py-3 ${
              isToday ? "-mx-4 rounded-xl bg-sage/10 px-4" : ""
            }`}
          >
            <span
              className={`flex items-center gap-2 text-sm ${
                isToday ? "font-semibold text-sage-deep" : "text-ink"
              }`}
            >
              {row.day}
              {isToday && (
                <span className="rounded-full bg-sage-deep px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-cream">
                  Aujourd&apos;hui
                </span>
              )}
            </span>
            <span
              className={`text-sm ${
                row.closed ? "text-terracotta-deep" : "text-ink-soft"
              }`}
            >
              {row.hours}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
