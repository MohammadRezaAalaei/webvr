import React, { useRef, useState } from 'react';
import "./App.css"
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Box, CameraControls } from '@react-three/drei';
import Experience from './experience';
import { Model } from './scene';
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { TeleportationPlane } from '@react-three/xr'


function App() {
  return (
    <div className='App'>
      <Canvas>
      <XR>
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