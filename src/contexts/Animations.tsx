import { useLoader } from '@react-three/fiber'
import { createContext, useContext, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const AnimationsContext = createContext({
	animations: [],
	setAnimations: {},
	animationIndex: 0,
	setAnimationIndex: (_index: number) => {}
})

interface AnimationsProviderProps {
	children: React.ReactNode

	value?: {
		animations: any[]
		setAnimations: any
		animationIndex: number
		setAnimationIndex: any
	}
}

export const AnimationsProvider = ({ children }: AnimationsProviderProps) => {
	const { animations: druidAnimation } = useLoader(
		GLTFLoader,
		'models/druid.gltf'
	)
	const druidAnimationNames =
		druidAnimation?.map((animation: any) => animation.name) ?? []

	const [animations, setAnimations] = useState(druidAnimationNames)
	const [animationIndex, setAnimationIndex] = useState(0)
	return (
		<>
			<AnimationsContext.Provider
				value={{
					animations,
					setAnimations,
					animationIndex,
					setAnimationIndex
				}}
			>
				{children}
			</AnimationsContext.Provider>
		</>
	)
}

export const useAnimationsContext = () => {
	return useContext(AnimationsContext)
}
