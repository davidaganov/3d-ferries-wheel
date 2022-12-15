import { Suspense } from "react"
import { useLoader, useThree } from "react-three-fiber"
import { Controls, useControl } from "react-three-gui"
import { OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import Title from "./Title"

const Spinner = () => {
  return <p className="spinner">Loading...</p>
}

const Model = () => {
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
  const pointX = useControl("Position X", {
    group: "Point Light",
    type: "number",
    min: -50,
    max: 50
  })
  const pointY = useControl("Position Y", {
    group: "Point Light",
    type: "number",
    min: -50,
    max: 50
  })

  const spotX_one = useControl("Position X", {
    group: "First Spot Light",
    type: "number",
    min: -50,
    max: 50
  })
  const spotY_one = useControl("Position Y", {
    group: "First Spot Light",
    type: "number",
    min: -50,
    max: 50
  })

  const spotX_second = useControl("Position X", {
    group: "Second Spot Light",
    type: "number",
    min: -50,
    max: 50
  })
  const spotY_second = useControl("Position Y", {
    group: "Second Spot Light",
    type: "number",
    min: -50,
    max: 50
  })

  return (
    <>
      <pointLight
        intensity={0.7}
        position={[pointX, pointY, -2]}
        color="#D4479D"
      />
      <spotLight
        color="#FF2323"
        intensity={0.5}
        position={[spotX_one, spotY_one, -20]}
        angle={45}
      />
      <spotLight
        color="#C118D2"
        intensity={0.7}
        position={[spotX_second, spotY_second, 20]}
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
      <Model />

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
          className="model__title"
          title="Ferris Wheel 3D"
          link="#model"
          number={1}
          direction="ltr"
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
            <Controls.Provider>
              <Controls.Canvas>
                <Scene />
              </Controls.Canvas>
              <Controls
                title="Lighting Control"
                collapsed={true}
                width={250}
                anchor={"bottom_right"}
              />
            </Controls.Provider>
          </Suspense>
        </div>
      </div>
    </section>
  )
}
