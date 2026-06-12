import { useNavigate } from 'react-router-dom'
import { authorInfo, navLinks } from '../data'

export default function Footer() {
  const navigate = useNavigate()

  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      // If element not found on current page, navigate to home with hash
      navigate('/' + href)
      // Wait for navigation then scroll
      setTimeout(() => {
        const el = document.getElementById(targetId)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }

  return (
    <footer className="bg-[#3D2E1A] text-white relative overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C9A84C] via-[#B8993F] to-[#C9A84C]"></div>
      
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)', backgroundSize: '25px 25px' }}>
      </div>

      {/* Launch Portal Banner */}
      <div className="bg-[#2D2212] border-b border-[#C9A84C]/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
                <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <h3 className="text-lg font-cinzel tracking-wider text-[#C9A84C]">Ready to Publish?</h3>
              </div>
              <p className="text-[#C9A84C]/40 text-sm font-inter ml-6">Access the go-live portal for your book</p>
            </div>
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#3D2E1A] font-inter font-bold text-sm tracking-wider uppercase py-4 px-10 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[#C9A84C]/30 hover:bg-[#B8993F]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Launch & Go-Live Portal
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-7 h-7 text-[#C9A84C]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 9H22L16 14L19 21L12 16L5 21L8 14L2 9H9L12 2Z"/>
              </svg>
              <span className="font-cinzel text-xl tracking-wider text-[#C9A84C] font-bold">{authorInfo.name}</span>
            </div>
            <p className="text-[#C9A84C]/30 text-sm font-inter leading-relaxed">
              Biblical Scholar & Author — Unveiling truth through prophecy and divine revelation.
            </p>
            {/* Quote */}
            <div className="mt-5 pt-5 border-t border-[#C9A84C]/10">
              <p className="text-[#C9A84C]/40 font-crimson italic text-sm leading-relaxed">
                "{authorInfo.quote}"
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-inter font-bold mb-5 text-[#C9A84C] tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#C9A84C]/40"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks
                .filter(link => link.name !== 'Media')
                .map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={(e) => handleScroll(e, link.href)} 
                      className="text-[#C9A84C]/30 hover:text-[#C9A84C] transition-colors text-sm font-inter flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C] rounded-full transition-all"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-inter font-bold mb-5 text-[#C9A84C] tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#C9A84C]/40"></span>
              Contact
            </h4>
            <div className="space-y-4">
              <a href={`mailto:${authorInfo.email}`} 
                className="flex items-center gap-3 text-[#C9A84C]/30 hover:text-[#C9A84C] transition-colors text-sm font-inter group">
                <div className="w-9 h-9 bg-[#C9A84C]/5 rounded-full flex items-center justify-center group-hover:bg-[#C9A84C]/10 transition-all">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                {authorInfo.email}
              </a>
            </div>

            {/* Shop CTA */}
            <a href="#books" onClick={(e) => handleScroll(e, '#books')}
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#C9A84C]/10 text-[#C9A84C] font-inter font-bold text-xs tracking-wider uppercase rounded-full hover:bg-[#C9A84C] hover:text-[#3D2E1A] transition-all border border-[#C9A84C]/20">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              Shop My Books
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C9A84C]/10 mt-12 pt-7 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#C9A84C]/15 text-xs font-inter">
            &copy; {new Date().getFullYear()} {authorInfo.name}. All rights reserved.
          </p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-[#C9A84C]/20 hover:text-[#C9A84C] transition-colors text-xs font-inter font-bold tracking-wider uppercase">
            Back to Top
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
          </button>

          <p className="text-[#C9A84C]/10 text-xs font-inter">✝️</p>
        </div>
      </div>
    </footer>
  )
}