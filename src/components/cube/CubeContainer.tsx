import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Cube } from './Cube'

export const CubeContainer = () => {
	return (
		<div>
			<Canvas>
				<OrbitControls />
				<ambientLight />
				<Cube />
			</Canvas>
		</div>
	)
}
