import { contactInfo, authorInfo } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-t border-[#C9A84C]/10">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/3 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#5C4A1E]/3 rounded-full blur-[120px]"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          
          {/* LEFT - Info */}
          <div className="md:col-span-2 text-center md:text-left animate-fade-up">
            <div className="inline-flex items-center gap-3 text-[#C9A84C] mb-4">
              <span className="w-8 h-[1px] bg-[#C9A84C]/40"></span>
              <span className="text-xs font-inter font-bold tracking-[0.3em] uppercase">Connect</span>
              <span className="w-8 h-[1px] bg-[#C9A84C]/40"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-cinzel text-[#5C4A1E] font-bold mb-4 leading-tight">
              Let's Talk
            </h2>
            <p className="text-[#5C4A1E]/50 font-crimson italic text-lg mb-8">
              Have questions about the books, speaking engagements, or just want to connect?
            </p>
            
            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {/* Email */}
              <a href={`mailto:${contactInfo.email}`} 
                className="flex items-center gap-4 p-4 bg-[#FAF8F5] rounded-2xl border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A84C]/20 transition-all">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-inter font-bold text-[#C9A84C] tracking-wider uppercase">Email</p>
                  <p className="text-sm font-inter text-[#5C4A1E]/60 group-hover:text-[#5C4A1E] transition-colors">{contactInfo.email}</p>
                </div>
                <svg className="w-4 h-4 text-[#C9A84C]/30 group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>

            {/* Available For */}
            <div className="pt-6 border-t border-[#C9A84C]/10">
              <p className="text-[10px] font-inter font-bold text-[#C9A84C]/50 tracking-wider uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full"></span>
                Available for:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Book Inquiries', 'Speaking', 'Interviews', 'Collaborations'].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-[#FAF8F5] text-[#5C4A1E]/50 text-[10px] font-inter font-bold tracking-wider uppercase rounded-full border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 hover:text-[#C9A84C] transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 p-5 bg-[#FAF8F5] rounded-2xl border-l-4 border-[#C9A84C]">
              <p className="text-[#5C4A1E]/40 font-crimson italic text-sm leading-relaxed">
                "{authorInfo.quote}"
              </p>
            </div>
          </div>

          {/* RIGHT - Contact Card */}
          <div className="md:col-span-3 animate-fade-up-delayed">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-[#C9A84C]/10">
              {/* Card Header */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C9A84C] to-[#B8993F] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(201,168,76,0.2)] rotate-3 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white" title="Available"></div>
                </div>
                <h3 className="text-xl font-cinzel text-[#5C4A1E] font-bold mt-4">Send a Message</h3>
                <p className="text-[#5C4A1E]/40 font-inter text-sm mt-2">
                  {authorInfo.firstName} personally reads every message
                </p>
              </div>

              {/* Contact Form */}
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-inter font-bold text-[#C9A84C] tracking-wider uppercase mb-1.5 block">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#C9A84C]/10 rounded-xl text-sm font-inter text-[#5C4A1E] placeholder-[#5C4A1E]/30 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-2 focus:ring-[#C9A84C]/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-inter font-bold text-[#C9A84C] tracking-wider uppercase mb-1.5 block">Email</label>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#C9A84C]/10 rounded-xl text-sm font-inter text-[#5C4A1E] placeholder-[#5C4A1E]/30 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-2 focus:ring-[#C9A84C]/10 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-inter font-bold text-[#C9A84C] tracking-wider uppercase mb-1.5 block">Subject</label>
                  <input 
                    type="text" 
                    placeholder="What's this about?" 
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#C9A84C]/10 rounded-xl text-sm font-inter text-[#5C4A1E] placeholder-[#5C4A1E]/30 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-2 focus:ring-[#C9A84C]/10 transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-inter font-bold text-[#C9A84C] tracking-wider uppercase mb-1.5 block">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Your Message..." 
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#C9A84C]/10 rounded-xl text-sm font-inter text-[#5C4A1E] placeholder-[#5C4A1E]/30 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-2 focus:ring-[#C9A84C]/10 transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#C9A84C] to-[#B8993F] text-white font-inter font-bold text-sm tracking-wider uppercase rounded-xl hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all active:scale-[0.98]"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                  </span>
                </button>
              </form>

              {/* Direct Email Alternative */}
              <div className="text-center mt-6 pt-5 border-t border-[#C9A84C]/10">
                <p className="text-[10px] font-inter text-[#5C4A1E]/30 mb-2">Prefer to email directly?</p>
                <a href={`mailto:${contactInfo.email}`} 
                  className="text-sm font-inter font-bold text-[#C9A84C] hover:text-[#B8993F] transition-colors underline underline-offset-4 decoration-[#C9A84C]/20 hover:decoration-[#C9A84C]">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}