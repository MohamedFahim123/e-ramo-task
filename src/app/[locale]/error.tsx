"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/shared/ui/button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = useTranslations("Error");
  const common = useTranslations("Common.actions");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-shell flex min-h-[60vh] items-center justify-center pt-32">
      <div className="max-w-lg rounded-[2rem] bg-[var(--surface)] p-8 text-center shadow-[var(--shadow-soft)]">
        <h2 className="text-3xl font-semibold">{t("title")}</h2>
        <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">{t("description")}</p>
        <div className="mt-6 flex justify-center">
          <Button onClick={reset}>{common("retry")}</Button>
        </div>
      </div>
    </div>
  );
}
