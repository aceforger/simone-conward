import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Books from './components/Books'
import Trailer from './components/Trailer'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Books />
      <Trailer />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App