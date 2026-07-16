"use client"

import { useMemo, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Lightformer, Float, ContactShadows } from "@react-three/drei"
import * as THREE from "three"

/**
 * A stylised bowl of bò bún: navy ceramic bowl filled with a vermicelli mound
 * and colourful toppings (sautéed beef, shredded carrot, cucumber, mint,
 * peanuts) with two fried nems crossed on top. Auto-rotates and follows the
 * pointer. Modelled procedurally from the restaurant's own photo.
 */

// Pure deterministic pseudo-random so scatter stays a pure render computation.
function hash(n: number) {
  const s = Math.sin(n * 127.1) * 43758.5453
  return s - Math.floor(s)
}

type Item = { x: number; z: number; y: number; rot: number; s: number }

function scatter(
  count: number,
  radius: number,
  y: number,
  yJit: number,
  seed: number,
): Item[] {
  return Array.from({ length: count }, (_, i) => {
    const a = hash(seed + i * 1.7) * Math.PI * 2
    const r = radius * Math.sqrt(hash(seed + i * 2.3))
    return {
      x: Math.cos(a) * r,
      z: Math.sin(a) * r,
      y: y + (hash(seed + i * 3.1) - 0.5) * yJit,
      rot: hash(seed + i * 4.9) * Math.PI * 2,
      s: 0.8 + hash(seed + i * 5.7) * 0.5,
    }
  })
}

function Bowl() {
  const beef = useMemo(() => scatter(15, 0.62, 0.17, 0.05, 1), [])
  const carrot = useMemo(() => scatter(20, 0.92, 0.13, 0.05, 2), [])
  const cucumber = useMemo(() => scatter(8, 0.9, 0.14, 0.04, 3), [])
  const mint = useMemo(() => scatter(14, 0.88, 0.21, 0.06, 4), [])
  const peanuts = useMemo(() => scatter(18, 0.9, 0.19, 0.05, 5), [])
  const sprouts = useMemo(() => scatter(12, 0.92, 0.15, 0.04, 6), [])
  const lettuce = useMemo(() => scatter(6, 0.74, 0.15, 0.04, 7), [])
  const chili = useMemo(() => scatter(6, 0.82, 0.2, 0.04, 8), [])

  return (
    <group position={[0, 0.5, 0]}>
      {/* Bowl exterior (lower hemisphere) */}
      <mesh castShadow>
        <sphereGeometry args={[1.2, 64, 48, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.5]} />
        <meshStandardMaterial color="#243354" roughness={0.3} metalness={0.1} side={THREE.DoubleSide} />
      </mesh>
      {/* Rim lip */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.19, 0.05, 20, 80]} />
        <meshStandardMaterial color="#38517e" roughness={0.35} />
      </mesh>
      {/* Foot */}
      <mesh position={[0, -1.12, 0]}>
        <cylinderGeometry args={[0.42, 0.5, 0.16, 40]} />
        <meshStandardMaterial color="#1c283f" roughness={0.4} />
      </mesh>

      {/* Vermicelli mound */}
      <mesh position={[0, -0.18, 0]} scale={[1, 0.36, 1]}>
        <sphereGeometry args={[1.02, 40, 28]} />
        <meshStandardMaterial color="#ece2c8" roughness={0.75} />
      </mesh>

      {/* Beef strips */}
      {beef.map((it, i) => (
        <mesh key={`b${i}`} position={[it.x, it.y, it.z]} rotation={[0, it.rot, 0.2]} scale={it.s} castShadow>
          <boxGeometry args={[0.22, 0.05, 0.1]} />
          <meshStandardMaterial color="#6e3f22" roughness={0.6} />
        </mesh>
      ))}

      {/* Shredded carrot */}
      {carrot.map((it, i) => (
        <mesh key={`c${i}`} position={[it.x, it.y, it.z]} rotation={[0, it.rot, 0]} scale={it.s}>
          <boxGeometry args={[0.24, 0.028, 0.028]} />
          <meshStandardMaterial color="#e2892c" roughness={0.5} />
        </mesh>
      ))}

      {/* Cucumber slices */}
      {cucumber.map((it, i) => (
        <mesh key={`cu${i}`} position={[it.x, it.y, it.z]} rotation={[Math.PI / 2, 0, it.rot]} scale={it.s}>
          <cylinderGeometry args={[0.12, 0.12, 0.03, 20]} />
          <meshStandardMaterial color="#bcdd8c" roughness={0.5} />
        </mesh>
      ))}

      {/* Lettuce clusters */}
      {lettuce.map((it, i) => (
        <mesh key={`l${i}`} position={[it.x, it.y, it.z]} rotation={[it.rot, it.rot, 0]} scale={[it.s * 0.9, it.s * 0.5, it.s * 0.9]}>
          <icosahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial color="#7cab4c" roughness={0.7} flatShading />
        </mesh>
      ))}

      {/* Mint leaves */}
      {mint.map((it, i) => (
        <mesh key={`m${i}`} position={[it.x, it.y, it.z]} rotation={[0, it.rot, 0]} scale={[it.s, it.s * 0.4, it.s * 1.3]}>
          <sphereGeometry args={[0.09, 12, 10]} />
          <meshStandardMaterial color="#3f8f4a" roughness={0.6} />
        </mesh>
      ))}

      {/* Peanuts */}
      {peanuts.map((it, i) => (
        <mesh key={`p${i}`} position={[it.x, it.y, it.z]} scale={[it.s, it.s * 0.8, it.s]}>
          <sphereGeometry args={[0.05, 10, 8]} />
          <meshStandardMaterial color="#d9b676" roughness={0.5} />
        </mesh>
      ))}

      {/* Bean sprouts */}
      {sprouts.map((it, i) => (
        <mesh key={`s${i}`} position={[it.x, it.y, it.z]} rotation={[0, it.rot, 0.4]} scale={it.s}>
          <capsuleGeometry args={[0.014, 0.16, 4, 8]} />
          <meshStandardMaterial color="#f2ecd8" roughness={0.6} />
        </mesh>
      ))}

      {/* Red chili slices for a pop of colour */}
      {chili.map((it, i) => (
        <mesh key={`ch${i}`} position={[it.x, it.y, it.z]} rotation={[0, it.rot, 0]} scale={it.s}>
          <boxGeometry args={[0.11, 0.03, 0.05]} />
          <meshStandardMaterial color="#d23b28" roughness={0.5} />
        </mesh>
      ))}

      {/* Two fried nems crossed on top */}
      <Nem position={[-0.1, 0.28, 0.08]} rotation={[0, 0.9, Math.PI / 2]} />
      <Nem position={[0.08, 0.31, -0.04]} rotation={[0, -0.2, Math.PI / 2]} />
    </group>
  )
}

