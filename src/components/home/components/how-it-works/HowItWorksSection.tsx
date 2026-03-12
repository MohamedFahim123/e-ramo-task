"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { Container } from "@/components/shared/ui/container";
import { Section } from "@/components/shared/ui/section";

const steps = [
  { id: 1, image: "/assets/how-it-works/1.webp" },
  { id: 2, image: "/assets/how-it-works/2.webp" },
  { id: 3, image: "/assets/how-it-works/3.webp" },
];

export function HowItWorksSection() {
  const t = useTranslations("Home.howItWorks");

  return (
    <Section>
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">{t("title")}</h2>

          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div className="group text-center cursor-pointer" key={step.id}>
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6d5bf] text-sm font-semibold">
                  {step.id}
                </span>

                <h3 className="text-base font-medium">
                  {t(`steps.${step.id}.title`)}
                </h3>
              </div>

              <div className="relative mx-auto h-[210px] w-full max-w-[320px] overflow-hidden rounded-[16px] transition-all duration-300 group-hover:shadow-lg">
                <Image
                  src={step.image}
                  alt=""
                  fill
                  sizes="(max-width:768px) 100vw, 320px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <p className="mx-auto mt-4 max-w-[320px] text-sm text-muted-foreground">
                {t(`steps.${step.id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
