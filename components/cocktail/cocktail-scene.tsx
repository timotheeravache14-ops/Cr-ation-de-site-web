"use client"

import { useMemo, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Lightformer, Float, ContactShadows } from "@react-three/drei"
import * as THREE from "three"

/**
 * A stemmed cocktail glass built from a lathed profile, filled with a pale
 * rosé liquid, topped with a citrus wheel and rising bubbles. The whole
 * assembly spins slowly on its own and tilts to follow the pointer.
 */

const GLASS_PROFILE: [number, number][] = [
  [0.55, 0.0],
  [0.55, 0.03],
  [0.12, 0.1],
  [0.055, 0.13],
  [0.055, 0.95],
  [0.09, 1.02],
  [1.05, 1.75],
]

// Liquid: cone that closes into a flat surface disc at the top.
const LIQUID_PROFILE: [number, number][] = [
  [0.02, 1.04],
  [0.86, 1.6],
  [0.0, 1.6],
]

function toPoints(profile: [number, number][]) {
  return profile.map(([x, y]) => new THREE.Vector2(x, y))
}

// Pure, deterministic pseudo-random in [0, 1) so bubble seeding stays a pure
// render computation (no Math.random during render).
function hash(n: number) {
  const s = Math.sin(n * 12.9898) * 43758.5453
  return s - Math.floor(s)
}

function Bubbles() {
  const ref = useRef<THREE.InstancedMesh>(null!)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const count = 18
  const bubbles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        angle: hash(i + 1) * Math.PI * 2,
        rFrac: 0.15 + hash(i + 2.3) * 0.7,
        y: hash(i + 4.7),
        speed: 0.12 + hash(i + 6.1) * 0.22,
        scale: 0.018 + hash(i + 8.9) * 0.022,
      })),
    [],
  )

  useFrame((_, delta) => {
    if (!ref.current) return
    bubbles.forEach((b, i) => {
      b.y += delta * b.speed
      if (b.y > 1) b.y = 0
      const radiusAtHeight = 0.05 + b.y * 0.78
      const rr = radiusAtHeight * b.rFrac
      const yy = 1.06 + b.y * 0.5
      dummy.position.set(Math.cos(b.angle) * rr, yy, Math.sin(b.angle) * rr)
      const s = b.scale * (0.55 + b.y * 0.7)
      dummy.scale.setScalar(s)
      dummy.updateMatrix()
      ref.current.setMatrixAt(i, dummy.matrix)
    })
    ref.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 10, 10]} />
      <meshStandardMaterial
        color="#ffe4d6"
        roughness={0.15}
        transparent
        opacity={0.55}
      />
    </instancedMesh>
  )
}

function Cocktail() {
  const glassPoints = useMemo(() => toPoints(GLASS_PROFILE), [])
  const liquidPoints = useMemo(() => toPoints(LIQUID_PROFILE), [])

  return (
    <group position={[0, -0.85, 0]}>
      {/* Glass body */}
      <mesh castShadow>
        <latheGeometry args={[glassPoints, 72]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={1}
          thickness={0.55}
          roughness={0.05}
          ior={1.48}
          clearcoat={1}
          clearcoatRoughness={0.08}
          side={THREE.DoubleSide}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Liquid */}
      <mesh>
        <latheGeometry args={[liquidPoints, 72]} />
        <meshPhysicalMaterial
          color="#e79aa0"
          transmission={0.55}
          thickness={1.2}
          roughness={0.18}
          ior={1.34}
          attenuationColor="#d6707c"
          attenuationDistance={1.4}
        />
      </mesh>

      <Bubbles />

      {/* Citrus wheel resting on the rim */}
      <group position={[0.72, 1.68, 0.34]} rotation={[Math.PI / 2.1, 0.2, -0.5]}>
        <mesh>
          <cylinderGeometry args={[0.34, 0.34, 0.045, 40]} />
          <meshStandardMaterial color="#f2a63d" roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.024, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 0.01, 36]} />
          <meshStandardMaterial color="#ffd98a" roughness={0.45} emissive="#4a2c00" emissiveIntensity={0.05} />
        </mesh>
      </group>

      {/* Cocktail pick with a cherry */}
      <group position={[-0.28, 1.7, 0.12]} rotation={[0, 0, 0.35]}>
        <mesh position={[0, 0.28, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 0.85, 8]} />
          <meshStandardMaterial color="#3a3128" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.72, 0]} castShadow>
          <sphereGeometry args={[0.1, 20, 20]} />
          <meshPhysicalMaterial color="#b0303f" roughness={0.25} clearcoat={0.8} />
        </mesh>
      </group>
    </group>
  )
}

function Rig() {
  const outer = useRef<THREE.Group>(null!)
  const spin = useRef<THREE.Group>(null!)

  useFrame((state, delta) => {
    if (spin.current) spin.current.rotation.y += delta * 0.35
    if (outer.current) {
      const targetX = -state.pointer.y * 0.35
      const targetY = state.pointer.x * 0.5
      outer.current.rotation.x = THREE.MathUtils.lerp(outer.current.rotation.x, targetX, 0.06)
      outer.current.rotation.z = THREE.MathUtils.lerp(outer.current.rotation.z, targetY * -0.15, 0.06)
      outer.current.position.x = THREE.MathUtils.lerp(outer.current.position.x, state.pointer.x * 0.25, 0.05)
    }
  })

  return (
    <group ref={outer}>
      <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.5}>
        <group ref={spin}>
          <Cocktail />
        </group>
      </Float>
    </group>
  )
}

export default function CocktailScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.15, 5.8], fov: 35 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={1.1} castShadow />
        <directionalLight position={[-4, 2, -3]} intensity={0.4} color="#f6d9d2" />

        <Rig />

        <ContactShadows
          position={[0, -0.92, 0]}
          opacity={0.32}
          scale={6}
          blur={2.6}
          far={3}
          color="#8a7c68"
        />

        <Environment resolution={128}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <Lightformer form="rect" intensity={2.4} position={[0, 3, 1]} scale={[7, 3, 1]} color="#fff6ec" />
            <Lightformer form="rect" intensity={1.1} position={[-3, 1, 2]} scale={[3, 4, 1]} color="#f4d6cf" />
            <Lightformer form="ring" intensity={1.6} position={[3, 2, -2]} scale={3} color="#e9e3cf" />
            <Lightformer form="rect" intensity={0.8} position={[0, -3, 1]} scale={[6, 3, 1]} color="#efe7d6" />
          </group>
        </Environment>
      </Suspense>
    </Canvas>
  )
}
