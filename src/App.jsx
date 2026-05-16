import { useState, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { motion } from 'framer-motion'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import CinematicBars from './components/CinematicBars'
import Hero from './sections/Hero'
import Performance from './sections/Performance'
import Design from './sections/Design'
import TechSpecs from './sections/TechSpecs'
import Interior from './sections/Interior'
import CTA from './sections/CTA'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isHovered, setHovered] = useState(false)
  const [isDragging, setDragging] = useState(false)
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Canvas fade out ONLY when reaching the final Interior section
    ScrollTrigger.create({
      trigger: "#final-section-trigger",
      start: "top center",
      end: "bottom top",
      onEnter: () => gsap.to(canvasRef.current, { opacity: 0, pointerEvents: 'none', duration: 1.2, ease: "power2.inOut" }),
      onLeaveBack: () => gsap.to(canvasRef.current, { opacity: 1, pointerEvents: 'auto', duration: 1.2, ease: "power2.inOut" }),
    })

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  const isCinematicActive = isHovered || isDragging

  return (
    <main className={`relative w-full bg-black ${isCinematicActive ? 'cinematic-active' : ''}`}>
      <Navbar />
      <CinematicBars active={isCinematicActive} />
      
      {/* 3D Scene Layer */}
      <div 
        ref={canvasRef}
        className="fixed inset-0 z-0 h-screen w-full transition-opacity"
      >
        <Experience 
          isHovered={isHovered} 
          setHovered={setHovered}
          isDragging={isDragging}
          setDragging={setDragging}
        />
      </div>

      {/* Primary Showcase Flow (Hero to CTA) */}
      <div id="showcase-container" className="relative z-10 pointer-events-none">
        <Hero />
        
        {/* R -> L -> R -> L -> C Flow */}
        <Performance /> {/* Right */}
        <Design />      {/* Left */}
        <TechSpecs />   {/* Right */}
        <CTA />         {/* Left */}
      </div>

      {/* Final Section: Apex Control (Car model is hidden here) */}
      <div id="final-section-trigger" className="relative z-20">
        <Interior /> {/* Center Bottom */}
      </div>

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[120] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </main>
  )
}

export default App
