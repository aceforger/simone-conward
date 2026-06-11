import { authorInfo } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#C9A84C]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#C9A84C]/30 text-[#C9A84C] px-4 py-2 mb-4 text-sm font-cinzel font-medium tracking-wider rounded-full">
            The Author
          </div>
          <h2 className="text-4xl md:text-5xl font-cinzel text-[#5C4A1E] mb-4">{authorInfo.name}</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#C9A84C] to-[#B8993F] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-[#FAF8F5] to-[#F5F0E8] rounded-2xl overflow-hidden border border-[#C9A84C]/10 shadow-lg animate-fade-up">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/profile.png"
                  alt={authorInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                    e.target.parentElement.innerHTML = `
                      <div class="text-center p-8">
                        <div class="text-6xl mb-4">✝️</div>
                        <div class="text-3xl font-cinzel text-[#C9A84C]">SC</div>
                        <p class="text-sm font-crimson text-[#5C4A1E]/40 mt-2">${authorInfo.name}</p>
                      </div>
                    `
                  }}
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#C9A84C]/10 animate-fade-up hover-lift">
              <p className="text-[#5C4A1E]/60 leading-relaxed font-crimson text-lg">{authorInfo.bio}</p>
            </div>
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border-l-2 border-[#C9A84C] animate-fade-up-delayed hover-lift">
              <p className="text-[#5C4A1E]/50 leading-relaxed font-crimson text-lg">{authorInfo.bio2}</p>
            </div>
            <div className="bg-[#FAF8F5] p-8 rounded-2xl animate-fade-up-delayed-2 hover-lift text-center">
              <p className="text-[#C9A84C] italic font-crimson text-xl">"{authorInfo.quote}"</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {authorInfo.roles.map((role, i) => (
                <span key={i} className="px-5 py-2.5 bg-white text-[#5C4A1E] text-sm font-cinzel tracking-wider border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] hover-lift transition-all rounded-full shadow-sm">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}