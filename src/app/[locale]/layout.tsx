import type { Metadata } from "next";
import Image from "next/image";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/components/site-footer";
import { SiteHeader } from "@/components/layout/components/site-header";
import { getLocalizedUrl, siteConfig } from "@/components/shared/config/site";
import { getDirection } from "@/components/shared/i18n/config";
import { routing, type AppLocale } from "@/components/shared/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Metadata.home" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: getLocalizedUrl(locale),
      languages: {
        en: getLocalizedUrl("en"),
        ar: getLocalizedUrl("ar"),
      },
    },
    openGraph: {
      type: "website",
      title: t("title"),
      description: t("description"),
      url: getLocalizedUrl(locale),
      images: [{ url: `${siteConfig.siteUrl}/assets/hero-section/1735566342.webp`, width: 1100, height: 560, alt: t("title") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`${siteConfig.siteUrl}/assets/hero-section/1735566342.webp`],
    },
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const typedLocale = locale as AppLocale;
  const messages = await getMessages({ locale: typedLocale });
  const dir = getDirection(typedLocale);

  return (
    <NextIntlClientProvider locale={typedLocale} messages={messages}>
      <div lang={typedLocale} dir={dir} data-locale={typedLocale} className="min-h-screen">
        <div className="pointer-events-none fixed left-0 right-0 top-0 z-50 hidden sm:block">
          <Image src="/assets/ramadan.webp" alt="" width={400} height={400} sizes="(max-width: 640px) 0px, 208px" className="float-ramadan absolute right-0 top-0 w-20 sm:w-28 md:w-36 lg:w-44 xl:w-52" />
          <Image src="/assets/ramadan.webp" alt="" width={400} height={400} sizes="(max-width: 640px) 0px, 208px" className="float-ramadan absolute left-0 top-0 w-20 -scale-x-100 sm:w-28 md:w-36 lg:w-44 xl:w-52" />
        </div>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </NextIntlClientProvider>
  );
}
