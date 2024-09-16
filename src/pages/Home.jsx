import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Island from "../models/Island";
import { Bird, Plane, Sky } from "../models";
import { HomeInfo, Loader } from "../components";

const Home = () => {
  const audioRef = useRef(new Audio("/assets/assets/sakura.mp3"));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlaying]);
  const adjustIslandSizeForScreen = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7077, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneSizeForScreen = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenPosition = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenPosition, screenScale];
  };
  console.log(currentStage);

  const [screenScale, screenPosition, rotation] = adjustIslandSizeForScreen();
  const [planeScale, planePosition] = adjustPlaneSizeForScreen();
  return (
    <section className="w-svw h-svh relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage !== 0 && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={` w-svw h-svh bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 3, 1]} intensity={2} />
          <hemisphereLight
            skyColor={"white"}
            groundColor={"black"}
            intensity={0.5}
          />
          <Sky isRotating={isRotating} />
          <Island
            setCurrentStage={setCurrentStage}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            position={screenPosition}
            scale={screenScale}
            rotation={rotation}
          />
          <Bird />
          <Plane
            planePosition={planePosition}
            isRotating={isRotating}
            rotation={[0, 20.1, 0]}
            planeScale={planeScale}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          className="w-10 h-10 cursor-pointer object-contain"
          src={
            !isPlaying
              ? "/assets/assets/icons/soundoff.png"
              : "/assets/assets/icons/soundon.png"
          }
          alt="jukebox"
          onClick={() => setIsPlaying(!isPlaying)}
        />
      </div>
    </section>
  );
};

export default Home;
