import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingGeometry({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      // Complex 4D rotation with multiple time frequencies
      meshRef.current.rotation.x = Math.sin(time * 1.2) * 0.5 + Math.cos(time * 0.7) * 0.3;
      meshRef.current.rotation.y = Math.sin(time * 0.8) * 0.7 + Math.sin(time * 1.5) * 0.2;
      meshRef.current.rotation.z = Math.cos(time * 1.1) * 0.6 + Math.sin(time * 0.9) * 0.4;
      
      // Advanced 4D scale animation with hyperdimensional breathing
      const scale1 = 1 + Math.sin(time * 2.3) * 0.5;
      const scale2 = 1 + Math.cos(time * 1.7) * 0.4;
      const scale3 = 1 + Math.sin(time * 3.1) * 0.3;
      meshRef.current.scale.set(scale1, scale2, scale3);
      
      // 4D position oscillation
      const basePos = position;
      meshRef.current.position.x = basePos[0] + Math.sin(time * 0.9) * 1.5;
      meshRef.current.position.y = basePos[1] + Math.cos(time * 1.3) * 1.2;
      meshRef.current.position.z = basePos[2] + Math.sin(time * 0.6) * 0.8;
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={3}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.6, 2]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.8}
          speed={3}
          roughness={0}
          metalness={1}
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
      // Hyperdimensional rotation matrix simulation
      meshRef.current.rotation.x = time * 1.2 + Math.sin(time * 2.1) * 0.5;
      meshRef.current.rotation.y = time * 0.8 + Math.cos(time * 1.7) * 0.7;
      meshRef.current.rotation.z = Math.sin(time * 1.5) * 0.9 + Math.cos(time * 2.3) * 0.4;
      
      // Extreme 4D scale morphing
      const scaleX = 1 + Math.sin(time * 3.2) * 0.8;
      const scaleY = 1 + Math.cos(time * 2.7) * 0.9;
      const scaleZ = 1 + Math.sin(time * 4.1) * 0.6;
      meshRef.current.scale.set(scaleX, scaleY, scaleZ);
      
      // 4D hyperspace movement
      meshRef.current.position.x = position[0] + Math.sin(time * 1.1) * 3 + Math.cos(time * 0.7) * 1.5;
      meshRef.current.position.y = position[1] + Math.cos(time * 0.9) * 2.5 + Math.sin(time * 1.4) * 1;
      meshRef.current.position.z = position[2] + Math.sin(time * 1.6) * 2 + Math.cos(time * 1.2) * 1.8;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#ff6b6b"
        transparent
        opacity={0.8}
        wireframe={true}
        emissive="#ff6b6b"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function HyperSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      // 4D hypersphere pulsation
      const radius = 0.5 + Math.sin(time * 2.5) * 0.4 + Math.cos(time * 3.8) * 0.3;
      meshRef.current.scale.setScalar(radius * 2);
      
      // Complex 4D orbital motion
      const orbitRadius = 2 + Math.sin(time * 0.8) * 1;
      meshRef.current.position.x = position[0] + Math.cos(time * 1.3) * orbitRadius;
      meshRef.current.position.y = position[1] + Math.sin(time * 0.9) * orbitRadius * 0.7;
      meshRef.current.position.z = position[2] + Math.sin(time * 1.1) * Math.cos(time * 0.6) * orbitRadius * 0.5;
      
      // Color shifting through 4D spectrum
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      const hue = (time * 60 + Math.sin(time * 2) * 180) % 360;
      material.color.setHSL(hue / 360, 0.9, 0.6);
      material.emissive.setHSL(hue / 360, 0.7, 0.3);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        transparent
        opacity={0.7}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

function HypercubeWireframe() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      // 4D hypercube rotation with scaling
      groupRef.current.rotation.x = time * 0.5 + Math.sin(time * 1.8) * 0.3;
      groupRef.current.rotation.y = time * 0.7 + Math.cos(time * 2.2) * 0.4;
      groupRef.current.rotation.z = time * 0.3 + Math.sin(time * 1.5) * 0.5;
      
      // 4D scale breathing
      const scale = 1 + Math.sin(time * 1.9) * 0.5 + Math.cos(time * 2.6) * 0.3;
      groupRef.current.scale.setScalar(scale);
      
      // Hyperspace drift
      groupRef.current.position.y = 1 + Math.sin(time * 0.7) * 2;
      groupRef.current.position.x = 4 + Math.cos(time * 0.5) * 1.5;
    }
  });

  // Create 16 cubes representing vertices of a 4D hypercube
  const cubes = [];
  for (let i = 0; i < 16; i++) {
    const x = (i & 1) ? 1.5 : -1.5;
    const y = (i & 2) ? 1.5 : -1.5;
    const z = (i & 4) ? 1.5 : -1.5;
    const w = (i & 8) ? 0.5 : -0.5; // 4th dimension projected as offset
    
    cubes.push(
      <mesh key={i} position={[x + w, y + w, z + w]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial
          color="#4ecdc4"
          transparent
          opacity={0.9}
          emissive="#4ecdc4"
          emissiveIntensity={0.4}
        />
      </mesh>
    );
  }

  return <group ref={groupRef}>{cubes}</group>;
}

