"use client";

import { Container } from "@/components/shared/ui/container";
import { Send } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useLocale } from "use-intl/react";

type NewsletterForm = {
  email: string;
};

export function NewsletterSection() {
  const lang = useLocale();

  const t = {
    en: {
      title: "Subscribe To Our Newsletter",
      subtitle:
        "Every couple of weeks we send out an update and a few things that have inspired us.",
      placeholder: "Write Your Mail Here...",
      button: "Subscribe",
    },
    ar: {
      title: "اشترك في النشرة البريدية",
      subtitle: "كل بضعة أسابيع نرسل تحديثات وأشياء ألهمتنا.",
      placeholder: "اكتب بريدك الإلكتروني...",
      button: "اشتراك",
    },
  };

  const tr = t[lang as "en" | "ar"];

  const { register, handleSubmit, reset } = useForm<NewsletterForm>();

  const onSubmit = (data: NewsletterForm) => {
    console.log(data);
    reset();
  };

  return (
    <div className="relative mt-20 w-full overflow-hidden py-10 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#d9a870]/40 bg-[linear-gradient(180deg,#fffdf9_0%,#f7f3ec_100%)] px-5 py-10 text-center shadow-[0_24px_60px_rgba(54,83,39,0.08)] sm:px-8 sm:py-12 lg:px-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(217,168,112,0.18),transparent_70%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(circle_at_bottom,rgba(54,83,39,0.12),transparent_70%)]" />

          <Image
            src="/assets/icons/01.svg"
            alt=""
            width={72}
            height={72}
            className="newsletter-orbit-left pointer-events-none absolute -left-2 top-8 hidden w-14 opacity-75 md:block lg:left-4 lg:top-10 lg:w-[72px]"
          />

          <Image
            src="/assets/icons/02.svg"
            alt=""
            width={64}
            height={64}
            className="newsletter-orbit-right pointer-events-none absolute -right-1 bottom-10 hidden w-12 opacity-90 md:block lg:right-5 lg:bottom-8 lg:w-16"
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h3 className="text-2xl font-semibold sm:text-3xl">{tr.title}</h3>

            <p className="mx-auto mt-4 max-w-xl text-gray-500">{tr.subtitle}</p>

            <div className="mt-5 flex items-center justify-center gap-3 md:hidden">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d9a870]/40 bg-white/80 shadow-[0_12px_24px_rgba(54,83,39,0.08)]">
                <Image src="/assets/icons/01.svg" alt="" width={22} height={22} className="newsletter-orbit-left h-5 w-5 opacity-75" />
              </span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d9a870]/40 bg-white/80 shadow-[0_12px_24px_rgba(54,83,39,0.08)]">
                <Image src="/assets/icons/02.svg" alt="" width={22} height={22} className="newsletter-orbit-right h-5 w-5 opacity-90" />
              </span>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto mt-8 flex max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder={tr.placeholder}
                className="h-12 w-full rounded-xl border border-[#d9a870] bg-white/85 px-4 outline-none transition focus:ring-2 focus:ring-green-700"
              />

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#3b5d36] px-6 text-white transition hover:opacity-90 sm:w-auto sm:min-w-[150px]"
              >
                {tr.button}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
