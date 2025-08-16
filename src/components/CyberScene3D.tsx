import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingGeometry({ position, color, size = 0.4 }: { position: [number, number, number], color: string, size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      // Very gentle rotation
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
      meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.15;
      meshRef.current.rotation.z = Math.cos(time * 0.25) * 0.1;
      
      // Subtle scale breathing
      const scale = size + Math.sin(time * 0.8) * 0.05;
      meshRef.current.scale.setScalar(scale);
      
      // Gentle position drift - KEEP AWAY FROM HERO AREA
      const basePos = position;
      meshRef.current.position.x = basePos[0] + Math.sin(time * 0.3) * 0.3;
      meshRef.current.position.y = basePos[1] + Math.cos(time * 0.4) * 0.2;
      meshRef.current.position.z = basePos[2] + Math.sin(time * 0.2) * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[size, 1]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function InteractiveParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.elapsedTime;
      // Very gentle rotation
      particlesRef.current.rotation.x = Math.sin(time * 0.05) * 0.05;
      particlesRef.current.rotation.y = time * 0.02;
    }
    
    // Gentle color animation
    if (materialRef.current) {
      const hue = (state.clock.elapsedTime * 10) % 360;
      materialRef.current.color.setHSL(hue / 360, 0.6, 0.7);
    }
  });

  // Reduced particle count for performance and less distraction
  const particles = new Float32Array(200 * 3);
  const sizes = new Float32Array(200);
  
  for (let i = 0; i < 200; i++) {
    // Keep particles away from hero area (front center)
    particles[i * 3] = (Math.random() - 0.5) * 40;
    particles[i * 3 + 1] = (Math.random() - 0.5) * 30;
    particles[i * 3 + 2] = -Math.random() * 20 - 5; // Push particles back
    sizes[i] = Math.random() * 0.05 + 0.01;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particles}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={200}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        size={0.03}
        transparent
        opacity={0.4}
        sizeAttenuation={true}
        vertexColors={false}
      />
    </points>
  );
}

function BackgroundGeometry({ position, type }: { position: [number, number, number], type: 'cube' | 'sphere' | 'torus' }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.y = time * 0.15;
      
      // Color shifting
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      const hue = (time * 20 + position[0] * 10) % 360;
      material.emissive.setHSL(hue / 360, 0.5, 0.1);
    }
  });

  const geometry = type === 'cube' 
    ? <boxGeometry args={[0.5, 0.5, 0.5]} />
    : type === 'sphere'
    ? <sphereGeometry args={[0.3, 16, 16]} />
    : <torusGeometry args={[0.3, 0.1, 8, 16]} />;

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial
        transparent
        opacity={0.3}
        roughness={0.4}
        metalness={0.6}
        wireframe={type === 'cube'}
      />
    </mesh>
  );
}

const CyberScene3D = () => {
  return (
    <div className="absolute inset-0">
      <Canvas 
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        {/* Subtle lighting system */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} color="#4F46E5" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#EC4899" />
        <pointLight position={[10, 10, -15]} intensity={0.3} color="#06B6D4" />
        
        {/* Background geometric elements - pushed far back */}
        <FloatingGeometry position={[-15, 8, -15]} color="#4F46E5" size={0.6} />
        <FloatingGeometry position={[15, -8, -18]} color="#EC4899" size={0.5} />
        <FloatingGeometry position={[-12, -6, -20]} color="#06B6D4" size={0.4} />
        <FloatingGeometry position={[12, 6, -16]} color="#8B5CF6" size={0.5} />
        
        {/* Additional background elements */}
        <BackgroundGeometry position={[-20, 10, -25]} type="cube" />
        <BackgroundGeometry position={[20, -10, -30]} type="sphere" />
        <BackgroundGeometry position={[0, 15, -35]} type="torus" />
        <BackgroundGeometry position={[-18, -12, -28]} type="cube" />
        
        {/* Subtle particle field */}
        <InteractiveParticleField />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.2}
          enableDamping={true}
          dampingFactor={0.05}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default CyberScene3D;
