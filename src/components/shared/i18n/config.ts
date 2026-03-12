import { hasLocale } from "next-intl";
import { routing, type AppLocale } from "@/components/shared/i18n/routing";

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;

export function isLocale(value: string): value is AppLocale {
  return hasLocale(locales, value);
}

export function getDirection(locale: AppLocale) {
  return locale === "ar" ? "rtl" : "ltr";
}
