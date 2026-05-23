import { motion } from 'framer-motion'

export default function Interior() {
  return (
    <section id="interior" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-center px-10">
      {/* Cinematic Reveal Background */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: false }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/1.png" 
          alt="Lambo Interior" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </motion.div>

      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-lambo-purple-neon text-[10px] font-black tracking-[0.8em] mb-6 block uppercase">
            The Final Masterpiece
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
            UNLEASH THE <br /> <span className="text-lambo-purple-neon italic">CRAFTSMANSHIP.</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white/40 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto italic mb-12"
          >
            "A sanctuary of speed, where every stitch tells a story of 
            Italian mastery and the relentless pursuit of perfection."
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-12">
          {[
            { title: "AD PERSONAM", desc: "Infinite customization" },
            { title: "SENSORY COCKPIT", desc: "Direct emotional connection" },
            { title: "ITALIAN DNA", desc: "Generations of mastery" }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + (idx * 0.1) }}
              className="px-6 py-4 border-l border-white/10 text-left"
            >
              <h4 className="text-lambo-purple-neon text-[10px] font-black tracking-[0.3em] mb-2">
                {item.title}
              </h4>
              <p className="text-white/60 text-xs tracking-wider">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lambo-purple-neon/20 to-transparent pointer-events-none"
      />
    </section>
  )
}
