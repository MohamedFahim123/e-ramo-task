"use client";

import { Sparkles, Users } from "lucide-react";
import Image from "next/image";
import type { PricingPlan } from "./data";

export function PricingCard({ plan, yearly }: { plan: PricingPlan; yearly: boolean }) {
  const price = yearly ? plan.yearly : plan.monthly;
  const active = plan.popular;

  return (
    <div
      className={`group relative h-full w-full max-w-full min-h-[100%] overflow-hidden rounded-[2rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
        active
          ? "bg-gradient-to-br from-[var(--global)] via-[#446838] to-[#223616] text-white shadow-[0_24px_60px_rgba(54,83,39,0.28)]"
          : "border border-[#e7ebdf] bg-white shadow-[0_20px_45px_rgba(31,41,55,0.08)]"
      }`}
    >
      <div className={`pointer-events-none absolute inset-0 ${active ? "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_45%)]" : "bg-[radial-gradient(circle_at_top,rgba(148,167,140,0.14),transparent_42%)]"}`} />

      {active && (
        <div className="absolute inset-x-3 top-3 z-30 flex justify-center">
          <div className="flex w-full max-w-[220px] items-center justify-center gap-2 rounded-full border border-white/70 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 px-3 py-2 text-center text-[10px] font-bold leading-4 text-white shadow-lg sm:max-w-[250px] sm:text-[11px]">
            <Sparkles className="w-3 h-3 fill-current" />
            <span className="break-words">Popular Plan (Best Sales)</span>
          </div>
        </div>
      )}

      <div className={`relative z-10 flex h-full flex-col p-5 md:p-6 ${active ? "mt-6 pt-16 sm:mt-5" : "pt-6"}`}>
        <div className="mb-6 flex flex-col items-center gap-5">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-[1.35rem] border-2 shadow-lg ${
              active
                ? "bg-white/20 backdrop-blur-sm border-white/30"
                : "border-green-200 bg-gradient-to-br from-green-100 to-[#dceacd]"
            }`}
          >
            <Image
              src="/images/plans/1.svg"
              alt="Plan icon"
              width={32}
              height={32}
              className={active ? "brightness-0 invert" : ""}
            />
          </div>

          <div className="text-center">
            <p
              className={`mb-2 text-sm ${
                active ? "text-green-100" : "text-gray-500"
              }`}
            >
              {plan.subtitle}
            </p>

            <h2
              className={`min-h-14 break-words text-xl font-bold ${
                active ? "text-white" : "text-gray-900"
              }`}
            >
              {plan.title}
            </h2>
          </div>
        </div>

        <div className="mb-6">
          <p
            className={`min-h-10 text-center text-sm leading-relaxed ${
              active ? "text-green-100" : "text-gray-600"
            }`}
          >
            {plan.description}
          </p>
        </div>

        <div className="mb-6 text-center">
          <div className={active ? "text-white" : "text-gray-900"}>
            <span className="text-3xl lg:text-4xl font-bold">
              {price?.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            <span className="ml-2 text-sm opacity-75">
              SAR / {yearly ? "Annually" : "Monthly"}
            </span>
          </div>
        </div>

        <div className="mb-8 flex-1">
          <h3
            className={`text-sm font-semibold mb-4 ${
              active ? "text-white" : "text-gray-900"
            }`}
          >
            What{"'"}s included
          </h3>

          <div className="space-y-3">
            {plan.features.map((f, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full ${
                    active
                      ? "bg-white/20 text-white backdrop-blur-sm"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  <Users className="w-4 h-4" />
                </div>

                <span
                  className={`break-words text-sm ${
                    active ? "text-green-100" : "text-gray-600"
                  }`}
                >
                  {f.label} / {f.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`w-full h-12 rounded-2xl font-semibold text-sm transition-all duration-300 ${
            active
              ? "bg-white text-[var(--global)] hover:bg-green-50 shadow-lg hover:shadow-xl"
              : "border-2 border-transparent bg-[var(--global)] text-white shadow-md hover:border-[var(--global)] hover:bg-transparent hover:text-[var(--global)] hover:shadow-lg"
          }`}
        >
          Buy MemberShip
        </button>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </div>
  );
}
