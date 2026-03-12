import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations("Loading");

  return (
    <div className="container-shell pt-32">
      <div className="soft-section animate-pulse p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--primary)]">{t("title")}</p>
        <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted-foreground)]">{t("description")}</p>
        <div className="mt-6 h-10 w-40 rounded-full bg-white/80" />
        <div className="mt-6 h-14 w-2/3 rounded-2xl bg-white/80" />
        <div className="mt-4 h-5 w-full rounded-xl bg-white/70" />
        <div className="mt-2 h-5 w-5/6 rounded-xl bg-white/70" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="h-24 rounded-[1.5rem] bg-white/80" />
          <div className="h-24 rounded-[1.5rem] bg-white/80" />
          <div className="h-24 rounded-[1.5rem] bg-white/80" />
        </div>
        <div className="mt-8 h-[360px] rounded-[2rem] bg-white/80" />
      </div>
    </div>
  );
}
