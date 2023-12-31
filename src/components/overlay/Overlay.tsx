import {
	Interactive,
	XRInteractionEvent,
	useHitTest,
	useXR
} from '@react-three/xr'
import { useRef, useState } from 'react'
import { Vector3 } from 'three'
import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Model } from './Model'

type CubePosition = {
	id: number
	position: Vector3
}
export const Overlay = () => {
	const ringRef = useRef<THREE.Mesh>(null)
	const [model, setModel] = useState<CubePosition[]>([])
	const { isPresenting } = useXR()

	useThree(({ camera }) => {
		if (!isPresenting) {
			camera.position.set(0, 0, 1)
		}
	})
	useHitTest((hitMatrix, _hit) => {
		if (!ringRef.current) return
		hitMatrix.decompose(
			ringRef.current.position,
			ringRef.current.quaternion,
			ringRef.current.scale
		)
		ringRef.current.rotation.set(0, 0, 0)
	})

	const placeModel = (event: XRInteractionEvent) => {
		const position = event.intersection?.object.position.clone()
		const id = Date.now()
		setModel([{ id, position: position! }])
	}
	return (
		<>
			<OrbitControls />
			<ambientLight />
			{isPresenting &&
				model.map((model) => {
					return <Model key={model.id} position={model.position} />
				})}
			{isPresenting && (
				<Interactive onSelect={placeModel}>
					<mesh ref={ringRef}>
						<ringGeometry args={[0.2, 0.5, 30]} />
						<meshStandardMaterial color={'tomato'} />
					</mesh>
				</Interactive>
			)}

			{!isPresenting && <Model />}
		</>
	)
}
