'use client';

const VideoSection = () => {
  return (
    <section 
      className="w-full py-32 sm:py-40 md:py-48 lg:py-60 px-4 sm:px-6 lg:px-[56px] bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/images/img_rectangle_64.png')",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <div className="flex items-center justify-center">
          <button 
            className="group relative p-4 sm:p-6 md:p-8 hover:scale-105 transition-transform duration-300"
            aria-label="Play video"
          >
            <img 
              src="/images/img_group_21.svg" 
              alt="Play Video" 
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[116px] md:h-[116px] group-hover:opacity-90 transition-opacity duration-300"
            />
          </button>
        </div>
      </div>
    </section>
  )
}

export default VideoSection