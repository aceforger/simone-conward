import { useState } from 'react'
import { book } from '../data'

export default function Books() {
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <section id="books" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-[120px] animate-soft-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#C9A84C]/30 text-[#C9A84C] px-4 py-2 mb-4 text-sm font-cinzel font-medium tracking-wider rounded-full">
            Books
          </div>
          <h2 className="text-4xl md:text-5xl font-cinzel text-[#5C4A1E] mb-4">Sacred Writings</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#C9A84C] to-[#B8993F] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {book.map((bookItem, i) => (
            <div key={bookItem.id} className="group animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="bg-white border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all shadow-md hover:shadow-lg hover-lift h-full flex flex-col rounded-xl overflow-hidden">
                <div className="bg-gradient-to-br from-[#FAF8F5] to-[#F5F0E8] overflow-hidden relative flex items-center justify-center p-4">
                  <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#C9A84C] text-white text-xs font-cinzel tracking-wider rounded-full">
                    {bookItem.statusText}
                  </div>
                  <img src={bookItem.coverImage} alt={bookItem.title} className="w-40 h-52 object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('min-h-[220px]')
                      e.target.parentElement.innerHTML = `<div class="text-center p-6"><div class="text-4xl">📖</div></div>`
                    }}
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  {bookItem.subtitle && <p className="text-[#C9A84C] text-[10px] font-cinzel tracking-wider uppercase mb-1.5">{bookItem.subtitle}</p>}
                  <h3 className="text-sm font-cinzel text-[#5C4A1E] mb-1.5 group-hover:text-[#C9A84C] transition-colors line-clamp-2">{bookItem.title}</h3>
                  <p className="text-[#5C4A1E]/40 text-xs font-crimson leading-relaxed mb-3 flex-1 line-clamp-3">{bookItem.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {bookItem.themes.slice(0, 2).map((theme, i) => (
                      <span key={i} className="px-2 py-0.5 bg-[#FAF8F5] text-[#C9A84C] text-[9px] font-cinzel tracking-wider rounded-full border border-[#C9A84C]/10">{theme}</span>
                    ))}
                  </div>
                  <button onClick={() => setSelectedBook(bookItem)} className="w-full py-2 border border-[#C9A84C]/30 text-[#C9A84C] font-cinzel tracking-wider text-xs rounded-full hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]/50 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#5C4A1E]/20 backdrop-blur-sm" onClick={() => setSelectedBook(null)}>
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#C9A84C]/20 rounded-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-[#C9A84C]/10 sticky top-0 bg-white z-10">
              <span className="px-3 py-1 bg-[#C9A84C] text-white text-xs font-cinzel tracking-wider rounded-full">{selectedBook.statusText}</span>
              <button onClick={() => setSelectedBook(null)} className="text-[#5C4A1E]/40 hover:text-[#C9A84C] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2">
                  <div className="bg-[#FAF8F5] rounded-xl p-4 flex items-center justify-center">
                    <img src={selectedBook.coverImage} alt={selectedBook.title} className="w-full h-auto max-h-[400px] object-contain"/>
                  </div>
                </div>
                <div className="md:col-span-3 flex flex-col justify-center space-y-6">
                  <div>
                    {selectedBook.subtitle && <p className="text-[#C9A84C] text-xs font-cinzel tracking-wider uppercase mb-2">{selectedBook.subtitle}</p>}
                    <h2 className="text-3xl md:text-4xl font-cinzel text-[#5C4A1E] mb-2">{selectedBook.title}</h2>
                    <div className="w-16 h-[3px] bg-gradient-to-r from-[#C9A84C] to-[#B8993F] mt-4 rounded-full"></div>
                  </div>
                  <p className="text-[#5C4A1E]/60 leading-relaxed font-crimson">{selectedBook.description}</p>
                  {selectedBook.description2 && <p className="text-[#5C4A1E]/40 leading-relaxed font-crimson text-sm">{selectedBook.description2}</p>}
                  <div className="flex flex-wrap gap-2">
                    {selectedBook.themes.map((theme, i) => (
                      <span key={i} className="px-3 py-1 bg-[#FAF8F5] text-[#C9A84C] text-xs font-cinzel tracking-wider rounded-full border border-[#C9A84C]/10">{theme}</span>
                    ))}
                  </div>
                  {selectedBook.status === 'published' && selectedBook.purchaseLinks && (
                    <div className="pt-4 space-y-3">
                      <p className="text-[#C9A84C] text-sm font-cinzel tracking-wider">Available at:</p>
                      <div className="flex flex-wrap gap-3">
                        {selectedBook.purchaseLinks.map((link, i) => (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-white font-cinzel tracking-wider text-sm rounded-full hover:bg-[#B8993F] transition-all hover-lift">
                            {link.name}
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