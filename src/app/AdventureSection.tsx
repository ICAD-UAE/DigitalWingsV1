'use client';
import Image from 'next/image';

interface Adventure {
  id: number
  title: string
  image: string
  alt: string
  description: string
  icon: string
  size: string
}

const AdventureSection = () => {
  const adventures: Adventure[] = [
    {
      id: 1,
      title: 'Canal Cruise',
      image: '/images/img_rectangle_67.png',
      alt: 'Scenic canal cruise through historic waterways surrounded by lush greenery',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit',
      icon: '/images/img_group_21.svg',
      size: 'large'
    },
    {
      id: 2,
      title: 'Sailing',
      image: '/images/img_rectangle_66.png',
      alt: 'Sailing adventure on open ocean waters with white sails against blue sky',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit',
      icon: '/images/img_group_21.svg',
      size: 'medium'
    },
    {
      id: 3,
      title: 'Camping',
      image: '/images/img_rectangle_77.png',
      alt: 'Camping in a forest clearing with tents under a starry night sky',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit',
      icon: '/images/img_group_21.svg',
      size: 'medium'
    },
    {
      id: 4,
      title: 'Hiking',
      image: '/images/img_rectangle_76.png',
      alt: 'Hiking trail through mountain landscape with panoramic valley views',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit',
      icon: '/images/img_group_21.svg',
      size: 'medium'
    },
    {
      id: 5,
      title: 'Scuba Diving',
      image: '/images/img_rectangle_78.png',
      alt: 'Scuba diving underwater with colorful coral reef and tropical fish',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit',
      icon: '/images/img_group_21.svg',
      size: 'medium'
    }
  ]

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      {/* Background Image */}
      <Image
        src="/images/img_rectangle_67.png"
        alt="Adventure activities section background with scenic outdoor landscape"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover object-center"
        quality={80}
      />
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="w-full max-w-[1016px] mx-auto relative z-10">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-[44px]">
          
          {/* Section Title */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-grape font-normal leading-[30px] sm:leading-[35px] md:leading-[42px] lg:leading-[49px] text-text-primary text-center shadow-[0px_4px_4px_#0000003f]">
            Have an Adventure Today
          </h2>

          {/* Adventures Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Large Adventure Card */}
            <div className="lg:col-span-1 lg:row-span-2">
              <div className="relative group cursor-pointer">
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[460px] rounded-lg overflow-hidden">
                  <Image 
                    src={adventures?.[0]?.image} 
                    alt={adventures?.[0]?.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                
                {/* Card Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-background-overlayStrong p-4 sm:p-6 rounded-b-lg transform translate-y-[60%] group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-[12px] sm:text-[14px] font-grape font-normal leading-[15px] sm:leading-[18px] text-text-primary mb-1 sm:mb-2">
                        {adventures?.[0]?.title}
                      </h3>
                      <p className="text-[8px] sm:text-[10px] font-work font-extralight leading-[9px] sm:leading-[11px] text-text-primary line-clamp-3">
                        {adventures?.[0]?.description}
                      </p>
                    </div>
                    <img 
                      src={adventures?.[0]?.icon} 
                      alt="Adventure icon"
                      className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] md:w-[42px] md:h-[42px] ml-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Grid of Medium Adventure Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {adventures?.slice(1)?.map((adventure) => (
                <div key={adventure?.id} className="relative group cursor-pointer">
                  <div className="relative w-full h-[180px] sm:h-[200px] md:h-[208px] lg:h-[214px] rounded-lg overflow-hidden">
                    <Image 
                      src={adventure?.image} 
                      alt={adventure?.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Card Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-background-overlayStrong p-3 sm:p-4 rounded-b-lg transform translate-y-[60%] group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between gap-3 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[12px] sm:text-[14px] font-grape font-normal leading-[15px] sm:leading-[18px] text-text-primary mb-1">
                          {adventure?.title}
                        </h3>
                        <p className="text-[8px] sm:text-[10px] font-work font-extralight leading-[9px] sm:leading-[11px] text-text-primary line-clamp-2">
                          {adventure?.description}
                        </p>
                      </div>
                      <img 
                        src={adventure?.icon} 
                        alt="Adventure icon"
                        className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] flex-shrink-0"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdventureSection