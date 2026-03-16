'use client';
import { useState } from 'react';
import Image from 'next/image';
import Button from '../components/ui/button';
import EditText from '../components/ui/EditText';

const NewsletterAwardSection = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    if (email?.trim()) {
      setEmail('')
    }
  }

  const awards = [
    {
      id: 1,
      image: '/images/img_rectangle_94.png',
      alt: 'Top 10 tourist attractions award winning destination',
      category: 'Attractions',
      title: 'Top 10 Attractions'
    },
    {
      id: 2,
      image: '/images/img_rectangle_95.png',
      alt: 'Top 10 luxury hotels award winning accommodation',
      category: 'Hotels',
      title: 'Top 10 Hotels'
    },
    {
      id: 3,
      image: '/images/img_rectangle_88.png',
      alt: 'Top 5 beach resorts award winning tropical resort',
      category: 'Resorts',
      title: 'Top 5 Resorts'
    },
    {
      id: 4,
      image: '/images/img_rectangle_89.png',
      alt: 'Top 10 iconic landmarks award winning historic site',
      category: 'Landmarks',
      title: 'Top 10 Landmarks'
    },
    {
      id: 5,
      image: '/images/img_rectangle_90.png',
      alt: 'Top 10 pristine beaches award winning coastal destination',
      category: 'Beaches',
      title: 'Top 10 Beaches'
    },
    {
      id: 6,
      image: '/images/img_rectangle_91.png',
      alt: 'Top 10 tropical islands award winning island getaway',
      category: 'Islands',
      title: 'Top 10 Islands'
    }
  ]

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      {/* Background Image */}
      <Image
        src="/images/img_rectangle_58.png"
        alt="Newsletter and award section background with ocean view"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover object-center"
        quality={80}
      />
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="w-full max-w-[1016px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          
          {/* Newsletter Section */}
          <div className="bg-background-overlay p-8 sm:p-10 md:p-12 lg:p-[56px] rounded-lg shadow-[0px_0px_10px_#0000003f] order-2 lg:order-1">
            <div className="flex flex-col items-center text-center">
              
              {/* Newsletter Title */}
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-abril font-normal leading-[24px] sm:leading-[27px] md:leading-[30px] lg:leading-[33px] text-text-secondary mb-4 sm:mb-6">
                NEWSLETTER
              </h3>

              {/* Newsletter Description */}
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-work font-extralight leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[23px] text-text-primary mb-6 sm:mb-8 md:mb-10">
                Lorem ipsum dolor sit amet, consec adipiscing elit. Nunc vulputate
              </p>

              {/* Email Input */}
              <div className="w-full mb-6 sm:mb-8 md:mb-10">
                <EditText
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e?.target?.value)}
                  className="w-full"
                />
              </div>

              {/* Subscribe Button */}
              <Button
                onClick={handleSubscribe}
                text="SUBSCRIBE"
                className="w-full sm:w-auto px-8 py-3"
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>

          {/* Award Winning Section */}
          <div className="order-1 lg:order-2">
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[20px]">
              
              {/* Award Section Title */}
              <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-grape font-normal leading-[30px] sm:leading-[35px] md:leading-[42px] lg:leading-[49px] text-text-primary shadow-[0px_4px_4px_#0000003f] mb-2">
                Award Winning
              </h3>

              {/* Award Description */}
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-work font-extralight leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[23px] text-text-primary mb-6 sm:mb-8">
                Lorem ipsum dolor sit amet, consec adipiscing elit. Nunc vulputate
              </p>

              {/* Awards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {awards?.map((award) => (
                  <div key={award?.id} className="group cursor-pointer">
                    {/* Award Image */}
                    <div className="relative overflow-hidden rounded-lg mb-3 sm:mb-4 w-full h-[80px] sm:h-[90px] md:h-[100px] lg:h-[114px]">
                      <Image 
                        src={award?.image} 
                        alt={award?.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Award Details */}
                    <div className="text-left">
                      <h4 className="text-[10px] sm:text-[11px] md:text-[12px] font-alegreya font-bold leading-[12px] sm:leading-[14px] md:leading-[15px] text-text-muted mb-1">
                        {award?.category}
                      </h4>
                      <p className="text-[9px] sm:text-[10px] md:text-[12px] font-alegreya font-normal leading-[11px] sm:leading-[13px] md:leading-[15px] text-text-muted">
                        {award?.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterAwardSection
