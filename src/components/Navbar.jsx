import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const menuItems = [
    { title: 'PERFORMANCE', href: '#performance' },
    { title: 'DESIGN', href: '#design' },
    { title: 'TECH SPECS', href: '#techspecs' },
    { title: 'INTERIOR', href: '#interior' },
    { title: 'TEST DRIVE', href: '#cta' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 } // Set section active when it's 50% visible
    )

    // Observe all sections including hero
    const sections = ['hero', 'performance', 'design', 'techspecs', 'interior', 'cta']
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleScrollTo = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      try {
        if (window.lenis) {
          // Lenis bisa menerima string selector atau element
          window.lenis.scrollTo(targetElement)
        } else {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } catch (err) {
        console.warn('Lenis scroll failed, falling back to native', err)
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-10 py-6 flex justify-between items-center pointer-events-none">
        {/* Branding: Minimalist Logo + Aventador */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-3 pointer-events-auto cursor-pointer group"
          onClick={(e) => handleScrollTo(e, '#hero')}
        >
          <div className="w-8 h-10 relative">
            <svg viewBox="0 0 100 120" className="w-full h-full fill-white group-hover:fill-lambo-purple-neon transition-colors duration-500">
              <path d="M50 0 L0 25 L10 90 L50 120 L90 90 L100 25 Z" />
              <path d="M50 15 L20 32 L25 85 L50 105 L75 85 L80 32 Z" fill="black" />
            </svg>
          </div>
          <div className="flex flex-col justify-center border-l border-white/20 pl-3 h-8">
            <span className="text-[9px] font-black tracking-[0.4em] text-white leading-none mb-1">LAMBORGHINI</span>
            <span className="text-[7px] font-bold tracking-[0.2em] text-white/50 leading-none">AVENTADOR</span>
          </div>
        </motion.div>

        {/* Desktop Navigation Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:flex items-center gap-12 pointer-events-auto"
        >
          {menuItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <a 
                key={item.title} 
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`text-[8px] font-bold tracking-[0.4em] transition-colors duration-300 relative group ${isActive ? 'text-white' : 'text-white/30 hover:text-white'}`}
              >
                {item.title}
                {isActive && (
                  <motion.span 
                    layoutId="activeUnderline"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full h-px bg-lambo-purple-neon" 
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-lambo-purple-neon group-hover:w-full transition-all duration-500" />
                )}
              </a>
            )
          })}
        </motion.div>

        {/* Menu Toggle Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="pointer-events-auto"
        >
          <button 
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-4 group"
          >
            <span className="text-[9px] font-black tracking-[0.4em] text-white group-hover:text-lambo-purple-neon transition-colors">MENU</span>
            <div className="flex flex-col gap-1.5 w-6">
              <div className="h-px w-full bg-white group-hover:bg-lambo-purple-neon transition-all" />
              <div className="h-px w-1/2 bg-white group-hover:w-full group-hover:bg-lambo-purple-neon transition-all self-end" />
            </div>
          </button>
        </motion.div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 text-white/40 hover:text-white transition-colors flex items-center gap-3 group"
            >
              <span className="text-[10px] font-black tracking-[0.4em]">CLOSE</span>
              <X size={24} className="group-hover:rotate-90 transition-transform duration-500" />
            </button>

            {/* Menu Links */}
            <div className="flex flex-col items-center gap-8 md:gap-12">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.8 }}
                  className="group relative"
                >
                  <span className="text-4xl md:text-7xl font-black text-white/20 group-hover:text-white transition-colors duration-500 tracking-tighter">
                    {item.title}
                  </span>
                  <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-0 h-px bg-lambo-purple-neon group-hover:w-8 transition-all duration-500" />
                </motion.a>
              ))}
            </div>

            {/* Background Text Decor */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-black text-white/5 pointer-events-none whitespace-nowrap">
              AUTOMOBILI LAMBORGHINI
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
