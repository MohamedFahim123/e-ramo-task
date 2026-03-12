import { AppLocale } from "../i18n/routing";

const siteUrl = "https://www.chairlocation.com";

export const siteConfig = {
  name: "Chair Location",
  siteUrl,
  defaultLocale: "en" as AppLocale,
  contactEmail: "info@chairlocation.com",
  phone: "+9660540581086",
  socialLinks: {
    facebook: "https://www.facebook.com/chairlocationcom",
    linkedin: "https://www.linkedin.com/company/chair-location",
    instagram: "https://www.instagram.com/chairlocation.sa/",
    tiktok: "https://www.tiktok.com/@chairlocation",
  },
};

export function getLocalizedUrl(locale: AppLocale, pathname = "") {
  return `${siteUrl}/${locale}${pathname}`;
}
