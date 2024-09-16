import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

const Plane = ({ isRotating, ...props }) => {
  const planeRef = useRef();
  const { scene, animations } = useGLTF("/assets/assets/3d/plane.glb");

  const {actions} = useAnimations(animations, planeRef);

  useEffect(()=> {
    if(isRotating) {
      actions["Take 001"].play()
    }else {
      actions["Take 001"].stop()
    }
  }, [actions, isRotating])
  return (
    <mesh ref={planeRef} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;

useGLTF.preload("/assets/assets/3d/plane.glb");
