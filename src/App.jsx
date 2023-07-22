import React, { useRef, useState } from 'react';
import "./App.css"
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Box, CameraControls } from '@react-three/drei';
import Experience from './experience';
import { Model } from './scene';
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'

function App() {
  return (
    <div className='App'>
      <VRButton />
      <Canvas>
      <XR>
      
        <Controllers />
        <Hands />
        <CameraControls speed={1.5} global zoom={0.7} />
        <Experience/>
      </XR>
      </Canvas>
    </div>
  )
}

export default App;