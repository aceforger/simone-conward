import { authorInfo } from '../data'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/bg.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Light overlay to keep text readable */}
        <div className="absolute inset-0 bg-[#FAF8F5]/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/30 via-transparent to-[#FAF8F5]/60"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-16 w-full">
        {/* MAGAZINE COVER LAYOUT */}
        <div className="relative">
          {/* Large background number */}
          <div className="absolute -top-20 right-0 text-[15rem] md:text-[20rem] font-cinzel font-black text-[#C9A84C]/8 leading-none select-none pointer-events-none">
            01
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left - Small details column */}
            <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4 md:gap-8 order-2 md:order-1">
              <div className="rotate-0 md:-rotate-90 whitespace-nowrap text-xs font-inter font-bold tracking-[0.3em] text-[#C9A84C] uppercase">
                Biblical Scholar
              </div>
              <div className="w-px h-8 md:w-8 md:h-px bg-[#C9A84C]/40"></div>
              <div className="flex md:flex-col gap-2">
                {['TRUTH', 'FAITH', 'WISDOM'].map((word) => (
                  <span key={word} className="text-[10px] font-inter font-bold tracking-[0.2em] text-[#5C4A1E]/40 uppercase">{word}</span>
                ))}
              </div>
            </div>

            {/* Center - Main Content */}
            <div className="md:col-span-8 text-center order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 backdrop-blur-sm border border-[#C9A84C]/20 rounded-full mb-8 animate-fade-up">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full"></span>
                <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-[#C9A84C] uppercase">Author & Teacher</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-cinzel text-[#5C4A1E] mb-6 leading-[0.9] animate-fade-up font-bold drop-shadow-sm">
                SIMONE CONWARD
              </h1>

              <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up">
                <div className="w-12 h-[2px] bg-[#C9A84C]"></div>
                <span className="text-sm font-crimson italic text-[#5C4A1E]/60">Revelation • Prophecy • Truth</span>
                <div className="w-12 h-[2px] bg-[#C9A84C]"></div>
              </div>

              <p className="text-lg text-[#5C4A1E]/60 max-w-lg mx-auto font-crimson italic mb-8 animate-fade-up">
                "Patient, kind, and peaceful—these three words define my journey of faith."
              </p>

              <div className="flex flex-wrap gap-3 justify-center mb-10 animate-fade-up">
                {authorInfo.roles.map((role, i) => (
                  <span key={i} className="px-4 py-2 bg-white/70 backdrop-blur-sm text-[#5C4A1E] text-xs font-inter font-bold tracking-wider uppercase border border-[#C9A84C]/15 hover:border-[#C9A84C]/40 hover:text-[#C9A84C] transition-all cursor-default">
                    {role}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up">
                <a href="#about" onClick={(e) => handleScroll(e, '#about')} 
                  className="px-8 py-3.5 bg-[#C9A84C] text-white font-inter font-bold text-sm tracking-wider uppercase hover:bg-[#B8993F] transition-all shadow-[0_0_20px_rgba(201,168,76,0.2)]">
                  About the Author
                </a>
                <a href="#books" onClick={(e) => handleScroll(e, '#books')} 
                  className="px-8 py-3.5 border-2 border-[#5C4A1E]/20 text-[#5C4A1E] font-inter font-bold text-sm tracking-wider uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all bg-white/50 backdrop-blur-sm">
                  View Books
                </a>
              </div>
            </div>

            {/* Right - Empty space for balance */}
            <div className="md:col-span-3 order-3 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  )
}