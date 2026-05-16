import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, SpotLight, useDepthBuffer } from '@react-three/drei'
import { Suspense, useState, useEffect, useRef } from 'react'
import { Car } from './Car'
import Loader from './Loader'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Scene({ isHovered, setHovered, isDragging, setDragging }) {
  const depthBuffer = useDepthBuffer({ size: 256 })
  const groupRef = useRef()
  
  // Target values that GSAP will manipulate
  const targets = useRef({
    x: 0, y: -5, z: -10,
    rotY: Math.PI, rotX: 0
  })

  useEffect(() => {
    if (!groupRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#showcase-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 4,
      }
    })

    // STAGGERED FLOW: R -> L -> R -> L -> C
    // 0 -> 0.5: Hero (Center) to Section 1 (Car moves LEFT because content is RIGHT)
    tl.to(targets.current, { x: -3, y: -0.5, z: 2, rotY: Math.PI / 4, ease: "none" }, 0)
    
    // 0.5 -> 1.5: Section 1 to Section 2 (Car moves RIGHT because content is LEFT)
    tl.to(targets.current, { x: 3, y: -0.5, z: 2, rotY: -Math.PI / 4, ease: "none" }, 1)
    
    // 1.5 -> 2.5: Section 2 to Section 3 (Car moves LEFT because content is RIGHT)
    tl.to(targets.current, { x: -3, y: -0.5, z: 1, rotY: Math.PI / 3, ease: "none" }, 2)

    // 2.5 -> 3.5: Section 3 to Section 4 (Car moves RIGHT because content is LEFT)
    tl.to(targets.current, { x: 3, y: -0.5, z: 1, rotY: -Math.PI / 3, ease: "none" }, 3)
    
    // 3.5 -> 4.5: Section 4 to CTA/Center (Car moves CENTER)
    tl.to(targets.current, { x: 0, y: -0.8, z: 0, rotY: Math.PI * 2, rotX: 0.1, ease: "none" }, 4)

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  useFrame((state, delta) => {
    if (!groupRef.current) return
    
    const lerpSpeed = 0.05
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targets.current.x, lerpSpeed)
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targets.current.y, lerpSpeed)
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targets.current.z, lerpSpeed)
    
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targets.current.rotY, lerpSpeed)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targets.current.rotX, lerpSpeed)
  })

  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.2} />
      <SpotLight
        position={[5, 15, 5]}
        angle={0.25}
        penumbra={1}
        intensity={5}
        castShadow
        color="#8B5CF6"
        depthBuffer={depthBuffer}
      />
      
      <group ref={groupRef}>
        <Car 
          isHovered={isHovered} 
          isDragging={isDragging} 
          setHovered={setHovered}
          setDragging={setDragging}
          scale={1.5} 
        />
        <ContactShadows 
          resolution={1024} 
          scale={15} 
          blur={2.5} 
          opacity={0.75} 
          far={10} 
          color="#4B0082" 
        />
      </group>

      <OrbitControls 
        enablePan={false} 
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        makeDefault 
      />
    </>
  )
}

export default function Experience({ isHovered, setHovered, isDragging, setDragging }) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 10], fov: 35 }}
      gl={{ antialias: true, toneMapping: THREE.ReinhardToneMapping }}
    >
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 5, 25]} />
      
      <Suspense fallback={<Loader />}>
        <Scene 
          isHovered={isHovered} 
          setHovered={setHovered} 
          isDragging={isDragging} 
          setDragging={setDragging} 
        />
      </Suspense>
    </Canvas>
  )
}
