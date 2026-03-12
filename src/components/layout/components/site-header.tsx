"use client";

import { navItems, productItems } from "@/components/layout/data/navigation";
import {
  Link,
  usePathname,
  useRouter,
} from "@/components/shared/i18n/navigation";
import type { AppLocale } from "@/components/shared/i18n/routing";
import { Button } from "@/components/shared/ui/button";
import { Container } from "@/components/shared/ui/container";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shared/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCallback, useMemo, useTransition } from "react";
import ReactCountryFlag from "react-country-flag";

type LinkItem = {
  id: string;
  href: string;
};

type LinkState<T extends LinkItem> = T & {
  isActive: boolean;
};

function normalizePathname(pathname: string) {
  if (pathname === "/") return pathname;
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function toInternalPathname(pathname: string) {
  const normalized = normalizePathname(pathname);

  if (normalized === "/en" || normalized === "/ar") return "/";

  if (normalized.startsWith("/en/")) return normalized.replace("/en", "");
  if (normalized.startsWith("/ar/")) return normalized.replace("/ar", "");

  return normalized;
}

function isActivePath(current: string, target: string) {
  if (target === "/") return current === "/";
  return current === target || current.startsWith(`${target}/`);
}

function withActiveState<T extends LinkItem>(
  items: readonly T[],
  current: string,
): LinkState<T>[] {
  return items.map((item) => ({
    ...item,
    isActive: isActivePath(current, item.href),
  }));
}

export function SiteHeader() {
  const headerT = useTranslations("Header");
  const commonT = useTranslations("Common");
  const locale = useLocale() as AppLocale;

  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isSwitchingLocale, startTransition] = useTransition();

  const nextLocale = locale === "ar" ? "en" : "ar";

  const switchLabel = nextLocale === "ar" ? "العربية" : "English";
  const countryCode = nextLocale === "ar" ? "EG" : "US";

  const internalPathname = useMemo(
    () => toInternalPathname(pathname),
    [pathname],
  );

  const currentPathname = useMemo(
    () => normalizePathname(internalPathname),
    [internalPathname],
  );

  const primaryNavItems = useMemo(
    () => withActiveState(navItems.slice(0, 2), currentPathname),
    [currentPathname],
  );

  const secondaryNavItems = useMemo(
    () => withActiveState(navItems.slice(2), currentPathname),
    [currentPathname],
  );

  const mobileNavItems = useMemo(
    () => withActiveState(navItems, currentPathname),
    [currentPathname],
  );

  const productNavItems = useMemo(
    () => withActiveState(productItems, currentPathname),
    [currentPathname],
  );

  const handleLocaleSwitch = useCallback(() => {
    startTransition(() => {
      router.replace(
        {
          pathname: internalPathname,
          query: Object.fromEntries(searchParams.entries()),
        },
        { locale: nextLocale },
      );
    });
  }, [internalPathname, nextLocale, router, searchParams, startTransition]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <Container>
        <div className="glass-card flex items-center justify-between gap-4 rounded-b-[1rem] bg-white/96 px-4 py-4 md:px-6 lg:px-7">
          <Link href="/" className="relative block w-[60px] shrink-0">
            <Image
              src="/branding/logo.webp"
              alt="Chair Location"
              width={60}
              height={60}
              priority
              className="h-auto w-[52px]"
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center lg:flex">
            <ul className="flex items-center gap-5 text-[13px] font-semibold text-[var(--muted-foreground)]">
              {primaryNavItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="nav-link"
                    data-active={item.isActive ? "true" : undefined}
                  >
                    {headerT(`nav.${item.id}`)}
                  </Link>
                </li>
              ))}

              <li className="group relative">
                <button className="nav-link inline-flex items-center gap-1">
                  {headerT("productsMenu")}
                  <ChevronDown className="h-4 w-4" />
                </button>

                <div className="invisible absolute top-full pt-5 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[250px] rounded-b-xl bg-[var(--surface)] shadow-2xl">
                    {productNavItems.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="block border-b px-4 py-3 text-sm hover:bg-[#365327]/80 hover:text-white"
                      >
                        {headerT(`products.${item.id}`)}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {secondaryNavItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="nav-link"
                    data-active={item.isActive ? "true" : undefined}
                  >
                    {headerT(`nav.${item.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              variant="outline"
              size="sm"
              name={switchLabel}
              title={ switchLabel}
              className="gap-2 font-bold"
              onClick={handleLocaleSwitch}
              disabled={isSwitchingLocale}
            >
              <ReactCountryFlag
                countryCode={countryCode}
                svg
                alt="Country Flag"
                title={switchLabel}
                style={{ width: "1.25rem", height: "1.25rem" }}
                className="me-2"
              />
              {switchLabel}
            </Button>

            <Button size="sm">{commonT("actions.createAccount")}</Button>

            <Button size="sm" variant="outline">
              {commonT("actions.login")}
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle>{headerT("nav.home")}</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-4 pt-4">
                {mobileNavItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="rounded-xl px-3 py-2 font-semibold hover:bg-[var(--secondary)]"
                  >
                    {headerT(`nav.${item.id}`)}
                  </Link>
                ))}

                <button
                  onClick={handleLocaleSwitch}
                                name={switchLabel}
              title={ switchLabel}
                  className="flex items-center justify-center gap-2 rounded-xl border px-3 py-2 font-semibold"
                >
                  <ReactCountryFlag
                    countryCode={countryCode}
                    svg
                    alt="Country Flag"
                    title={switchLabel}
                    style={{ width: "1.25rem", height: "1.25rem" }}
                  />
                  {switchLabel}
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
