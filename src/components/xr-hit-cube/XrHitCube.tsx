import {
	Interactive,
	XRInteractionEvent,
	useHitTest,
	useXR
} from '@react-three/xr'
import { useRef, useState } from 'react'
import { Vector3 } from 'three'
import { XrCube } from '../xr-cube/XrCube'
import { OrbitControls } from '@react-three/drei'
import { Cube } from '../cube/Cube'
import { useThree } from '@react-three/fiber'

type CubePosition = {
	id: number
	position: Vector3
}
export const XrHitCube = () => {
	const ringRef = useRef<THREE.Mesh>(null)
	const [cubePosition, setCubePostion] = useState<CubePosition[]>([])
	const { isPresenting } = useXR()

	useThree(({ camera }) => {
		if (!isPresenting) {
			camera.position.set(0, 0, 1)
		}
	})
	useHitTest((hitMatrix, hit) => {
		if (!ringRef.current) return
		hitMatrix.decompose(
			ringRef.current.position,
			ringRef.current.quaternion,
			ringRef.current.scale
		)
		ringRef.current.rotation.set(0, 0, 0)
	})

	const placeCube = (event: XRInteractionEvent) => {
		const position = event.intersection?.object.position.clone()
		const id = Date.now()
		setCubePostion([...cubePosition, { id, position: position! }])
	}
	return (
		<>
			<OrbitControls />
			<ambientLight />
			{isPresenting ? (
				<>
					{cubePosition.map((cube) => {
						return <XrCube key={cube.id} position={cube.position} />
					})}
					<Interactive onSelect={placeCube}>
						<mesh ref={ringRef}>
							<ringGeometry args={[0.2, 0.5, 30]} />
							<meshStandardMaterial color={'tomato'} />
						</mesh>
					</Interactive>
				</>
			) : (
				<Cube />
			)}
		</>
	)
}
