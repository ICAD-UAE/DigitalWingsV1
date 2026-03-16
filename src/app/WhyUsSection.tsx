'use client';
import Image from 'next/image';

const WhyUsSection = () => {
  const features = [
    {
      id: 1,
      icon: '/images/img_tabler_circle_triangle.svg',
      title: 'GUARANTEE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      icon: '/images/img_mdi_crown_outline.svg',
      title: 'SERVICE',
      description: 'Nunc vulputate libero et velit interdum, ac aliquet odio.'
    },
    {
      id: 3,
      icon: '/images/img_mdi_ruler_square_compass.svg',
      title: 'EXPERIENCE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      {/* Background Image */}
      <Image
        src="/images/img_rectangle_63.png"
        alt="Why choose us section background with scenic travel destination"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover object-center"
        quality={80}
      />
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="w-full max-w-[1016px] mx-auto relative z-10">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-[48px]">
          
          {/* Section Title */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-grape font-normal leading-[30px] sm:leading-[35px] md:leading-[42px] lg:leading-[49px] text-text-primary text-center shadow-[0px_4px_4px_#0000003f]">
            Why Us?
          </h2>

          {/* Features Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-[70px]">
            {features?.map((feature) => (
              <div 
                key={feature?.id}
                className="flex flex-col items-center text-center bg-background-overlay p-6 sm:p-8 md:p-10 lg:p-[44px] rounded-lg shadow-[0px_0px_5px_#0000003f] hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <img 
                    src={feature?.icon} 
                    alt={feature?.title}
                    className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-abril font-normal leading-[20px] sm:leading-[24px] md:leading-[27px] text-text-secondary mb-3 sm:mb-4 md:mb-6">
                  {feature?.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-work font-extralight leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[23px] text-text-primary">
                  {feature?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection