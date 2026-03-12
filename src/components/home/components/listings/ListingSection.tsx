import { Container } from "@/components/shared/ui/container";
import { Section } from "@/components/shared/ui/section";
import { ArrowRight } from "lucide-react";
import { ListingCard } from "./ListingCard";
import { Listing } from "./data";

export function ListingSection({
  title,
  items,
  bg,
}: {
  title: string;
  items: Listing[];
  bg?: boolean;
}) {
  return (
    <Section className={`py-20 ${bg ? "bg-[#f5f5f5]" : ""}`}>
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p className="text-sm text-muted-foreground">
              Check our latest listings
            </p>
          </div>

          <button className="flex items-center gap-2 text-sm font-medium group">
            Show More
            <ArrowRight className="animate-[arrowMove_1.2s_infinite]" />
          </button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items?.map((item: Listing) => (
            <ListingCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
