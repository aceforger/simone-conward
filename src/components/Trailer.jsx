export default function Trailer() {
  return (
    <section id="trailer" className="py-24 bg-[#5C4A1E] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)', backgroundSize: '25px 25px' }}>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-48 h-48 border border-[#C9A84C]/10 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 border border-[#C9A84C]/10 rounded-full"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 animate-fade-up">
          <div className="inline-flex items-center gap-3 text-[#C9A84C] mb-4">
            <span className="w-8 h-[1px] bg-[#C9A84C]/40"></span>
            <span className="text-xs font-inter font-bold tracking-[0.3em] uppercase">Exclusive Media</span>
            <span className="w-8 h-[1px] bg-[#C9A84C]/40"></span>
          </div>
          <h2 className="text-5xl md:text-6xl font-cinzel text-white font-bold mb-3">
            Watch the Trailer
          </h2>
          <p className="text-[#C9A84C]/50 font-crimson italic text-lg">
            Get a glimpse into Revelation, Past, Present, & Future
          </p>
        </div>

        {/* Video Container */}
        <div className="animate-fade-up">
          <div className="relative">
            {/* Cinema frame effect */}
            <div className="absolute -inset-2 border-2 border-[#C9A84C]/20 rounded-xl"></div>
            
            {/* Video player */}
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl border border-[#C9A84C]/20">
              {/* Top bar */}
              <div className="bg-[#1A1210] px-4 py-2 flex items-center gap-2 border-b border-[#C9A84C]/10">
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
                </div>
                <span className="text-[9px] font-inter font-bold text-white/30 tracking-wider uppercase ml-3">
                  Official Book Trailer
                </span>
              </div>
              
              {/* Video - no poster to keep it compact */}
              <video 
                className="w-full block"
                controls 
                preload="metadata"
                playsInline
              >
                <source src="https://res.cloudinary.com/dlnjwoids/video/upload/v1781188229/simone_trailer_lrwexi.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <p className="text-white/30 font-crimson italic text-sm mb-3">
              Want to dive deeper into the message?
            </p>
            <a href="#books" 
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#C9A84C]/40 text-[#C9A84C] font-inter font-bold text-xs tracking-wider uppercase hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] transition-all rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              Explore the Books
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}