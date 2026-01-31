import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, Stars, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const Rocket = () => {
  const rocketRef = useRef<THREE.Group>(null);
  const angle = useRef(0);

  useFrame((state) => {
    if (rocketRef.current) {
      angle.current += 0.01;
      const radius = 4;
      rocketRef.current.position.x = Math.cos(angle.current) * radius;
      rocketRef.current.position.z = Math.sin(angle.current) * radius;
      rocketRef.current.position.y = Math.sin(angle.current * 2) * 0.5;
      rocketRef.current.rotation.y = angle.current + Math.PI / 2;
    }
  });

  return (
    <group ref={rocketRef}>
      {/* Cuerpo del cohete */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.2, 0.8, 8]} />
        <meshStandardMaterial color="#E3B037" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Nariz del cohete */}
      <mesh position={[0.4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.15, 0.3, 8]} />
        <meshStandardMaterial color="#4F1675" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Aletas */}
      <mesh position={[-0.3, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.1, 0.3, 0.05]} />
        <meshStandardMaterial color="#4F1675" />
      </mesh>
      <mesh position={[-0.3, -0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.1, 0.3, 0.05]} />
        <meshStandardMaterial color="#4F1675" />
      </mesh>
    </group>
  );
};

const Globe = () => {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere ref={globeRef} args={[2, 64, 64]}>
      <MeshDistortMaterial
        color="#8B4FCF"
        attach="material"
        distort={0.2}
        speed={1.2}
        roughness={0.3}
        metalness={0.6}
        emissive="#4F1675"
        emissiveIntensity={0.3}
      />
    </Sphere>
  );
};

const HeroScene3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        {/* Luces mejoradas */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#E3B037" />
        <directionalLight position={[-5, -5, 5]} intensity={0.8} color="#4F1675" />
        <pointLight position={[0, 10, 0]} intensity={1} color="#ffffff" />
        
        <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
        
        <Globe />
        <Rocket />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default HeroScene3D;
