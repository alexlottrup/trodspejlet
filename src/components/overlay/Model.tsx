import { useAnimations } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { Vector3 } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useAnimationsContext } from '../../contexts/Animations'

interface ModelProps {
	position?: Vector3
}
export const Model = ({ position }: ModelProps) => {
	const group = useRef(null)
	const { nodes, materials, animations } = useLoader(
		GLTFLoader,
		'models/druid.gltf'
	)

	const { names, actions } = useAnimations(animations, group)

	const { animationIndex } = useAnimationsContext()

	useEffect(() => {
		//@ts-ignore
		actions[names[animationIndex]]?.reset().fadeIn(0.5).play()
		return () => {
			actions[names[animationIndex]]?.fadeOut(0.5)
		}
	}, [animationIndex])

	return (
		<group ref={group} dispose={null}>
			<group scale={1} position={position}>
				<primitive object={nodes.root} />
				<skinnedMesh
					geometry={nodes.druid.geometry}
					material={materials.color_main}
					skeleton={nodes.druid.skeleton}
				/>
			</group>
		</group>
	)
}
