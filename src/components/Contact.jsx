import { contactInfo, authorInfo } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-[80px] animate-soft-glow"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#C9A84C]/5 rounded-full blur-[70px]"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 border border-[#C9A84C]/30 text-[#C9A84C] px-4 py-2 mb-8 text-sm font-cinzel font-medium tracking-wider rounded-full">
          Contact
        </div>
        <h2 className="text-4xl md:text-5xl font-cinzel text-[#5C4A1E] mb-6 animate-fade-up">Get in Touch</h2>
        <p className="text-[#5C4A1E]/40 text-lg mb-12 max-w-md mx-auto font-crimson animate-fade-up-delayed">
          Reach out to {authorInfo.firstName} directly
        </p>
        <div className="bg-white p-10 shadow-2xl border border-[#C9A84C]/10 rounded-2xl animate-fade-up-delayed-2 hover-lift">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#C9A84C] to-[#B8993F] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(201,168,76,0.2)]">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-3 px-10 py-5 bg-[#C9A84C] text-white font-cinzel tracking-wider font-bold hover:bg-[#B8993F] transition-all text-lg w-full justify-center rounded-full shadow-[0_0_20px_rgba(201,168,76,0.2)]">
            {contactInfo.email}
          </a>
        </div>
      </div>
    </section>
  )
}