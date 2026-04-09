import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Environment, ContactShadows, Float } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";
import portalDesktop from "@/assets/portal-desktop.png";
import portalMobile from "@/assets/portal-mobile.png";

function Laptop() {
  const texture = useTexture(portalDesktop);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08 - 0.2;
    }
  });

  const screenW = 3.2;
  const screenH = 2;
  const bodyDepth = 0.08;
  const baseDepth = 0.06;

  return (
    <group ref={groupRef} position={[0.3, 0, 0]}>
      {/* Base / keyboard */}
      <group position={[0, -0.02, 0.6]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <boxGeometry args={[screenW + 0.2, 2.2, baseDepth]} />
          <meshStandardMaterial color="#c0c0c8" metalness={0.85} roughness={0.15} />
        </mesh>
        {/* Trackpad */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.3, -baseDepth / 2 - 0.001]}>
          <boxGeometry args={[1.2, 0.8, 0.002]} />
          <meshStandardMaterial color="#b0b0b8" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Keyboard area */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.25, -baseDepth / 2 - 0.001]}>
          <boxGeometry args={[2.8, 0.9, 0.002]} />
          <meshStandardMaterial color="#333" metalness={0.3} roughness={0.7} />
        </mesh>
      </group>

      {/* Screen lid */}
      <group position={[0, screenH / 2 - 0.05, -0.45]} rotation={[0.15, 0, 0]}>
        {/* Screen bezel */}
        <mesh>
          <boxGeometry args={[screenW + 0.2, screenH + 0.15, bodyDepth]} />
          <meshStandardMaterial color="#2a2a30" metalness={0.7} roughness={0.2} />
        </mesh>
        {/* Screen content */}
        <mesh position={[0, 0.02, bodyDepth / 2 + 0.001]}>
          <planeGeometry args={[screenW, screenH]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      </group>
    </group>
  );
}

function Phone() {
  const texture = useTexture(portalMobile);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + 1) * 0.06 + 0.1;
    }
  });

  const phoneW = 0.85;
  const phoneH = 1.8;
  const phoneDepth = 0.06;

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef} position={[-1.8, 0.1, 0.8]} rotation={[0, 0.3, 0]}>
        {/* Phone body */}
        <mesh>
          <boxGeometry args={[phoneW + 0.08, phoneH + 0.1, phoneDepth]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.15} />
        </mesh>
        {/* Side frame accent */}
        <mesh>
          <boxGeometry args={[phoneW + 0.1, phoneH + 0.12, phoneDepth + 0.01]} />
          <meshStandardMaterial color="#003399" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 0, phoneDepth / 2 + 0.001]}>
          <planeGeometry args={[phoneW, phoneH]} />
          <meshBasicMaterial map={texture} />
        </mesh>
        {/* Notch */}
        <mesh position={[0, phoneH / 2 - 0.05, phoneDepth / 2 + 0.002]}>
          <boxGeometry args={[0.35, 0.04, 0.001]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-3, 4, -2]} intensity={0.3} color="#6688ff" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} />
      
      <group position={[0, -0.5, 0]}>
        <Laptop />
        <Phone />
      </group>

      <ContactShadows
        position={[0, -1.05, 0]}
        opacity={0.4}
        scale={8}
        blur={2.5}
        far={4}
      />
      
      <Environment preset="studio" />
    </>
  );
}

const DeviceShowcase3D = () => {
  return (
    <div className="w-full h-[400px] md:h-[450px] lg:h-[500px]">
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DeviceShowcase3D;