function Nem({
  position,
  rotation,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
}) {
  return (
    <mesh position={position} rotation={rotation} castShadow>
      <capsuleGeometry args={[0.13, 0.5, 8, 20]} />
      <meshStandardMaterial color="#c68a44" roughness={0.55} />
    </mesh>
  )
}

function Rig() {
  const outer = useRef<THREE.Group>(null!)
  const spin = useRef<THREE.Group>(null!)

  useFrame((state, delta) => {
    if (spin.current) spin.current.rotation.y += delta * 0.4
    if (outer.current) {
      const tx = -state.pointer.y * 0.25
      const ty = state.pointer.x * 0.4
      outer.current.rotation.x = THREE.MathUtils.lerp(outer.current.rotation.x, tx, 0.06)
      outer.current.rotation.z = THREE.MathUtils.lerp(outer.current.rotation.z, ty * -0.12, 0.06)
      outer.current.position.x = THREE.MathUtils.lerp(outer.current.position.x, state.pointer.x * 0.2, 0.05)
    }
  })

  return (
    <group ref={outer}>
      <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.4}>
        <group ref={spin}>
          <Bowl />
        </group>
      </Float>
    </group>
  )
}

export default function BobunScene() {
  return (
    <Canvas
      camera={{ position: [0, 2.35, 3.9], fov: 40 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 6, 3]} intensity={1.2} castShadow />
        <directionalLight position={[-4, 3, -2]} intensity={0.4} color="#ffe9c8" />

        <Rig />

        <ContactShadows position={[0, -0.75, 0]} opacity={0.3} scale={6} blur={2.6} far={3} color="#5a4a2e" />

        <Environment resolution={128}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <Lightformer form="rect" intensity={2.2} position={[0, 3, 1]} scale={[7, 3, 1]} color="#fff6e6" />
            <Lightformer form="rect" intensity={1} position={[-3, 1, 2]} scale={[3, 4, 1]} color="#d7f0e0" />
            <Lightformer form="ring" intensity={1.4} position={[3, 2, -2]} scale={3} color="#ffe1bf" />
          </group>
        </Environment>
      </Suspense>
    </Canvas>
  )
}
