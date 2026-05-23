import { motion } from 'framer-motion'

export default function Design() {
  return (
    <section id="design" className="relative min-h-screen w-full flex items-center justify-start px-10 md:px-32 overflow-hidden">
      <div className="max-w-3xl text-left relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false }}
        >
          <span className="text-lambo-purple-neon text-[10px] font-black tracking-[0.6em] mb-4 block uppercase opacity-70">
            Aesthetic Dominance
          </span>
          <h2 className="text-6xl md:text-[5.5rem] font-black mb-12 tracking-tighter leading-[0.9] text-white">
            AERODYNAMIC <br /> <span className="text-lambo-purple-neon italic">ARTISTRY.</span>
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: false }}
          className="border-l border-white/20 pl-10 mb-16"
        >
          <p className="text-white/50 text-lg md:text-xl leading-relaxed font-light max-w-xl italic">
            "Every curve serves a purpose. Every line defines speed. 
            The hexagonal design language meets futuristic aesthetics to create 
            a silhouette that remains unmistakable."
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-8 max-w-lg">
           {[
             { name: 'CARBON FIBER', desc: 'Precision lightweight structure' },
             { name: 'ACTIVE AERO', desc: 'Adaptive air flow management' }
           ].map((tech, idx) => (
             <motion.div 
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + (idx * 0.1) }}
              className="flex flex-col gap-2"
             >
               <span className="text-[10px] tracking-[0.3em] font-black text-lambo-purple-neon">{tech.name}</span>
               <span className="text-white/40 text-[10px] font-medium leading-tight">{tech.desc}</span>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
