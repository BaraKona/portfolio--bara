import React, {Suspense, useState} from 'react'
import './scss/threeGlobe.scss'
import planet from './model/laptop.glb'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei/core";


export default function ThreeGlobe() {

  const Planet = () => {
    const planetMesh = React.useRef();
    const gltf = useLoader(GLTFLoader, planet);
    useFrame(({ clock }) => {
      const a = clock.getElapsedTime()/2;
      // planetMesh.current.rotation.y = a;
    });
    return (
      <>
        <mesh autoRotate>
          <sphereBufferGeometry args={[0.001, 32, 32]}/>
          <meshPhongMaterial />
          <OrbitControls />
        </mesh>
        <primitive position={[0, -1, 0]} object={gltf.scene} scale={1} ref={planetMesh}/>
      </>
    )
  }
    return (
      <div className="threeSection">
        <div className="threeContainer">
          <Canvas camera={{ position: [2.5, 2, 3], near: 1, far: 35 }}className="threeGlobe">

            <Planet/>
            {/* <Water/> */}
            {/* <Moon/> */}
            <ambientLight args={[0xFFafff]} intensity={2} />
            <directionalLight args={[0x44455e]} position={[2, 0, 10]} intensity={1} />
            <pointLight args={[0x44455e]} position={[0, 0, 50]} intensity={5} />
            <OrbitControls />
            {/* <Environment preset="night" background invisible /> */}
          </Canvas>
        </div>
        <div className="threeText">
          <h1> Hello &#128075;, My name is <span>Bara Konateh</span>, <br/>
            I am a front-end web developer </h1>
        </div>
      </div>
    )
  }
