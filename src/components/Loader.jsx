import { useProgress, Html } from '@react-three/drei'

export default function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-black z-[200]">
        <div className="text-white text-xs tracking-[0.5em] font-bold mb-4 animate-pulse">
          INITIALIZING CORE SYSTEMS
        </div>
        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-lambo-purple-neon transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-[10px] text-white/40 tracking-widest">
          {Math.round(progress)}%
        </div>
      </div>
    </Html>
  )
}
