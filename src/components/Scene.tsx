import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ImagingRings() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.18) * 0.08;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.11) * 0.05;
  });

  return (
    <group ref={group} position={[4.5, 1.2, -8]} rotation={[0.2, -0.35, 0]}>
      <mesh>
        <torusGeometry args={[3.2, 0.08, 32, 160]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#3c1a78" emissiveIntensity={1.1} transparent opacity={0.7} />
      </mesh>
      <mesh rotation={[Math.PI / 2.6, 0, 0]}>
        <torusGeometry args={[2.25, 0.035, 24, 140]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.55} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0.35, 0]}>
        <torusGeometry args={[1.35, 0.025, 24, 120]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.28} />
      </mesh>
      <mesh position={[0, 0, -0.05]}>
        <circleGeometry args={[1.95, 96]} />
        <meshBasicMaterial color="#050615" transparent opacity={0.42} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function DicomSlices() {
  const group = useRef<THREE.Group>(null);
  const slices = useMemo(() => Array.from({ length: 10 }, (_, index) => ({
    x: -7 + index * 0.34,
    y: -1.8 + Math.sin(index) * 0.34,
    z: -7 - index * 0.22,
    opacity: 0.1 + index * 0.035,
  })), []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.12;
    group.current.rotation.y = -0.42 + Math.sin(state.clock.elapsedTime * 0.16) * 0.05;
  });

  return (
    <group ref={group} rotation={[0.1, -0.42, 0]}>
      {slices.map((slice, index) => (
        <mesh key={index} position={[slice.x, slice.y, slice.z]}>
          <boxGeometry args={[2.3, 1.55, 0.025]} />
          <meshBasicMaterial color={index % 2 ? '#818cf8' : '#06b6d4'} transparent opacity={slice.opacity} />
        </mesh>
      ))}
    </group>
  );
}

function MedicalNetwork() {
  const group = useRef<THREE.Group>(null);
  const { nodes, linePositions } = useMemo(() => {
    const nodeData = Array.from({ length: 42 }, () => ({
      position: [
        (Math.random() - 0.5) * 28,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 18 - 7,
      ] as [number, number, number],
      scale: Math.random() * 0.055 + 0.025,
    }));

    const lines: { start: [number, number, number]; end: [number, number, number] }[] = [];
    for (let i = 0; i < nodeData.length; i += 1) {
      for (let j = i + 1; j < nodeData.length; j += 1) {
        const dist = Math.sqrt(
          Math.pow(nodeData[i].position[0] - nodeData[j].position[0], 2) +
          Math.pow(nodeData[i].position[1] - nodeData[j].position[1], 2) +
          Math.pow(nodeData[i].position[2] - nodeData[j].position[2], 2)
        );
        if (dist < 5.4) lines.push({ start: nodeData[i].position, end: nodeData[j].position });
      }
    }

    const linePos = new Float32Array(lines.length * 6);
    lines.forEach((line, i) => {
      linePos[i * 6] = line.start[0];
      linePos[i * 6 + 1] = line.start[1];
      linePos[i * 6 + 2] = line.start[2];
      linePos[i * 6 + 3] = line.end[0];
      linePos[i * 6 + 4] = line.end[1];
      linePos[i * 6 + 5] = line.end[2];
    });

    return { nodes: nodeData, linePositions: linePos };
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.014;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.18;
  });

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[node.scale, 12, 12]} />
          <meshStandardMaterial color="#a78bfa" emissive="#4f46e5" emissiveIntensity={0.9} />
        </mesh>
      ))}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute args={[linePositions, 3]} attach="attributes-position" />
        </bufferGeometry>
        <lineBasicMaterial color="#6366f1" transparent opacity={0.16} />
      </lineSegments>
    </group>
  );
}

function Scene() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 24], fov: 52 }}>
        <color attach="background" args={['#030308']} />
        <fog attach="fog" args={['#030308', 18, 48]} />
        <ambientLight intensity={0.18} />
        <pointLight position={[8, 8, 8]} intensity={1.1} color="#8b5cf6" />
        <pointLight position={[-8, -6, 6]} intensity={0.8} color="#06b6d4" />
        <MedicalNetwork />
        <DicomSlices />
        <ImagingRings />
      </Canvas>
    </div>
  );
}

export default Scene;
