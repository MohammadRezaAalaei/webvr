import { PresentationControls } from "@react-three/drei"
import { Model } from "./scene"

const Experience = () => {
    return (
        <>
        <ambientLight intensity={1}/>
        <Model/>
        </>
)
}

export default Experience