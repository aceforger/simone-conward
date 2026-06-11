import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { navLinks } from '../data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMediaOpen, setIsMediaOpen] = useState(false)
  const mediaRef = useRef(null)
  const timeoutRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsMediaOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMediaOpen(false)
    }, 200)
  }

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
    setIsMediaOpen(false)
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

  const isMediaActive = activeSection === 'trailer' || activeSection === 'blog'

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-[#C9A84C]/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
            <svg className="w-8 h-8 text-[#C9A84C] group-hover:text-[#B8993F] transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 9H22L16 14L19 21L12 16L5 21L8 14L2 9H9L12 2Z"/>
            </svg>
            <span className="font-cinzel text-2xl md:text-3xl text-[#3D2E0C] group-hover:text-[#C9A84C] transition-colors tracking-wider">
              Simone Conward
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.name === 'Media') {
                return (
                  <div 
                    key={link.name} 
                    className="relative" 
                    ref={mediaRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`relative px-5 py-2 text-base font-cinzel font-medium transition-all duration-300 tracking-wider rounded-full flex items-center gap-1 ${
                        isMediaActive && isHomePage
                          ? 'text-[#C9A84C] bg-[#C9A84C]/10'
                          : 'text-[#3D2E0C]/70 hover:text-[#3D2E0C] hover:bg-[#C9A84C]/5'
                      }`}
                    >
                      {link.name}
                      <svg className={`w-3 h-3 transition-transform duration-300 ${isMediaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div className={`absolute top-full left-0 mt-2 w-48 bg-white border border-[#C9A84C]/20 rounded-xl shadow-xl overflow-hidden transition-all duration-300 ${
                      isMediaOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}>
                      <a href="#trailer" onClick={(e) => handleNavClick(e, '#trailer')}
                        className={`block px-5 py-3 font-cinzel text-sm tracking-wider transition-all ${
                          activeSection === 'trailer' && isHomePage
                            ? 'text-[#C9A84C] bg-[#C9A84C]/10'
                            : 'text-[#3D2E0C]/60 hover:text-[#3D2E0C] hover:bg-[#C9A84C]/5'
                        }`}>
                        Book Trailer
                      </a>
                      <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')}
                        className={`block px-5 py-3 font-cinzel text-sm tracking-wider transition-all ${
                          activeSection === 'blog' && isHomePage
                            ? 'text-[#C9A84C] bg-[#C9A84C]/10'
                            : 'text-[#3D2E0C]/60 hover:text-[#3D2E0C] hover:bg-[#C9A84C]/5'
                        }`}>
                        Blog
                      </a>
                    </div>
                  </div>
                )
              }
              return (
                <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-5 py-2 text-base font-cinzel font-medium transition-all duration-300 tracking-wider rounded-full ${
                    activeSection === link.href.replace('#', '') && isHomePage
                      ? 'text-[#C9A84C] bg-[#C9A84C]/10'
                      : 'text-[#3D2E0C]/70 hover:text-[#3D2E0C] hover:bg-[#C9A84C]/5'
                  }`}>
                  {link.name}
                </a>
              )
            })}
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#3D2E0C]">
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'top-3 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute left-0 top-3 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'top-3 -rotate-45' : 'top-6'}`}></span>
            </div>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white border border-[#C9A84C]/20 rounded-2xl shadow-xl mt-3 p-5">
            {navLinks.map((link) => {
              if (link.name === 'Media') {
                return (
                  <div key={link.name}>
                    <p className="px-5 py-3 font-cinzel text-sm tracking-wider text-[#C9A84C] uppercase">Media</p>
                    <a href="#trailer" onClick={(e) => handleNavClick(e, '#trailer')}
                      className={`block px-5 py-3 font-cinzel text-lg tracking-wider rounded-xl transition-all ${
                        activeSection === 'trailer' && isHomePage
                          ? 'text-[#C9A84C] bg-[#C9A84C]/10'
                          : 'text-[#3D2E0C]/60 hover:text-[#3D2E0C]'
                      }`}>
                      Book Trailer
                    </a>
                    <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')}
                      className={`block px-5 py-3 font-cinzel text-lg tracking-wider rounded-xl transition-all ${
                        activeSection === 'blog' && isHomePage
                          ? 'text-[#C9A84C] bg-[#C9A84C]/10'
                          : 'text-[#3D2E0C]/60 hover:text-[#3D2E0C]'
                      }`}>
                      Blog
                    </a>
                  </div>
                )
              }
              return (
                <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-5 py-4 font-cinzel text-lg tracking-wider rounded-xl transition-all ${
                    activeSection === link.href.replace('#', '') && isHomePage
                      ? 'text-[#C9A84C] bg-[#C9A84C]/10'
                      : 'text-[#3D2E0C]/60 hover:text-[#3D2E0C]'
                  }`}>
                  {link.name}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}