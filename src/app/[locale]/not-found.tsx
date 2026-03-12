import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/shared/ui/button";
import { Link } from "@/components/shared/i18n/navigation";

export default function LocaleNotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="container-shell flex min-h-[70vh] items-center justify-center pt-32">
      <div className="soft-section relative max-w-2xl overflow-hidden p-8 text-center md:p-12">
        <div className="absolute -right-8 top-0 h-32 w-32 rounded-full bg-[var(--accent)]/40 blur-2xl" />
        <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-[var(--primary)]/10 blur-2xl" />
        <Image src="/branding/logo.webp" alt="Chair Location" width={72} height={72} sizes="72px" className="mx-auto h-auto w-[72px]" />
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">{t("eyebrow")}</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--foreground)] md:text-5xl">{t("title")}</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--muted-foreground)] md:text-base">{t("description")}</p>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/">{t("button")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
