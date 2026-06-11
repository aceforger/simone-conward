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
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30"></div>
      </div>

      {/* Moving Divine Light Rays from top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-full opacity-25 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#C9A84C]/20 via-[#C9A84C]/5 to-transparent animate-light-ray"
          style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)' }}></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-full bg-gradient-to-b from-[#C9A84C]/15 to-transparent animate-light-ray"
          style={{ clipPath: 'polygon(38% 0%, 62% 0%, 85% 100%, 15% 100%)', animationDelay: '1.5s' }}></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-full bg-gradient-to-b from-[#E8D5A0]/20 to-transparent animate-light-ray"
          style={{ clipPath: 'polygon(44% 0%, 56% 0%, 70% 100%, 30% 100%)', animationDelay: '3s' }}></div>
      </div>

      {/* Moving light particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`light-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: '#C9A84C',
            opacity: 0,
            animation: `floatUp ${5 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 6}s`,
            boxShadow: '0 0 6px rgba(201,168,76,0.4)'
          }}
        ></div>
      ))}

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#C9A84C]/10 rounded-full animate-divine-glow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-[#C9A84C]/8 rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 border border-[#C9A84C]/30 text-[#C9A84C] px-4 py-2 mb-8 text-sm font-cinzel font-medium tracking-wider rounded-full bg-white/60 backdrop-blur-sm animate-fade-up">
              <span className="w-2 h-2 bg-[#C9A84C] rounded-full"></span>
              Biblical Scholar & Author
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-cinzel text-[#5C4A1E] mb-6 leading-tight animate-fade-up">
              {authorInfo.name}
            </h1>
            <div className="w-24 h-[3px] bg-gradient-to-r from-[#C9A84C] to-[#B8993F] mb-8 mx-auto md:mx-0 rounded-full"></div>
            <p className="text-xl text-[#5C4A1E]/70 mb-6 font-crimson italic animate-fade-up-delayed">
              Unveiling <span className="text-[#C9A84C] font-bold">Biblical truth</span> for the <span className="text-[#5C4A1E] font-bold">seeking soul</span>
            </p>
            <p className="text-[#5C4A1E]/80 leading-relaxed max-w-lg mx-auto md:mx-0 font-crimson italic text-lg border-l-2 border-[#C9A84C]/50 pl-6 py-2 animate-fade-up-delayed">
              "Patient, kind, and peaceful—these three words define my journey of faith."
            </p>
            <div className="flex flex-wrap gap-3 my-8 justify-center md:justify-start animate-fade-up-delayed-2">
              {authorInfo.roles.map((role, i) => (
                <span key={i} className="px-4 py-2 bg-white/60 backdrop-blur-sm text-[#5C4A1E] text-sm font-cinzel tracking-wider border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] hover-lift transition-all rounded-full">
                  {role}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up-delayed-2">
              <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="px-8 py-4 bg-[#C9A84C] text-white font-cinzel font-bold tracking-wider hover:bg-[#B8993F] transition-all text-center hover-lift rounded-full shadow-[0_0_25px_rgba(201,168,76,0.3)]">
                About the Author
              </a>
              <a href="#books" onClick={(e) => handleScroll(e, '#books')} className="px-8 py-4 border-2 border-[#C9A84C]/40 text-[#5C4A1E] font-cinzel font-bold tracking-wider hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all text-center hover-lift rounded-full">
                View Books
              </a>
            </div>
          </div>

          {/* Book Cover Image - container fits image */}
          <div className="relative mx-auto animate-fade-up flex justify-center">
            <div className="relative inline-block">
              <div className="absolute -inset-6 bg-[#C9A84C]/10 rounded-full blur-3xl animate-soft-glow"></div>
              
              <div className="relative bg-white/70 backdrop-blur-sm shadow-2xl border border-[#C9A84C]/20 overflow-hidden hover-lift rounded-2xl inline-block">
                <img
                  src="/images/revelation.jpg"
                  alt={authorInfo.name}
                  className="w-64 md:w-72 h-auto object-contain block"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-white', 'w-64', 'h-80', 'md:w-72', 'md:h-96')
                    e.target.parentElement.innerHTML = `
                      <div class="text-center p-8">
                        <div class="text-6xl mb-4">📖</div>
                        <div class="text-2xl font-cinzel text-[#C9A84C] mb-2">SC</div>
                        <p class="text-sm font-crimson text-[#5C4A1E]/50">${authorInfo.name}</p>
                      </div>
                    `
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}