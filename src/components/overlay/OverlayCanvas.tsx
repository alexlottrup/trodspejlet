import { Canvas } from '@react-three/fiber'
import { ARButton, XR } from '@react-three/xr'
import { Overlay } from './Overlay'
import { AnimationsProvider } from '../../contexts/Animations'
import { Interface } from './Interface'
import { useCallback, useState } from 'react'

export const OverlayCanvas = () => {
	const [overlayContainer, setOverlayContainer] = useState<HTMLDivElement>()
	const interfaceRef = useCallback((node: HTMLDivElement) => {
		if (node !== null) {
			setOverlayContainer(node)
			node.setAttribute('id', 'overlay-container')
		}
	}, [])
	return (
		<>
			<AnimationsProvider>
				<ARButton
					sessionInit={{
						requiredFeatures: ['hit-test'],
						optionalFeatures: ['dom-overlay'],
						domOverlay: { root: overlayContainer! }
					}}
					className={'ar-button'}
				/>
				<Canvas>
					<XR>
						<Overlay />
					</XR>
				</Canvas>
				<Interface ref={interfaceRef} />
			</AnimationsProvider>
		</>
	)
}
