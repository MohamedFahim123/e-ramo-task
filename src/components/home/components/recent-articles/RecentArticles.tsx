"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Article = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

export default function RecentArticles({
  articles,
  lang = "en",
}: {
  articles: Article[];
  lang?: "en" | "ar";
}) {
  const t = {
    en: {
      title: "Our Recent Articles",
      subtitle: "Stay Informed with Our Latest Insights",
      viewAll: "View All News",
    },
    ar: {
      title: "أحدث المقالات",
      subtitle: "ابقَ على اطلاع بآخر المقالات",
      viewAll: "عرض جميع الأخبار",
    },
  };

  const tr = t[lang];

  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              {tr.title}
            </h2>

            <p className="text-gray-500 mt-2 text-sm">
              {tr.subtitle}
            </p>
          </div>

          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-md bg-[var(--global)] text-white flex items-center justify-center hover:opacity-90">
              <ArrowLeft size={18} />
            </button>

            <button className="w-10 h-10 rounded-md bg-[var(--global)] text-white flex items-center justify-center hover:opacity-90">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group cursor-pointer"
            >
              <div className="relative h-[210px] rounded-xl overflow-hidden mb-5">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2 group-hover:text-[var(--global)] transition">
                {article.title}
              </h3>

              <p className="text-xs text-gray-400 mb-3">
                {article.date}
              </p>

              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <button className="bg-[var(--global)] text-white px-10 py-3 rounded-md font-medium hover:opacity-90 transition">
            {tr.viewAll}
          </button>
        </div>
      </div>
    </section>
  );
}