import { redirect } from "next/navigation";
import { defaultLocale } from "@/components/shared/i18n/config";

export default function IndexPage() {
  redirect(`/${defaultLocale}`);
}
