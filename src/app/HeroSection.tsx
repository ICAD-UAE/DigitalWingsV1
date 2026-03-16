'use client';
import { useState } from 'react';
import Image from 'next/image';
import Header from '../components/common/Header';

const HeroSection = () => {
  const [selectedTab, setSelectedTab] = useState('FLIGHTS')

  const tabs = ['FLIGHTS', 'HOTELS', 'TOURS']

  return (
    <section className="w-full min-h-screen relative">
      {/* Background Image */}
      <Image
        src="/images/img_rectangle_3.png"
        alt="Scenic travel destination background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={85}
      />
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-[1]"></div>
      {/* Content */}
      <div className="relative z-10 w-full">
        <Header />
        
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[10px] pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8">
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-[144px]">
            
            {/* Hero Text */}
            <div className="flex flex-col items-center text-center px-4 sm:px-8 md:px-16 lg:px-[264px] xl:px-[226px]">
              <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-abril font-normal leading-[32px] sm:leading-[44px] md:leading-[55px] lg:leading-[65px] text-white mb-4 sm:mb-6 md:mb-8">
                Your Dream Vacation Awaits
              </h1>
              <h2 className="text-[16px] sm:text-[20px] md:text-[26px] lg:text-[32px] font-grape font-normal leading-[20px] sm:leading-[26px] md:leading-[34px] lg:leading-[40px] text-white mb-8 sm:mb-12 md:mb-16 lg:mb-[96px]">
                Explore the World with us.
              </h2>
              
              {/* Flight Search Form */}
              <div className="w-full max-w-4xl">
                {/* Navigation Icons */}
                <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-[56px] mb-4 sm:mb-6">
                  <div className="flex items-center">
                    <img 
                      src="/images/img_vector.svg" 
                      alt="Location" 
                      className="w-[12px] h-[16px]"
                    />
                  </div>
                  <div className="flex items-center">
                    <img 
                      src="/images/img_vector.svg" 
                      alt="Location" 
                      className="w-[12px] h-[16px]"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <img 
                      src="/images/img_vector_black_900.svg" 
                      alt="Arrow" 
                      className="w-[12px] h-[10px]"
                    />
                  </div>
                  <div className="flex items-center">
                    <img 
                      src="/images/img_vector_black_900.svg" 
                      alt="Arrow" 
                      className="w-[12px] h-[10px]"
                    />
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="bg-primary-light p-1 rounded-t-lg mb-0">
                  <div className="flex items-center justify-center gap-0">
                    {tabs?.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={`flex flex-col items-center px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-[14px] font-work font-light leading-lg text-white transition-all duration-200 ${
                          selectedTab === tab ? 'bg-primary-light' : 'hover:bg-primary-background hover:bg-opacity-50'
                        }`}
                      >
                        {tab}
                        {selectedTab === tab && (
                          <div className="w-[40px] sm:w-[50px] md:w-[56px] h-[1px] bg-white mt-1"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Search Form */}
                <div className="bg-background-overlayHeavy p-4 sm:p-5 md:p-6 lg:p-[18px] rounded-b-lg shadow-[10px_10px_20px_#0000003f]">
                  <div className="flex flex-col lg:flex-row items-center gap-3 sm:gap-4 md:gap-5 lg:gap-0">
                    
                    {/* From Field */}
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <img 
                        src="/images/img_vector_gray_800.svg" 
                        alt="From" 
                        className="w-[8px] h-[10px] flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <label className="block text-xs font-alegreya font-normal leading-md text-text-muted mb-1">From</label>
                        <div className="w-full h-[2px]"></div>
                      </div>
                      <img 
                        src="/images/img_group_2.svg" 
                        alt="Dropdown" 
                        className="w-[14px] h-[6px] flex-shrink-0"
                      />
                    </div>

                    {/* Separator */}
                    <div className="hidden lg:block w-[1px] h-[22px] bg-background-muted mx-2"></div>

                    {/* To Field */}
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <img 
                        src="/images/img_vector_gray_800.svg" 
                        alt="To" 
                        className="w-[8px] h-[10px] flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <label className="block text-xs font-alegreya font-normal leading-md text-text-muted mb-1">To</label>
                        <div className="w-full h-[2px]"></div>
                      </div>
                      <img 
                        src="/images/img_group_2.svg" 
                        alt="Dropdown" 
                        className="w-[14px] h-[6px] flex-shrink-0"
                      />
                    </div>

                    {/* Separator */}
                    <div className="hidden lg:block w-[1px] h-[22px] bg-background-muted mx-2"></div>

                    {/* Departure Date */}
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div className="flex-1 min-w-0">
                        <label className="block text-xs font-alegreya font-normal leading-md text-text-muted mb-1">Departure Date</label>
                        <div className="w-full h-[2px]"></div>
                      </div>
                      <img 
                        src="/images/img_vector_black_900.svg" 
                        alt="Calendar" 
                        className="w-[12px] h-[12px] flex-shrink-0"
                      />
                    </div>

                    {/* Separator */}
                    <div className="hidden lg:block w-[1px] h-[22px] bg-background-muted mx-2"></div>

                    {/* Return Date */}
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div className="flex-1 min-w-0">
                        <label className="block text-xs font-alegreya font-normal leading-md text-text-muted mb-1">Return Date</label>
                        <div className="w-full h-[2px]"></div>
                      </div>
                      <img 
                        src="/images/img_vector_black_900.svg" 
                        alt="Calendar" 
                        className="w-[12px] h-[12px] flex-shrink-0"
                      />
                    </div>

                    {/* Separator */}
                    <div className="hidden lg:block w-[1px] h-[22px] bg-background-muted mx-2"></div>

                    {/* Travellers */}
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div className="flex-1 min-w-0">
                        <label className="block text-xs font-alegreya font-normal leading-md text-text-muted mb-1">Traveller(s), Class</label>
                        <div className="w-full h-[2px]"></div>
                      </div>
                      <img 
                        src="/images/img_group_2.svg" 
                        alt="Dropdown" 
                        className="w-[14px] h-[6px] flex-shrink-0"
                      />
                    </div>

                    {/* Separator */}
                    <div className="hidden lg:block w-[1px] h-[22px] bg-background-muted mx-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection