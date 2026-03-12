"use client";

import Image from "next/image";

export function LoginModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-[420px] rounded-xl bg-white p-8 text-center shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400"
        >
          ✕
        </button>

        <Image
          src="/branding/logo.webp"
          alt=""
          width={80}
          height={80}
          className="mx-auto"
        />

        <h3 className="mt-4 text-xl font-semibold">CHAIR LOCATION</h3>

        <p className="mt-2 text-sm text-gray-500">
          Please login or signIn first.
        </p>

        <div className="mt-6 flex gap-3">
          <button className="flex-1 rounded-lg bg-[#3b5d36] py-3 text-white">
            Login
          </button>

          <button className="flex-1 rounded-lg border py-3">Register</button>
        </div>
      </div>
    </div>
  );
}
