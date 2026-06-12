import { useState, useRef } from 'react'
import { book } from '../data'

export default function Books() {
  const [selectedBook, setSelectedBook] = useState(null)
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 320, behavior: 'smooth' })
    }
  }

  return (
    <section id="books" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background subtle element */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 text-[#C9A84C] mb-4">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 9H22L16 14L19 21L12 16L5 21L8 14L2 9H9L12 2Z"/>
            </svg>
            <span className="text-xs font-inter font-bold tracking-[0.3em] uppercase">Sacred Writings</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-cinzel text-[#5C4A1E] font-bold mb-4">The Collection</h2>
          <p className="text-[#5C4A1E]/40 font-crimson italic text-lg max-w-xl mx-auto">
            Four powerful works exploring Biblical prophecy, divine truth, and spiritual understanding
          </p>
        </div>

        {/* Book Showcase - Featured First Book Large */}
        <div className="mb-16 animate-fade-up">
          <div className="bg-white rounded-3xl shadow-xl border border-[#C9A84C]/10 overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Large Book Cover */}
              <div className="md:col-span-2 bg-gradient-to-br from-[#FAF8F5] to-white p-8 flex items-center justify-center relative">
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#C9A84C] text-white text-xs font-inter font-bold tracking-wider uppercase rounded-full shadow-lg">
                  Featured
                </div>
                <img 
                  src={book[0].coverImage} 
                  alt={book[0].title} 
                  className="w-48 md:w-56 h-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-500"
                  onClick={() => setSelectedBook(book[0])}
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
              {/* Featured Book Info */}
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                <p className="text-[#C9A84C] text-xs font-inter font-bold tracking-wider uppercase mb-2">{book[0].subtitle}</p>
                <h3 className="text-3xl md:text-4xl font-cinzel text-[#5C4A1E] font-bold mb-4 leading-tight">{book[0].title}</h3>
                <p className="text-[#5C4A1E]/50 leading-relaxed font-inter text-sm mb-6">{book[0].description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {book[0].themes.map((theme, i) => (
                    <span key={i} className="px-3 py-1.5 bg-[#FAF8F5] text-[#C9A84C] text-xs font-inter font-bold tracking-wider uppercase border border-[#C9A84C]/10 rounded-full">{theme}</span>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedBook(book[0])}
                  className="self-start px-6 py-3 border-2 border-[#C9A84C] text-[#C9A84C] font-inter font-bold text-sm tracking-wider uppercase hover:bg-[#C9A84C] hover:text-white transition-all"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* More Books - Horizontal Scroll */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-cinzel text-[#5C4A1E] font-bold">More from Simone</h3>
            <div className="hidden md:flex gap-2">
              <button onClick={() => scroll(-1)} className="w-10 h-10 border-2 border-[#C9A84C]/20 rounded-full flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button onClick={() => scroll(1)} className="w-10 h-10 border-2 border-[#C9A84C]/20 rounded-full flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          {/* Horizontal Scroll */}
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {book.slice(1).map((bookItem, i) => (
              <div key={bookItem.id} className="snap-center flex-shrink-0 w-72 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="bg-white rounded-2xl border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all shadow-md hover:shadow-xl h-full flex flex-col overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedBook(bookItem)}>
                  <div className="p-6 flex items-center justify-center bg-gradient-to-b from-[#FAF8F5] to-white">
                    <img src={bookItem.coverImage} alt={bookItem.title} className="w-44 h-56 object-contain group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.style.display = 'none' }}/>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    {bookItem.subtitle && (
                      <p className="text-[#C9A84C] text-[10px] font-inter font-bold tracking-wider uppercase mb-2">{bookItem.subtitle}</p>
                    )}
                    <h4 className="text-base font-cinzel text-[#5C4A1E] font-bold mb-3 group-hover:text-[#C9A84C] transition-colors line-clamp-2">{bookItem.title}</h4>
                    <p className="text-[#5C4A1E]/40 font-inter text-xs leading-relaxed mb-4 flex-1 line-clamp-2">{bookItem.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {bookItem.themes.slice(0, 2).map((theme, i) => (
                        <span key={i} className="px-2.5 py-1 bg-[#FAF8F5] text-[#C9A84C] text-[9px] font-inter font-bold tracking-wider uppercase border border-[#C9A84C]/10 rounded-full">{theme}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Book Detail Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#5C4A1E]/30 backdrop-blur-sm" onClick={() => setSelectedBook(null)}>
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl rounded-2xl border border-[#C9A84C]/20" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#C9A84C]/10 sticky top-0 bg-white z-10 rounded-t-2xl">
              <span className="px-4 py-1.5 bg-[#C9A84C] text-white text-xs font-inter font-bold tracking-wider uppercase rounded-full">{selectedBook.statusText}</span>
              <button onClick={() => setSelectedBook(null)} className="w-8 h-8 rounded-full border border-[#C9A84C]/20 flex items-center justify-center text-[#5C4A1E]/40 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 md:p-10">
              <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2">
                  <div className="bg-[#FAF8F5] rounded-2xl p-6">
                    <img src={selectedBook.coverImage} alt={selectedBook.title} className="w-full h-auto max-h-[400px] object-contain"/>
                  </div>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <div>
                    {selectedBook.subtitle && (
                      <p className="text-[#C9A84C] text-xs font-inter font-bold tracking-wider uppercase mb-2">{selectedBook.subtitle}</p>
                    )}
                    <h2 className="text-3xl md:text-4xl font-cinzel text-[#5C4A1E] font-bold leading-tight">{selectedBook.title}</h2>
                    <div className="w-16 h-[2px] bg-[#C9A84C] mt-4"></div>
                  </div>
                  <p className="text-[#5C4A1E]/60 leading-relaxed font-inter">{selectedBook.description}</p>
                  {selectedBook.description2 && (
                    <p className="text-[#5C4A1E]/40 leading-relaxed font-inter text-sm">{selectedBook.description2}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {selectedBook.themes.map((theme, i) => (
                      <span key={i} className="px-3 py-1.5 bg-[#FAF8F5] text-[#C9A84C] text-xs font-inter font-bold tracking-wider uppercase border border-[#C9A84C]/10 rounded-full">{theme}</span>
                    ))}
                  </div>
                  
                  {/* Purchase Links - In Modal */}
                  {selectedBook.purchaseLinks && (
                    <div className="pt-4 space-y-3 border-t border-[#C9A84C]/10">
                      <p className="text-[#C9A84C] text-sm font-inter font-bold tracking-wider uppercase">Available at:</p>
                      <div className="flex flex-wrap gap-3">
                        {selectedBook.purchaseLinks.map((link, i) => (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-white font-inter font-bold text-sm tracking-wider uppercase rounded-full hover:bg-[#B8993F] transition-all shadow-[0_0_15px_rgba(201,168,76,0.2)]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/>
                            </svg>
                            Shop on {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}