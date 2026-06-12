import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { navLinks, book } from '../data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      if (isHomePage) {
        const allSections = ['home', 'about', 'books', 'trailer', 'blog', 'contact']
        const scrollPosition = window.scrollY + 100
        for (const section of allSections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (isHomePage) {
      const targetId = href.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/' + href)
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-[#C9A84C]/15' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#5C4A1E] via-[#C9A84C] to-[#5C4A1E]"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* LEFT - Navigation Tabs */}
          <div className="hidden md:flex items-center gap-0 flex-1">
            {navLinks.map((link) => {
              // Media dropdown
              if (link.name === 'Media') {
                return (
                  <div key={link.name} className="relative group">
                    <button className={`relative px-4 py-2 text-xs font-inter font-bold transition-all duration-300 tracking-widest uppercase inline-flex items-center gap-0.5 ${
                      activeSection === 'trailer' || activeSection === 'blog'
                        ? 'text-[#C9A84C]'
                        : 'text-[#5C4A1E]/50 hover:text-[#5C4A1E]'
                    }`}>
                      Media
                      <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      {(activeSection === 'trailer' || activeSection === 'blog') && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#C9A84C] rounded-full"></span>
                      )}
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-44 bg-white border border-[#C9A84C]/15 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <a href="#trailer" onClick={(e) => handleNavClick(e, '#trailer')}
                        className={`block px-5 py-3 text-xs font-inter font-bold tracking-wider uppercase transition-all ${
                          activeSection === 'trailer' ? 'text-[#C9A84C] bg-[#C9A84C]/5' : 'text-[#5C4A1E]/50 hover:text-[#5C4A1E] hover:bg-[#C9A84C]/3'
                        }`}>
                        🎬 Book Trailer
                      </a>
                      <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')}
                        className={`block px-5 py-3 text-xs font-inter font-bold tracking-wider uppercase transition-all ${
                          activeSection === 'blog' ? 'text-[#C9A84C] bg-[#C9A84C]/5' : 'text-[#5C4A1E]/50 hover:text-[#5C4A1E] hover:bg-[#C9A84C]/3'
                        }`}>
                        📝 Blog
                      </a>
                    </div>
                  </div>
                )
              }
              // Regular links
              return (
                <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-xs font-inter font-bold transition-all duration-300 tracking-widest uppercase ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-[#C9A84C]'
                      : 'text-[#5C4A1E]/50 hover:text-[#5C4A1E]'
                  }`}>
                  {link.name}
                  {activeSection === link.href.replace('#', '') && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#C9A84C] rounded-full"></span>
                  )}
                </a>
              )
            })}
          </div>

          {/* CENTER - Logo/Name */}
          <div className="flex-1 flex justify-center">
            <a href="/" onClick={handleLogoClick} className="flex flex-col items-center group">
              <span className="font-cinzel text-xl md:text-2xl text-[#5C4A1E] group-hover:text-[#C9A84C] transition-colors tracking-wider font-bold leading-tight">
                SIMONE CONWARD
              </span>
              <span className="text-[9px] font-inter font-bold text-[#C9A84C] tracking-[0.3em] uppercase">
                Biblical Scholar
              </span>
            </a>
          </div>

          {/* RIGHT - Quick Buy Dropdown */}
          <div className="hidden md:flex items-center justify-end flex-1">
            <div className="relative group">
              <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C9A84C] text-white font-inter font-bold text-xs tracking-widest uppercase rounded-full hover:bg-[#B8993F] transition-all shadow-[0_0_20px_rgba(201,168,76,0.2)]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/>
                </svg>
                Shop My Books
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown with all purchase links */}
              <div className="absolute top-full right-0 mt-2 w-72 bg-white border border-[#C9A84C]/15 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  <p className="text-[10px] font-inter font-bold text-[#C9A84C] tracking-widest uppercase mb-3 px-2">
                    Quick Purchase Links
                  </p>
                  {book.map((bookItem) => (
                    <div key={bookItem.id} className="mb-1 last:mb-0">
                      <p className="px-2 py-1 text-xs font-cinzel font-bold text-[#5C4A1E]">
                        {bookItem.title.length > 40 ? bookItem.title.substring(0, 40) + '...' : bookItem.title}
                      </p>
                      {bookItem.purchaseLinks && bookItem.purchaseLinks.length > 0 ? (
                        <div className="flex flex-wrap gap-1 px-2 pb-2">
                          {bookItem.purchaseLinks.map((link, i) => (
                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                              className="text-[10px] font-inter font-bold text-[#C9A84C] hover:text-[#B8993F] hover:underline transition-all">
                              {link.name}{i < bookItem.purchaseLinks.length - 1 ? ' • ' : ''}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <a href="#books" onClick={(e) => handleNavClick(e, '#books')}
                          className="block px-2 pb-2 text-[10px] font-inter font-bold text-[#5C4A1E]/40 hover:text-[#C9A84C] transition-all">
                          View Details →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#5C4A1E] border border-[#C9A84C]/20 rounded-lg"
          >
            <div className="relative w-5 h-5">
              <span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white border border-[#C9A84C]/15 rounded-2xl shadow-xl mt-3 p-5">
            {navLinks.map((link) => {
              if (link.name === 'Media') {
                return (
                  <div key={link.name} className="mb-2">
                    <p className="px-4 py-2 text-xs font-inter font-bold text-[#C9A84C] tracking-widest uppercase">Media ▼</p>
                    <a href="#trailer" onClick={(e) => handleNavClick(e, '#trailer')}
                      className={`block px-6 py-3 text-sm font-inter font-bold tracking-wider uppercase rounded-lg transition-all ${
                        activeSection === 'trailer' ? 'text-[#C9A84C] bg-[#C9A84C]/5' : 'text-[#5C4A1E]/50 hover:text-[#5C4A1E]'
                      }`}>🎬 Book Trailer</a>
                    <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')}
                      className={`block px-6 py-3 text-sm font-inter font-bold tracking-wider uppercase rounded-lg transition-all ${
                        activeSection === 'blog' ? 'text-[#C9A84C] bg-[#C9A84C]/5' : 'text-[#5C4A1E]/50 hover:text-[#5C4A1E]'
                      }`}>📝 Blog</a>
                  </div>
                )
              }
              return (
                <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-3 text-sm font-inter font-bold tracking-wider uppercase rounded-lg transition-all ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-[#C9A84C] bg-[#C9A84C]/5'
                      : 'text-[#5C4A1E]/50 hover:text-[#5C4A1E]'
                  }`}>{link.name}</a>
              )
            })}
            
            {/* Mobile Quick Buy */}
            <div className="mt-3 pt-3 border-t border-[#C9A84C]/10">
              <p className="px-4 py-2 text-xs font-inter font-bold text-[#C9A84C] tracking-widest uppercase">Quick Purchase</p>
              {book.map((bookItem) => (
                <div key={bookItem.id} className="px-4 py-2">
                  <p className="text-sm font-cinzel font-bold text-[#5C4A1E]">{bookItem.title}</p>
                  {bookItem.purchaseLinks && bookItem.purchaseLinks.length > 0 ? (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {bookItem.purchaseLinks.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                          className="text-xs font-inter font-bold text-[#C9A84C] hover:underline">
                          {link.name}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a href="#books" onClick={(e) => handleNavClick(e, '#books')}
                      className="text-xs font-inter font-bold text-[#5C4A1E]/40">View Details →</a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}