import { LatestListingsSection } from "./latest-listings/LatestListingsSection";
import {
  deskListings,
  latestListings,
  meetingListings,
  officeListings,
  sharedListings,
} from "./listings/data";
import { ListingSection } from "./listings/ListingSection";
import { AboutSection } from "./about-section/AboutSection";
import { HeroSection } from "./hero-section/HeroSection";
import { HowItWorksSection } from "./how-it-works/HowItWorksSection";
import { CoworkingSpacesSection } from "./coworking-section/CoworkingSpacesSection";
import { AppExploreSection } from "./appexplore-section/AppExploreSection";
import { PricingSection } from "./pricing/PricingSection";
import RecentArticles from "./recent-articles/RecentArticles";
import { articles } from "../data/home-data";
import { ContactSection } from "./contact-section/ContactSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ListingSection
        title="Latest Listings In Jeddah"
        items={latestListings}
        bg={true}
      />
      <ListingSection title="Shared Area In Jeddah" items={sharedListings} />
      <ListingSection
        bg={true}
        title="Meeting Room In Jeddah"
        items={meetingListings}
      />
      <ListingSection title="Private Office In Jeddah" items={officeListings} />
      <ListingSection
        bg={true}
        title="Dedicated Desk In Jeddah"
        items={deskListings}
      />

      <LatestListingsSection />

      <HowItWorksSection />

      <CoworkingSpacesSection />

      <AppExploreSection />

      <PricingSection />

      <RecentArticles articles={articles} />

      <ContactSection />
    </>
  );
}
