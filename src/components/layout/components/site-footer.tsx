"use client";

import Image from "next/image";
import { Apple, Play } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

import {
  footerLegalItems,
  navItems,
  productItems,
} from "@/components/layout/data/navigation";

import { Link } from "@/components/shared/i18n/navigation";
import { Container } from "@/components/shared/ui/container";

export function SiteFooter() {
  const t = useTranslations("Footer");
  const header = useTranslations("Header");
  const common = useTranslations("Common");

  return (
    <footer className="bg-[#f3f5f6]">
      <Container>
        <div className="rounded-[1.75rem]  bg-[#f3f5f6] px-5 py-8 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr_1fr_1.1fr]">
            <div>
              <Image
                src="/branding/logo-footer.webp"
                alt="Chair Location footer logo"
                width={112}
                height={112}
                sizes="112px"
                className="mb-6 h-auto w-[100px]"
              />
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-[var(--primary)]">
                {t("mainPagesTitle")}
              </h3>

              <div className="space-y-3 text-sm text-[var(--muted-foreground)]">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block transition hover:text-[var(--primary)]"
                  >
                    {header(`nav.${item.id}`)}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-[var(--primary)]">
                {t("productsTitle")}
              </h3>

              <div className="space-y-3 text-sm text-[var(--muted-foreground)]">
                {productItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block transition hover:text-[var(--primary)]"
                  >
                    {header(`products.${item.id}`)}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-[var(--primary)]">
                {t("downloadTitle")}
              </h3>

              <div className="flex flex-col gap-3 md:max-w-[220px]">
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-xl border border-[var(--primary)] bg-[var(--surface)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--secondary)]"
                >
                  <Image
                    src="/assets/app-explore/google-play.svg"
                    alt="Google Play"
                    width={22}
                    height={22}
                    className="h-5 w-5"
                  />
                  {common("downloads.google")}
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-xl border border-[var(--primary)] bg-[var(--surface)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--secondary)]"
                >
                  <Image
                    src="/assets/app-explore/apple.webp"
                    alt="App Store"
                    width={22}
                    height={22}
                    className="h-8 w-8"
                  />
                  {common("downloads.apple")}
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted-foreground)] lg:flex-row lg:items-center lg:justify-between">
            <div className="grid gap-3 sm:grid-cols-2 lg:flex lg:flex-wrap lg:gap-5">
              {footerLegalItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="transition hover:text-[var(--primary)]"
                >
                  {t(`legal.${item.id}`)}
                </Link>
              ))}
            </div>

            <p>(c) 2026 {t("copyright")}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
