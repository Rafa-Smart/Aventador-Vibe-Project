import { motion } from 'framer-motion'

export default function Specifications() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Reveal Background */}
      <motion.div 
        initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.2 }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/1.png" 
          alt="Lambo Background" 
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        >
          <span className="text-lambo-purple-neon text-xs font-bold tracking-[0.4em] mb-4 block">
            TECHNICAL MASTERPIECE
          </span>
          
          <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter">
            THE APEX OF <br /> <span className="text-glow">CONTROL.</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {[
              { label: "CHASSIS", value: "Carbon Monocoque" },
              { label: "GEARBOX", value: "7-Speed ISR" },
              { label: "DRIVE", value: "AWD with HALDEX" },
              { label: "BRAKES", value: "Carbon Ceramic" }
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (idx * 0.1) }}
                className="glassmorphism p-8 rounded-2xl border-white/5 group hover:border-lambo-purple-neon/50 transition-colors"
              >
                <p className="text-[10px] text-white/30 tracking-widest font-bold mb-3 group-hover:text-lambo-purple-neon transition-colors">
                  {item.label}
                </p>
                <p className="text-white text-sm md:text-base font-bold tracking-tight">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative vertical line */}
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: "100px" }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-0 left-1/2 w-px bg-gradient-to-b from-lambo-purple-neon to-transparent opacity-50"
      />
    </section>
  )
}
