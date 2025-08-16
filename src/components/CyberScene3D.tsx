import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingGeometry({ position, color, size = 0.6 }: { position: [number, number, number], color: string, size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      // Smooth 4D rotation without jarring movements
      meshRef.current.rotation.x = Math.sin(time * 0.8) * 0.3;
      meshRef.current.rotation.y = Math.sin(time * 0.6) * 0.4;
      meshRef.current.rotation.z = Math.cos(time * 0.7) * 0.2;
      
      // Gentle 4D scale breathing
      const scale = size + Math.sin(time * 1.5) * 0.1;
      meshRef.current.scale.setScalar(scale);
      
      // Smooth 4D position drift
      const basePos = position;
      meshRef.current.position.x = basePos[0] + Math.sin(time * 0.5) * 0.8;
      meshRef.current.position.y = basePos[1] + Math.cos(time * 0.7) * 0.6;
      meshRef.current.position.z = basePos[2] + Math.sin(time * 0.4) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[size, 2]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

function MegaInteractive4DName() {
  const groupRef = useRef<THREE.Group>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  useFrame((state) => {
    if (groupRef.current && !isDragging) {
      const time = state.clock.elapsedTime;
      // Gentle auto-rotation when not being manipulated
      groupRef.current.rotation.x = rotation.x + Math.sin(time * 0.2) * 0.05;
      groupRef.current.rotation.y = rotation.y + time * 0.05;
      
      // Stable scale with subtle breathing - NO BRIGHTNESS FLUCTUATION
      const baseScale = isHovered ? 1.15 : 1;
      const breathe = Math.sin(time * 1.2) * 0.03; // Very subtle breathing
      groupRef.current.scale.setScalar(baseScale + breathe);
      
      // Gentle vertical drift
      groupRef.current.position.y = Math.sin(time * 0.3) * 0.1;
    }
  });

  const handlePointerDown = (event: any) => {
    setIsDragging(true);
    event.stopPropagation();
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (event: any) => {
    if (isDragging && event.movementX && event.movementY) {
      setRotation({
        x: rotation.x + event.movementY * 0.005,
        y: rotation.y + event.movementX * 0.005,
      });
    }
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
    document.body.style.cursor = 'grab';
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    document.body.style.cursor = 'default';
  };

  // STABLE brightness materials - NO FLUCTUATION
  const zayanMaterial = {
    color: "#00ffff",
    emissive: "#00ffff",
    emissiveIntensity: 0.6, // FIXED intensity
    metalness: 0.9,
    roughness: 0.05,
    transparent: true,
    opacity: 0.95
  };

  const khanMaterial = {
    color: "#ff00ff",
    emissive: "#ff00ff", 
    emissiveIntensity: 0.6, // FIXED intensity
    metalness: 0.9,
    roughness: 0.05,
    transparent: true,
    opacity: 0.95
  };

  // MASSIVE 3D text using larger geometric shapes
  return (
    <group
      ref={groupRef}
      position={[0, 1, -1]}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {/* Z - MASSIVE SIZE */}
      <group position={[-6, 1.2, 0]}>
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[2, 0.25, 0.6]} />
          <meshStandardMaterial {...zayanMaterial} />
        </mesh>
        <mesh position={[0, 0, 0]} rotation={[0, 0, -0.4]}>
          <boxGeometry args={[1.8, 0.25, 0.6]} />
          <meshStandardMaterial {...zayanMaterial} />
        </mesh>
        <mesh position={[0, -0.8, 0]}>
          <boxGeometry args={[2, 0.25, 0.6]} />
          <meshStandardMaterial {...zayanMaterial} />
        </mesh>
      </group>

      {/* A - MASSIVE SIZE */}
      <group position={[-3.5, 1.2, 0]}>
        <mesh position={[-0.5, 0, 0]} rotation={[0, 0, 0.25]}>
          <boxGeometry args={[2, 0.25, 0.6]} />
          <meshStandardMaterial {...zayanMaterial} />
        </mesh>
        <mesh position={[0.5, 0, 0]} rotation={[0, 0, -0.25]}>
          <boxGeometry args={[2, 0.25, 0.6]} />
          <meshStandardMaterial {...zayanMaterial} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[1, 0.25, 0.6]} />
          <meshStandardMaterial {...zayanMaterial} />
        </mesh>
      </group>

      {/* Y - MASSIVE SIZE */}
      <group position={[-1, 1.2, 0]}>
        <mesh position={[-0.4, 0.4, 0]} rotation={[0, 0, 0.4]}>
          <boxGeometry args={[1.2, 0.25, 0.6]} />
          <meshStandardMaterial {...zayanMaterial} />
        </mesh>
        <mesh position={[0.4, 0.4, 0]} rotation={[0, 0, -0.4]}>
          <boxGeometry args={[1.2, 0.25, 0.6]} />
          <meshStandardMaterial {...zayanMaterial} />
        </mesh>
        <mesh position={[0, -0.4, 0]}>
          <boxGeometry args={[0.25, 0.8, 0.6]} />
          <meshStandardMaterial {...zayanMaterial} />
        </mesh>
      </group>

      {/* A - MASSIVE SIZE */}
      <group position={[1.5, 1.2, 0]}>
        <mesh position={[-0.5, 0, 0]} rotation={[0, 0, 0.25]}>
          <boxGeometry args={[2, 0.25, 0.6]} />
          <meshStandardMaterial {...zayanMaterial} />
        </mesh>
        <mesh position={[0.5, 0, 0]} rotation={[0, 0, -0.25]}>
          <boxGeometry args={[2, 0.25, 0.6]} />
          <meshStandardMaterial {...zayanMaterial} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[1, 0.25, 0.6]} />
          <meshStandardMaterial {...zayanMaterial} />
        </mesh>
      </group>

      {/* N - MASSIVE SIZE */}
      <group position={[4, 1.2, 0]}>
        <mesh position={[-0.6, 0, 0]}>
          <boxGeometry args={[0.25, 1.6, 0.6]} />
          <meshStandardMaterial {...zayanMaterial} />
        </mesh>
        <mesh position={[0.6, 0, 0]}>
          <boxGeometry args={[0.25, 1.6, 0.6]} />
          <meshStandardMaterial {...zayanMaterial} />
        </mesh>
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0.4]}>
          <boxGeometry args={[1.5, 0.25, 0.6]} />
          <meshStandardMaterial {...zayanMaterial} />
        </mesh>
      </group>

      {/* KHAN - MASSIVE SIZE */}
      {/* K */}
      <group position={[-3.5, -0.8, 0]}>
        <mesh position={[-0.6, 0, 0]}>
          <boxGeometry args={[0.25, 1.6, 0.6]} />
          <meshStandardMaterial {...khanMaterial} />
        </mesh>
        <mesh position={[0.2, 0.4, 0]} rotation={[0, 0, -0.6]}>
          <boxGeometry args={[1.2, 0.25, 0.6]} />
          <meshStandardMaterial {...khanMaterial} />
        </mesh>
        <mesh position={[0.2, -0.4, 0]} rotation={[0, 0, 0.6]}>
          <boxGeometry args={[1.2, 0.25, 0.6]} />
          <meshStandardMaterial {...khanMaterial} />
        </mesh>
      </group>

      {/* H */}
      <group position={[-1, -0.8, 0]}>
        <mesh position={[-0.6, 0, 0]}>
          <boxGeometry args={[0.25, 1.6, 0.6]} />
          <meshStandardMaterial {...khanMaterial} />
        </mesh>
        <mesh position={[0.6, 0, 0]}>
          <boxGeometry args={[0.25, 1.6, 0.6]} />
          <meshStandardMaterial {...khanMaterial} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 0.25, 0.6]} />
          <meshStandardMaterial {...khanMaterial} />
        </mesh>
      </group>

      {/* A */}
      <group position={[1.5, -0.8, 0]}>
        <mesh position={[-0.5, 0, 0]} rotation={[0, 0, 0.25]}>
          <boxGeometry args={[2, 0.25, 0.6]} />
          <meshStandardMaterial {...khanMaterial} />
        </mesh>
        <mesh position={[0.5, 0, 0]} rotation={[0, 0, -0.25]}>
          <boxGeometry args={[2, 0.25, 0.6]} />
          <meshStandardMaterial {...khanMaterial} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[1, 0.25, 0.6]} />
          <meshStandardMaterial {...khanMaterial} />
        </mesh>
      </group>

      {/* N */}
      <group position={[4, -0.8, 0]}>
        <mesh position={[-0.6, 0, 0]}>
          <boxGeometry args={[0.25, 1.6, 0.6]} />
          <meshStandardMaterial {...khanMaterial} />
        </mesh>
        <mesh position={[0.6, 0, 0]}>
          <boxGeometry args={[0.25, 1.6, 0.6]} />
          <meshStandardMaterial {...khanMaterial} />
        </mesh>
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0.4]}>
          <boxGeometry args={[1.5, 0.25, 0.6]} />
          <meshStandardMaterial {...khanMaterial} />
        </mesh>
      </group>
    </group>
  );
}
      
      // Extreme 4D scale morphing
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
    <div className="absolute inset-0 opacity-80">
      <Canvas 
        camera={{ position: [0, 0, 18], fov: 70 }}
        gl={{ antialias: true, alpha: true }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        {/* Enhanced Lighting System */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
        <pointLight position={[0, 15, 5]} intensity={0.8} color="#ffff00" />
        <spotLight 
          position={[0, 20, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={1.5} 
          color="#ffffff"
          target-position={[0, 0, 0]}
        />
        
        {/* MEGA Interactive 4D Name - Main Focus */}
        <MegaInteractive4DName />
        
        {/* Optimized floating geometries - fewer but more impactful */}
        <FloatingGeometry position={[-8, 4, -5]} color="#00ffff" size={0.8} />
        <FloatingGeometry position={[8, -3, -6]} color="#ff00ff" size={0.7} />
        <FloatingGeometry position={[-6, -4, -4]} color="#ffff00" size={0.6} />
        <FloatingGeometry position={[7, 5, -7]} color="#00ff00" size={0.9} />
        <FloatingGeometry position={[0, -6, -5]} color="#ff6b6b" size={0.5} />
        
        {/* Reduced number of complex objects for better performance */}
        <MorphingCube position={[12, 2, -8]} />
        <MorphingCube position={[-12, -3, -9]} />
        
        <HyperSphere position={[15, -2, -10]} />
        <HyperSphere position={[-15, 4, -8]} />
        
        <HypercubeWireframe />
        <TesseractProjection />
        
        {/* Enhanced particle field */}
        <ParticleField />
        
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          autoRotate={false}
          maxDistance={30}
          minDistance={10}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default CyberScene3D;