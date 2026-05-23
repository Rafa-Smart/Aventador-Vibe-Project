import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex flex-col items-start justify-center px-10 md:px-24">
      {/* Cinematic Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/videos/video-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
      </div>

      <div className="z-10 text-left pointer-events-none max-w-4xl mt-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mb-6"
        >
          <p className="text-lambo-purple-neon font-black tracking-[0.8em] text-[10px] md:text-xs mb-3">
            ICONIC PERFORMANCE
          </p>
          <div className="w-12 h-px bg-lambo-purple-neon/50" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
            THE AVENTADOR <br />
            <span className="text-lambo-purple-neon italic">LEGACY.</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="text-white/40 text-sm md:text-base font-light tracking-widest max-w-md italic"
        >
          Redefining the laws of physics and the boundaries of imagination.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-10 md:left-24 flex items-center gap-4 text-white/30"
      >
        <div className="w-8 h-px bg-white/20" />
        <span className="text-[9px] tracking-[0.4em] font-bold">SCROLL TO EXPLORE</span>
      </motion.div>

      {/* Decorative numbering */}
      <div className="absolute bottom-10 right-10 md:right-24 text-white/10 text-xs font-black tracking-widest">
        SR-01 // V12
      </div>
    </section>
  )
}
