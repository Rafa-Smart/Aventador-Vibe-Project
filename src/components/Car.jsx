import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Car({ isHovered, isDragging, setHovered, setDragging, ...props }) {
  const group = useRef()
  const { scene } = useGLTF('/models/car.glb')
  
  // Basic floating animation and idle movement
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!isDragging) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t * 0.2) * 0.1, 0.05)
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, Math.sin(t * 0.5) * 0.05, 0.05)
    }
  })

  return (
    <group 
      ref={group} 
      {...props} 
      dispose={null}
      onPointerEnter={(e) => {
        e.stopPropagation()
        setHovered(true)
      }}
      onPointerLeave={(e) => {
        setHovered(false)
      }}
      onPointerDown={(e) => {
        e.stopPropagation()
        setDragging(true)
      }}
      onPointerUp={(e) => {
        setDragging(false)
      }}
    >
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('/models/car.glb')
