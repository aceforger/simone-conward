export default function Trailer() {
  return (
    <section id="trailer" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-[100px] animate-soft-glow"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#C9A84C]/30 text-[#C9A84C] px-4 py-2 mb-4 text-sm font-cinzel font-medium tracking-wider rounded-full">
            Media
          </div>
          <h2 className="text-4xl md:text-5xl font-cinzel text-[#5C4A1E] mb-4">Book Trailer</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#C9A84C] to-[#B8993F] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="bg-[#FAF8F5] rounded-2xl border border-[#C9A84C]/10 overflow-hidden shadow-sm">
            <video
              className="w-full rounded-xl"
              controls
              preload="metadata"
            >
              <source
                src="https://res.cloudinary.com/dlnjwoids/video/upload/v1781188229/simone_trailer_lrwexi.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-[#5C4A1E]/40 font-crimson text-sm mt-4">
            Watch the official book trailer for Revelation, Past, Present, & Future
          </p>
        </div>
      </div>
    </section>
  )
}