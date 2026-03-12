"use client";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { aboutAudienceKeys, aboutReasonKeys } from "@/components/home/data/home-data";
import { Button } from "@/components/shared/ui/button";
import { Container } from "@/components/shared/ui/container";
import { Section } from "@/components/shared/ui/section";

const gallery = [
  "/assets/about-section/1.webp",
  "/assets/about-section/2.webp",
  "/assets/about-section/3.webp",
];

export function AboutSection() {
  const t = useTranslations("Home.about");
  const actions = useTranslations("Common.actions");

  return (
    <Section id="about" className="py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">

          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              {t("title")}
            </h2>

            <p className="mt-5 text-sm leading-8 text-[var(--muted-foreground)] md:text-base">
              {t("intro")}
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold">
                {t("worksTitle")}
              </h3>

              <p className="mt-3 text-sm leading-8 text-[var(--muted-foreground)] md:text-base">
                {t("worksDescription")}
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold">
                {t("processTitle")}
              </h3>

              <div className="mt-4 space-y-3 text-sm leading-8 text-[var(--muted-foreground)] md:text-base">
                {(["search", "compare", "book"] as const).map((item) => (
                  <p key={item}>
                    <strong className="text-[var(--foreground)]">
                      {t(`process.${item}.label`)}:
                    </strong>{" "}
                    {t(`process.${item}.text`)}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold">
                {t("audienceTitle")}
              </h3>

              <div className="mt-4 space-y-3 text-sm leading-8 text-[var(--muted-foreground)] md:text-base">
                {aboutAudienceKeys.map((item) => (
                  <p key={item}>
                    <strong className="text-[var(--foreground)]">
                      {t(`audience.${item}.label`)}:
                    </strong>{" "}
                    {t(`audience.${item}.text`)}
                  </p>
                ))}
              </div>

              <p className="mt-4 text-sm leading-8 text-[var(--muted-foreground)] md:text-base">
                {t("summary")}
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold">
                {t("reasonsTitle")}
              </h3>

              <div className="mt-4 space-y-4">
                {aboutReasonKeys.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-center gap-3 text-sm md:text-base"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8dcc8]">
                      <Check className="h-4 w-4 text-[var(--primary)]" />
                    </span>

                    <span className="text-[var(--primary)]">
                      {t(`reasons.${reason}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="outline" className="px-8">
                {actions("contactUs")}
              </Button>

              <Button className="px-8">
                {actions("bookNow")}
              </Button>
            </div>
          </div>

          <div className="grid gap-5">
            {gallery.map((image) => (
              <div
                key={image}
                className="relative overflow-hidden rounded-[20px]"
              >
                <Image
                  src={image}
                  alt="Chair Location workspace"
                  width={800}
                  height={500}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-[200px] w-full object-cover md:h-[240px] lg:h-[260px]"
                />
              </div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}