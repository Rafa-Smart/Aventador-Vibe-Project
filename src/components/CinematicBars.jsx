import { motion, AnimatePresence } from 'framer-motion'

export default function CinematicBars({ active }) {
  return (
    <div className={`pointer-events-none fixed inset-0 z-[100] transition-all duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}>
      <div 
        className="absolute top-0 left-0 w-full bg-black transition-all duration-700 ease-in-out"
        style={{ height: active ? '12vh' : '0' }}
      />
      <div 
        className="absolute bottom-0 left-0 w-full bg-black transition-all duration-700 ease-in-out"
        style={{ height: active ? '12vh' : '0' }}
      />
      
      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
    </div>
  )
}
