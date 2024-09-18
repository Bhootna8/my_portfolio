import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Clock } from "three";

const Person = ({isRotating, ...props }) => {
  const { nodes, materials, animations } = useGLTF("/assets/assets/3d/astronaut.glb");
  const group = useRef()
  const personRef = useRef()

  const {actions} = useAnimations(animations, personRef)

  useEffect(()=> {
    if(isRotating) {
      actions["2186256603392_TempMotion"].play()
    }

    return ()=> {
      actions["2186256603392_TempMotion"].stop()
    }
  }, [actions, isRotating])

  return (
    <group ref={group} {...props} dispose={null}>
    <group  name="Sketchfab_Scene">
      <group  name="Sketchfab_model" rotation={[1.702, 0, 0]}>
        <group
        
          name="8495a79ebaf74f418e9f9dac9f7e79d0fbx"
          rotation={[3, 0, 0]}
          scale={[0.004, 0.004, 0.004]}>
          <group  name="Object_2">
            <group  name="RootNode">
              <group  name="Object_4">
                <primitive ref={personRef} object={nodes._rootJoint} />
                <skinnedMesh
                  name="Object_7"
                  geometry={nodes.Object_7.geometry}
                  material={materials.Material_0}
                  skeleton={nodes.Object_7.skeleton}
                  morphTargetDictionary={nodes.Object_7.morphTargetDictionary}
                  morphTargetInfluences={nodes.Object_7.morphTargetInfluences}
                />
                <skinnedMesh
                  name="Object_9"
                  geometry={nodes.Object_9.geometry}
                  material={materials.Material_0_001}
                  skeleton={nodes.Object_9.skeleton}
                  morphTargetDictionary={nodes.Object_9.morphTargetDictionary}
                  morphTargetInfluences={nodes.Object_9.morphTargetInfluences}
                />
                <skinnedMesh
                  name="Object_11"
                  geometry={nodes.Object_11.geometry}
                  material={materials.Material_0_002}
                  skeleton={nodes.Object_11.skeleton}
                  morphTargetDictionary={nodes.Object_11.morphTargetDictionary}
                  morphTargetInfluences={nodes.Object_11.morphTargetInfluences}
                />
                <skinnedMesh
                  name="Object_13"
                  geometry={nodes.Object_13.geometry}
                  material={materials.Material_0_003}
                  skeleton={nodes.Object_13.skeleton}
                  morphTargetDictionary={nodes.Object_13.morphTargetDictionary}
                  morphTargetInfluences={nodes.Object_13.morphTargetInfluences}
                />
                <skinnedMesh
                  name="Object_15"
                  geometry={nodes.Object_15.geometry}
                  material={materials.Material_0_004}
                  skeleton={nodes.Object_15.skeleton}
                  morphTargetDictionary={nodes.Object_15.morphTargetDictionary}
                  morphTargetInfluences={nodes.Object_15.morphTargetInfluences}
                />
                <group name="Object_6" />
                <group name="Object_8" />
                <group name="Object_10" />
                <group name="Object_12" />
                <group name="Object_14" />
                <group name="geometry_0" />
                <group name="geometry_0_001" />
                <group name="geometry_0_002" />
                <group name="geometry_0_003" />
                <group name="geometry_0_004" />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  </group>
  );
};

export default Person;

useGLTF.preload("/assets/assets/3d/astronaut.glb");
