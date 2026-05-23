import { motion } from 'framer-motion'

export default function TechSpecs() {
  return (
    <section id="techspecs" className="relative min-h-screen w-full flex items-center justify-end px-10 md:px-32 overflow-hidden">
      <div className="max-w-2xl text-right relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false }}
        >
          <span className="text-lambo-purple-neon text-[10px] font-black tracking-[0.8em] mb-4 block uppercase opacity-70">
            Absolute Control
          </span>
          <h2 className="text-6xl md:text-[5.5rem] font-black mb-16 tracking-tighter leading-[0.9] text-white">
            FORGED IN <br /> <span className="text-lambo-purple-neon italic">SILENCE.</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-12">
            {[
              { label: "CHASSIS", value: "Carbon Fiber Monocoque", detail: "Ultimate structural rigidity" },
              { label: "GEARBOX", value: "7-Speed ISR", detail: "Shifting in 50 milliseconds" },
              { label: "BRAKES", value: "CCB Carbon Ceramic", detail: "Max deceleration performance" }
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + (idx * 0.2) }}
                className="flex flex-col items-end border-r border-white/10 pr-8"
              >
                <p className="text-[9px] text-white/30 tracking-[0.4em] font-black mb-1 uppercase">{item.label}</p>
                <p className="text-white text-2xl md:text-3xl font-black mb-1">{item.value}</p>
                <p className="text-lambo-purple-neon text-[10px] font-medium tracking-widest opacity-60">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
