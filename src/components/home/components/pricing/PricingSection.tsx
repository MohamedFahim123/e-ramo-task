"use client";

import { Container } from "@/components/shared/ui/container";
import { Section } from "@/components/shared/ui/section";
import { useEffect, useState } from "react";
import { pricingPlans } from "./data";
import { PricingCard } from "./PricingCard";
import { PricingEmpty } from "./PricingEmpty";
import { PricingSidebar } from "./PricingSidebar";
import { PricingToggle } from "./PricingToggle";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
    BadgeCheck,
    ChevronLeft,
    ChevronRight,
    RefreshCcw,
    ShieldCheck,
} from "lucide-react";

export function PricingSection() {
  const [yearly, setYearly] = useState(false);
  const [category, setCategory] = useState("shared");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const filtered = pricingPlans.filter((p) => p.category === category);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })],
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const updateCarouselState = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateCarouselState();
    emblaApi.on("select", updateCarouselState);
    emblaApi.on("reInit", updateCarouselState);

    return () => {
      emblaApi.off("select", updateCarouselState);
      emblaApi.off("reInit", updateCarouselState);
    };
  }, [emblaApi]);

  useEffect(() => {
    setSelectedIndex(0);
    emblaApi?.scrollTo(0);
  }, [category, yearly, emblaApi]);

  return (
    <Section className="overflow-hidden py-18 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#d9a870]/40 bg-[#fff8ed] px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#7c6b46]">
            Membership Plans
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Choose Your Perfect Plan</h2>

          <p className="mt-4 text-muted-foreground">
            Enjoy flexible plans tailored to your needs.
          </p>
        </div>

        <PricingToggle yearly={yearly} onChange={setYearly} />

        <div className="mt-12 grid items-start gap-8 lg:mt-16 lg:grid-cols-[300px_1fr] lg:gap-10">
          <PricingSidebar active={category} setActive={setCategory} />

          {filtered.length === 0 ? (
            <PricingEmpty />
          ) : (
            <div className="relative overflow-hidden rounded-[2.25rem] border border-[#e6ecdd] bg-[linear-gradient(180deg,#f9fbf7_0%,#eff5ea_100%)] p-4 shadow-[0_28px_70px_rgba(54,83,39,0.08)] sm:p-5 lg:p-6">
              <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-[#d9a870]/15 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#94a78c]/18 blur-3xl" />

              <div className="relative z-10 flex flex-col gap-4 pb-4 sm:pb-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#223616] sm:text-xl">Plans for {category}</h3>
                  <p className="mt-1 text-sm text-[#647062]">Swipe on mobile to compare packages quickly.</p>
                </div>

                <div className="hidden items-center gap-2 md:flex">
                  <button
                    onClick={scrollPrev}
                    disabled={!canScrollPrev}
                    name="Previous"
                    title="Previous"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#94a78c] text-white shadow-md transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    onClick={scrollNext}
                    disabled={!canScrollNext}
                    name="Next"
                    title="Next"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#94a78c] text-white shadow-md transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              <div className="relative z-10 -mx-1 overflow-hidden px-1 sm:mx-0 sm:px-0" ref={emblaRef}>
                <div className="flex gap-4 md:hidden">
                  {filtered.map((item) => (
                    <div
                      key={item.id}
                      className="min-w-0 flex-[0_0_100%] px-1"
                    >
                      <PricingCard plan={item} yearly={yearly} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-5 flex items-center justify-between gap-4 md:hidden">
                <div className="flex items-center gap-2">
                  {filtered.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => emblaApi?.scrollTo(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        selectedIndex === index ? "w-7 bg-[#365327]" : "w-2.5 bg-[#b7c4af]"
                      }`}
                      aria-label={`Go to ${item.title}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={scrollPrev}
                    disabled={!canScrollPrev}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8e0d1] bg-white text-[#365327] shadow-sm transition disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    onClick={scrollNext}
                    disabled={!canScrollNext}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8e0d1] bg-white text-[#365327] shadow-sm transition disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="relative z-10 hidden gap-5 md:grid md:grid-cols-2 2xl:grid-cols-3">
                {filtered.map((item) => (
                  <div key={item.id} className="min-w-0">
                    <PricingCard plan={item} yearly={yearly} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-8 text-sm text-gray-500 md:mt-20 md:flex-row md:gap-12">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-500 w-5 h-5" />
            <span>Secure Payments</span>
          </div>

          <div className="flex items-center gap-3">
            <BadgeCheck className="text-blue-500 w-5 h-5" />
            <span>Instant Activation</span>
          </div>

          <div className="flex items-center gap-3">
            <RefreshCcw className="text-purple-500 w-5 h-5" />
            <span>Flexible Cancellation</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