function PentachoronProjection() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      // 5D simplex rotation simulation
      meshRef.current.rotation.x = Math.sin(time * 0.8) * Math.PI * 2;
      meshRef.current.rotation.y = Math.cos(time * 0.6) * Math.PI * 1.5;
      meshRef.current.rotation.z = Math.sin(time * 1.2) * Math.PI;
      
      // Extreme 4D scale morphing
      const scaleX = 1 + Math.sin(time * 4.2) * 0.9;
      const scaleY = 1 + Math.cos(time * 3.7) * 0.8;
      const scaleZ = 1 + Math.sin(time * 5.1) * 0.7;
      meshRef.current.scale.set(scaleX, scaleY, scaleZ);
      
      // Color cycling through 4D color space
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      const hue = (time * 100 + Math.sin(time * 3) * 120) % 360;
      material.color.setHSL(hue / 360, 0.8, 0.6);
      material.emissive.setHSL((hue + 180) % 360 / 360, 0.5, 0.2);
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={3} floatIntensity={4}>
      <mesh ref={meshRef} position={[-5, -3, 1]}>
        <tetrahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function TesseractProjection() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      // Hyperdimensional tesseract rotation
      meshRef.current.rotation.x = Math.sin(time * 0.9) * Math.PI * 1.5;
      meshRef.current.rotation.y = Math.cos(time * 0.7) * Math.PI * 2;
      meshRef.current.rotation.z = Math.sin(time * 1.4) * Math.PI * 0.8;
      
      // Massive 4D scale variations
      const baseScale = 1 + Math.sin(time * 2.8) * 0.8;
      const scaleX = baseScale * (1 + Math.cos(time * 4.1) * 0.6);
      const scaleY = baseScale * (1 + Math.sin(time * 3.5) * 0.7);
      const scaleZ = baseScale * (1 + Math.cos(time * 5.2) * 0.5);
      meshRef.current.scale.set(scaleX, scaleY, scaleZ);
      
      // 4D position interpolation
      meshRef.current.position.x = -4 + Math.sin(time * 0.8) * 2.5;
      meshRef.current.position.y = -2 + Math.cos(time * 1.1) * 3;
      meshRef.current.position.z = 2 + Math.sin(time * 0.6) * 2;
      
      // Advanced color morphing
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      const hue = (time * 80 + Math.sin(time * 2.5) * 150) % 360;
      material.color.setHSL(hue / 360, 0.9, 0.7);
      material.emissive.setHSL((hue + 120) % 360 / 360, 0.6, 0.3);
    }
  });

  return (
    <Float speed={3} rotationIntensity={4} floatIntensity={5}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[0.8, 3]} />
        <meshStandardMaterial
          transparent
          opacity={0.75}
          roughness={0.05}
          metalness={0.95}
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
    <div className="absolute inset-0 opacity-50">
      <Canvas camera={{ position: [0, 0, 15], fov: 65 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[12, 12, 12]} intensity={2} color="#00ffff" />
        <pointLight position={[-12, -12, -12]} intensity={1.5} color="#ff00ff" />
        <pointLight position={[0, 20, 8]} intensity={1.2} color="#ffff00" />
        <pointLight position={[8, -8, 12]} intensity={1} color="#00ff00" />
        
        {/* Enhanced floating geometries with extreme 4D animations */}
        <FloatingGeometry position={[-4, 3, 0]} color="#00ffff" />
        <FloatingGeometry position={[4, -2, -3]} color="#ff00ff" />
        <FloatingGeometry position={[0, -3, 2]} color="#ffff00" />
        <FloatingGeometry position={[-3, -2, 3]} color="#00ff00" />
        <FloatingGeometry position={[3, 4, -2]} color="#ff6b6b" />
        <FloatingGeometry position={[-2, 0, -4]} color="#9b59b6" />
        <FloatingGeometry position={[5, 1, 1]} color="#e74c3c" />
        
        {/* 4D geometric constructs with enhanced movement */}
        <MorphingCube position={[2, 0, 4]} />
        <MorphingCube position={[-4, 2, -3]} />
        <MorphingCube position={[0, -4, 0]} />
        
        {/* Hyperdimensional objects */}
        <HyperSphere position={[6, -1, 2]} />
        <HyperSphere position={[-5, 3, -1]} />
        <HyperSphere position={[1, 5, -3]} />
        
        <HypercubeWireframe />
        <TesseractProjection />
        <PentachoronProjection />
        
        {/* Enhanced particle field */}
        <ParticleField />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.2}
        />
      </Canvas>
    </div>
  );
};

export default CyberScene3D;