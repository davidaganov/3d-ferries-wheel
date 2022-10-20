import { Suspense } from "react"
import { Canvas, useLoader, useThree } from "react-three-fiber"
import { OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const FerrisWheel = () => {
  const { scene } = useLoader(GLTFLoader, "./ferris_wheel/scene.gltf")

  return (
    <Suspense>
      <primitive
        object={scene}
        rotation={[0, 0, 0]}
        position={[0, 0, 0]}
      />
    </Suspense>
  )
}

const Lights = () => {
  return (
    <>
      <pointLight
        intensity={0.7}
        position={[0, 15, -2]}
        color="#D4479D"
      />
      <spotLight
        color="#FF2323"
        intensity={0.5}
        position={[35, 10, -20]}
        angle={45}
      />
      <spotLight
        color="#C118D2"
        intensity={0.7}
        position={[-30, -10, 20]}
        angle={55}
      />
    </>
  )
}

const Scene = () => {
  useThree(({ camera }) => {
    camera.position.set(30, 20, 40)
  })

  return (
    <>
      <Lights />
      <FerrisWheel />

      <OrbitControls />
    </>
  )
}

export default function App() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  )
}
