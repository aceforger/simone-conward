import { authorInfo } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/3 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#5C4A1E]/3 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Label */}
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 text-[#C9A84C]">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 9H22L16 14L19 21L12 16L5 21L8 14L2 9H9L12 2Z"/>
            </svg>
            <span className="text-xs font-inter font-bold tracking-[0.3em] uppercase">Background & Journey</span>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* LEFT - Large Profile Image */}
          <div className="md:col-span-1 animate-fade-up">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#C9A84C]/20 rounded-2xl"></div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#5C4A1E]/10 rounded-2xl"></div>
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/profile.png" 
                  alt={authorInfo.name}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('aspect-[3/4]', 'bg-[#FAF8F5]', 'flex', 'items-center', 'justify-center')
                    e.target.parentElement.innerHTML = `
                      <div class="text-center p-8">
                        <div class="text-7xl">✝️</div>
                        <div class="text-3xl font-cinzel text-[#C9A84C] mt-3">SC</div>
                      </div>
                    `
                  }}
                />
              </div>

              {/* Credentials Card */}
              <div className="absolute -bottom-4 left-4 right-4 bg-white shadow-lg rounded-xl p-4 text-center border border-[#C9A84C]/10">
                <p className="font-cinzel text-lg text-[#5C4A1E] font-bold">{authorInfo.firstName} Conward</p>
                <p className="text-[10px] font-inter font-bold text-[#C9A84C] tracking-[0.2em] uppercase mt-1">Biblical Scholar & Author</p>
                <div className="flex justify-center gap-3 mt-2">
                  {authorInfo.roles.slice(0, 3).map((role, i) => (
                    <span key={i} className="text-[8px] font-inter font-bold text-[#5C4A1E]/40 tracking-wider uppercase">{role}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Content */}
          <div className="md:col-span-2 space-y-6 animate-fade-up-delayed">
            {/* Featured Quote */}
            <div className="bg-gradient-to-r from-[#C9A84C] to-[#B8993F] rounded-2xl p-8 text-white shadow-lg">
              <svg className="w-8 h-8 text-white/30 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-lg md:text-xl font-crimson italic leading-relaxed">"{authorInfo.quote}"</p>
            </div>

            {/* Bio Cards - Now 3 cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#C9A84C]/10 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-xs font-inter font-bold text-[#C9A84C] tracking-wider uppercase">Her Roots</span>
                </div>
                <p className="text-[#5C4A1E]/60 leading-relaxed font-inter text-sm">{authorInfo.bio}</p>
              </div>
              <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#C9A84C]/10 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-inter font-bold text-[#C9A84C] tracking-wider uppercase">Her Mission</span>
                </div>
                <p className="text-[#5C4A1E]/60 leading-relaxed font-inter text-sm">{authorInfo.bio2}</p>
              </div>
            </div>

            {/* Third card - full width */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#C9A84C]/10 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-xs font-inter font-bold text-[#C9A84C] tracking-wider uppercase">Her Approach</span>
              </div>
              <p className="text-[#5C4A1E]/60 leading-relaxed font-inter text-sm">{authorInfo.bio3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}