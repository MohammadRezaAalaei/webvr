import React, { useRef, useState } from 'react';
import "./App.css"
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Box, CameraControls } from '@react-three/drei';
import Experience from './experience';
import { Model } from './scene';
import { VRButton, ARButton, XR, Controllers, Hands, useXR } from '@react-three/xr'
import { TeleportationPlane } from '@react-three/xr'
import { OrbitControls as OrbitControlsImpl } from 'three/examples/jsm/controls/OrbitControls';

const OrbitControls = () => {
  const { camera, gl } = useThree();
  const orbitRef = React.useRef();

  useFrame(() => {
    if (orbitRef.current) orbitRef.current.update();
  });

  React.useEffect(() => {
    orbitRef.current = new OrbitControlsImpl(camera, gl.domElement);
    orbitRef.current.enableDamping = true; // Add damping for smooth rotation
    orbitRef.current.dampingFactor = 0.1; // Adjust the damping factor as desired
    orbitRef.current.target.set(0, 0, 0); // Set the orbit target (center of the scene)

    return () => {
      orbitRef.current.dispose();
      orbitRef.current = null;
    };
  }, [camera, gl]);

  return null;
};

function App() {
  return (
    <div className='App'>
      <VRButton />
      <Canvas>
      <XR>
        <Controllers />
        <OrbitControls />
        <Hands />
        <TeleportationPlane
          /** Whether to allow teleportation from left controller. Default is `false` */
          leftHand={true}
          /** Whether to allow teleportation from right controller. Default is `false` */
          rightHand={false}
          /** The maximum distance from the camera to the teleportation point. Default is `10` */
          maxDistance={10}
          /** The radial size of the teleportation marker. Default is `0.25` */
          size={0.25}
        />
        
        <CameraControls speed={1.5} global zoom={0.7} />
        <Experience/>
      </XR>
      </Canvas>
    </div>
  )
}

export default App;