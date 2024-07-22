import { Canvas } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import Experience from "./Experience";

const root = createRoot(document.getElementById("root"));

root.render(
  <Canvas
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      // position: [4, 2, 6],
    }}
  >
    <Experience />
  </Canvas>,
);
