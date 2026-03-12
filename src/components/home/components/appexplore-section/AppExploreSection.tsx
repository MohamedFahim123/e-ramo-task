"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { Container } from "@/components/shared/ui/container";
import { Section } from "@/components/shared/ui/section";

export function AppExploreSection() {
  const t = useTranslations("Home.app");

  return (
    <Section>
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-[#FDF8F2] px-6 py-14 md:px-12 lg:px-20">
          
          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div className="flex justify-center lg:justify-start">
              <Image
                src="/assets/app-explore/1739891459_pR7PTXJY.webp"
                alt=""
                width={420}
                height={520}
                className="h-auto w-[260px] md:w-[320px]"
              />
            </div>

            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold md:text-4xl">
                {t("title")}
              </h2>

              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                {t("description")}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-xl border px-6 py-4 text-sm font-medium transition hover:bg-[#f4efe9]"
                >
                  <Image
                    src="/assets/app-explore/google-play.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  {t("google")}
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 rounded-xl border px-6 py-4 text-sm font-medium transition hover:bg-[#f4efe9]"
                >
                  <Image
                    src="/assets/app-explore/apple.webp"
                    alt=""
                    width={24}
                    height={24}
                  />
                  {t("apple")}
                </a>
              </div>
            </div>

          </div>

          <Image
            src="/assets/app-explore/03.png"
            alt="hand image"
            width={100}
            height={100}
            className="pointer-events-none absolute right-0 top-6 hidden animate-hand lg:block"
          />

        </div>
      </Container>
    </Section>
  );
}