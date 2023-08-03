import { Vector3, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

type XrCubeProps = {
	position?: Vector3
}
export const XrCube = ({ position }: XrCubeProps) => {
	const cubeRef = useRef<THREE.Mesh>(null)
	useFrame((_state, delta) => {
		if (!cubeRef.current) return
		cubeRef.current.rotation.x += delta
		cubeRef.current.rotation.y += delta
	})
	return (
		<>
			<mesh ref={cubeRef} position={position}>
				<boxGeometry args={[0.5, 0.5, 0.5]} />
				<meshStandardMaterial color={'hotpink'} />
			</mesh>
		</>
	)
}
