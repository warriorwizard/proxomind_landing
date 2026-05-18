import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ClinicalGrid() {
  const group = useRef<THREE.Group>(null);
  const { nodes, linePositions } = useMemo(() => {
    const nodeData = Array.from({ length: 64 }, (_, index) => {
      const row = Math.floor(index / 8);
      const col = index % 8;
      return {
        position: [
          (col - 3.5) * 3.2 + (Math.random() - 0.5) * 0.35,
          (row - 3.5) * 1.9 + (Math.random() - 0.5) * 0.25,
          -13 + (Math.random() - 0.5) * 2,
        ] as [number, number, number],
        scale: 0.026 + Math.random() * 0.016,
      };
    });

    const lines: { start: [number, number, number]; end: [number, number, number] }[] = [];
    nodeData.forEach((node, index) => {
      const right = nodeData[index + 1];
      const below = nodeData[index + 8];
      if (right && index % 8 !== 7) lines.push({ start: node.position, end: right.position });
      if (below) lines.push({ start: node.position, end: below.position });
    });

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
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.035;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.16) * 0.08;
  });

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute args={[linePositions, 3]} attach="attributes-position" />
        </bufferGeometry>
        <lineBasicMaterial color="#6366f1" transparent opacity={0.085} />
      </lineSegments>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[node.scale, 8, 8]} />
          <meshBasicMaterial color={i % 5 === 0 ? '#67e8f9' : '#8b5cf6'} transparent opacity={0.42} />
        </mesh>
      ))}
    </group>
  );
}

function SoftScanPlane() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.position.x = Math.sin(state.clock.elapsedTime * 0.12) * 1.6;
    mesh.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.08) * 0.03;
  });

  return (
    <mesh ref={mesh} position={[5.5, -0.7, -15]} rotation={[0, 0, -0.16]}>
      <planeGeometry args={[7, 10]} />
      <meshBasicMaterial color="#67e8f9" transparent opacity={0.028} side={THREE.DoubleSide} />
    </mesh>
  );
}

function Scene() {
  return (
    <div className="canvas-container clinical-canvas">
      <Canvas camera={{ position: [0, 0, 22], fov: 46 }} dpr={[1, 1.5]}>
        <color attach="background" args={['#030308']} />
        <fog attach="fog" args={['#030308', 18, 44]} />
        <ClinicalGrid />
        <SoftScanPlane />
      </Canvas>
    </div>
  );
}

export default Scene;
