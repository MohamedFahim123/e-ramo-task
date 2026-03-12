"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Section } from "@/components/shared/ui/section";
import { Container } from "@/components/shared/ui/container";
import { coworkingSpaces } from "./coworking-data";

export function CoworkingSpacesSection() {
  const t = useTranslations("Home.coworking");

  return (
    <Section>
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">{t("title")}</h2>

          <p className="mt-4 text-sm md:text-base text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coworkingSpaces.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[24px] cursor-pointer"
            >
              <Image
                src={item.image}
                alt=""
                width={500}
                height={350}
                className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100 flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-white text-2xl font-semibold">
                  {t(`cards.${item.id}.title`)}
                </h3>

                <p className="mt-3 text-white text-sm max-w-[320px]">
                  {t(`cards.${item.id}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
