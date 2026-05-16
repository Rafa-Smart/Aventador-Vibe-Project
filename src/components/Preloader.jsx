import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useProgress } from '@react-three/drei'

export default function Preloader({ onComplete }) {
  const { progress } = useProgress()
  const [percentage, setPercentage] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    // Smoothen the progress bar
    if (progress > percentage) {
      const timeout = setTimeout(() => {
        setPercentage(prev => Math.min(prev + 1, Math.round(progress)))
      }, 10)
      return () => clearTimeout(timeout)
    }
  }, [progress, percentage])

  useEffect(() => {
    if (percentage >= 100) {
      // Add a small delay for dramatic effect
      const timeout = setTimeout(() => {
        setIsFinished(true)
        onComplete()
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [percentage, onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-lambo-purple-neon/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo/Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-4 mb-20"
        >
          <div className="w-16 h-20">
            <svg viewBox="0 0 100 120" className="w-full h-full fill-white">
              <path d="M50 0 L0 25 L10 90 L50 120 L90 90 L100 25 Z" />
              <path d="M50 15 L20 32 L25 85 L50 105 L75 85 L80 32 Z" fill="black" />
              <circle cx="50" cy="55" r="15" fill="white" className="animate-pulse" />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-black tracking-[0.8em] text-white">LAMBORGHINI</span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-lambo-purple-neon">AVENTADOR</span>
          </div>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-64 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              className="absolute top-0 left-0 h-full bg-lambo-purple-neon"
              style={{ boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" }}
            />
          </div>
          
          <div className="flex flex-col items-center gap-2">
             <motion.span 
              key={percentage}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-black tracking-[0.5em] text-white/40 tabular-nums"
             >
               {percentage}%
             </motion.span>
             <span className="text-[9px] font-bold tracking-[0.3em] text-white/20 uppercase animate-pulse">
               Synchronizing V12 Systems
             </span>
          </div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-0 h-full w-px bg-white/5" />
      <div className="absolute right-10 top-0 h-full w-px bg-white/5" />
      
      {/* Dynamic scanline */}
      <motion.div 
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lambo-purple-neon/20 to-transparent pointer-events-none"
      />
    </motion.div>
  )
}
