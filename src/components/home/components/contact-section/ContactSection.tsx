"use client";

import { Container } from "@/components/shared/ui/container";
import { Section } from "@/components/shared/ui/section";
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useLocale } from "use-intl/react";
import { NewsletterSection } from "./NewsletterSection";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function ContactSection() {
  const lang = useLocale();
  const isRTL = lang === "ar";

  const t = {
    en: {
      title: "Contact Us",
      subtitle: "We Are Here For Your Help",
      name: "Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Your Message",
      send: "Send",
      address:
        "Address: Saad Al-Junaidel Street, Jarir Building, Sari Branch, Jeddah",
      website: "www.chairlocation.com",
      follow: "Follow us",
    },
    ar: {
      title: "تواصل معنا",
      subtitle: "نحن هنا لمساعدتك",
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      message: "رسالتك",
      send: "إرسال",
      address: "العنوان: شارع سعد الجنيدل، مبنى جرير، فرع الساري، جدة",
      website: "www.chairlocation.com",
      follow: "تابعنا",
    },
  };

  const tr = t[lang as "en" | "ar"];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    console.log(data);
    reset()
  };

  return (
    <Section className="py-20">
      <Container 
        className={`grid gap-10 lg:grid-cols-2 border-b pb-10 border-[#eee] ${isRTL ? "lg:grid-flow-dense" : ""}`}
            >
        <div>
          <h2 className="text-3xl font-semibold">{tr.title}</h2>
          <p className="text-gray-500 mt-2">{tr.subtitle}</p>

          <div className="space-y-8 mt-10 text-gray-600">
            <div className="flex items-start gap-4">
              <MapPin className="text-green-700 mt-1" size={22} />
              <p>{tr.address}</p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-green-700" size={22} />
              <a href="tel:+9660540581086">+9660540581086</a>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-green-700" size={22} />
              <a href="mailto:info@chairlocation.com">info@chairlocation.com</a>
            </div>

            <div className="flex items-center gap-4">
              <Globe className="text-green-700" size={22} />
              <a
                href="https://www.chairlocation.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {tr.website}
              </a>
            </div>
          </div>

          <div className="mt-10">
            <p className="font-medium text-gray-700">{tr.follow}</p>

            <div className="flex gap-6 mt-4 text-gray-400">
              <Facebook className="cursor-pointer hover:text-gray-700 transition" />
              <Linkedin className="cursor-pointer hover:text-gray-700 transition" />
              <Instagram className="cursor-pointer hover:text-gray-700 transition" />
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          noValidate
        >
          <div className="relative">
            <input
              id="name"
              {...register("name", { required: true })}
              className="peer w-full h-12 px-4 pt-4 rounded-lg border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder=" "
              aria-invalid={!!errors.name}
            />

            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-3.5 
              peer-placeholder-shown:text-base 
              peer-focus:top-2 
              peer-focus:text-sm"
            >
              {tr.name}
            </label>
          </div>

          <div className="relative">
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              className="peer w-full h-12 px-4 pt-4 rounded-lg border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder=" "
            />

            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-3.5 
              peer-placeholder-shown:text-base 
              peer-focus:top-2 
              peer-focus:text-sm"
            >
              {tr.email}
            </label>
          </div>

          <div className="relative">
            <input
              id="phone"
              {...register("phone")}
              className="peer w-full h-12 px-4 pt-4 rounded-lg border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder=" "
            />

            <label
              htmlFor="phone"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-3.5 
              peer-placeholder-shown:text-base 
              peer-focus:top-2 
              peer-focus:text-sm"
            >
              {tr.phone}
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              rows={5}
              {...register("message", { required: true })}
              className="peer w-full px-4 pt-6 pb-3 rounded-lg border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder=" "
            />

            <label
              htmlFor="message"
              className="absolute left-4 top-3 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-4 
              peer-placeholder-shown:text-base 
              peer-focus:top-3 
              peer-focus:text-sm"
            >
              {tr.message}
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#94a78c] text-white px-12 py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {tr.send}
          </button>
        </form>

      </Container>
        <NewsletterSection />
    </Section>
  );
}
