import { Canvas } from '@react-three/fiber'
import { ARButton, XR } from '@react-three/xr'
import { HitModel } from './HitModel'

export const ModelCanvas = () => {
	return (
		<>
			<ARButton sessionInit={{ requiredFeatures: ['hit-test'] }} />
			<Canvas>
				<XR>
					<HitModel />
				</XR>
			</Canvas>
		</>
	)
}
