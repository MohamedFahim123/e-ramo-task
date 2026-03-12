"use client"

import { Tag } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useState } from "react"

import { Container } from "@/components/shared/ui/container"
import { Section } from "@/components/shared/ui/section"

import { LatestTabs } from "./LatestTabs"

export function LatestListingsSection() {
  const t = useTranslations("Home.latestListings")

  const [active, setActive] = useState("shared")

  return (
    <Section spacing="default">
      <Container>

        <LatestTabs active={active} onChange={setActive} />

        <div className="mt-6 rounded-[28px] bg-[#FDF8F2] p-6 md:p-10">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                {t("label")}
              </span>

              <p className="mt-1 text-sm text-gray-600">
                {t("subtitle")}
              </p>

              <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
                {t(`${active}.title`)}
              </h2>

              <p className="mt-2 text-xl text-gray-700">
                {t(`${active}.category`)}
              </p>

              <p className="mt-4 max-w-md text-sm text-gray-700">
                {t(`${active}.description`)}
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-700">
                  {t("amenities")}
                </h4>

                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {t.raw(`${active}.amenities`).map((item: string) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-gray-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t pt-6 text-sm">
                <Tag size={18} className="text-[#36522e]" />

                <span>
                  {t("price")}{" "}
                  <b>{t(`${active}.price`)}</b>
                </span>
              </div>

              <div className="mt-6 flex gap-4">
                <button className="rounded-lg bg-[#36522e] px-6 py-3 text-white">
                  {t("book")}
                </button>

                <button className="rounded-lg border border-[#36522e] px-6 py-3 text-[#36522e]">
                  {t("learn")}
                </button>
              </div>
            </div>

            <div className="relative h-[320px] overflow-hidden rounded-[24px] md:h-[420px]">
              <Image
                src="/assets/latest-listings/bg.webp"
                alt=""
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>

      </Container>
    </Section>
  )
}