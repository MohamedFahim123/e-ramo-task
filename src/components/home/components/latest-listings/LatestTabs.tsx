"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { latestTabs } from "./latest-data"

type Props = {
  active: string
  onChange: (tab: string) => void
}

export function LatestTabs({ active, onChange }: Props) {
  const t = useTranslations("Home.latestListings.tabs")

  return (
    <div className="flex justify-center -mb-7 px-3 sm:px-0">
      <div className="grid w-full max-w-2xl grid-cols-2 gap-2 rounded-[1.5rem] bg-[#36522e] p-2 sm:flex sm:w-auto sm:max-w-none sm:flex-wrap sm:justify-center">

        {latestTabs.map((tab) => {
          const isActive = active === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`flex min-w-0 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-center text-sm font-medium transition sm:px-5
              ${
                isActive
                  ? "bg-white/70 text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Image
                src={tab.icon}
                alt=""
                width={18}
                height={18}
              />
              <span className="break-words leading-5">{t(tab.id)}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
