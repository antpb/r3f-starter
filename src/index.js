// Import dependencies
import React, { useRef } from 'react';
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber';

// Define the component for a rotating box
function RotatingBox() {
  // Get a reference to the mesh
  const meshRef = useRef();

  // Rotate the mesh every frame using useFrame
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  // Return the mesh with some basic material and geometry
  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

// Define the main component that renders the scene
function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingBox />
    </Canvas>
  );
}

// Start the app by rendering the Scene component to the DOM
ReactDOM.render(<Scene />, document.getElementById('root'));

