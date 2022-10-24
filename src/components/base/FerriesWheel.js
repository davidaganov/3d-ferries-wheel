import { Suspense } from "react"
import { Canvas, useLoader, useThree } from "react-three-fiber"
import { OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import Title from "./Title"

const Spinner = () => {
  return <p className="spinner">Loading...</p>
}

const FerrisWheelModel = () => {
  const { scene } = useLoader(GLTFLoader, "./ferris_wheel/scene.gltf")

  return (
    <primitive
      object={scene}
      rotation={[0, 0, 0]}
      position={[0, 0, 0]}
    />
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
      <FerrisWheelModel />

      <OrbitControls />
    </>
  )
}

export default function FerrisWheel() {
  return (
    <section
      className="model"
      id="model"
    >
      <div className="model__inner inner">
        <Title
          classes="model__title"
          title="Ferris Wheel 3D"
          link="#model"
        />
        <p className="model__description">
          I have been interested in introducing 3D to websites for a long time and in the past my
          hobby was 3D modeling.
        </p>
        <p className="model__description">
          In my study project on Three.js I wanted to try adding my{" "}
          <a
            className="model__link inline-link"
            href="https://sketchfab.com/3d-models/ferris-wheel-675ab80b477b40f280b7311f81fee730"
            target="_blank"
            rel="noreferrer"
          >
            model
          </a>{" "}
          to the site
        </p>
        <div className="model__container">
          <Suspense fallback={<Spinner />}>
            <Canvas>
              <Scene />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </section>
  )
}
