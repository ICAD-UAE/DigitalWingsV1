'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Destination {
  id: number
  country: string
  city: string
  price: string
  image: string
  alt: string
  description: string
}

const PopularDestinations = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesVisible, setSlidesVisible] = useState(4)

  const destinations: Destination[] = [
    {
      id: 1,
      country: 'ITALY',
      city: 'Venice',
      price: '$199',
      image: '/images/img_rectangle_55.png',
      alt: 'Venice canal with gondolas and historic buildings in Italy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      country: 'MALDIVES',
      city: 'San Paolo',
      price: '$249',
      image: '/images/img_rectangle_58.png',
      alt: 'Crystal clear turquoise waters and overwater bungalows in the Maldives',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 3,
      country: 'BAHAMAS',
      city: 'Barbados',
      price: '$299',
      image: '/images/img_rectangle_61.png',
      alt: 'Tropical beach with white sand and palm trees in the Bahamas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 4,
      country: 'GREECE',
      city: 'Cyprus',
      price: '$239',
      image: '/images/img_rectangle_63.png',
      alt: 'White-washed buildings and blue domes overlooking the sea in Greece',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const updateSlidesVisible = () => {
      if (window.innerWidth < 640) setSlidesVisible(1)
      else if (window.innerWidth < 768) setSlidesVisible(2)
      else if (window.innerWidth < 1024) setSlidesVisible(3)
      else setSlidesVisible(4)
    }
    updateSlidesVisible()
    window.addEventListener('resize', updateSlidesVisible)
    return () => window.removeEventListener('resize', updateSlidesVisible)
  }, [])

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-[42px] relative">
      {/* Background Image */}
      <Image
        src="/images/img_rectangle_3.png"
        alt="Popular destinations section background with scenic landscape"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover object-center"
        quality={80}
      />
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />
      
      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-[32px]">
          
          {/* Section Title */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-grape font-normal leading-[30px] sm:leading-[35px] md:leading-[42px] lg:leading-[49px] text-text-primary text-center shadow-[0px_4px_4px_#0000003f]">
            Popular Destinations
          </h2>

          {/* Destinations Slider */}
          <div className="w-full relative">
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-[26px]">
              
              {/* Previous Button */}
              <button 
                onClick={prevSlide}
                className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Previous destination"
              >
                <img 
                  src="/images/img_group_8.svg" 
                  alt="Previous" 
                  className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px]"
                />
              </button>

              {/* Destinations Grid */}
              <div className="flex-1 overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6 md:gap-8 lg:gap-[26px]"
                  style={{ 
                    transform: `translateX(-${currentSlide * (100 / Math.min(destinations.length, slidesVisible))}%)` 
                  }}
                >
                  {destinations.map((destination) => (
                    <div key={destination.id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[230px]">
                      <div className="relative bg-background-overlayStrong rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        
                        {/* Country Label */}
                        <div className="absolute top-4 left-4 z-20">
                          <h3 className="text-[14px] sm:text-[16px] font-abril font-normal leading-[18px] sm:leading-[22px] text-white">
                            {destination.country}
                          </h3>
                        </div>

                        {/* Destination Image */}
                        <div className="relative w-full h-[180px] sm:h-[200px] md:h-[212px]">
                          <Image 
                            src={destination.image} 
                            alt={destination.alt}
                            fill
                            loading="lazy"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 230px"
                            className="object-cover"
                          />
                        </div>

                        {/* Destination Details */}
                        <div className="p-3 sm:p-4 md:p-6">
                          <div className="flex items-start justify-between mb-2 sm:mb-3">
                            <div className="flex-1">
                              <h4 className="text-[12px] sm:text-[14px] font-grape font-normal leading-[15px] sm:leading-[18px] text-text-primary">
                                {destination.city}
                              </h4>
                            </div>
                            <div className="text-right">
                              <span className="text-[16px] sm:text-[18px] md:text-[20px] font-work font-thin leading-[20px] sm:leading-[22px] md:leading-[24px] text-text-primary">
                                {destination.price}
                              </span>
                              <p className="text-[5px] sm:text-[6px] font-work font-thin leading-[6px] sm:leading-[8px] text-text-primary">
                                per Person
                              </p>
                            </div>
                          </div>
                          <p className="text-[8px] sm:text-[9px] md:text-[10px] font-work font-extralight leading-[9px] sm:leading-[10px] md:leading-[11px] text-text-primary line-clamp-2">
                            {destination.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button 
                onClick={nextSlide}
                className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Next destination"
              >
                <img 
                  src="/images/img_group_8_white_a700.svg" 
                  alt="Next" 
                  className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularDestinations