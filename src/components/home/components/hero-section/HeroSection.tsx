"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";

import { heroSlides, heroTabs } from "@/components/home/data/home-data";
import { Button } from "@/components/shared/ui/button";
import { Container } from "@/components/shared/ui/container";
import { Section } from "@/components/shared/ui/section";

export function HeroSection() {
  const t = useTranslations("Home.hero");

  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  return (
    <Section spacing="hero">
      <Container>
        <div className="relative overflow-hidden rounded-[28px]">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {heroSlides.map((slide) => (
                <div
                  key={slide.id}
                  className="relative min-w-full h-[420px] md:h-[520px] lg:h-[620px]"
                >
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    priority={slide.id === "slide1"}
                    sizes="100vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                    <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
                      {t(slide.titleKey)}
                    </h1>

                    <p className="mt-4 max-w-xl text-sm md:text-lg">
                      {t(slide.descriptionKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative -mt-16 rounded-[26px] bg-[#e9e5df] p-6 shadow-xl md:p-8 lg:max-w-[90%] mx-auto">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {heroTabs.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center gap-2 rounded-xl bg-white/60 px-4 py-3 text-sm font-medium text-[#4c5c4c]"
              >
                <Image src={item.icon} alt="" width={20} height={20} />
                {t(`tabs.${item.id}`)}
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 md:flex-row">
            <div className="flex flex-1 items-center gap-3 rounded-xl bg-white px-4 py-3">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                placeholder={t("searchPlaceholder")}
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            <Button className="rounded-xl px-8">{t("search")}</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
