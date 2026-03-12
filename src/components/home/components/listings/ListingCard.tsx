"use client";

import { ArrowRight, Heart, Share2, Star, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LoginModal } from "./LoginModal";
import { Listing } from "./data";

type Props = {
  item: Listing;
};

export function ListingCard({ item }: Props) {
  const [open, setOpen] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: item.title,
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard");
    }
  };

  return (
    <>
      <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#e9ecef] bg-white transition duration-300 hover:shadow-md">
        <div className="relative h-[210px] overflow-hidden rounded-t-2xl">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-[#35572f]/40 opacity-0 transition duration-300 group-hover:opacity-100" />

          <div
            className={`absolute left-[-45px] top-[22px] rotate-[-45deg] px-14 py-1 text-xs font-semibold text-white
            ${item.available ? "bg-[#8ea987]" : "bg-[#c76969]"}`}
          >
            {item.available ? "Available" : "Not Available"}
          </div>

          <div className="absolute right-3 top-3 flex gap-2">
            <button
              onClick={handleShare}
              name="share"
              title="share"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-gray-100"
            >
              <Share2 size={16} />
            </button>

            <button
              onClick={() => setOpen(true)}
              name="favorite"
              title="Add to favorites"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-gray-100"
            >
              <Heart size={16} />
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="rounded-md bg-[#f2f3f1] px-3 py-[3px] text-xs text-[#3b5d36]">
              {item.category}
            </span>

            <div className="flex items-center gap-1 text-xs">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              {item.rating} (Review)
            </div>
          </div>

          <h3 className="mt-3 text-[17px] font-semibold text-[#1f2937]">
            {item.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm text-[#6b7280]">
            {item.description}
          </p>

          <div className="mt-4 flex items-center justify-between text-sm text-[#6b7280]">
            <div className="flex items-center gap-2">
              <Users size={16} />
              {item.capacity}
            </div>

            <span className="font-medium text-[#3b5d36]">Open</span>
          </div>

          <div className="mt-4 flex items-center justify-between border-t pt-4">
            <span className="text-sm text-[#111827]">
              Starts From: <b>{item.price} SAR</b> /{item.unit}
            </span>

            <ArrowRight className="animate-[arrowMove_1.2s_infinite]" />
          </div>
        </div>
      </div>

      <LoginModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
