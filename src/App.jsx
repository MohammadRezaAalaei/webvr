import React, { useRef, useState } from 'react';
import "./App.css"
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Box, CameraControls, OrbitControls } from '@react-three/drei';
import Experience from './experience';
import { Model } from './scene';
import { VRButton, ARButton, XR, Controllers, Hands, useXR} from '@react-three/xr'
import { TeleportationPlane } from '@react-three/xr'
import SmoothLocomotion from './SmoothLocomotion.jsx'
import SnapRotation from './SnapRotation'

function App() {
  return (
    <div className='App'>
      <VRButton />
      <Canvas>
      <XR>
        <Controllers />
        <Hands />
        {/* <TeleportationPlane */}
          /** Whether to allow teleportation from left controller. Default is `false` */
          leftHand={true}
          /** Whether to allow teleportation from right controller. Default is `false` */
          rightHand={false}
          /** The maximum distance from the camera to the teleportation point. Default is `10` */
          maxDistance={10}
          /** The radial size of the teleportation marker. Default is `0.25` */
          size={0.25}
        />
        
        <OrbitControls/>
        <SmoothLocomotion hand="left" />
        <SnapRotation hand="right" />
        <Experience/>
      </XR>
      </Canvas>
    </div>
  )
}

export default App;