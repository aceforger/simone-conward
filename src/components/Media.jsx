import { useState } from 'react'

const blogPosts = [
  {
    id: 1,
    title: "The End of The World",
    date: "Apr 20, 2026",
    image: "/images/blog1.jpg",
    excerpt: "The world would end by catastrophe due to global climate change, according to scientists, and according to preacher, it would end due to destruction from GOD. But who is right?",
    content: `The world would end by catastrophe due to global climate change, according to scientists, and according to preacher, it would end due to destruction from GOD.

But who is right?

Now people are worried, because of wicked weather, and they are seeking environmental and religious changes to save the world.

But would the world really end?

According to Genesis 8, GOD said to Noah and his sons, "While the earth remains, seedtime and harvest, cold and heat, winter and summer, and day and night will always remain." Then in Genesis 9, GOD said to them, HE would never destroy everyone, and everything on the earth again, and because HE shines like a rainbow, The Rainbow is a symbol that HE would show to remind them of HIS promise, because HE is YHWH, a GOD of life, and they should choose life, not death.

According to THE WORD, the earth will never be destroyed. It is being prepared for GOD, Jesus, the angels, and all the righteous believer who died and will come back to live and rule.

When will Jesus come?

The next part of the Prophecy to be fulfilled is the coming of Jesus, which will happen just before the last seven plagues, and when Jesus comes, He will kill the righteous people on earth, and send them to heaven.

GOD Bless. Continue your study, and pray to be part of The First Resurrection.`
  },
  {
    id: 2,
    title: "The Last Days vs. The End Time",
    date: "Apr 20, 2026",
    image: "/images/blog2.jpg",
    excerpt: "GOD chose the Negro people of Israel to be a godly example for the world to learn from, but when they turned from YHWH, their GOD to worshipping idols like Pagans, to punish them, God caused the Romans to take them from Africa to exile in Roman nations.",
    content: `GOD chose the Negro people of Israel to be a godly example for the world to learn from, but when they turned from YHWH, their GOD to worshipping idols like Pagans, to punish them, God caused the Romans to take them from Africa to exile in Roman nations, leaving the weak, poor, and lame behind.

That was the start of The Last Days prophecies, when the 1st seal was opened by Jesus in heaven that gave the wicked Romans the authority to rule the world through The Roman Empire.

Then at the appointed time for Jesus to come in the flesh, after more than 400 years of slavery, the people of Israel in exile in Babylonian land left, and returned to their native land in Africa.

During The Last Seven Plagues:
1. Stinky sores will come on wicked people
2. The drinking water will be polluted, and part of the sea will turn red
3. The Euphrates River will dry up to make way for people to leave Europe
4. The Roman church and government officials will know it is their time for punishment
5. Government officials will prepare to fight with Jesus and His army in Armageddon
6. Babylon (Europe) would be destroyed, and GOD will say, "It is done!"
7. Government officials will go to fight Jesus and get defeated
8. Satan will be locked up for 1000 years
9. Jesus and the righteous ones will come from heaven to live on earth to rule`
  },
  {
    id: 3,
    title: "Two Churches, Two Spirits: A Parable of Spiritual Opposition",
    date: "Sep 26, 2025",
    image: "/images/blog3.jpg",
    excerpt: "In the Bible, the word 'woman' often symbolizes a church—whether pure and devoted to God, or corrupt and aligned with falsehood. In this spiritual parable, I want to show the parallel opposition between two such women.",
    content: `The Spiritual War Between Two Women

In the Bible, the word "woman" often symbolizes a church—whether pure and devoted to God, or corrupt and aligned with falsehood.

There are two women.

The first woman is glamorous. She wears expensive jewels and fashionable clothing. She's intelligent, well-educated, and mingles with the elite. She welcomes every ideology and opinion, mixing truth with worldly acceptance.

The second woman is modest. She carries herself with humility and grace. She surrounds herself with godly people, not because she's perfect, but because she's pursuing holiness.

Same Bible. Different Spirit.

Both women read the Bible. Both women are seeking souls. But only one does it the right way.

One entices. The other purifies.

The World Loves the Wrong Woman

The world embraces the seductive woman. She gives freely—money, connections, pleasure, success. But all of it comes with a price: rebellion against God disguised as progress.

This parable is not about literal women. It's about the spirit behind today's churches.

Ask yourself:
• Is your church drawing you toward the narrow path of holiness, or the wide road of compromise?
• Are your teachers calling you to repentance, or are they excusing your rebellion under the name of "grace"?
• Do they preach what's popular—or what's true?

Only one Church—the one led by the Holy Spirit—will endure to the end.`
  }
]

export default function Media() {
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <section id="media" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-[100px] animate-soft-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#C9A84C]/30 text-[#C9A84C] px-4 py-2 mb-4 text-sm font-cinzel font-medium tracking-wider rounded-full">
            Media
          </div>
          <h2 className="text-4xl md:text-5xl font-cinzel text-[#5C4A1E] mb-4">Book Trailer & Blog</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#C9A84C] to-[#B8993F] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Book Trailer */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-up">
          <div className="bg-[#FAF8F5] rounded-2xl border border-[#C9A84C]/10 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-[#C9A84C]/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-cinzel text-[#5C4A1E]">Book Trailer</h3>
              </div>
            </div>
            <div className="p-4">
              <video
                className="w-full rounded-xl"
                controls
                poster="/images/revelation.jpg"
                preload="metadata"
              >
                <source
                  src="https://res.cloudinary.com/dlnjwoids/video/upload/v1781188229/simone_trailer_lrwexi.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-cinzel text-[#5C4A1E]">Latest Blog Posts</h3>
          </div>
          
          <div className="grid gap-6">
            {blogPosts.map((post, i) => (
              <div 
                key={post.id} 
                className="bg-[#FAF8F5] rounded-2xl border border-[#C9A84C]/10 overflow-hidden shadow-sm hover-lift animate-fade-up cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => setSelectedPost(post)}
              >
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.classList.add('bg-gradient-to-br', 'from-[#C9A84C]/10', 'to-[#C9A84C]/5', 'flex', 'items-center', 'justify-center', 'min-h-[12rem]')
                        e.target.parentElement.innerHTML = `<div class="text-center p-6"><div class="text-4xl">📝</div></div>`
                      }}
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <p className="text-[#C9A84C] text-xs font-cinzel tracking-wider mb-2">{post.date}</p>
                    <h4 className="text-lg font-cinzel text-[#5C4A1E] mb-2">{post.title}</h4>
                    <p className="text-[#5C4A1E]/50 font-crimson text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <button className="mt-4 text-[#C9A84C] font-cinzel text-sm tracking-wider hover:text-[#B8993F] transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#5C4A1E]/20 backdrop-blur-sm" onClick={() => setSelectedPost(null)}>
          <div className="bg-white max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-[#C9A84C]/20 rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-[#C9A84C]/10 sticky top-0 bg-white z-10">
              <div>
                <p className="text-[#C9A84C] text-xs font-cinzel tracking-wider">{selectedPost.date}</p>
                <h2 className="text-xl font-cinzel text-[#5C4A1E] mt-1">{selectedPost.title}</h2>
              </div>
              <button onClick={() => setSelectedPost(null)} className="text-[#5C4A1E]/40 hover:text-[#C9A84C] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-10">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-xl mb-8"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div className="prose max-w-none">
                {selectedPost.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-[#5C4A1E]/60 font-crimson leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}