import { useNavigate } from 'react-router-dom'
import { authorInfo, navLinks } from '../data'

export default function Footer() {
  const navigate = useNavigate()

  const handleScroll = (e, href) => {
    e.preventDefault()
    navigate('/' + href)
  }

  return (
    <footer className="bg-[#5C4A1E] text-white">
      <div className="bg-[#4A3C18]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-cinzel tracking-wider text-[#C9A84C] mb-1">Ready to Publish?</h3>
              <p className="text-[#C9A84C]/50 text-sm font-crimson">Access the go-live portal for your book</p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C9A84C] text-[#5C4A1E] text-xl font-cinzel tracking-wider font-bold py-5 px-12 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[#C9A84C]/30"
              >
                Launch & Go-Live Portal
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <span className="font-cinzel text-2xl tracking-wider text-[#C9A84C]">{authorInfo.name}</span>
            <p className="text-[#C9A84C]/40 text-sm font-crimson leading-relaxed mt-2">Biblical Scholar & Author</p>
          </div>
          <div>
            <h4 className="text-sm font-cinzel tracking-wider mb-4 text-[#C9A84C] uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-[#C9A84C]/40 hover:text-[#C9A84C] transition-colors text-sm font-crimson">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-cinzel tracking-wider mb-4 text-[#C9A84C] uppercase">Contact</h4>
            <a href={`mailto:${authorInfo.email}`} className="text-[#C9A84C]/40 hover:text-[#C9A84C] transition-colors text-sm font-crimson block">{authorInfo.email}</a>
          </div>
        </div>
        <div className="border-t border-[#C9A84C]/10 mt-12 pt-8 text-center">
          <p className="text-[#C9A84C]/20 text-sm font-crimson">
            &copy; {new Date().getFullYear()} {authorInfo.name}. All rights reserved. ✝️
          </p>
        </div>
      </div>
    </footer>
  )
}