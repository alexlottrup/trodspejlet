import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { XrCube } from './XrCube'
import { ARButton, XR } from '@react-three/xr'

export const XrCubeContainer = () => {
	return (
		<>
			<ARButton />
			<Canvas>
				<OrbitControls />
				<ambientLight />
				<XR>
					<XrCube />
				</XR>
			</Canvas>
		</>
	)
}
