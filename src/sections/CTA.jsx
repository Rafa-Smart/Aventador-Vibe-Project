import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative h-screen w-full flex items-center justify-start px-10 md:px-32 text-left overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="z-10 relative max-w-4xl py-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false }}
        >
          <span className="text-lambo-purple-neon text-[10px] font-black tracking-[0.8em] mb-6 block uppercase opacity-70">
            Join the Legacy
          </span>
          <h2 className="text-7xl md:text-[6.5rem] font-black tracking-tighter mb-10 text-white leading-[0.9]">
            TAKE THE <br /> <span className="text-lambo-purple-neon italic">LEAD.</span>
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false }}
          className="text-white/40 tracking-[0.5em] text-[10px] font-black mb-12 uppercase border-l border-white/20 pl-6"
        >
          Exclusive access to the pinnacle of Italian engineering.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, type: "spring" }}
          viewport={{ once: false }}
          className="flex flex-col items-start gap-10"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-20 py-7 bg-white text-black font-black tracking-[0.3em] text-[10px] rounded-full overflow-hidden transition-all duration-300 pointer-events-auto shadow-2xl"
          >
            <span className="relative z-10">BOOK TEST DRIVE</span>
            <div className="absolute inset-0 bg-lambo-purple-neon -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 w-full left-0 px-10 flex justify-between items-center text-[9px] text-white/10 tracking-[0.4em] font-black uppercase">
        <span>© 2026 LAMBORGHINI S.P.A.</span>
      </div>
    </section>
  )
}
