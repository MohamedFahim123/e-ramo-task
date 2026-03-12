import Link from "next/link";
import { Button } from "@/components/shared/ui/button";

export default function RootNotFound() {
  return (
    <div className="container-shell flex min-h-screen items-center justify-center py-24">
      <div className="soft-section max-w-xl p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">404 Error</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--foreground)]">This page could not be found.</h1>
        <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">Return to the Chair Location homepage to continue browsing.</p>
        <div className="mt-6 flex justify-center">
          <Button asChild>
            <Link href="/en">Back To Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
