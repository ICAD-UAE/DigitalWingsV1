'use client';
import Image from 'next/image';
import Button from '../components/ui/button';

const ExperienceSection = () => {
  return (
    <section className="w-full">
      {/* Experience Banner */}
      <div className="w-full py-12 sm:py-16 md:py-20 lg:py-24 relative">
        {/* Background Image */}
        <Image
          src="/images/img_rectangle_61.png"
          alt="Experience section background with tropical beach and clear blue water"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover object-center"
          quality={80}
        />
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[36px] relative z-10">
          <div className="flex flex-col items-end text-right gap-6 sm:gap-8">
            
            {/* Experience Title */}
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-grape font-normal leading-[30px] sm:leading-[35px] md:leading-[42px] lg:leading-[49px] text-text-primary shadow-[0px_4px_4px_#0000003f]">
              Looking for an experience?
            </h2>

            {/* Experience Content */}
            <div className="flex flex-col items-end gap-4 sm:gap-6 w-full max-w-[600px]">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-work font-light leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[23px] text-text-primary text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet.
              </p>
              
              <Button
                text="VIEW PACKAGES"
                className="bg-primary-light text-white border border-white hover:bg-primary-background px-4 py-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-[162px] py-8 sm:py-12 md:py-16">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12">
            
            {/* Logo and Brand */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {/* Star Logo */}
              <div className="flex items-center">
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] bg-star-background shadow-[0px_4px_4px_#0000003f] rounded-full flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              
              {/* Brand Name */}
              <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[128px] font-allison font-normal leading-[76px] sm:leading-[102px] md:leading-[128px] lg:leading-[162px] text-text-primary shadow-[0px_4px_4px_#0000003f] text-center sm:text-left">
                DigitalWings
              </h1>
            </div>

            {/* Footer Navigation */}
            <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 md:gap-12 lg:gap-[60px] mt-6">
              <a href="#" className="text-[14px] sm:text-[16px] font-work font-light leading-2xl text-text-primary hover:text-primary-light transition-colors duration-200">
                Home
              </a>
              <a href="#" className="text-[14px] sm:text-[16px] font-work font-light leading-2xl text-text-primary hover:text-primary-light transition-colors duration-200">
                Packages
              </a>
              <a href="#" className="text-[14px] sm:text-[16px] font-work font-light leading-2xl text-text-primary hover:text-primary-light transition-colors duration-200">
                Tours
              </a>
              <a href="#" className="text-[14px] sm:text-[16px] font-work font-light leading-2xl text-text-primary hover:text-primary-light transition-colors duration-200">
                About Us
              </a>
              <a href="#" className="text-[14px] sm:text-[16px] font-work font-light leading-2xl text-text-primary hover:text-primary-light transition-colors duration-200">
                Contact
              </a>
            </nav>

            {/* Copyright */}
            <p className="text-[10px] sm:text-[12px] font-work font-extralight leading-md text-text-primary text-center mt-8 sm:mt-12">
              Copyright 2026 | DigitalWings.com | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
