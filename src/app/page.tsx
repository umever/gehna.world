"use client"
import {HeroCarousel} from "./home/components/hero_carousel";
import NewsletterSubscribe from "./home/components/newsletter_subscribe";
import PromoSection from "./home/components/promo-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroCarousel />
      <PromoSection />
      <NewsletterSubscribe />
    </div>
  );
}
