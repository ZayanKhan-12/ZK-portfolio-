import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingGeometry({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // 4D-inspired rotation with time-based morphing
      const time = state.clock.elapsedTime;
      meshRef.current.rotation.x = Math.sin(time) * 0.3 + Math.cos(time * 0.7) * 0.2;
      meshRef.current.rotation.y = Math.sin(time * 0.5) * 0.5 + Math.sin(time * 1.3) * 0.3;
      meshRef.current.rotation.z = Math.cos(time * 0.8) * 0.4;
      
      // 4D scale animation (representing 4th dimension through scale)
      const scale = 1 + Math.sin(time * 2) * 0.3;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.5, 1]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.6}
          speed={2}
          roughness={0}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function MorphingCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      // Complex 4D transformation simulation
      meshRef.current.rotation.x = time * 0.7;
      meshRef.current.rotation.y = time * 0.5;
      meshRef.current.rotation.z = Math.sin(time) * 0.3;
      
      // 4D position shifting
      meshRef.current.position.x = position[0] + Math.sin(time * 0.8) * 2;
      meshRef.current.position.y = position[1] + Math.cos(time * 0.6) * 1.5;
      meshRef.current.position.z = position[2] + Math.sin(time * 1.2) * 1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial
        color="#ff6b6b"
        transparent
        opacity={0.7}
        wireframe={true}
      />
    </mesh>
  );
}

function HypercubeWireframe() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      // 4D hypercube rotation simulation
      groupRef.current.rotation.x = time * 0.3;
      groupRef.current.rotation.y = time * 0.4;
      groupRef.current.rotation.z = time * 0.2;
    }
  });

  // Create 8 cubes representing vertices of a 4D hypercube projected to 3D
  const cubes = [];
  for (let i = 0; i < 8; i++) {
    const x = (i & 1) ? 1 : -1;
    const y = (i & 2) ? 1 : -1;
    const z = (i & 4) ? 1 : -1;
    
    cubes.push(
      <mesh key={i} position={[x, y, z]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial
          color="#4ecdc4"
          transparent
          opacity={0.8}
          emissive="#4ecdc4"
          emissiveIntensity={0.2}
        />
      </mesh>
    );
  }

  return (
    <group ref={groupRef} position={[4, 1, -3]}>
      {cubes}
    </group>
  );
}

function TesseractProjection() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      // 4D tesseract rotation with complex transformations
      meshRef.current.rotation.x = Math.sin(time * 0.5) * Math.PI;
      meshRef.current.rotation.y = Math.cos(time * 0.3) * Math.PI;
      meshRef.current.rotation.z = Math.sin(time * 0.7) * 0.5;
      
      // Color animation representing 4th dimension
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      const hue = (time * 50) % 360;
      material.color.setHSL(hue / 360, 0.8, 0.6);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={3}>
      <mesh ref={meshRef} position={[-4, -2, 2]}>
        <octahedronGeometry args={[0.7, 2]} />
        <meshStandardMaterial
          transparent
          opacity={0.6}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function HolographicText() {
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={1}>
      <Text3D
        font="/fonts/Space_Grotesk_Bold.json"
        size={1.5}
        height={0.1}
        position={[-3, 0, 0]}
      >
        CYBER
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </Text3D>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.elapsedTime;
      // 4D rotation simulation
      particlesRef.current.rotation.x = Math.sin(time * 0.1) * 0.2;
      particlesRef.current.rotation.y = time * 0.1;
      particlesRef.current.rotation.z = Math.cos(time * 0.15) * 0.1;
    }
    
    // 4D color animation
    if (materialRef.current) {
      const hue = (state.clock.elapsedTime * 30) % 360;
      materialRef.current.color.setHSL(hue / 360, 0.8, 0.7);
    }
  });

  const particles = new Float32Array(500 * 3);
  const sizes = new Float32Array(500);
  
  for (let i = 0; i < 500; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 25;
    particles[i * 3 + 1] = (Math.random() - 0.5) * 25;
    particles[i * 3 + 2] = (Math.random() - 0.5) * 25;
    sizes[i] = Math.random() * 0.1 + 0.02;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={500}
          array={particles}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={500}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        size={0.05}
        transparent
        opacity={0.7}
        sizeAttenuation={true}
        vertexColors={false}
      />
    </points>
  );
}

const CyberScene3D = () => {
  return (
    <div className="absolute inset-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ff00ff" />
        <pointLight position={[0, 15, 5]} intensity={1} color="#ffff00" />
        
        {/* Enhanced floating geometries with 4D animations */}
        <FloatingGeometry position={[-3, 2, 0]} color="#00ffff" />
        <FloatingGeometry position={[3, -1, -2]} color="#ff00ff" />
        <FloatingGeometry position={[0, -2, 1]} color="#ffff00" />
        <FloatingGeometry position={[-2, -1, 2]} color="#00ff00" />
        <FloatingGeometry position={[2, 3, -1]} color="#ff6b6b" />
        
        {/* 4D geometric constructs */}
        <MorphingCube position={[1, 0, 3]} />
        <MorphingCube position={[-3, 1, -2]} />
        <HypercubeWireframe />
        <TesseractProjection />
        
        {/* Enhanced particle field */}
        <ParticleField />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
};

export default CyberScene3D;