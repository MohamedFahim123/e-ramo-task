"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import { getDirection } from "@/components/shared/i18n/config";
import type { AppLocale } from "@/components/shared/i18n/routing";

export function LocaleDocumentSync() {
  const locale = useLocale() as AppLocale;

  useEffect(() => {
    const dir = getDirection(locale);

    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    document.body.dir = dir;
    document.body.dataset.locale = locale;
  }, [locale]);

  return null;
}
