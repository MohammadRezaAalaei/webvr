import { PresentationControls } from "@react-three/drei"
import { Model } from "./scene"
import { useRef } from "react"
import {useFrame} from "@react-three/fiber"
import * as THREE from 'three'
const point = [-1, 2.3, -2.1]

const plane = new THREE.PlaneGeometry(2,2,2,2)
const Experience = () => {
    const pointLightRef = useRef(null)
    useFrame( (state) => {
        if (!! pointLightRef.current) {
            pointLightRef.current.shadow.bias = -0.0001
            pointLightRef.current.shadow.mapSize.width = 1024*2
            pointLightRef.current.shadow.mapSize.height = 1024*2
            pointLightRef.current.shadow.camera.near = 0.5
            pointLightRef.current.shadow.camera.far = 25
            pointLightRef.current.shadow.camera.left = -10
            pointLightRef.current.shadow.camera.right = 10
            pointLightRef.current.shadow.camera.top = 10
            pointLightRef.current.shadow.camera.bottom = -10
            pointLightRef.current.shadow.radius = 5
            pointLightRef.current.shadow.blurSamples = 25
        }
    })
    return (
        <>
        <ambientLight intensity={0.3}/>
        <pointLight intensity={1} position={point} castShadow={true} ref={pointLightRef}/>
        {/* <mesh position={point} castShadow={true}> 
        <sphereGeometry args={[0.2, 32, 32]}/>
        <meshPhongMaterial color="white"/>
        </mesh> */}
        <Model/>
        </>
)
}

export default Experience