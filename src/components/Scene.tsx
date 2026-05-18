import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

function NeuralNetwork() {
  const group = useRef<THREE.Group>(null);
  
  const { positions, linePositions } = useMemo(() => {
    const nodeCount = 120;
    const pos = new Float32Array(nodeCount * 3);
    const nodes: THREE.Vector3[] = [];
    
    // Generate nodes in an organic shape
    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 8 + Math.random() * 6; // Radius between 8 and 14
      
      const x = r * Math.sin(phi) * Math.cos(theta) * 1.5;
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi) * 0.5;
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      
      nodes.push(new THREE.Vector3(x, y, z));
    }

    // Generate lines connecting nearby nodes
    const lines: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      let connections = 0;
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 4.5 && connections < 4) {
          lines.push(nodes[i].x, nodes[i].y, nodes[i].z);
          lines.push(nodes[j].x, nodes[j].y, nodes[j].z);
          connections++;
        }
      }
    }

    return { 
      positions: pos, 
      linePositions: new Float32Array(lines) 
    };
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.05;
    group.current.rotation.z = Math.sin(t * 0.02) * 0.1;
  });

  return (
    <group ref={group} position={[0, 0, -10]}>
      {/* Connecting lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} count={linePositions.length / 3} />
        </bufferGeometry>
        <lineBasicMaterial color="#818cf8" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
      </lineSegments>
      
      {/* Nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} count={positions.length / 3} />
        </bufferGeometry>
        <pointsMaterial size={0.15} color="#c084fc" transparent opacity={0.8} sizeAttenuation blending={THREE.AdditiveBlending} />
      </points>

      {/* Glowing highlight nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} count={positions.length / 3} />
        </bufferGeometry>
        <pointsMaterial size={0.6} color="#6366f1" transparent opacity={0.2} sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false} />
      </points>
    </group>
  );
}

function AmbientParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40 - 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    const t = state.clock.getElapsedTime();
    particlesRef.current.rotation.y = t * 0.02;
    particlesRef.current.position.y = Math.sin(t * 0.1) * 2;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={particleCount} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#ffffff" transparent opacity={0.3} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function Scene() {
  return (
    <div className="canvas-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: 'radial-gradient(circle at center, #0a0a16 0%, #030308 100%)' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }} dpr={[1, 2]}>
        <fog attach="fog" args={['#030308', 10, 40]} />
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <NeuralNetwork />
        </Float>
        <AmbientParticles />
      </Canvas>
    </div>
  );
}

export default Scene;

