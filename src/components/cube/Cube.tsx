import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export const Cube = () => {
	const cubeRef = useRef<THREE.Mesh>(null)
	useFrame((_state, delta) => {
		if (!cubeRef.current) return
		cubeRef.current.rotation.x += delta
		cubeRef.current.rotation.y += delta
	})
	return (
		<>
			<mesh ref={cubeRef}>
				<boxGeometry args={[2, 2, 2]} />
				<meshStandardMaterial color={'purple'} />
			</mesh>
		</>
	)
}
