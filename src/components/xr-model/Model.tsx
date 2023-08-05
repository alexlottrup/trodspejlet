import { useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { Vector3 } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

interface ModelProps {
	position?: Vector3
}
export const Model = ({ position }: ModelProps) => {
	const { scene } = useLoader(GLTFLoader, 'models/druid.gltf')
	// const { scene } = useGLTF('models/flower.gltf') // Alternative to GLTFLoader

	return (
		<Suspense>
			<primitive position={position} object={scene} />
		</Suspense>
	)
}
