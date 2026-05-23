import { motion } from 'framer-motion'

const stats = [
  { label: 'TOP SPEED', value: '350', unit: 'KM/H' },
  { label: '0-100 KM/H', value: '2.8', unit: 'SEC' },
  { label: 'POWER', value: '770', unit: 'CV' },
]

export default function Performance() {
  return (
    <section id="performance" className="relative min-h-screen w-full flex items-center justify-end px-10 md:px-32 overflow-hidden">
      <div className="max-w-2xl text-right relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          <span className="text-lambo-purple-neon text-[10px] font-black tracking-[0.6em] mb-4 block uppercase opacity-70">
            Engineered Excellence
          </span>
          <h2 className="text-6xl md:text-[5.5rem] font-black mb-16 tracking-tighter leading-[0.9] text-white">
            PURE <br /> <span className="text-lambo-purple-neon italic">PERFORMANCE.</span>
          </h2>
          
          <div className="flex flex-col items-end gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="flex flex-col items-end group"
              >
                <span className="text-[9px] tracking-[0.5em] text-white/30 mb-2 font-bold group-hover:text-lambo-purple-neon transition-colors">
                  {stat.label}
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl md:text-6xl font-black text-white tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-lambo-purple-neon text-xs font-black tracking-widest">
                    {stat.unit}
                  </span>
                </div>
                <div className="w-0 h-px bg-lambo-purple-neon mt-4 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
