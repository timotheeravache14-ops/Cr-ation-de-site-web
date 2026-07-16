"use client"

import { useSyncExternalStore } from "react"
import { openingHours } from "@/lib/data"

const subscribe = () => () => {}
const getClientToday = () => (new Date().getDay() + 6) % 7
const getServerToday = (): number | null => null

export function OpeningHours() {
  const todayIdx = useSyncExternalStore(subscribe, getClientToday, getServerToday)

  return (
    <ul className="divide-y divide-line">
      {openingHours.map((row, i) => {
        const isToday = i === todayIdx
        return (
          <li
            key={row.day}
            className={`flex items-center justify-between gap-4 py-2.5 ${isToday ? "-mx-4 rounded-xl bg-jade/10 px-4" : ""}`}
          >
            <span className={`flex items-center gap-2 text-sm ${isToday ? "font-extrabold text-jade-deep" : "text-ink"}`}>
              {row.day}
              {isToday && (
                <span className="rounded-full bg-jade-deep px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-white">
                  Aujourd&apos;hui
                </span>
              )}
            </span>
            <span className={`text-sm ${row.closed ? "font-semibold text-red" : "text-ink-soft"}`}>
              {row.hours}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
