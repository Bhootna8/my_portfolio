import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const Sky = ({isRotating}) => {
  const skyRef= useRef()
  const sky = useGLTF('/assets/assets/3d/sky.glb')

  useFrame((_, delta)=> {
    if(isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  })
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky

useGLTF.preload('/assets/assets/3d/sky.glb')