'use client';
import HeroSection from'./HeroSection';
 import PopularDestinations from'./PopularDestinations';
 import VideoSection from'./VideoSection';
 import WhyUsSection from'./WhyUsSection';
 import AdventureSection from'./AdventureSection';
import NewsletterAwardSection from './NewsletterAwardSection';
 import ExperienceSection from'./ExperienceSection';

const HomePage = () => {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <PopularDestinations />
      <VideoSection />
      <WhyUsSection />
      <AdventureSection />
      <NewsletterAwardSection />
      <ExperienceSection />
    </main>
  )
}

export default HomePage